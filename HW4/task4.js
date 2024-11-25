/*
4. Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:
 */

// тут ваш код...
const resultsArray = [1, 2, [3, [4]]];
let productOfArray;

// тут ваш код...
productOfArray = 1;
resultsArray.flat(Infinity).forEach((product) => {
    productOfArray = productOfArray * product;
})

console.log(productOfArray); // 24
/*
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
 */