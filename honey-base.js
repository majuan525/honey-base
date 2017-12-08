/**
 * author:xxxx@gmail.com
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
	}
};
var HStrings = {

};
var HRegex = {

};
