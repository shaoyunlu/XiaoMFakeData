var express = require('express');
var router = express.Router();

// 定义商品相关的路由
router.get('/list', function(req, res) {
    setTimeout(()=>{
        res.json({
            success: true,
            payLoad: {
                  list : [
                      {name : '菜单三' ,age:"download",gender : '3'},
                      {name : '菜单四' ,age:"edit",gender : '4'},
                      {name : '菜单五' ,age:"lineChart",gender : '5'},
                      {name : '菜单六' ,age:"document",gender : '6'}
                  ],
                  total : 4
            }
          });
    },1000)
});

// 管理员新增
router.post('/add' ,(req,res)=>{
    const jsonData = req.body;
    // 在这里处理jsonData...
    console.log(jsonData)
    setTimeout(()=>{
        res.json({
            success : true,
            payLoad:{}
        })
    },1000)
})


// 导出路由
module.exports = router;