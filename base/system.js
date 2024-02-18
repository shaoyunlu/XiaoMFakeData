var express = require('express');
var router = express.Router();
const { faker } = require('@faker-js/faker');

const bulletinList = Array.from({length : 63} ,()=>({
    id: 1,
    content:faker.lorem.text(),
    createTime:faker.date.anytime().toISOString().split('T')[0]
}))

router.get('/bulletin/list', function(req, res) {
    let resList = paginate(bulletinList,req.query.pageSize,req.query.pageNum)
    lazyDo(()=>{
        res.json({
            success: true,
            payLoad: {
                  list : resList,
                  total : bulletinList.length
            }
        });
    })
});

router.post('/bulletin/add' ,(req,res)=>{
    const jsonData = req.body;
    // 在这里处理jsonData...
    console.log(jsonData)
    lazyDo(()=>{
        res.json({
            success: true,
            payLoad:{}
        })
    })
})

// 导出路由
module.exports = router;