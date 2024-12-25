/*
4. Напишіть функцію яка відфільтрує масив унікальних значень

Рішення має працювати незалежно від конкретних значень в масиві імен
 */
const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];

function filterUnique(array) {
// тут ваш код
    const unique = [];
    array.forEach((item) => {
        if (!unique.includes(item)) {
            unique.push(item);
        }
    })
    return unique;
}

console.log(filterUnique(userNames)); // ['Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];

// хотел через .filter но не победил ((((