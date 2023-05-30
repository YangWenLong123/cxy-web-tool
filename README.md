# 从零构建vue3+vite+ts项目
## 创建项目
使用pnpm进行创建，如果未安装pnpm执行下面的命令全局安装
```shell
npm i -g pnpm
```
```shell
# 创建 命名为vite-vue-demo
pnpm create vite vite-vue-demo -- --template vue-ts
```
```shell
# 根据指引安装依赖并启动项目
cd vite-vue-demo
pnpm i
pnpm dev
```
## 使用github管理代码
在项目根目录执行命令进行git初始化
```shell
git init
```
注册一个github账号，新增一个仓库命名为我们的演示项目的名字vite-vue-demo,根据提示关联到远端仓库并推送代码
```shell
git add .
git commit -m "init"
git remote add origin git@github.com:hu3dao/vite-vue-demo.git
git push -u origin master
```
刷新github，就可以看到代码已经成功推送了
## 配置eslint
为了保证团队内代码风格统一，使用eslint对代码进行校验和格式化
### 安装eslint
```shell
pnpm add eslint -D
```
### 初始化eslint
使用eslint的命令行工具帮助我们生成eslint的规范文件
```shell
pnpm eslint --init

? How would you like to use ESLint? ... 
> To check syntax, find problems, and enforce code style # 检查语法和查找错误并强制保持风格

? What type of modules does your project use? ... # 使用的模块规范
> JavaScript modules (import/export)

? Which framework does your project use? ... # 项目使用的框架
> Vue.js

? Does your project use TypeScript? » Yes # 使用ts

? Where does your code run? ...  (Press <space> to select, <a> to toggle all, <i> to invert selection) # 代码运行的环境
√ Browser # 浏览器

? How would you like to define a style for your project? ... # 喜欢什么代码风格
> Use a popular style guide # 使用一个流行的代码风格

? Which style guide do you want to follow? ... # 使用哪种流行的风格
> Standard: https://github.com/standard/standard # 我们选择Standard 目前最多使用且简洁的，后面我们可以自己定义符合团队的风格

? What format do you want your config file to be in? ... # 配置文件的类型
> JavaScript

eslint-plugin-vue@latest @typescript-eslint/eslint-plugin@latest eslint-config-standard@latest eslint@^8.0.1 eslint-plugin-import@^2.25.2 eslint-plugin-n@^15.0.0 eslint-plugin-promise@^6.0.0 @typescript-eslint/parser@latest
? Would you like to install them now? » Yes # 选择立即安装相关依赖 

? Which package manager do you want to use? ... # 使用哪个包管理器
> pnpm
```
命令执行完成后会在跟目录下生成.eslintrc.cjs文件，我们可以在这个文件里定制代码风格，我们在这个文件中将对vue代码风格的检查设置为官方推荐的最严格模式
```cjs
// .eslintrc.cjs
extends: [
  - 'plugin:vue/vue3-essential', 
  + 'plugin:vue/vue3-strongly-recommended',
    'standard'
],
```
### 配置vscode对eslint的支持
1. 安装eslint的扩展
2. 启用eslint的检查，点击文件-首选项-设置-扩展-Eslint，找到Eslint > Format:Enable把它勾选上
### 检查eslint配置是否成功
我们在main.ts里写一段不符合规范的代码，发现有红线报错表明eslint配置成功了
```ts
// src/main.ts
const a = 10  // 报错提示我们定义了变量但未使用
```
### 在package.json文件中的script中添加lint脚本
现在又有一个了问题：文件这么多，我要一个一个文件的去看、去修改吗？为了能够快速将所有文件都格式化成统一风格，我们在package.json里增加一个脚本
```json
"scripts": {
    "lint": "eslint src/**/*.{js,jsx,vue,ts,tsx} --fix",
},
```
### 设置保存自动格式化代码
找到文件-首选项-设置，搜索format on save，将它勾选上，点击打开一个vue文件，鼠标右键，点击使用...格式化文档，点击配置默认格式化程序，选择Eslint，其他类型的文件（如：js/ts）同样的操作，设置完成后，编辑一段代码，保存时代码就会格式化成符合eslint风格代码了
## 配置stylelint
Stylelint 是一个强大、先进的 CSS 代码检查器（linter），可以帮助你规避 CSS 代码中的错误并保持一致的编码风格
### 安装依赖
+ stylelint - Stylelint 本体
+ stylelint-config-standard - Stylelint官方推荐规则
+ stylelint-config-rational-order - 对 CSS 声明进行排序
+ stylelint-order - 使用stylelint-config-rational-order 时依赖的模块
+ stylelint-config-html - 解析 vue 文件
+ postcss-html - 使用 stylelint-config-html 依赖的模块
+ postcss-scss - 对 scss 文件进行解析
```shell
pnpm add stylelint stylelint-config-standard stylelint-config-rational-order stylelint-order stylelint-config-prettier stylelint-config-html postcss-html postcss-scss -D
```
### 添加 StyleLint 配置文件
在根目录添加一个 .stylelintrc.cjs 文件，内容如下：
```cjs
module.exports = {
    root: true,
    extends: [
        'stylelint-config-standard',
        'stylelint-config-rational-order',
        'stylelint-config-html/vue' // 需要放在最后一位
    ],
    defaultSeverity: 'warning',
    plugins: ['stylelint-order'],
    rules: {
        'no-empty-source': null,
        'selector-class-pattern': null
    },
    overrides: [
        {
            files: ['*.vue', '**/*.vue'],
            rules: {
                'selector-pseudo-class-no-unknown': [
                    true,
                    {
                        ignorePseudoClasses: ['deep', 'global']
                    }
                ],
                'selector-pseudo-element-no-unknown': [
                    true,
                    {
                        ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted']
                    }
                ]
            }
        }
    ]
}

```
在根目录添加一个.stylelintignore 文件，内容如下：
```
public
dist
```
### 启用
安装Styleint扩展，在设置中添加如下代码，并设置tab键为两个空格
```json
"stylelint.validate": [
    "css",
    "scss",
    "postcss",
    "vue"
],
"editor.tabSize": 2,
```
在package.json增加命令
```json
"scripts": {
    "lint:style": "stylelint src/**/*.{css,scss,vue,html} --fix",
},
```
## 配置husky
husky是Git Hook工具，为git提供一系列钩子函数，在提交前（pre-commit）、提交消息（commit-msg）等钩子触发时可以为我们执行一些脚本。我们可以使用 husky 工具来进行代码提交前的自动格式化，以及 commit message 的校验。以防止不符合规范风格的代码进入到远程仓库（团队内的成员未使用vscode或未配置eslit）
### commit前代码格式化
执行下面的命令可直接生成husky + lint-staged配置，lint-staged
是对 git 暂存区文件进行 lint 检查的工具
```shell
# 这一步会自动安装并配置husky，所以不用再单独安装husky了
npx mrm@2 lint-staged
```
修改package.json的lint-staged配置
```json
"lint-staged": {
  "*.{js,ts,jsx,tsx}": "pnpm lint",
  "*.vue": [
    "pnpm lint:style",
    "pnpm lint"
  ],
  "*.{scss,css}": "pnpm lint:style"
}
```
测试，在main.ts文件定义一个变量不使用，使其不符合规范，使用git commit时会报错，删除这个变量，重新推送成功
```ts
// main.ts增加未使用变量
const test = 1
```
```git
git add .
git commit -m "init config"  // error  'test' is assigned a value but never used  no-unused-vars
```
### commit message校验
我们在使用 git commit 时，git 会记录每一次的 commit message（提交信息）。对多人协同开发一个项目，规范的提交信息是很重要的，所以有必要对提交信息进行校验，当不规范时就终止提交，可参考[阮一峰大神的博客](https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)
1. 安装依赖
  + @commitlint/cli - Commitlint 本体
  + @commitlint/config-conventional - 通用的提交规范
    ```shell
    pnpm add @commitlint/cli @commitlint/config-conventional -D
    ```
