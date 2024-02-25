var express = require('express');
var router = express.Router();
const { faker } = require('@faker-js/faker');

const typeList = [
    {label : '军事' ,value : '1'},
    {label : '财经' ,value : '2'},
    {label : '体育' ,value : '3'},
    {label : '政治' ,value : '4'},
    {label : '文化' ,value : '5'},
    {label : '地理' ,value : '6'}
]


router.get('/type/tree', function(req, res) {
    lazyDo(()=>{
        res.json({
            success: true,
            payLoad: typeList
        });
    })
});

// 导出路由
module.exports = router;