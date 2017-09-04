

//请求本地json文件
function getPlaylist(n,callback){
	   
	   if(checkCache()){
	   	
	   	   var list = JSON.parse(localStorage.playlists);//将字符串转换成json对象
	   	   callback(list);
	   	   console.log("访问缓存");
	   }else{
	   	   console.log("访问网络");
	   	     
	   	   $.ajax({
			   	url:'data/topPlayList.json',
		        success:function(data){   
		        	//获取数据列表
		        var list=data.playlists;
		        callback(list);
		        //将请求到的数据转换成字符串保存在本地缓存中
		        localStorage.playlists = JSON.stringify(data.playlists);
		        
              }
	      });
	   }
	           //保存缓存时间
		        localStorage.cacheTime = new Date().getTime();  
	   
	   
}

function checkCache(){
	//已经缓存数据
	if(!localStorage.playlists){
		return false;
	}
	
	//判断缓存是否过期，过期重新访问网络
	var time=new Date().getTime();
	var ctime=localStorage.cacheTime;
//	console.log(time-ctime)
	
	if(time-ctime>5*1000){
		return false;
	}
	
	return true;
}



getPlaylist(9,function(list){
	        var $songlist=$(".songList");
            var item = $("#songItem").html();
            for( var i=0;i<list.length;i++){
            	
                  var $item = $(item);
                  $item.find('span').html(list[i].playCount);
                  $item.find('img').attr('src',list[i].coverImgUrl);
                  $item.find('p').html(list[i].name);
                  $item.find('a').attr("href","#detail?id="+list[i].id);
                  $songlist.append($item);

    }
});


