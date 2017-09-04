
$(function(){
	
	
         router("home",$("#tabContainer"));
          $("#home").click(function(){
         	router("home",$("#tabContainer"));
         });
         $("#list").click(function(){
         	router("songList",$("#tabContainer"));
         });
         $("#ranking").click(function(){
         	router("rank",$("#tabContainer"));
         });
         $("#collect").click(function(){
         	router("like",$("#tabContainer"));
         });
//		 console.log(787)     
	
})
