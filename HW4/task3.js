/*
3. Задача на розворот числа:
 */
const currentMaxValue = 4589;
let reverseMaxValue;

// тут ваш код...
/*
reverseMaxValue='';
let reverse = String(currentMaxValue);

for (let i = reverse.length-1; i >= 0; i--) {
    reverseMaxValue +=reverse[i];
}
*/
reverseMaxValue = Number(currentMaxValue.toString().split('').reverse().join(''));

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'