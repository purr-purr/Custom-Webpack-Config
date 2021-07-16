// Import HTML template
$(() => {
	$('#included__header').load('/template/_header.html');
	$('#included__footer').load('/template/_footer.html');
});
// ---------------------------------------------------------------------------

// Preloader
window.onload = function () {
	document.body.classList.add('loaded_hiding');
	window.setTimeout(() => {
		document.body.classList.add('loaded');
		document.body.classList.remove('loaded_hiding');
	}, 500);
};
