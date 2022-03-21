const numArr = [1, 3, 200, 5, 0];
// numArr.sort((a, b) => {
//     if(a-b < 0){
//         return -1;
//     }
//     else if(a-b > 0){
//         return 1;
//     }
//     else if(a-b === 0) {
//         return 0;
//     }
// });
numArr.sort((a,b) => b-a);
// console.log(numArr);

// const strArr = ['banana','apple', 'Apple','doctor','zed','elephant'];
// strArr.sort((a,b) => {
//     a = a.toLowerCase();
//     b = b.toLowerCase();
//     if(a < b) {
//         // console.log(`${a} > ${b} return 1`);
//         return 1;
//     }
//     else if(a > b) {
//         // console.log(`${a} < ${b} return -1`);
//         return -1;
//     }
//     else {
//         // console.log(`${a} === ${b} return 0`);
//         return 0;
//     }
// });
// console.log(strArr);

// const mixedArr = ['banana', 500, 'apple', 2, 'Apple','doctor', 25, 'zed','elephant', 0];
// mixedArr.sort((a,b) => {
//     console.log(typeof a);
//     if(typeof a === 'string' && typeof b === 'number') {
//         return -1;
//     }
//     else if (typeof a === 'number' && typeof b === 'string') {
//         return 1;
//     }
//     else if(typeof a === 'string' && typeof b === 'string') {
//         if(a < b) {
//             return 1;
//         }
//         else if(a > b) {
//             return -1;
//         }
//         else {
//             return 0;
//         }
//     }
//     else if(typeof a === 'number' && typeof b === 'number') {
//         return a-b;
//     }
//
// });
// console.log(mixedArr)

// const customCompareFunc = require('./customFunctions');
// const mixedArr = ['banana', 500, 'apple', 2, 'Apple','doctor', 25, 'zed','elephant', 0];
// mixedArr.sort(customCompareFunc.strDescNumAsc);
//
// const employees = [
//     {name:'george',salary:30000},
//     {name:'John',salary:25000},
//     {name:'sally',salary:363846},
//     {name:'Sam',salary:1000000},
//     {name:'gabe',salary:165000},
//     {name:'jacob',salary:30000}
// ];
// employees.sort((a,b) => {
//     a.name = a.name.toLowerCase();
//     b.name = b.name.toLowerCase();
//     if(a.salary === b.salary) {
//         if(a > b){
//             return 1;
//         }
//         else if(a < b) {
//             return -1;
//         }
//         else {
//             return 0;
//         }
//     }
//     else {
//         return b.salary-a.salary;
//     }
// });
// console.log(employees);
