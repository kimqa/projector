
/*
2. Задача на фільтрування масиву

Реалізуйте фільтрування імен які починаються з голосної двома способами:

через умовну конструкцію
через вбудований метод масивів

Рішення має працювати незалежно від конкретних значень в масиві імен
 */
const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
let filteredNames;

// тут ваш код...
filteredNames = quserNames.map((name, index) => {
    if (name[0] ==="А"||name[0] ==="О"||name[0] ==="У"||name[0] ==="И"||name[0] ==="І"||name[0] ==="Е"||name[0] ==="Ю") {
        filteredNames.push(name);
    } else {

    }

    }
)
console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']



console.log(11111111111)



// userNames.forEach(userNames => {
// console.log(userNames);
// })
// console.log(userNames);
console.log(typeof initials);
console.log(initials); // ["Г.П.А.", "П.О.І.", "Р.А.О."]

/*
2. Задача на фільтрування масиву

Реалізуйте фільтрування імен які починаються з голосної двома способами:

через умовну конструкцію
через вбудований метод масивів

Рішення має працювати незалежно від конкретних значень в масиві імен
 */
const userNames_ = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
let filteredNames;

// тут ваш код...

console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']

/*
3. Задача на розворот числа:
 */
const currentMaxValue = 4589;
let reverseMaxValue;

// тут ваш код...

// console.log(reverseMaxValue); // 9854
// console.log(typeof reverseMaxValue); // 'number'

/*
4. Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:
 */
const resultsArray = [1, 2, [3, [4]]];
let productOfArray;

// тут ваш код...

console.log(productOfArray); // 24