let number = document.querySelectorAll('.number');
let view = document.querySelector('.output');
let operation = document.querySelectorAll('.operation');
const power = document.querySelector('[data-power]');
const sqrt = document.querySelector('[data-sqrt]');
const equals = document.getElementById('equals');
const clearBtn = document.querySelector('.clear');
const del = document.querySelector('.delete');

(function () {
	for (let i = 0; i < number.length; i++) {
		calc(number[i]);
	}
	for (let i = 0; i < operation.length; i++) {
		calc(operation[i]);
	}
}
	());

function calc(domElement) {
	domElement.addEventListener('click', (e) => {
		let valueBtn = e.target.textContent;
		let res = view.textContent + valueBtn;
		view.textContent = res;
		switch (valueBtn) {
			case '+':
				res += res;
				break;
			case '-':
				res -= res;
				break;
			case '*':
				res *= res;
				break;
			case '/':
				res /= res;
				break;
		}
		equals.addEventListener('click', () => {
			let total = +eval(res).toFixed(2);
			view.textContent = total;
		})
	});
}

function delLastElement() {
	del.addEventListener('click', () => {
		let delLastElemet = view.textContent;
		view.textContent = delLastElemet.slice(0, - 1);
	})
}
delLastElement();

function elevate() {
	power.addEventListener('click', () => {
		let pow = view.textContent;
		if (view.textContent !== '') {
			view.textContent = Math.pow(+pow, 2);
		}
	});
}
elevate();

function squareRoot() {
	sqrt.addEventListener('click', () => {
		let sqr = view.textContent;
		if (view.textContent !== '') {
			view.textContent = Math.sqrt(+sqr);
		}
	});
}
squareRoot();

function clear() {
	clearBtn.addEventListener('click', () => {
		if (view.textContent !== '') {
			view.textContent = '';
		}
	})
}
clear();