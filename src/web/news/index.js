var express = require('express');
var router = express.Router();
const { faker } = require('@faker-js/faker');

let typeList = [
    {label : '类别' ,value : '0' ,children : [
        {label : '军事' ,value : '1'},
        {label : '财经' ,value : '2'},
        {label : '体育' ,value : '3'},
        {label : '政治' ,value : '4'},
        {label : '文化' ,value : '5'},
        {label : '地理' ,value : '6'}
    ]}
]

const newList = [

]

function deleteItemByValue(arr, valueToDelete) {
    arr.forEach((item, index) => {
        // 如果找到了要删除的value，则删除该项
        if (item.value === valueToDelete) {
            arr.splice(index, 1);
            return;
        }
        // 如果当前项有children属性，则递归调用此函数
        if (item.children && item.children.length > 0) {
            deleteItemByValue(item.children, valueToDelete);
            // 如果递归删除后children为空，则删除children属性
            if (item.children.length === 0) {
                delete item.children;
            }
        }
    });
}

router.get('/type/tree', function(req, res) {
    lazyDo(()=>{
        res.json({
            success: true,
            payLoad: typeList
        });
    })
});

router.post('/type/tree/delete' ,(req,res)=>{
    const jsonData = req.body
    console.log('删除新闻类型',jsonData)
    deleteItemByValue(typeList, jsonData.value);
    lazyDo(()=>{
        res.json({
            success: true,
            payLoad: typeList
        });
    })
})

router.post('/type/tree/add' ,(req,res)=>{
    const jsonData = req.body
    console.log('新增新闻类型',jsonData)
    typeList[0].children.push({label:jsonData.label ,value:faker.string.uuid()})
    lazyDo(()=>{
        res.json({
            success: true,
            payLoad: typeList
        });
    })
})

router.get('/list' ,(req,res)=>{
    let resList = paginate(newList,req.query.pageSize,req.query.pageNum)
    lazyDo(()=>{
        res.json({
            success: true,
            payLoad: {
                list : resList,
                total : newList.length
            }
        });
    })
})

// 导出路由
module.exports = router;