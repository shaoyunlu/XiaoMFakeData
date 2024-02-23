var express = require('express');
var router = express.Router();
const { faker } = require('@faker-js/faker');

let i = 0;

const carouselList = Array.from({length : 6} ,()=>({
    id : faker.string.uuid(),
    name : faker.person.lastName(),
    url : faker.image.url({width:180,height:320}),
    order : i++
}))

router.get('/list', function(req, res) {
    lazyDo(()=>{
        res.json({
            success: true,
            payLoad: carouselList
        });
    })
});

router.post('/pic/upload' ,(req,res)=>{

})

router.post('/order/adjust' ,(req,res)=>{

})

router.post('/pic/delete' ,(req,res)=>{
    
})

// 导出路由
module.exports = router;