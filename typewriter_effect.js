function Printed() {
	const dynamicText = document.querySelector('.typewriter_effect__print');
	const texts = [
			'Всё гениальное - просто!',
			'Всё работает так как надо!'
		];

	let wordIndex = 0;
	let charIndex = 1;
	let isDeleting = false;

	const typeEffect = () => {
		const curentWorld = texts[wordIndex];
		const currentChar = curentWorld.substring(0, charIndex);
		dynamicText.textContent = currentChar;

		if(!isDeleting && charIndex < curentWorld.length) {
			charIndex++;
			setTimeout(typeEffect, 80);
		} else if(isDeleting && charIndex > 0){
			charIndex--;
			setTimeout(typeEffect, 75);
		} else {
			isDeleting = !isDeleting;
			wordIndex = !isDeleting ? (wordIndex + 1) % texts.length : wordIndex;
			setTimeout(typeEffect, 1200);
		}

	}

	typeEffect()
}

Printed()