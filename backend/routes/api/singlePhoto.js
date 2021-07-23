const express = require('express');
const asyncHandler = require('express-async-handler');


const { User, Photo } = require('../../db/models')
const router = express.Router()

router.get('/:id', asyncHandler(async(req, res) => {
    const {id} = req.params
    const photo = await Photo.findByPk(id)

    res.json({photo});
}))

module.exports = router;