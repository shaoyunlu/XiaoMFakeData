var express = require('express');
var router = express.Router();
const { faker } = require('@faker-js/faker');

const carouselList = Array.from({length : 6} ,()=>({
    id : faker.string.uuid(),
    name : faker.person.lastName(),
    url : faker.image.url({width:180,height:320})
}))

router.get('/list', function(req, res) {
    lazyDo(()=>{
        res.json({
            success: true,
            payLoad: carouselList
        });
    })
});

// 导出路由
module.exports = router;