/*
2. Задача про перетворення об'єкту

Допустимо у вас є об'єкт, у якому кожен ключ - це назва товару (одним словом), а значення - його ціна.

Напишіть функцію яка буде всі ключі переводити у нижній регістр, а всі ціни буде заокруглювати до двох знаків після коми.

Приклад:
 */
// приклад об'єкту
const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
};


function optimizer(data) {
    // тут ваш код

    const clone = {};
    for (let key in data) {
        clone[key.toLowerCase()] = Number(data[key]).toFixed(2);
    }
    return clone;
}

let updatedPriceData = optimizer(priceData);
console.log(updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'}