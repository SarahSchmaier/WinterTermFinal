

var names = [["AlexaPagano", "Alexa Pagano '16"], ["CharlotteStandefer", "Charlotte Standefer '16"],
["AlexBidwell", "Alex Bidwell '17"], ["SarahAlice", "Alice Ahn '16 and Sarah Schmaier '16"]];



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
		sectiondiv.appendTo("#pagepiling");
	}
    $('#pagepiling').pagepiling({
    	 verticalCentered: true,
    });
});
