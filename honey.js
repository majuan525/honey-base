/**
 * author:391914091@qq.com
**/
var HNetwork = {
	PostWithRich:function(url,data,dataType,timeout,callback){
		$.ajax({
			 type:"POST",
			 url:url,
			 data: data,
			 timeout:timeout,
			 dataType:dataType,
			 processData:true,
			 success: function(msg){
				 callback(msg);
			 }
		});
	},
	GetWithRich:function(url,data,dataType,timeout,callback){
		$.ajax({
			 type:"GET",
			 url:url,
			 data: data,
			 timeout:timeout,
			 dataType:dataType,
			 processData:true,
			 success: function(msg){
				 callback(msg);
			 }
		});
	},
	PostAndReturnJson:function(url,data,callback){
		$.ajax({
			 type:"POST",
			 url:url,
			 data: data,
			 timeout:180000,
			 dataType:'json',
			 processData:true,
			 success: function(msg){
				 callback(msg);
			 }
		});
	},
	Post:function(url,data,callback){
		$.ajax({
			 type:"POST",
			 url:url,
			 data: data,
			 timeout:180000,
			 processData:true,
			 success: function(msg){
				 callback(msg);
			 }
		});
	},
	Get:function(url,callback){
		$.ajax({
			 type:"GET",
			 url:url,
			 data: {},
			 timeout:180000,
			 processData:true,
			 success: function(msg){
				 callback(msg);
			 }
		});
	},
	GetJson:function(url,callback){
		$.ajax({
			 type:"POST",
			 url:url,
			 data: {},
			 timeout:180000,
			 dataType:'json',
			 processData:true,
			 success: function(msg){
				 callback(msg);
			 }
		});
	},
	BindUploadEvent:function(id,url,params,filename,suffixes,callback){
		new AjaxUpload(
			$("#" + id),
			{  
				action: url,
	        	data: params,  
	        	name: filename,
	        	timeout:180000,
		        onSubmit: function(file,ext) {
		           // if(!(ext && /^(apk)$/.test(ext))) {  
		           //     alert("您上传的文件格式有误，请重新选择！");  
		           //     return false;  
		           // }  
		        },
		        onComplete:function(file,resp) {  
		           callback(file,resp);
		        }
			});
		}
};

var HString = {
	isContains:function(str,substr){
		return str.indexOf(substr) >= 0;
	}
	// HRegex
};

var HURL = {
	GetURLParam:function(param){
		paramValue = "";
	    isFound = false;
	    if(window.location.search.indexOf("?") == 0 && window.location.search.indexOf("=") > 1) {
	        arrSource = unescape(window.location.search).substring(1, window.location.search.length).split("&");
	        i = 0;
	        while(i < arrSource.length && !isFound){
	            if(arrSource[i].indexOf("=") > 0) {
	                if (arrSource[i].split("=")[0].toLowerCase() == param.toLowerCase()) {
	                    paramValue = arrSource[i].split("=")[1];
	                    isFound = true;
	                }
	            }
	            i++;
	        }
	    }
	    return paramValue;	
	}
};

var HTemplate = {
	render:function(templateId,data){
		return template(templateId,data);
	}
};

var HVue = {

};

var HBootstrap = {

};

var HTool = {
	NextPageWithScroll:function(minHeight,callback){
		$(window).scroll(function () {
	        //$(window).scrollTop()这个方法是当前滚动条滚动的距离
	        //$(window).height()获取当前窗体的高度
	        //$(document).height()获取当前文档的高度
	        if((minHeight + $(window).scrollTop()) >= ($(document).height() - $(window).height())) {
	            //当底部基本距离+滚动的高度〉=文档的高度-窗体的高度时；
	            //我们需要去异步加载数据了
	            callback();
	        }
	    });
	}
};




