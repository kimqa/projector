'use strict';
const promise = new Promise(res => res(2));
promise.then(v => {
    console.log(v + " #1"); // v - рекурсивно множится на 2
    return v * 2;
})
    .then(v => {
        console.log(v+ " #2");
        return v * 2;
    })
    .finally(v => { // finally не принимает аргументы
        console.log(v+ " #3");
        return v * 2;
    })
    .then(v => {
        console.log(v+ " #4");
    });
