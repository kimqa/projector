/*
Напишіть функцію-декоратор яка вповільнює виконання довільної функції
на вказану кількість секунд.
 */
function someFunction (argument = "default") {
    console.log( `My argument = ${argument}` );
}// тут напишіть довільну функцію яка робить якусь роботу зі
// своїми аргументами та виводить результат в консоль

function slower(func, seconds) {
    console.log( "Chill out, you will get you result in 5 seconds");
    return function (argument) {
        setTimeout(() => {
                func(argument)
        }, seconds * 1000);

    }
}

let slowedSomeFunction = slower(someFunction, 1);

// обгортаєте свою довільну функцію 'someFunction' в декоратор і задає значення
// вповільнення

slowedSomeFunction(9,2) // викликаєте декоратор

// виведе в консоль "Chill out, you will get you result in 5 seconds
//...через 5 секунд виведе результат роботи 'someFunction'