const express = require('express')
const asyncHandler = require('express-async-handler');

const { User, Photo} = require("../../db/models")

const router = express.Router();

router.get('/photos', asyncHandler( async (req, res) => {
    // const id= parseInt(req.params.id);
    const image = await Photo.findAll()
    return res.json(image)
}))

let currentUser;
if (req.session.auth) {
  currentUser = req.session.auth.id;
}
module.exports = router;