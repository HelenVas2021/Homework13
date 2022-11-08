
function showRandomPicture() {
	const mainBody = document.getElementById('main');
	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	let randomName = arr[Math.floor(Math.random() * arr.length)];
	const picture = document.createElement('img');
	picture.setAttribute('src', '../images/' + randomName + '.jpg');
	mainBody.appendChild(picture);
}
const buttonOne = document.getElementById('button');


function deletePicture() {
	const deleteAllPicture = document.getElementsByTagName('img');
	for (let i = deleteAllPicture.length - 1; i >= 0; i--) {
		deleteAllPicture[i].remove();

	}

}
buttonOne.addEventListener('click', showRandomPicture);
buttonOne.addEventListener('blur', deletePicture);