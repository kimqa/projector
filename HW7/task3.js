/*
3. Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи що ці
властивості виводять.
 */
let me = {
    name: 'Pavlo',
    secondName: 'Kim',
    residency: 'Kyiv',
    gender: 'male',
    bornYear: 1988,
    finishSchoolAt: 2005,
    hobby: 'anime',
    defaultMood: 'focused',
    currentMood: 'sleepy',
    introduce() {
        console.log(`Hey, my name is ${this.secondName} ${this.name} and I live in ${this.residency}`);
    },
    bornAt() {
        console.log(`I was born at ${this.bornYear}`);
    },
    finishSchool() {
        console.log(`Finished School at ${this.finishSchoolAt}`);
    },
    myHobby() {
        console.log(`My Hobby - ${this.hobby}`);
    },
    describeMyMood(){
        console.log(`Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}`);
    }
}

me.introduce();
me.bornAt();
me.finishSchool();
me.myHobby();
me.describeMyMood();