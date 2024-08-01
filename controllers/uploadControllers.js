const uploadImage = (req, res) => {
  try {
    const fileData = req.file;

    if (!fileData) {
      return res.json({
        error: "No file uploaded",
      });
    }

    const responseObj = {
      name: fileData.originalname,
      type: fileData.mimetype,
      size: fileData.size,
    };

    return res.json(responseObj);
  } catch (error) {
    return res.json({
      Error: "Internal server error",
    });
  }
};

module.exports = { uploadImage };
