/*
	Escape Velocity by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

import InstagramEmbed from 'react-instagram-embed';

(function($) {
	

	<InstagramEmbed
		url='https://www.instagram.com/p/CTIKqAjJ_o_/'
		clientAccessToken='IGQVJWV282VjVGM2NzNnpEWlFtVy1pbzNfOERTRFlkeURxMWxUQlJnUFVOU2x0ZAVNsQ0FtcDBJdDlmWTRuaW8yUFcxUElHNzBRd2tPV0lXb0h3d21nRVFtZAEFBX0czYU9fUHJxUzFhMjE1MTFIZADlRcAZDZD'
		maxWidth={320}
		hideCaption={false}
		containerTagName='div'
		protocol=''
		injectScript
		onLoading={() => {}}
		onSuccess={() => {}}
		onAfterRender={() => {}}
		onFailure={() => {}}
	/>

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			alignment: 'center',
			detach: false
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo h1').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);