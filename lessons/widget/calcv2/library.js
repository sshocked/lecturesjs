let myCalc = {
    result: 0,
    previousValue: 0,
    lastAction: undefined,
    equal: undefined,
    resultElement: undefined,
    writeResult: function (value) {
        this.resultElement.innerHTML = value;
    },
    initHtml: function (target) {
        //вставка html
        target.innerHTML = '<div id="calculator">\n' +
            '    <!-- Screen and clear key -->\n' +
            '    <div class="top">\n' +
            '        <span class="clear">C</span>\n' +
            '        <div class="screen">0</div>\n' +
            '    </div>\n' +
            '    <div class="keys">\n' +
            '        <!-- operators and other keys -->\n' +
            '        <span class="num">7</span>\n' +
            '        <span class="num">8</span>\n' +
            '        <span class="num">9</span>\n' +
            '        <span class="operator">+</span>\n' +
            '        <span class="num">4</span>\n' +
            '        <span class="num">5</span>\n' +
            '        <span class="num">6</span>\n' +
            '        <span class="operator">-</span>\n' +
            '        <span class="num">1</span>\n' +
            '        <span class="num">2</span>\n' +
            '        <span class="num">3</span>\n' +
            '        <span class="operator">/</span>\n' +
            '        <span class="num">0</span>\n' +
            '        <span>.</span>\n' +
            '        <span class="equal">=</span>\n' +
            '        <span class="operator">*</span>\n' +
            '    </div>\n' +
            '</div>';
    },
    begin: function(target) {
        this.initHtml(target);
        //записываем элементы
        let buttons = document.querySelectorAll('.num');    //цифры
        let operators = document.querySelectorAll('.operator'); //действия
        this.equal = document.querySelector('.equal');  //ровно
        this.resultElement = document.querySelector('.screen');  //результат
        let del = document.querySelector('.clear');

        //Делаем бинды

        //при нажатии цифр
        for(let button of buttons) {
            button.addEventListener('click', function () {
                if(myCalc.resultElement.innerHTML === '0') {
                    myCalc.resultElement.innerHTML = button.innerHTML;
                } else {
                    myCalc.resultElement.innerHTML += button.innerHTML;
                }
            });
        }
        //при нажатии действий
        for(let button of operators) {
            button.addEventListener('click', function () {
                myCalc.previousValue = parseFloat(myCalc.resultElement.innerHTML); //записали последне значение
                myCalc.lastAction = button;    //запоминаем последний элемент нажатый из действий
                myCalc.resultElement.innerHTML = 0;
            });
        }

        //кнопка равно
        this.equal.addEventListener('click', function () {
            if(myCalc.lastAction.innerHTML === '+') {
                myCalc.writeResult(parseFloat(myCalc.previousValue) + parseFloat(myCalc.resultElement.innerHTML));
            } else if(myCalc.lastAction.innerHTML === '-') {
                myCalc.writeResult(parseFloat(myCalc.previousValue) - parseFloat(myCalc.resultElement.innerHTML));
            } else if(myCalc.lastAction.innerHTML === '*') {
                myCalc.writeResult(parseFloat(myCalc.previousValue) * parseFloat(myCalc.resultElement.innerHTML));
            } else if (myCalc.lastAction.innerHTML === '/') {
                myCalc.writeResult(parseFloat(myCalc.previousValue) / parseFloat(myCalc.resultElement.innerHTML));
            }
        });

        //кнопка сброса
        del.addEventListener('click', function () {
            myCalc.resultElement.innerHTML = 0;
            myCalc.previousValue = 0;
        });


        // buttons.forEach(function () {
        //     this.addEventListener('click', function () {
        //         if(myCalc.resultElement.innerHTML === '0') {
        //             myCalc.resultElement.innerHTML = this.innerHTML;
        //         } else {
        //             myCalc.resultElement.innerHTML += this.innerHTML;
        //         }
        //     });
        // })
    }

}