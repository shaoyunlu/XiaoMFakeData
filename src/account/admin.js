var express = require('express');
var router = express.Router();
const { faker } = require('@faker-js/faker');


const users = Array.from({length : 43} ,()=>({
    id: 1,
    name:faker.person.fullName(),
    age:faker.number.int({ min: 10, max: 100 }),
    gender:faker.number.int({ min: 1, max: 2 }),
    status:faker.number.int({ min: 1, max: 3 }),
    updateTime:faker.date.anytime().toISOString().split('T')[0]
}))

router.get('/list', function(req, res) {
    let resList = paginate(users,req.query.pageSize,req.query.pageNum)
    lazyDo(()=>{
        res.json({
            success: true,
            payLoad: {
                  list : resList,
                  total : users.length
            }
          });
    })
});

// 管理员新增
router.post('/add' ,(req,res)=>{
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


// 导出路由
module.exports = router;