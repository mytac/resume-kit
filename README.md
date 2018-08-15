# resume-kit
## 使用步骤
先把项目fork下来；安装依赖

### 1. 生成配置文件
执行
```
$ yarn start
```
按照提示选择，在文件夹中会生成`resume-config.json`，这是一个配置文件；按照提示进行操作，将会生成一个简历数据模板`(/resume-config.json)`。

打开`resume-config.json`文件，在`resumeConfig`字段下，按照提示信息编辑你的简历数据，保存。

![demo](https://s22.postimg.cc/g6jvl1gwx/image.gif)
### 2. 预览简历信息
执行
```
$ yarn preview
```
可以在浏览器看到预览页面
### 3. 生成静态文件
执行
```
$ yarn build
```
在`build`文件夹下会生成一个静态页面~

## 开发计划
1. 配置多个主题模板
2. `config.json`自动生成
3. 配成全局命令，无需安装依赖