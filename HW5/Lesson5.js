// const user1 = {
//     name: 'John',
//     email: 'john@example.com',
// }
// user1.email = 'john123@example.com'
// console.log(user1.email);
// user1=123; От такого бережет const

//
// let user2 = {
//     name: 'John',
//     email: 'john@example.com',
// }
// user2.email = 'john123@example.com'
// console.log(user2.email);
// user2=123;
/*
если обьявляется переменная которая не меняется - использовать const
если меняется - let
 */
/**
 * Count Chars
 * Write a function called countChars that takes in a string and a character
 * and outputs the number of times that character appears in the string.
 * @param str
 * @return number
 */
// function countChars(str) {
//     return str.length;
// }
//
// console.log(countChars('test')); // 4

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */

// [1,2,3,4]
// [1,2]
// [3,4]
const chunk = function(arr, size) {
    let arr1= [];
    for (let i = 0; i < arr.length; i+=size) {
        arr1.push(arr.slice(i, i+size));
    }
    return arr1;
};

console.log(chunk([1,2,3,4,5], 1));
// Input: arr = [1,2,3,4,5], size = 1
// Output: [[1],[2],[3],[4],[5]]
// Explanation: The arr has been split into subarrays each with 1 element.

console.log(chunk([1,9,6,3,2], 3));
// Input: arr = [1,9,6,3,2], size = 3
// Output: [[1,9,6],[3,2]]
// Explanation: The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.

console.log(chunk([8,5,3,2,6], 6));
// Input: arr = [8,5,3,2,6], size = 6
// Output: [[8,5,3,2,6]]
// Explanation: Size is greater than arr.length thus all elements are in the first subarray.

console.log(chunk([], 6));
// Input: arr = [], size = 1
// Output: []
// Explanation: There are no elements to be chunked so an empty array is returned.