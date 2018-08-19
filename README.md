# resume-kit
## 为什么要写这个轮子
因为我在之前找工作的期间，简历对我来说是一个非常大的弱项，每次只有找工作的时候才写，然而之前的项目重点通常会被忘得一干二净，所以说每写完一个项目更新一次简历才是最好的选择。但是去招聘网站上填他们的模板反而束手束脚，如果把你的简历内容写成json；不必再去考虑样式。

我目前只写了一个主题，有感兴趣的小伙伴可以和我一起维护这个项目~
## demo
[demo](https://mytac.github.io/resume/)
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
在`build`文件夹下会生成静态文件，将他放到你的主页吧~

## 开发计划
1. 配置多个主题模板
2. `config.json`自动生成 √
3. 配成全局命令，无需安装依赖
4. 中英文切换
5. 在数据模板中添加链接字段
6. build阶段将样式文件写到html中，最终只生成一个文件