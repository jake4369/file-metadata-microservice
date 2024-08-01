const express = require("express");
const { uploadImage } = require("./../controllers/uploadControllers");
const multer = require("multer");
const upload = multer({ dest: "fileanalyse/" });

const router = express.Router();

router.route("/").post(upload.single("upfile"), uploadImage);

module.exports = router;