2. 创建commitlint配置
  + 在根目录新建一个.commitlintrc.cjs 文件，内容如下：
    ```cjs
    module.exports = {
      extends: ['@commitlint/config-conventional']
    }
    ```
  + 执行下面的命令配置在git的commit-msg时进行校验
    ```shell
    pnpm husky add .husky/commit-msg "pnpm commitlint --edit $1"
    ```
### Commit Message 格式
配置完成之后就可以在每次 git commit 时对 commit message 进行校验了，规范有两种格式：单行信息和多行信息。

单行信息 - 用于业务代码提交时使用，业务代码一般来说更改比较多而且无法具体说明其信息，具体的还需要看产品文档，所以用单行信息即可。
```xml
<type>(<scope>): <subject>
```

多行信息 - 用于提交一些不经常更改的功能型代码时使用，如：某个功能函数的新增、修改或重构，目录结构的调整（工程化调整），架构的更改等，这些我们需要进行详细说明防止出现遗忘
```xml
<type>(<scope>): <subject>
<BLANK LINE> // 空行
<body>
<BLANK LINE>
<footer>
```

字段说明
+ type：类型，有以下几种

  |类型|描述|
  |-|-|
  |build|发布版本|
  |chore|改变构建流程、或者增加依赖库、工具等|
  |ci|持续集成修改|
  |feat|新特性|
  |fix|修改问题|
  |perf|优化相关，比如提升性能、体验|
  |refactor|代码重构|
  |revert|回滚到上一个版本|
  |style|代码格式修改|
  |test|测试用例修改|
