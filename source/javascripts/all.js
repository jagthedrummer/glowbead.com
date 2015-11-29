//= require jquery.min
//= require jquery.jplayer.min
//= require jplayer.playlist.min
//
//
$(document).ready(function(){

  /* Th Home Page */
	$(".welcome #jquery_jplayer_1").jPlayer({
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

  /* The H Files*/
  var h_files_playlist = [
     {
      title:"CM-17",
      artist:"Glowbead",
      mp3:"/mp3/H_Files/Glowbead-CM_17.mp3",
      free: true
    },
    {
      title:"Cool Shades",
      artist:"Glowbead",
      mp3:"/mp3/H_Files/Glowbead-Cool_Shades.mp3",
      free: true
    },
    {
      title:"Dads Song",
      artist:"Glowbead",
      mp3:"/mp3/H_Files/Glowbead-Dads_Song.mp3",
      free: true
    },
    {
      title:"Deal",
      artist:"Glowbead",
      mp3:"/mp3/H_Files/Glowbead-Deal.mp3",
      free: true
    },
    {
      title:"Hondo's Playground",
      artist:"Glowbead",
      mp3:"/mp3/H_Files/Glowbead-Hondos_Playground.mp3",
      free: true
    },
    {
      title:"Hooch On The Run",
      artist:"Glowbead",
      mp3:"/mp3/H_Files/Glowbead-Hooch_On_The_Run.mp3",
      free: true
    },
    {
      title:"John's Latest Masterpiece",
      artist:"Glowbead",
      mp3:"/mp3/H_Files/Glowbead-Johns_Latest_Masterpiece.mp3",
      free: true
    },
    {
      title:"My Dad Can Fly",
      artist:"Glowbead",
      mp3:"/mp3/H_Files/Glowbead-My_Dad_Can_Fly.mp3",
      free: true
    },
    {
      title:"Song With Two Cool Grooves",
      artist:"Glowbead",
      mp3:"/mp3/H_Files/Glowbead-Song_With_Two_Cool_Grooves.mp3",
      free: true
    },
    {
      title:"Spanglish",
      artist:"Glowbead",
      mp3:"/mp3/H_Files/Glowbead-Spanglish.mp3",
      free: true
    },
    {
      title:"Sri Barry",
      artist:"Glowbead",
      mp3:"/mp3/H_Files/Glowbead-Sri_Barry.mp3",
      free: true
    },
    {
      title:"Stepping on Lit Incense",
      artist:"Glowbead",
      mp3:"/mp3/H_Files/Glowbead-Stepping_on_Lit_Incense.mp3",
      free: true
    },
    {
      title:"Sunshine Jam",
      artist:"Glowbead",
      mp3:"/mp3/H_Files/Glowbead-Sunshine_Jam.mp3",
      free: true
    }
  ]
  var deep_field_playlist = [
     {
      title:"2 Grooves",
      artist:"Glowbead",
      mp3:"/mp3/Deep_Field/Glowbead-2_Grooves.mp3",
      free: true
    },
    {
      title:"Conversations With Hooch",
      artist:"Glowbead",
      mp3:"/mp3/Deep_Field/Glowbead-Conversations_With_Hooch.mp3",
      free: true
    },
    {
      title:"Cruiser",
      artist:"Glowbead",
      mp3:"/mp3/Deep_Field/Glowbead-Cruiser.mp3",
      free: true
    },
    {
      title:"Deep Field",
      artist:"Glowbead",
      mp3:"/mp3/Deep_Field/Glowbead-Deep_Field.mp3",
      free: true
    },
    {
      title:"Happy",
      artist:"Glowbead",
      mp3:"/mp3/Deep_Field/Glowbead-Happy.mp3",
      free: true
    },
    {
      title:"Hondo's Playground",
      artist:"Glowbead",
      mp3:"/mp3/Deep_Field/Glowbead-Hono_s_Playground.mp3",
      free: true
    },
    {
      title:"Linwood",
      artist:"Glowbead",
      mp3:"/mp3/Deep_Field/Glowbead-Linwood.mp3",
      free: true
    },
    {
      title:"My Dad Can Fly",
      artist:"Glowbead",
      mp3:"/mp3/Deep_Field/Glowbead-My_Dad_Can_Fly.mp3",
      free: true
    },
    {
      title:"Spanglish",
      artist:"Glowbead",
      mp3:"/mp3/Deep_Field/Glowbead-Spanglish.mp3",
      free: true
    },
    {
      title:"Sunshine Jam",
      artist:"Glowbead",
      mp3:"/mp3/Deep_Field/Glowbead-Sunshine_Jam.mp3",
      free: true
    }
  ]
  if( $('.album.h_files').length ){
    //alert('trying');
    new jPlayerPlaylist({
      jPlayer: "#jquery_jplayer_1",
      cssSelectorAncestor: "#jp_container_1"
    },
    h_files_playlist,
    {
      swfPath: ".",
      supplied: "mp3",
      useStateClassSkin: true,
      autoBlur: false,
      smoothPlayBar: true,
      keyEnabled: true
    });
  } // End if h_files


  if( $('.album.deep_field').length ){
    //alert('trying');
    new jPlayerPlaylist({
      jPlayer: "#jquery_jplayer_1",
      cssSelectorAncestor: "#jp_container_1"
    },
    deep_field_playlist,
    {
      swfPath: ".",
      supplied: "mp3",
      useStateClassSkin: true,
      autoBlur: false,
      smoothPlayBar: true,
      keyEnabled: true
    });
  } // End if h_files
	
});
