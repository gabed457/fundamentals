let keywords = [
    'await',
    'break',
    'case',
    'catch',
    'const',
    'continue',
    'debugger',
    'default',
    'delete',
    'do',
    'else',
    'enum',
    'export',
    'extends',
    'false',
    'finally',
    'for',
    'function',
    'if',
    'implements',
    'import',
    'in',
    'instanceof',
    'interface',
    'let',
    'new',
    'null',
    'package',
    'private',
    'protected',
    'public',
    'return',
    'super',
    'switch',
    'static',
    'this',
    'throw',
    'try',
    'true',
    'typeof',
    'var',
    'void',
    'while',
    'with',
    'yield'
];
// import fetch from 'node-fetch';
// async function fetchProducts() {
//     try {
//         // after this line, our function will wait for the `fetch()` call to be settled
//         // the `fetch()` call will either return a Response or throw an error
//         const response = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
//             .then(res => res.text());
//         console.log('hello');
//         if (!response.ok) {
//             throw new Error(`HTTP error: ${response.status}`);
//         }
//         // after this line, our function will wait for the `response.json()` call to be settled
//         // the `response.json()` call will either return the JSON object or throw an error
//         const json = await response.json();
//         console.log(json[0].name);
//     } catch (error) {
//         console.error(`Could not get products: ${error}`);
//     }
//     console.log('when does this run');
// }

// fetchProducts();
// async function asyncExample() {
//     return 'You now have access to Promise methods';
// }
// asyncExample()
//     .then(res => {
//         console.log(res);
//         return 'I have changed the result';
//     })
//     .then(res => {
//         console.log(res);
//         throw new Error('This catch method will run now')
//     })
//     .catch(err => console.log(err))
//     .finally(() => console.log('finally'));

// function asyncExample() {
//     return new Promise((resolve) => {
//         resolve('You now have access to Promise methods');
//     });
// }
//
// asyncExample()
//     .then(res => {
//         console.log(res);
//         return 'I have changed the result';
//     })
//     .then(res => {
//         console.log(res);
//         throw new Error('This catch method will run now')
//     })
//     .catch(err => console.log(err))
//     .finally(() => console.log('finally'));

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }
//
// async function awaitExample() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log('this line is blocked from running until the promise above has resolved');
//     console.log(result);
//     // expected output: "resolved"
// }
//
// awaitExample();
// const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
//     resolutionFunc(777);
// });
// // At this point, "promiseA" is already settled.
// promiseA.then( (val) => console.log("asynchronous logging has val:",val) );
// console.log("immediate logging");
// var sayHello = new Promise(function (resolve, reject) {
//     // In 5 seconds, resolve the Promise.
//     // Pass along "Hi, universe!" to any callback methods
//     setTimeout(function () {
//         resolve('Hi, universe!');
//     }, 5000);
// });
// sayHello.then(res => {
//     console.log(res);
// })
// var sayHello2 = function (resolve, reject) {
//     // In 5 seconds, resolve the Promise.
//     // Pass along "Hi, universe!" to any callback methods
//     setTimeout(function () {
//         resolve('Hi, universe 2!');
//     }, 5000);
// };
// sayHello2(function(response){
//     console.log(response);
// });
// function getYearlyTakeHome(salary, callback) {
//     return salary * .75;
// }
//
// function getMonthlyTakeHome(yearlyTakeHome, callback) {
//     // setTimeout(() => {
//     //     return yearlyTakeHome / 12;
//     // },200)
//     return yearlyTakeHome / 12;
//
//
// }
//
// function getWeeklyTakeHome(monthlyTakeHome, callback) {
//     return monthlyTakeHome / 4;
// }
//
// let s = getYearlyTakeHome(250000);
// s = getMonthlyTakeHome(s);
// s = getWeeklyTakeHome(s);
// console.log(s);

// function calcPay() {
//     this.s = 250000;
//
//     this.getYearlyTakeHome = function() {
//         setTimeout(() => { //Don't use function, use arrow function so 'this' refers to 'func' and not window
//             console.log('getYearlyTakeHome');
//             this.s = this.s * .75;
//         }, 500);
//     }
//     this.getMonthlyTakeHome = function () {
//         console.log('getMonthlyTakeHome');
//         this.s = this.s / 12;
//     }
//     this.getWeeklyTakeHome = function () {
//         console.log('getWeeklyTakeHome');
//         this.s = this.s / 4;
//     }
// }
//
// var pay = new calcPay();
// pay.getYearlyTakeHome();
// pay.getMonthlyTakeHome();
// pay.getWeeklyTakeHome();
// console.log(pay.s);


// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'foo');
// });
// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 30000, 'foo');
// });
//
// promise4.then(res => console.log(res));
// Promise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values);
// });
// let stack = [];
// let queue = [];
// console.log('main init');
// stack.push('main');
//
// setTimeout(function () {
//     console.log('timeout 1');
// },0);
// queue.push('timeout 1');
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 0, 'promise 1');
// });
// p1.then(res => console.log(res));
// queue.push('promise 1');
// function add(a, b) {
//     stack.push('add');
//     console.log('add init');
//     return a + b;
// }
//
// function average(a, b) {
//     stack.push('average');
//     console.log('average init');
//     return add(a, b) / 2;
// }
//
// let x = average(10, 20);
//
// console.table(stack);
// console.table(queue);
// let z = 23;
// z.toString();
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'foo');
// });
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'foo');
// });
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'foo');
// });
// console.time('promises');
//
//
// Promise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values);
//     console.timeEnd('promises');
// });
// async function waitSecond() {
//     return new Promise((res, rej) => {
//         setTimeout(res, 1000);
//     });
// }
//
// function runSeries() {
//     console.time('series');
//     waitSecond().then(() => {
//         waitSecond().then(() => {
//             waitSecond().then(() => {
//                 console.timeEnd('series');
//             });
//         });
//     });
// }
//
// function runParallel() {
//     console.time('parallel');
//     Promise.all([
//         waitSecond(),
//         waitSecond(),
//         waitSecond(),
//     ]).then(() => {
//         console.timeEnd('parallel');
//     });
// }
// runSeries();
// runParallel();

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'promise1');
// });
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(reject, 50, 'promise2 error');
// })
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'promise3');
// })
// const promises = [promise1, promise2, promise3];
//
// Promise.race(promises)
//     .then((results) => console.log(results))
//     .catch(err => console.log(err));

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(reject, 500, 'error via reject');
// });
// const promise2 = new Promise((resolve, reject) => {
//     throw new Error('something happened');
// });
// promise1
//     .then(res => console.log(res))
//     .catch(err => console.log(err));
// promise2
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

// function resolved(result) {
//     console.log('Resolved');
// }
//
// function rejected(result) {
//     console.error(result);
// }
//
// Promise.reject(new Error('fail')).then(resolved, rejected);
//// expected output: Error: fail

// const promise1 = new Promise((resolve, reject) => {
//     resolve('promise 1 has resolved')
// });
// function resolved(result) {
//     console.log('Resolved');
// }
//
// function rejected(result) {
//     console.error(result);
// }
//
// Promise.resolve(promise1).then(resolved, rejected);
// expected output: Resolved

const promise1 = new Promise((resolve, reject) => {
    resolve('promise 1 has resolved')
});
const promise2 = new Promise((resolve, reject) => {
    resolve('promise 2 has resolved')
});
const promise3 = new Promise((resolve, reject) => {
    resolve('promise 3 has resolved')
});
Promise.all([promise1, promise2, promise3])
    .then(res => console.log(res))
    .catch(err => console.log(err));
