let arr = [1, 3, 2, 5, 6, 7, 8, 9, 0];


function mySort(arr) {
    let bubble = 0;
    for(let i = 0; i < arr.length; i++) {
        for(let k = 0; k < arr.length; k++) {
            if (arr[k] > arr[k + 1]) {
                bubble = arr[k];     //текущий сохранили в буфер
                arr[k] = arr[k + 1]; //записали в текущий следующий
                arr[k + 1] = bubble;        //в следующий нужно записать текущий из buble
            }
        }
    }

    return arr;
}
console.log(arr);
console.log(mySort(arr));