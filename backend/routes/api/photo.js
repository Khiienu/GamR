const express = require('express')
const asyncHandler = require('express-async-handler');

const { User, Photo} = require("../../db/models")

const router = express.Router();

router.get(':id', asyncHandler( async (req, res) => {
    const id= parseInt(req.params.id);
    const image = await Photo.findByPk(id)
    
    return res.json(image)
}))

module.exports = router;