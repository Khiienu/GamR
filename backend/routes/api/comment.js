
const express = require('express')
const asyncHandler = require('express-async-handler')
const router = express.Router()

const { Photo, User, Comment } = require('../../db/models')

//Create Comment 
router.post('/', asyncHandler(async (req, res) => {
    const {userId, photoId, comment} = req.body;

    let comt = await Comment.create({userId, photoId, comment})
    res.json(comt)
}))

//Read Comment
router.get('/:id', asyncHandler(async (req, res) => {
    const {id} = req.params
    const comts = await Comment.findAll({
        where: {photoId: id}
    })
    res.json(comts)
}))

router.get('/', asyncHandler(async(req, res) => {
    const allComments = await Comment.findAll()
    res.json(allComments)
}))

//Edit/Update Comment
router.patch('/:id', asyncHandler(async (req, res) => {
    const {id} = req.params;
    console.log("this is the backend yo", id)
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
    res.json(data)
}))
module.exports = router 