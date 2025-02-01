'use strict';
/*
1. Напишіть функцію detonatorTimer(delay) використовуючи setInterval  

Вона виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'
 */
detonatorTimer(3);
// 3
// 2
// 1
// BOOM!

function detonatorTimer(delay) {
    let timer = setInterval(function () {
        if(delay > 0) {
            console.log(delay)
            delay --;
        } else if (delay === 0 ) {
            console.log("BOOM!");
            clearInterval(timer);

        }
    }, 1000);
    // тут ваш код
}