## 钱包

##### 根据个人实际需求定制的记账网站

##### 技术栈

###### 前端

1. React v15.6.1
2. React-Router v4.1.1
3. ES6
4. SASS
5. PostCSS
6. Antd v2.12.0
7. Webpack
8. Yarn

###### 后端(计划&学习中)

1. Koa
2. mongodb

##### 前端项目结构

```
├── src                               # 程序源文件
│   ├── components                    # 可复用的直观组件
│   ├── assets                        # 静态资源，里面放公共的sass，img等
│   ├── entries                       # 主页入口
│   │   ├── index.htlm                # 主入口 HTML 文件
│   │   ├── index.js                  # 主要 JS 文件
│   │   └── index.scss                # 主入口 css 文件
│   ├── routes                        # 主路由和异步分割点
│   │   └── index.js                  # 用store启动主程序路由
│   ├── redux                         # Redux指定块
│   │   ├── middlewares               # 中间件管理
│   │   ├── modules                   # reducers/actions的集合
│   │   │   └── menu                  # 根据规则定制管理目录
│   │   │       ├── menu_action.js    # Action管理
│   │   │       ├── menu_reducer.js   # Reducer管理
│   │   │       └── menu_state.js     # State管理
│   │   ├── createStore.js            # 创建和使用redux store
│   │   ├── reducers.js               # Reducer注册和注入
│   │   └── types.js                  # 管理 Action、Reducer 公用的 types
│   ├── utils                         # 工具包
│   └── views                         # 业务页面管理
│       └── Home                      # 不规则路由
│           ├── index.js              # 路由定义和代码异步分割
│           ├── index.scss            # 路由定义和代码异步分割
│           └── components            # 直观React组件
├── package.json                      # 依赖包
├── webpack.config                    # webpack配置
└── yarn.lock                         # yarn相关
```

##### 主要需求点

1. 可设置每日/每月的目标，日均支付或者月总支出，类似联通流量统计
2. 可设置每日的固定支出，例如工作日的路费、每个月的分期、房租等
3. 可设置规则，例如羊城通刷了15次第16次公交打折等
4. 能记录某个时间点常输入的字段方便快速选中分类
5. 能设置提醒记账时间，例如午饭之后提示然后进网站能快速录入或者直接根据习惯确定等


