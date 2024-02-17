var express = require('express');
var router = express.Router();

const users = Array.from({length : 63} ,()=>({
    id: 1,
    name:'hello world',
    age:90,
    gender:1,
    status:1
}))

function paginate(array ,page_size ,page_number){
    page_size = parseInt(page_size)
    page_number = parseInt(page_number)
    const start = (page_number -1) * page_size
    return array.slice(start,start + page_size)
}

// 定义商品相关的路由
router.get('/list', function(req, res) {
    let resList = paginate(users,req.query.pageSize,req.query.pageNum)
    setTimeout(()=>{
        res.json({
            success: true,
            payLoad: {
                  list : resList,
                  total : users.length
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