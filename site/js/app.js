$(function() {
	
	//PLAY! button animation
	$('#play').mouseenter(function(){
		$(this)
		.velocity({translateY:'-10px', backgroundColor:'#006400'}, 400);
	});
	$('#play').mouseleave(function(){
		$(this)
		.velocity({translateY:'0', backgroundColor:'#699864'}, 200);
	});
	
});