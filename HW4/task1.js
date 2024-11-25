'use strict';
/*
1. Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку:
Рішення має працювати незалежно від конкретних значень в масиві імен
 */
const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials;

// тут ваш код ...
initials = userNames.map(

    function (name) {

        let tempArray = name.split(" ");
        name = tempArray.map((value) => {
            return value[0];
            }
        )
        return name.join(".").toString();
    }
).sort()

console.log(initials); // ["Г.П.А.", "П.О.І.", "Р.А.О."]