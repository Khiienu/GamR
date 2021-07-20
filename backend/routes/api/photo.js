const express = require('express')
const asyncHandler = require('express-async-handler');

const { User, Photo} = require("../../db/models")

const router = express.Router();

router.get('/photos', asyncHandler( async (req, res) => {
    const id= parseInt(req.params.id);
    const picture = await Photo.findByPk(id)
    return res.json(picture)
}))

module.exports = router;