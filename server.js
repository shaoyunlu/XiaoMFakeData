const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000;

app.use(express.json()); // 使得我们可以解析JSON请求体
app.use(cors());

var adminRouter = require('./account/admin');

app.use('/web/account/admin', adminRouter);

// 示例路由，返回假数据
app.get('/web/menu/list', (req, res) => {
  res.json({
    success: true,
    payLoad: [
                {name : '账号设置' ,value : '1' ,icon:"user" ,children : [
                                      {name : '管理员' ,value:'/account/admin'},
                                      {name : '用户' ,value:'/account/user'}
                                  ]
                },
                {name : '菜单二' ,value : '2' ,icon:"barChart",children : [
                        {name : '菜单2-1' ,value:'2-1'},
                        {name : '菜单2-2' ,value:'2-2' ,children : [
                                {name : '菜单2-2-1' ,value : '2-2-1'},
                                {name : '菜单2-2-2' ,value : '2-2-2'}
                            ]}
                    ]
                },
                {name : '菜单三' ,icon:"download",value : '3'},
                {name : '菜单四' ,icon:"edit",value : '4'},
                {name : '菜单五' ,icon:"lineChart",value : '5'},
                {name : '菜单六' ,icon:"document",value : '6'}
    ]
  });
});

app.listen(port, () => {
  console.log(`服务已启动，监听端口 ${port}`);
});