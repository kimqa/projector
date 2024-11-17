'use strict'
/*
1. Задача про рекурсію
Напишіть функцію яка рекурсивно буде знаходити суму всіх непарних додатніх чисел до якогось числа.
 */
function recursiveOddSumTo(number) {
// тут ваш код
    if (number <= 0 ) {
        return 0;
    } else if (number % 2 === 0) {
        return recursiveOddSumTo(number - 1);
    } else {
        return number + recursiveOddSumTo(number -1);
    }

};

console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(10)) // 25
