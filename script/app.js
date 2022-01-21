'use strict';

function navDropAndUp() {
    let header = document.querySelector('header');
    let up = document.querySelector('.up');

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 100) {
            header.classList.add('fixed');
            up.style.display = 'block';
        } else {
            header.classList.remove('fixed');
            up.style.display = 'none';
        }
    });
}

navDropAndUp();

function isFreindly(num1, num2) {
	let sum1 = getSum(getOwnDivisors(num1));
	let sum2 = getSum(getOwnDivisors(num2));
	
	if (sum1 == num2 && sum2 == num1) {
		return true;
	} else {
		return false;
	}
}

function getOwnDivisors(num) {
    let res = [];
    
    for (let i = 0; i < num; i++) {
        if (num % i == 0) {
            res.push(i);
        }
    }

    return res;
}

function getSum(num) {
	let res = 0;
    
    for (let elem of num) {
        res += elem;
    }

    return res;
}

console.log(isFreindly(220, 284));