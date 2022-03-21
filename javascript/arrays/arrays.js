const numArr = [1, 3, 2, 5, 0];

numArr.sort((a, b) => {
    if(a-b < 0){
        return -1;
    }
    else if(a-b > 0){
        return 1;
    }
    else if(a-b === 0) {
        return 0;
    }
});
console.log(numArr);

const strArr = ['banana','apple', 'apple','doctor','zed','elephant'];
let newArr = strArr.filter(a => a !== 'banana');
strArr.sort((a,b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if(a > b) {
        console.log(`${a} > ${b} return 1`);
        return 1;
    }
    else if(a < b) {
        console.log(`${a} < ${b} return -1`);
        return -1;
    }
    else {
        console.log(`${a} === ${b} return 0`);
        return 0;
    }
});
console.log(strArr);
console.log(newArr);
