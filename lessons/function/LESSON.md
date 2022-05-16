Функции

Функции нужны для того чтобы не дублировать код, ускорять разработку
Дубли кода ведут к последующим правкам в нескольких местах что порождает баги
Так-же функциями удобно пользоваться

[Теория](https://learn.javascript.ru/function-basics)

Пример самой простой функции без параметров:

    function test() {
        console.log('test');
    }

Вызов функции сверху:

    test();

Пример функции умножения двух чисел и примеры вызовов:

    //слово function затем произвольное имя функции, в скобках необходимые параметры
    function myMult(num1, num2) {
        return num1 * num2;
    }
    //вызов со значениями
    myMult(4, 2);

    //вызов с переменными
    let a = 4;
    let b = 55;
    myMult(a, b);

Пример функции упаковки элементов массива в произвольный тег:

    function surroundByTag(arr, tagName) {
        return arr.map(function (el) {
            return '<' + tagName + '>' + el + '</' + tagName + '>';
        });
    }

    window.addEventListener('load', function () {
        let list = document.querySelector('.list');
        let names = ['Петя', 'Катя', 'Вася', 'Иосиф'];
        list.innerHTML = surroundByTag(names, 'li');
    });

Домашнее задание:

* [ ]  Сделать функцию `myDiv`которая принимает аргументы: num1, num2 и возвращает деление num1 на num2
* [ ]  Сделать функцию сортировки `mySort`которая принимает аргументы: arr - массив чисел, direction - строка со значениями 'ASC' или 'DESC' и возвращает отсортированный массив при значении  ASC в возрастании при DESC по убываннию при некорректном(не равно asc и не равно desc) direction возвращает первоначальный массив, нужно использовать https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort для самой сортировки
* [ ]  Сделать функцию `calcSum` которая принимает массив чисел будет внутри использовать filter https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter функция должна отсортировать все числа больше 10
