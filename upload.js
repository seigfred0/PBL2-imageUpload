const multer = require('multer');

const storeImage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploadedFiles');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
})

const upload = multer({ storage: storeImage });

module.exports = upload;