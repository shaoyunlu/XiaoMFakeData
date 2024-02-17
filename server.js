const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000;

app.use(express.json()); // 使得我们可以解析JSON请求体
app.use(express.static('public')); // 设置静态目录文件夹
app.use(cors());

const adminRouter = require('./account/admin');
const systemRouter = require('./base/system') 

app.use('/web/account/admin', adminRouter);
app.use('/web/base/system', systemRouter);

// 示例路由，返回假数据
app.get('/web/menu/list', (req, res) => {
  res.json({
    success: true,
    payLoad: [
                {name : '账号管理' ,value : '1' ,icon:"user" ,children : [
                                      {name : '管理员' ,value:'/account/admin'},
                                      {name : '用户' ,value:'/account/user'}
                                  ]
                },
                {name : '基础设置' ,value : '2' ,icon:"base",children : [
                        {name : '系统基础设置' ,value:'/base/system'},
                        {name : '轮播图设置' ,value:'/base/carousel'}
                    ]
                },
                {name : '菜单三' ,icon:"download",value : '3'},
                {name : '菜单四' ,icon:"edit",value : '4'},
                {name : '菜单五' ,icon:"lineChart",value : '5'},
                {name : '菜单六' ,icon:"document",value : '6'}
    ]
  });
});


global.paginate = function(array ,page_size ,page_number){
  page_size = parseInt(page_size)
  page_number = parseInt(page_number)
  const start = (page_number -1) * page_size
  return array.slice(start,start + page_size)
}

app.listen(port, () => {
  console.log(`服务已启动，监听端口 ${port}`);
});