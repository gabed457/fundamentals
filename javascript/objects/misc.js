let items = [1, 3, 5, 0];
// for (let i = 0; i < items.length; i++) {
//
//     console.log(items[i]);
// }
// for(let i in items) {
//
//     console.log(i);
// }
const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}
for (const key in obj) {
    console.log( key )
}
function freezeEntryInObj(obj, key){
    let objDescriptor = Object.getOwnPropertyDescriptor(obj, key);
    objDescriptor.writable = false;
    Object.defineProperty(obj, key, objDescriptor);
}
console.log('Before freeze entry',obj);
freezeEntryInObj(obj,'a');
console.log('after freeze entry',obj);
obj['a'] = 23;
console.log('after trying to chang key ',obj);
console.log( Object.getOwnPropertyDescriptor(obj, 'a'));
console.log( Object.getOwnPropertyDescriptor(obj, 'b'));

// for (let [key, value] of Object.entries(obj)) {
//     let objDescriptor = Object.getOwnPropertyDescriptor(obj, key);
//     objDescriptor.writable = false;
//     Object.defineProperty(obj, key + key, objDescriptor);
//     delete obj[key];
// }
// let iterator = 0;
// for(const [key, value] of items) {
//     console.log(key,value);
// }
// console.log(items);
