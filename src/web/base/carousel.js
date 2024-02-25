var express = require('express');
const multer  = require('multer');
var router = express.Router();
const { faker } = require('@faker-js/faker');

const carouselList = Array.from({length : 6} ,()=>({
    id : faker.string.uuid(),
    name : faker.person.lastName(),
    url : faker.image.url({width:180,height:320})
}))

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

router.get('/list', function(req, res) {
    lazyDo(()=>{
        res.json({
            success: true,
            payLoad: carouselList
        });
    })
});

router.post('/pic/upload', upload.single('image'), (req, res) => {
    // 'image' 是前端 FormData.append 的 key
    if (req.file) {
        lazyDo(()=>{
            res.json({
                success: true,
                payLoad: {
                            id:faker.string.uuid(),
                            url:faker.image.url({width:180,height:320})}
            });
        })
    } else {
      res.json({
        success : false
      })
    }
});

router.post('/order/adjust' ,(req,res)=>{
    lazyDo(()=>{
        res.json({
            success: true,
            payLoad: {}
        });
    })
})

router.post('/pic/delete' ,(req,res)=>{
    const jsonData = req.body;
    console.log('执行轮播图片删除' ,jsonData)
    lazyDo(()=>{
        res.json({
            success: true,
            payLoad: {}
        });
    })
})

// 导出路由
module.exports = router;