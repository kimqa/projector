'use strict';
/*
2. Напишіть функцію detonatorTimer(delay) використовуючи вкладений setTimeout  

Вона виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'
 */
detonatorTimer(3);
// 3
// 2
// 1
// BOOM!

function detonatorTimer(delay) {
    // тут ваш код

    for (let i = 0; i <= delay; i++) {
        setTimeout(() => {
            if (i < delay) {
                console.log(delay - i);
            }
            if (i === delay) {
                console.log("BOOM!");
            }
        }, 1000 * i); // эта штука максимально не очевидная сейчас
    }
}