/*
4. Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:
 */
const resultsArray = [1, 2, [3, [4]]];
let productOfArray;

// тут ваш код...

function f(array) {
    num = 1;
    for( let i = 0 ; i < array.length ; i++ ){
        if( typeof array[i] === 'number' ){
            num = num * array[i];
        } else {
            return num * f(array[i]);
        }
    }
    return num
}
productOfArray = f(resultsArray)

console.log(productOfArray); // 24