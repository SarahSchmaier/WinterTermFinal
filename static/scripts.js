

var names = [["ChloeSarah", "My friend, on the left, and I in front of my dorm: Stevens"], ["AbbotBall", "Crowd photo at P.A.'s first Abbot Ball!"], ["CommonsSunset", "Commons at Sunset"]];

var posttext = [["About Me", "Hi everyone, I am Sarah Schmaier, a four year senior from San Francisco California. I made this website to show a student's perspective of Phillips Academy and its resources."], ["Fun & Games", "Some events at P.A. include the first formal dance of fall term, usually called Sadie Hawkins but renamed Abbot Ball this year."], ["fred", "ginger"]];

$(document).ready(function () {
	for (var i = 0; i<names.length; i++) {
		var name = names[i];
		console.log(name);
		var sectiondiv = $("<div/>", {
			class: "section",
			id: name[0],
		}).appendTo("#pagepiling");
	//Appended to external JQuery file library called "pagepiling" for parallax scrolling
		var coldiv1 = $("<div/>", {
			class: "col-xs-6",
		}).appendTo(sectiondiv);
		//var menu = $("<ul/>", {
			//id: "myMenu" }).appendTo(coldiv1);
       // var menulink = $("<li/>", {
            //class: "menuElements"
			//}).appendTo(menu);
		var coldiv2 = $("<div/>", {
			class: "col-xs-6",
		}).appendTo(sectiondiv);
		var post = posttext[i];
		var button = $("<button/>", {
			class: "button",
			text: post[0],
		}).appendTo(coldiv2);
		var textdiv = $("<div/>", {
			class: "textdiv"
		}).html(post[1]).hide().appendTo(button);
		var picsrc = "static/images/" + name[0] + ".jpg";
		var pic = $("<img/>", {
			src: picsrc
		}).appendTo(coldiv1);
		var caption = $("<p/>", {
			id: name[0] + "caption",
			class: "caption",
		}).html(name[1]).appendTo(coldiv1);
	}
	$(".button").click(function(){
		$(this).children(".textdiv").toggle();
	});
    $('#pagepiling').pagepiling({
    	 verticalCentered: true,
    });
//    $(window).onmousewheel(function(){
//		$(".container").hide();
//	});
	$("section").scroll( function() {
		console.log("scroll");
	});
});

