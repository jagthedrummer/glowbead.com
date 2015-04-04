//= require jquery.min
//= require jquery.jplayer.min
//
//
$(document).ready(function(){

	$("#jquery_jplayer_1").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				title: "The Minute You're Gone",
				mp3: "/mp3/Glowbead-The_Minute_You're_Gone.mp3"
			});
		},
		swfPath: ".",
		supplied: "mp3",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		remainingDuration: true,
		toggleDuration: true
	});

	//$("#jplayer_inspector").jPlayerInspector({jPlayer:$("#jquery_jplayer_1")});
});
