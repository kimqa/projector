'use strict'
/*
2. Задача на фільтрування масиву

Реалізуйте фільтрування імен які починаються з голосної двома способами:

через умовну конструкцію
через вбудований метод масивів


Рішення має працювати незалежно від конкретних значень в масиві імен
 */
// тут ваш код...

const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
let filteredNames = [];
const vowels = ["А", "О", "У", "И", "І", "Е", "Ю", "Я"];
for (let i = 0; i < userNames.length; i++) {
    if (vowels.includes(userNames[i][0])) {
        filteredNames.push(userNames[i]);
    }
}
console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']

//через вбудований метод масивів
let filteredNames2 = [];
userNames.forEach(userName => {
    if (vowels.includes(userName[0])) {
        filteredNames2.push(userName);
    }
})
console.log(filteredNames2); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']
