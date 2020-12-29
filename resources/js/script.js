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
	/*** Sticky Nav ***/
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

	/* Scroll effect! */
	$(".js--scroll-to-plans").click(() => {
		$("html, body").animate(
			{
				scrollTop: $(".js--section-plans").offset().top,
			},
			1000 // one second
		);
	});

	$(".js--scroll-to-start").click(() => {
		$("html, body").animate(
			{
				scrollTop: $(".js--section-features").offset().top,
			},
			1000 // one second
		);
	});

	/* Animation on Scroll */
	$(".js--wp-1").waypoint(
		() => {
			$(".js--wp-1").addClass("animate__animated animate__fadeIn");
		},
		{
			offset: "65%",
		}
	);

	$(".js--wp-2").waypoint(
		() => {
			$(".js--wp-2").addClass("animate__animated animate__fadeInUp");
		},
		{
			offset: "65%",
		}
	);

	$(".js--wp-3").waypoint(
		() => {
			$(".js--wp-3").addClass("animate__animated animate__fadeIn");
		},
		{
			offset: "65%",
		}
	);

	$(".js--wp-4").waypoint(
		() => {
			$(".js--wp-4").addClass("animate__animated animate__pulse");
		},
		{
			offset: "65%",
		}
	);

	/* Copy and Pasted */
	// Select all links with hashes
	$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function (event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, "") ==
					this.pathname.replace(/^\//, "") &&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length
					? target
					: $("[name=" + this.hash.slice(1) + "]");
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$("html, body").animate(
						{
							scrollTop: target.offset().top,
						},
						1000,
						function () {
							// Callback after animation
							// Must change focus!
							var $target = $(target);
							$target.focus();
							if ($target.is(":focus")) {
								// Checking if the target was focused
								return false;
							} else {
								$target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
								$target.focus(); // Set focus again
							}
						}
					);
				}
			}
		});
});

/* Navigation Toggle */
$(".js--nav-icon").click(() => {
	const nav = $(".js--main-nav");
	nav.slideToggle(200); /* def uses display: !value + css slide drawer */

	const icon = $(".js--nav-icon ion-icon");

	console.log(icon[0].name);

	// if (icon[0].name === "menu-outline") {
	// 	icon[0].name = "close-outline";
	// } else {
	// 	icon[0].name = "menu-outline";
	// }

	if (icon.attr("name") === "menu-outline") {
		icon.attr("name", "close-outline");
	} else {
		icon.attr("name", "menu-outline");
	}
});
