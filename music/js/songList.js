

function getSonglist(callback){
	$.ajax({
		type:"get",
		url:"data/playlist.json",
		async:true,
		success:function(data){
			var list=data.playlist.tracks;
            callback(list);
            console.log(list);
		}
	});
}

getSonglist(function(list){
	var $playlist = $('#playlist');
	
	var item = $('#listItem').html();
	
	for( var i=0;i<list.length; i++){
		var $item = $(item); 
		$item.find(".music").html(list[i].name);
		$item.find(".artist").html(list[i].ar[0].name);
		
		$playlist.append($item);
		
	}
	
	
});
