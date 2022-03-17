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
import fetch from 'node-fetch';
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
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});
const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 30000, 'foo');
});

promise4.then(res => console.log(res));
Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});
