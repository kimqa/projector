/*
1. Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку:
Рішення має працювати незалежно від конкретних значень в масиві імен
 */
const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials;

// тут ваш код ...
for(let i = 0; i < userNames.length; i++) {
    const tempArr = userNames[i].split(" ");
    tempArr.forEach( (name) => {
        console.log(name)
        name.substring(1);

        }

    )

    console.log(tempArr)

}

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