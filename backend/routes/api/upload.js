const express = require('express');
const asyncHandler = require('express-async-handler');

const {User, Photo, Comment} =  require("../../db/models")

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const photos = await Photo.findAll({
        include: [User]
    })
    return res.json(photos)
}))

router.post('/', asyncHandler(async (req, res) => {
    const {picture, userId, caption, albumId} = req.body;
    const uploadPhoto = await Photo.create({
        picture,
        userId,
        caption,
        albumId
    })
    return res.json(uploadPhoto);
}))

router.patch('/', asyncHandler(async (req, res) => {
    const { caption, id } = req.body;
    const photo = await Photo.findByPk(id)

    const newPhoto = await photo.update( {caption} )

    return res.json(newPhoto)
}))

router.delete('/', asyncHandler(async (req, res) => {
    const {id} = req.body
    await Comment.destroy({
        where: {photoId: id}
    })
    const deletePhoto = await Photo.destroy({
        where: {id}
    })
    res.json(deletePhoto)
}))

module.exports = router;