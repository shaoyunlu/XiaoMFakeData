var express = require('express');
var router = express.Router();
const { faker } = require('@faker-js/faker');

router.post('/login' ,(req,res)=>{
    const jsonData = req.body;
    // 在这里处理jsonData...
    console.log(jsonData)
    lazyDo(()=>{
        res.json({
            success : true,
            payLoad:{}
        })
    })
})