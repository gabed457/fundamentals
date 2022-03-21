// const numArr = [1, 3, 200, 5, 0];
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
// numArr.sort((a,b) => b-a);
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
//     {name:'George',salary:30000},
//     {name:'John',salary:25000},
//     {name:'sally',salary:363846},
//     {name:'Sam',salary:1000000},
//     {name:'gabe',salary:165000},
//     {name:'jacob',salary:30000}
// ];
// employees.sort((a,b) => {
//     if(a.salary === b.salary) {
//         if(a.name.toLowerCase() > b.name.toLowerCase()){
//             return 1;
//         }
//         else if(a.name.toLowerCase() < b.name.toLowerCase()) {
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
// const strArr = ['banana', 'apple', 'Apple', 'doctor', 'zed', 'elephant'];
// strArr.sort((a, b) => {
//     if (a.toLowerCase() < b.toLowerCase()) {
//         return 1;
//     } else if (a.toLowerCase() > b.toLowerCase()) {
//         return -1;
//     } else {
//         //a === b return 0
//         return 0;
//     }
// });
// console.log(strArr);

// const numArr = [-1,0,1,-25,23];
// let nonNegativeArr = numArr.filter(el => el >= 0);
// console.log(nonNegativeArr);
// let topEarners = employees.filter((el,i,arr) => {
//     console.log(el,i,arr);
//     return el => el.salary >= 100000;
// });
// console.log(topEarners);
// const employees = [
//     {name:'george',salary:30000, assistants: ['John']},
//     {name:'George',salary:30000},
//     {name:'John',salary:25000},
//     {name:'sally',salary:363846},
//     {name:'Sam',salary:1000000, assistants: ['sally','George']},
//     {name:'gabe',salary:165000},
//     {name:'jacob',salary:30000}
// ];
// let employeesWithMultipleAssistants = employees.filter(el => {
//     console.log(el.assistants?.length > -1);
//     return el.assistants?.length > 1;
// });
// console.log(employeesWithMultipleAssistants);

// let numArr = [1, 3, 200, 5];
// numArr.indexOf(3);
// const employees = [
//     {name:'george',salary:30000, assistants: ['John']},
//     {name:'George',salary:30000},
//     {name:'John',salary:25000},
//     {name:'sally',salary:363846},
//     {name:'Sam',salary:1000000, assistants: ['sally','George']},
//     {name:'gabe',salary:165000},
//     {name:'jacob',salary:30000}
// ];
// let employeeWith2AssistantsIndex = employees.findIndex(el => el.assistants?.length === 2);
// console.log(employeeWith2AssistantsIndex);

const employees = [
    {name:'george',salary:30000, assistants: ['John']},
    {name:'George',salary:30000},
    {name:'John',salary:25000},
    {name:'sally',salary:363846},
    {name:'Sam',salary:1000000, assistants: ['sally','George']},
    {name:'gabe',salary:165000},
    {name:'jacob',salary:30000}
];
let totalSalaries = employees.reduce((accumulator, currentElement) => {
    if(typeof accumulator === 'object') {
        accumulator = accumulator.salary;
    }
    return accumulator + currentElement.salary;
});
// console.log(totalSalaries)
let totalSalariesBelow40 = employees.reduce((accumulator, currentElement) => {
    if(typeof accumulator === 'object') {
        accumulator = accumulator.salary;
    }
    return currentElement.salary < 40000 ? accumulator + currentElement.salary : accumulator;
});
console.log(totalSalariesBelow40);
