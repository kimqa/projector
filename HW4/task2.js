/*
2. Задача на фільтрування масиву

Реалізуйте фільтрування імен які починаються з голосної двома способами:

через умовну конструкцію
через вбудований метод масивів


Рішення має працювати незалежно від конкретних значень в масиві імен
 */
// тут ваш код...

const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
let filteredNames;
filteredNames = [];
for (let i = 0; i < userNames.length; i++) {
    name = userNames[i];
    if (name[0] ==="А"||name[0] ==="О"||name[0] ==="У"||name[0] ==="И"||name[0] ==="І"||name[0] ==="Е"||name[0] ==="Ю"||name[0] ==="Я") {
        filteredNames.push(userNames[i]);
    }
}
console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']

//через вбудований метод масивів
filteredNames2 = [];
userNames.forEach(userName => {
    if (userName[0] ==="А"||userName[0] ==="О"||userName[0] ==="У"||userName[0] ==="И"||userName[0] ==="І"||userName[0] ==="Е"||userName[0] ==="Ю"||userName[0] ==="Я") {
        filteredNames2.push(userName);
    }
})
console.log(filteredNames2); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']
