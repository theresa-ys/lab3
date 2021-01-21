'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("CLICK");
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
	});

$("a.thumbnail").click(projectClick);
console.log("Click2")

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}

function projectClick(e){
	console.log("Click3");
	e.preventDefault();
	$(this).css("background-color", "#7fff00");
	var containingProject = $(this).closest(".project");
    containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
		$("myelement").fadeToggle("active");
}
