
const express = require('express')
const asyncHandler = require('express-async-handler')
const router = express.Router()

const { Photo, User, Comment } = require('../../db/models')

//Create Comment 
router.post('/', asyncHandler(async (req, res) => {
    const {userId, photoId, comment} = req.body;

    let comt = await Comment.create({userId, photoId, comment})
    return res.json(comt)
}))

//Read Comment
router.get('/:id', asyncHandler(async (req, res) => {
    const {id} = req.params
    const comts = await Comment.findAll({
        where: {photoId: id}
    })
    return res.json(comts)
}))

//Edit/Update Comment
router.put('/:id', asyncHandler(async (req, res) => {
    const {id} = req.params;
    const {comment} = req.body;
    const data = await Comment.findByPk(id)
    await data.update({ comment })
    res.json(data)
}))

//Delete Comment 
router.delete('/:id', asyncHandler(async(req, res) => {
    const {id} = req.params
    const data = await Comment.destroy({
        where: {id}
    })
    return res.json(data)
}))
module.exports = router 