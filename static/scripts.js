

var names = [["ChloeSarah", "Me and Chloe Lee '17 in front of my dorm: Stevens"], ["AddisonEvent", "Addison Ambassadors Event '15: Black and White Night"], ["CommonsSunset", "Commons at Sunset"]];



$(document).ready(function() {
	for (var i = 0; i<names.length; i++) {
		var name = names[i];
		console.log(name);
		var sectiondiv = $("<div/>", {
			class: "section",
			id: name[0],
		});
		var picsrc = "static/images/" + name[0] + ".jpg";
		var pic = $("<img/>", {
			src: picsrc
		}).appendTo(sectiondiv);
		var caption = $("<p/>", {
			innerHTML: names[1],
			id: name[0] + "caption",
		}).appendTo(sectiondiv);
		sectiondiv.appendTo("#pagepiling");
	}
    $('#pagepiling').pagepiling({
    	 verticalCentered: true,
    });
});
