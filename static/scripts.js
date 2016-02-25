

var names = [["ChloeSarah", "Me and Chloe Lee '17 in front of my dorm: Stevens"], ["AddisonEvent", "Addison Ambassadors Event '15: Black and White Night"], ["CommonsSunset", "Commons at Sunset"]];

$(document).ready(function() {
	for (var i = 0; i<names.length; i++) {
		var name = names[i];
		console.log(name);
		var sectiondiv = $("<div/>", {
			class: "section",
			id: name[0],
		}).appendTo("#pagepiling");
		var coldiv1 = $("<div/>", {
			class: "col-xs-6",
		}).appendTo(sectiondiv);
		var coldiv2 = $("<div/>", {
			class: "col-xs-6",
		}).appendTo(sectiondiv);
		var button = $("<button/>", {
			class: "button",
			text: "Blah",
		}).appendTo(coldiv2);
		var textdiv = $("<div/>", {
			class: "textdiv"
		}).html("Bloo blah Bloo").hide().appendTo(button);
		var picsrc = "static/images/" + name[0] + ".jpg";
		var pic = $("<img/>", {
			src: picsrc
		}).appendTo(coldiv1);
		var caption = $("<p/>", {
			id: name[0] + "caption",
		}).html(name[1]).appendTo(coldiv1);
	}
	$(".button").click(function(){
		$(this).children(".textdiv").toggle();
	});
    $('#pagepiling').pagepiling({
    	 verticalCentered: true,
    });
    $(window).scroll(function(){
		$(".container").hide();
	});
});

