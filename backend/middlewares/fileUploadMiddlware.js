const multer = require("multer");

const pdfConfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./temp/resume")
    },
    filename:(req,file,callback)=>{
        callback(null,`${Date.now()}_${file.originalname}`)
    }
})

const isPdf =  (req , file , cb) => {
    if(file.mimetype === "application/pdf") {
        cb(null , true)
    }
    else{
        res.status(401)
        throw new Error("Uploaded file is not pdf.")
    }
}

const uploadPdf = multer({
    storage : pdfConfig ,
    fileFilter : isPdf
})

module.exports = {
uploadPdf , 
}