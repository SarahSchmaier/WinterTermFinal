

var names = [["ChloeSarah", "My friend, on the left, and I in front of my dorm: Stevens", 0], ["AbbotBall", "Crowd photo at P.A.'s first Abbot Ball!", 1], ["CommonsSunset", "Commons at Sunset", 2], ["IMG_2545", "Student enjoying the empty soda tub during finals week", 1]];

var posttext = [["About Me", "Hi everyone, I am Sarah Schmaier, a four year senior from San Francisco California. I made this website to show a student's perspective of Phillips Academy and its resources."], ["Find Out More!", "Some events at P.A. include the first formal dance of fall term, usually called Sadie Hawkins but renamed Abbot Ball this year."], ["fred", "ginger"]];

var anchornames = [];

$(document).ready(function () {
    for (var i = 0; i<3; i++) {
        var sectionId = "page" + i.toString();
        anchornames.push(sectionId);
		var sectiondiv = $("<div/>", {
			class: "section",
			id: sectionId,
		}).appendTo("#pagepiling");
	//Appended to external JQuery file library called "pagepiling" for parallax scrolling
        //var coldiv1 = $("<div/>", {
			//class: "col-xs-6",
           // id: "coldiv" + i.toString()
		//}).appendTo(sectiondiv);
		//var coldiv2 = $("<div/>", {
		//	class: "col-xs-6 coldiv2s",
	//	}).appendTo(sectiondiv);
		var post = posttext[i];
		var button = $("<button/>", {
			class: "button",
		}).appendTo(sectiondiv);
        var buttonspan = $("<span/>", {
            class: "buttonspan",
            text: post[0]
        }).appendTo(button);
		var textdiv = $("<div/>", {
			class: "textdiv"
		}).html(post[1]).hide().appendTo(button);
    }
	for (var i = 0; i<names.length; i++) {
        var name = names[i];
        var pagenumber = name[2];
        var coldiv1 = $("#coldiv" + pagenumber.toString());
		var picsrc = "static/images/" + name[0] + ".jpg";
		var pic = $("<img/>", {
			src: picsrc,
            class: "postimages imageload",
		}).appendTo(".section");
		var caption = $("<p/>", {
			id: name[0] + "caption",
			class: "caption",
		}).html(name[1]).appendTo(coldiv1);
	}
	$(".button").click(function(){
		$(this).children(".textdiv").toggle();
        console.log($(this).css("background-color"));
        switch($(this).css("background-color")) {
            case "gainsboro":
                $(this).css("background-color", "white");
                break;
            default:
                $(this).css("background-color", "gainsboro");
        }
	});
    $('body').mousewheel(function(event) {
        $(".textdiv").hide();
        $(".button").css("background-color", "white");
    });
    $('#pagepiling').pagepiling({
        verticalCentered: true,
        anchors: anchornames,
        menu: '#myMenu',
        sectionsColor: ['lightblue', '#4BBFC3', 'aquamarine']
    });
    $(".postimages").on('load', function(){
       if ($(this).height() > $(this).width()) {
            $(this).addClass("tallPic");
       }
        else if ($(this).height() == $(this).width()) {
            $(this).addClass("squarePic");
        }
        else {
            $(this).addClass("widePic");
        }
        $(this).removeClass("imageload");
    });
});

