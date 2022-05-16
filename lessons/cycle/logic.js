let arr = [1, 2, 3, 4, 5, 6, 7];
let result = [];

for (let val of arr) {
    console.log(val);
}

console.log(result);

for (let key in arr) {
    console.log(arr[key]);
}

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}