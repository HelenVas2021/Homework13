
const inputText = document.querySelector('input');


function showText() {
	const mainBlock = document.getElementById('main');
	const addText = document.createElement('div');
	addText.setAttribute('id', 'follow')
	addText.classList.add('showText');
	addText.textContent = 'This document has focus.';
	mainBlock.appendChild(addText);
}
function hideText() {
	const newName = document.getElementById('follow');
	newName.remove();
}

inputText.addEventListener('focus', showText);
inputText.addEventListener('blur', hideText);