+ scope：影响的范围, 比如: *（全局），route, component, utils, build，readme，css 等
+ subject：概述，建议符合[50/72 formatting](https://stackoverflow.com/questions/2290016/git-commit-messages-50-72-formatting)
+ body：具体修改内容，描述为什么修改, 做了什么样的修改, 以及开发的思路等等，可以分为多行，建议符合[50/72 formatting](https://stackoverflow.com/questions/2290016/git-commit-messages-50-72-formatting)
+ footer：一些备注, 通常是 Breaking Changes（重要改动） 或 Closed Issues（修复 Bug 的链接）

50/72 formatting的简要总结：
+ 第一行不超过 50 个字符
+ 然后是一个空行
+ 剩余的文本应以 72 个字符换行

示例
```xml
feat(eslint): 集成eslint

1. vscode安装Eslint扩展即可保存时自动格式化
2. 运行 pnpm lint 可全局进行格式化

可浏览README文件了解细节
```
## 集成VueRouter
### 安装依赖
目前VueRouter默认版本为v4.x，直接vue3，所以我们直接安装即可，[VueRouter官方文档](https://router.vuejs.org/zh/installation.html)
```shell
pnpm add vue-router
```
### 目录说明
在src文件夹下新建router文件夹用来管理路由相关的配置，目录如下
```xml
.
├── src # 主目录
│   ├── main.js # 主入口
│   ├── router # 路由配置
│   │   ├── guard # 路由守卫
│   │   ├── modules # 路由模块
│   │   └── index.ts # router出口
│   └── views # 页面
```
关于路由表，建议根据功能的不同来拆分到 modules 文件夹中

这样做的好处是：
+ 方便后期维护
+ 减少 Git 合并代码时的冲突的可能
### 使用
在views新建home文件夹和login文件夹并在各自文件夹新建一个vue文件，编写测试代码
```vue
// home/index.vue
<script lang='ts' setup>
</script>

<template>
  首页
</template>

<style scoped>
</style>
```
```vue
// login/index.vue
<script lang='ts' setup>
</script>

<template>
  登录页
</template>

<style scoped>
</style>
```
在modules新建三个文件：common.modules.ts、user.modules.ts、index.ts，xxx.modules.ts是每个模块的路由表，index.ts是整个路由表的出口，用于汇总全部的路由。
```ts
// common.modules.ts  公共模块路由表
import type { RouteRecordRaw } from 'vue-router'
import Home from '@/views/home/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

export default routes
```
```ts
// user.modules.ts  用户模块路由表
import type { RouteRecordRaw } from 'vue-router'
import Login from '@/views/login/index.vue'

const routes:RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

export default routes
```
```ts
// index.ts  路由表出口
import userRouteModules from './user.modules'
import commonRouteModules from './common.modules'

export default [...commonRouteModules, ...userRouteModules]
```
在router文件夹下新建index.ts文件，作为路由模块的出口
```ts
// router/index.ts
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './modules'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
```
在主入口mian.ts注入router，运行pnpm dev，访问
```ts
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

const app = createApp(App)
app.use(router)
app.mount('#app')
```
## 集成Pinia
Pinia是vue官方推荐的vue项目全局状态管理器的库，支持vue2/vue3，对Composition API和typescript具有更好的支持
### 安装依赖
```shell
pnpm add pinia
```
### 目录说明
有关全局状态管理的功能都是store目录中，将不同模块的状态拆分放到modules，好处和route modules的说明一样
```xml
.
├── src # 主目录
│   ├── main.js # 主入口
│   ├── store # store配置
│   │   ├── modules # store模块
│   │   └── index.ts # store出口
│   └── views # 页面
```
### 使用
在主入口文件main.ts中创建一个根存储（pinia）并传递到应用程序，可以简单理解为创建一个全局状态桶挂载到应用程序，后面定义的store就相当于放到桶里面，页面/组件就可以去使用了
```ts
import { createPinia } from 'pinia'

app.use(createPinia())
```
在store/modules创建user.ts文件定义用户相关的store
+ state 可以理解为数据仓库
+ getter 可以理解为计算属性
+ actions 处理业务逻辑的方法，支持异步 
```ts
// store/modules/user.ts
import { defineStore } from 'pinia'

const useUserStore = defineStore('user', {
  state () {
    return {
      name: '昵称',
      age: 25,
      sex: '男'
    }
  },
  getters: {
    getAgeStr: (state) => {
      return `${state.age}岁`
    },
    getNameAndAge ():string {
      return `${this.name}-${this.getAgeStr}`
    }
  },
  actions: {
    saveName (name: string) {
      this.name = name
    }
  }
})

export default useUserStore
```
在store/index.ts统一导出store
```ts
// store/index.ts
import useUserStore from './modules/user'

export {
  useUserStore
}
```
在home页面使用
```vue
<!-- views/home/index.vue -->
<script lang='ts' setup>
import { useUserStore } from '@/store'
const store = useUserStore()
const handleClick = () => {
  store.saveName('小强')
}
</script>

<template>
  首页
  <h3>姓名：{{ store.name }}</h3>
  <h3>年龄：{{ store.age }}</h3>
  <h3>姓名+年龄：{{ store.getNameAndAge }}</h3>
  <button @click="handleClick">
    修改名字
  </button>
</template>
```
## 集成axios
axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中
### 安装依赖
```shell
pnpm add axios
```
### 使用
新建src/utils/request.ts，对axios进行简单的封装（可根据实际业务扩展）
```ts
// src/utils/request.ts
import axios from 'axios'

const request = axios.create({
  baseURL: 'http://127.0.0.1:8080'
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default request
```
在src新建api文件夹，用于存放所有的接口调用，根据不同模块划分新建文件管理各自模块的接口，这里我们新建demo.ts用于测试上面封装好的request工具函数
```ts
// src/demo.ts
import request from '@/utils/request'
export interface IUserInfo {
  username: string,
  password: string
}
export interface IResponseData {
  msg: string
}
export const getUserInfo = (params: IUserInfo) => {
  return request.get<IResponseData>('/user', { params })
}
```
在home页面使用
```vue
<script lang='ts' setup>
import { getUserInfo } from '@/api/demo.js'
import { onMounted } from 'vue'
onMounted(() => {
  getUserInfo({
    username: '昵称',
    password: '123456'
  }).then(res => {
    console.log(res.data.msg)
  })
})
</script>
```