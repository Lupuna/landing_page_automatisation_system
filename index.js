function ReadMore() {
	var bth_1 = document.getElementById('bth_1');
	var hidden = document.getElementById('hidden');
	var bth_2 = document.getElementById('bth_2');

	if (bth_1.style.display === 'none') {
		bth_1.style.display = 'inline';
		hidden.style.display = 'none';
		bth_2.style.display = 'none';
	} else {
		bth_1.style.display = 'none';
		hidden.style.display = 'block';
		bth_2.style.display = 'inline';
	}
}

function ReadMore_1() {
	var bth_1 = document.getElementById('bth_1_1');
	var hidden = document.getElementById('hidden_1');
	var bth_2 = document.getElementById('bth_2_1');

	if (bth_1.style.display === 'none') {
		bth_1.style.display = 'inline';
		hidden.style.display = 'none';
		bth_2.style.display = 'none';
	} else {
		bth_1.style.display = 'none';
		hidden.style.display = 'block';
		bth_2.style.display = 'inline';
	}
}


function ReadMore_2() {
	var bth_1 = document.getElementById('bth_1_2');
	var hidden = document.getElementById('hidden_2');
	var bth_2 = document.getElementById('bth_2_2');

	if (bth_1.style.display === 'none') {
		bth_1.style.display = 'block';
		hidden.style.display = 'none';
		bth_2.style.display = 'none';
	} else {
		bth_1.style.display = 'none';
		hidden.style.display = 'block';
		bth_2.style.display = 'inline';
	}
}

function fast_scroll() {
	const anchors = document.querySelectorAll("a[href*='#']")
	console.log(anchors)
	for (let anchor of anchors){
		anchor.addEventListener("click", function(event) {
			event.preventDefault();
			const blockID = anchor.getAttribute('href')
			document.querySelector('' + blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		})
	}
}

function over() {
	let color = document.getElementById('color')
	color.style.color = "#ffffff"
}

function out() {
	let color = document.getElementById('color')
	color.style.color = "#000"
}

fast_scroll()
