

var params=getUrlParams();

var id=params.id;

//console.log(id);

function getlist(callback){
	
	
	$.ajax({
		type:"get",
		url:"data/playlist.json",
		async:true,
		success:function(data){
			var list=data.playlist.tracks;
//			console.log(list);
            callback(list);
		}
	});
}
getlist(function(list){
	
	var $songlists = $("#songlist");
	var item = $("#listItem").html();
	
	for( var i=0; i<list.length; i++){
		
		var $item = $(item);
		var music = list[i];
		$item.find(".music").html(list[i].name);
		$item.find(".artist").html(list[i].ar[0].name);
		
		$item.data("music",music).click(function(){
			$("#global").css("display","block");
			$("#global").find(".song").html($(this).data("music").name);
			$("#global").find(".singer").html($(this).data("music").ar[0].name);
			$("#global").find('img').attr('src',$(this).data("music").al.picUrl);
			mController.play($(this).data("music").id);

			
		})
		
		$songlists.append($item);
		
//		console.log(list[i])
	}
});
$("#back").click(function(){
//	console.log(435);
   	   router("tab");
   })