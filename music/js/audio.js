$("#btn").click(function(ev){
	ev.stopPropagation();//阻止冒泡
	   
	 
	if($(this).hasClass("play")){
		audio.play();
//		$("#audio").get(0).play();
		$(this).removeClass();
	}else{
		audio.pause();
//		$("#audio").get(0).pause();
		$(this).addClass("play")
	}
	

	
});


mController={
	server:"http://music.126.com/song.php?id=",
	play:function(id){	
//		console.log(id);
		$.ajax({
			type:"get",
//			url:this.server+id,
            url:"data/music.json",			
			async:true,
			success:function(data){    
//		      console.log(data[id]);	
				var url=data[id].url;
//				var url="mp3/song2.mp3";
				$("#audio").attr("src",url);
				
				var audio=$("#audio").get(0);
				audio.play();//$("audio").get(0) ----jQuery对象转换成js对象
				$("#btn").removeClass();//重置按钮状态				
				
			}
		});
	}
}
