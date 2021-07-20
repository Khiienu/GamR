const express = require('express');
const asyncHandler = require('express-async-handler');


const { User, Photo } = require('../../db/models')
const router = express.Router()

router.get('/:id', asyncHandler( async(req, res) => {
    const id =  parseInt(req.params.id);
    const photo = await Photo.findByPk(id)

    return res.json(photo);
}))

module.exports = router;