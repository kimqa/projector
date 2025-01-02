'use strict';
/*
4. А тепер зробіть всі свої методи з попередньої задачі прив'язаними до контексту
свого об'єкту
Аби вони були захищені від перезапису об'єкту і їх можна було викликати в таймері:
 */

let me = {
    name: 'Mykola',
    residency: 'Lviv',
    gender: 'male',
    age: 31,
    hobby: 'crafting',
    defaultMood: 'focused',
    currentMood: 'sleepy',
    introduce() {
        console.log(`My name is ${this.name} and I live in ${this.residency}`);
    },
    prognose() {
        console.log(`I hope that next year I'm gonna be ${this.age+1}`);
    },
    describeMyMood(){
        console.log(`Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}`);
    }
}

me.introduce();
me.prognose();
me.describeMyMood();

let securedSelfIntroduce = me.introduce.bind(me)// якийсь код
let securedSelfPrognose = me.prognose.bind(me)// якийсь код
let securedSelfDescribeMyMood = me.describeMyMood.bind(me)// якийсь код

setTimeout(securedSelfIntroduce, 1000); // виведе коректний результат
setTimeout(securedSelfPrognose, 2000); // виведе коректний результат
setTimeout(securedSelfDescribeMyMood, 3000); // виведе коректний результат