
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

router.get('/pic/:id', asyncHandler(async(req, res) => {
    const allComments = await Comment.findAll({where: {photoId: req.params.id}})
    res.json(allComments)
}))

//Edit/Update Comment
// router.put('/:id', asyncHandler(async (req, res) => {
//     const {id} = req.params;
//     console.log("this is the backend yo", id)
//     const {comment} = req.body;
//     const data = await Comment.findByPk(id)
//     await data.update( )
//     res.json(data)
// }))

router.put('/:id', asyncHandler(async(req, res) => {
    const {comment} = req.body;
    const {commentId} = req.params
    const comt = await Comment.findByPk(commentId)
    // const newComt = await comt.update(comment)

    return res.json(comt)
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