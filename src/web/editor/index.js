var express = require('express');
const multer  = require('multer');
var router = express.Router();
const { faker } = require('@faker-js/faker');

// 设置存储配置
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/') // 保存的路径
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
})

const upload = multer({ storage: storage })

router.post('/pic/upload', upload.single('image'), (req, res) => {
    // 'image' 是前端 FormData.append 的 key
    if (req.file) {
        lazyDo(()=>{
            res.json({
                "errno": 0, // 注意：值是数字，不能是字符串
                "data": {
                            "url": "http://127.0.0.1:3100/bg.jpg" // 图片 src ，必须
                        }
            });
        })
    } else {
      res.json({
        success : false
      })
    }
});

router.post('/video/upload', upload.single('video'), (req, res) => {
    // 'image' 是前端 FormData.append 的 key
    if (req.file) {
        lazyDo(()=>{
            res.json({
                "errno": 0, // 注意：值是数字，不能是字符串
                "data": {
                            "url": "http://127.0.0.1:3100/bg.mp4" // 图片 src ，必须
                        }
            });
        })
    } else {
      res.json({
        success : false
      })
    }
});

// 导出路由
module.exports = router;