"use strict";
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const func = () => {
    const inner = () => {

    }
};

// Замыкание
const name = "out";
function getName() {
    const name = "inner";
    return function getName2() {
        console.log(name)
    }
}

const  person = getName();
person();