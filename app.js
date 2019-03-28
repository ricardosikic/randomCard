//accedo al elemento 
let card = document.getElementById('carta');
let number = document.getElementById('number');
let iconUp = document.getElementById('icon-up');
let iconDown = document.getElementById('icon-down');

card.addEventListener('click', rand);

function rand() {
		
		const randCartas = ['J', 'Q', 'K', 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10];
		const simbols = ['\u25ca', '\u2660', '\u2663', '\u2665', '\u2666'];
		const colors = ['red', 'black'];
		let resColors = colors[Math.floor(Math.random() * colors.length)];
		
		iconUp.style.color = resColors;
		iconDown.style.color = resColors;
	
        let resSimb = simbols[Math.floor(Math.random() * simbols.length)];
		let resCartas = randCartas[Math.floor(Math.random() * randCartas.length)];
		console.log(resSimb + resCartas);
         
		number.innerHTML = resCartas;
		iconUp.innerHTML = resSimb;
		iconDown.innerHTML = resSimb;
		
}

rand();

