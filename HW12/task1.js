console.log('start'); // #1 иснхронная операция

const promise1 = new Promise((resolve, reject) => {
    console.log(1) //#2 иснхронная операция
    resolve(2)
})

promise1.then(res => { // #4 асинхронная операция, микрозадача выполняется после основного кода
    console.log(res)
})

console.log('end'); //#2 иснхронная операция