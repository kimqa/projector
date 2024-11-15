'use strict';
/*
Task # 1
Напишіть код який виводить в консоль значення від 1 до 100,
але замість чисел кратних 3 має виводитись `Лол`, замість значень кратних 5 - `Кек`,
а замість значень кратних і 3, і 5 - `ЛолКек`
 */
    for(let i = 1; i < 100; i++) {
    if( i % 3 === 0 && i % 5 === 0 ) {
        console.log(`${i} LolKek`);
    } else if(i % 3 === 0) {
        console.log(`${i} Lol`);
    } else if(i % 5 === 0) {
        console.log(`${i} Kek`);
    } else {
        console.log(i);
    }
}

/*
Напишіть код який бере значення зі змінної (`value`) і виводить у консоль всі парні числа, що менші за задане.
Наприклад, якщо у змінній число 10, програма має вивести наступне: 2, 4, 6, 8. Додаткові вимоги:
1. Реалізуйте рішення 2 способами: з використанням циклу `for` та `while`
2. Код має перевіряти, чи значення у змінній є числом. Якщо воно не є числом,  в консоль має вивестись повідомлення про
    помилку, наприклад `'Таке чуство шо Бог десь наказує нас за шось'`.

Task #2
With FOR loop
 */
function evenNumberForLoop(value) {
    if(typeof value !== 'number' && isNaN(value)) { //Type of NaN will be "number", we need to check it too
        console.log('Таке чуство шо Бог десь наказує нас за шось');
    } else {
        for (let i = 2; i < value; i= i+2) {
            console.log(i);
        }
    }
}

evenNumberForLoop("fake");
evenNumberForLoop(8);

/*
Task #2 While
 */
function evenNumberWhileLoop(value) {
    if(typeof value !== 'number' && isNaN(value)) {
        console.log('Таке чуство шо Бог десь наказує нас за шось');
    } else {
        let i = 2;
        while (i < value ) {
            console.log(i);
            i = i + 2;
        }
    }
}

evenNumberWhileLoop("test")
evenNumberWhileLoop(9)
evenNumberWhileLoop(10)