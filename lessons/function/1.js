function surroundByTag(arr, tagName) {
    return arr.map(function (el) {
        return '<' + tagName + '>' + el + '</' + tagName + '>';
    });
}

let arr = [1, 2, 3, 4, 5];




//
// window.addEventListener('load', function () {
//     let myDiv = document.querySelector('#myDiv');
//     myDiv.innerHTML = '<ul class="myUl"></li>';
//     let myUl = document.querySelector('.myUl');
//     myUl.innerHTML = '<li>test</li>';
//     // let list = document.querySelector('.list');
//     // let names = ['Петя', 'Катя', 'Вася', 'Иосиф'];
//     // list.innerHTML = surroundByTag(names, 'li');
// });