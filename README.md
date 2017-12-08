## honey-base
简介：honey是前端开发工具领域的‘小甜点’，‘好吃而又设计精巧’，它是一个非常简洁／高效的前端开发工具包，立志于将前端开发工作人员的开发效率提升10倍甚至更多，它的定位不是再造一个前端开发框架，而是对现有开发框架在“实际代码调用层次”的改良和优化。

目前该项目主要包含以下组件：
<table>
<tbody>
<tr><td><em>组件</em></td><td><em>说明</em></td></tr>
<tr><td>HNetwork</td><td>封装了基础的Get,Post,Upload的封装，该项目需要依赖于Jquery/Ajaxupload(上传)</td></tr>
<tr><td>HString</td><td>对字符串的Join/Split/Regex/Find等操作</td></tr>
<tr><td>HURL</td><td>对Window.location的封装处理</td></tr>
<tr><td>HVue</td><td>依赖Vue.js,用于数据绑定</td></tr>
<tr><td>HTemplate</td><td>依赖template-simple.js,用于前端异步请求数据的模版渲染</td></tr>
<tr><td>HBootstrap</td><td>封装了对Bootstrap的调用操作</td></tr>
<tr><td>HWidget</td><td>自实现的小部件调用，需要依赖hbase-css使用</td></tr>
</tbody>
</table>


### 1.HNetwork
```javascript
<script type="text/javascript" src="./jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="./ajaxupload.3.5.js"></script>
<script type="text/javascript" src="./honey-base.js"></script>
//以Post方式提交数据
HNetwork.Post('url',{},function(resp){
  	console.log(resp);
});
//从远程获取一段Json数据
HNetwork.GetJson('url',function(resp){
	console.log(resp);
});
//为一个元素ID绑定一个上传文件事件
HNetwork.BindUploadEvent("element-id","url",{},"data",[],function(file,resp){
	console.log(resp)
});
```

### 2.HString

```javascript
//判断一个字符串是否包含另一个字符串
var inclucde = HString.isContains("hello","hel")
```

### 3.HURL

```javascript
//从当前地址栏获取包含的某个参数
var value = HURL.GetURLParam('param');
```

### 4.HVue

```javascript
```

### 5.HTemplate

```javascript
```

### 6.HBootstrap

```javascript
```
### 7.HWidget

```javascript
```
