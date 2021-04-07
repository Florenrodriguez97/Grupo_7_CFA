const multer= require('multer');
const path= require ('path');

const storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb (null,'public/images')
    },
    filename : (req,file,cb)=>{
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))

    }
})
const fileFilter = function(req, file,callback) {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)){
        req.fileValidationError = "Solo imágenes";
        return callback(null,false,req.fileValidationError);
    }
    callback(null,true);
}

const upload =multer({
    storage,
    fileFilter
})
module.exports =upload;