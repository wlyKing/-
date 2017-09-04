
//http://localhost:8020/month4/week02/music/index.html?a=1&b=2&c=3

// {a:1,b:2,c:3}

// 通过url路径获取地址参数

function getUrlParams(){
	
	// 获取当前网页的url地址
	var url = window.location.href;
	
	var arr = url.split("?")
	
	var str = arr[1];   
	
	var parr = str.split("&");
	
	
    var params = {};
	
	for(var i=0;i<parr.length;i++){
		
		var p = parr[i];  // p ="a=1"   "b=2"  "c=3";
		
		var kv=p.split("=");  // ["a","1"]   ["b","2"]  ["c","3"]
		
		
		params[kv[0]] =  kv[1];  // {a:1,b:2,c:3}
	
		
	}
	
	return params;
	
}

// 通过url路径来提取模块名

function getM(){
	
	var url = window.location.href;	
	
	var arr = url.split("#");  // arr[1] = music?a=1&b=2&c=3
	
	if(arr.length==2){
		var p = arr[1].split("?");
	
	    var m = p[0];
	}
		
	return m;

}

// 将传入的模块加载到页面

function router(m,$container){
	
	$container = $container || $("#share");
	
	$.ajax({
	
		url:"views/"+m+".html",
		success:function(data){
			 $container.html(data);
			 loadjs(m);
		}

   });
   
}

// 通过url路径来获取模块名

	localStorage.count=0;
$(function(){
	


	
	if(!localStorage){
		
	        localStorage.count=0
         		
	}
	
	localStorage.count++;
	
	console.log(localStorage.count)
	
	if(localStorage.count==5){
		 router("hello");
	}else{
		router('tab');
	    router("audio",$("#global"));
	}
	

	
	
})



   
  function loadjs(m){
  	
  	$.ajax({
  		type:"get",
  		url:"js/"+m+".js",
  		async:true
  	});
  }

