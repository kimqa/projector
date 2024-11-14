'use strict';
/*
Дописать

const createHelloWorld = function() {

};

const f = createHelloWorld();
console.log(f()); // "Hello World"
/**
 * @return {Function}
 */

const createHelloWorld = function() {
    return () => {
        return "Hello World"
    }
};
console.log(typeof createHelloWorld())

const f = createHelloWorld();
console.log(f()); // "Hello World"