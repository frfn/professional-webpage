/* jQuery syntax */

/* test */
$(document).ready(() => {
	let counter = 0;
	$("h1").click(() => {
		counter++;
		console.log(counter);

		/*** this works! ***/

		// $("h1").html(
		// 	"GOODBYE JUNK FOOD. HELLO SUPER HEALTHY MEALS. " + counter
		// );
	});
});

/* test */
$(document).ready(() => {
	let counter = 0;
	$("h2").click(() => {
		counter++;
		console.log(counter);
	});
	// counter++; this will RUN first!
	// then once the click event happens
	// the counter value is LOCKED in
	// and the counter will update the
	// locked in value
});

/*** Way Points ***/
$(document).ready(() => {
	$(".js--section-features").waypoint(
		(direction) => {
			if (direction === "down") {
				/* sticky navi appears */
				$("nav").addClass("sticky");
			} else {
				/* hide navi */
				$("nav").removeClass("sticky");
			}
			console.log(direction);
		},
		{
			offset: "60px", // "25%"
		}
	);
});
