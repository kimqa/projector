'use strict';
/*
1. Напишіть функцію addThemAll
Вона буде знаходити суму усіх своїх аргументів незалежно від їх кількості (але без використання вбудованого об'єкту Math).
Використайте оператор розширення
 */
console.log(addThemAll(2,4)); // 6
console.log(addThemAll(1,2,3,4)); // 10
console.log(addThemAll(5,5,10)); // 20

function addThemAll(...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
}