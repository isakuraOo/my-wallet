## 钱包

##### 根据个人实际需求定制的记账网站

##### 技术栈

###### 前端

1. React
2. React-Router
3. ES6
4. SASS
5. Antd
6. Webpack

###### 后端(计划&学习中)

1. Koa
2. mongodb

##### 前端项目结构

```
├── src                               # 程序源文件
│   ├── components                    # 可复用的直观组件
│   ├── const                         # 常量管理，里面放公共的sass，img等
│   ├── entries                       # 主页入口
│   │   ├── index.htlm                # 主入口 HTML 文件
│   │   ├── index.js                  # 主要 JS 文件
│   │   └── index.sCss                # 主入口 css 文件
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
│           ├── index.sCss            # 路由定义和代码异步分割
│           └── components            # 直观React组件
```

