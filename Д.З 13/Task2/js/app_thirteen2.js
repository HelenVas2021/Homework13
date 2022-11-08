const oneButton = document.getElementById('buttonOne');
function inputLink() {
	let userLink;
	do {
		userLink = prompt('Please add the link');
	} while (userLink === null || userLink.indexOf('http') != 0);

	openLink(userLink);
}

function openLink(endedLink) {
	const twoButton = document.getElementById('buttonTwo');
	twoButton.firstChild.href = endedLink;
}
oneButton.addEventListener('click', inputLink);


