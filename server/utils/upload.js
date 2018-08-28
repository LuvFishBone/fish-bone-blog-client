import multer from "koa-multer"
import path from 'path'

const storage = multer.diskStorage({
  destination: path.resolve(__dirname, '../', './static/uploads/'),
  filename(ctx, file, cb){
    const filenameArr = file.originalname.split('.');
    cb(null,Date.now() + '.' + filenameArr[filenameArr.length-1]);
  }
});

const uploadFile = multer({storage});

export default uploadFile