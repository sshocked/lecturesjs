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
        let divCalculator = document.createElement('div');
        divCalculator.classList.add('calculator');

        let divTop = document.createElement('div');
        divTop.classList.add('top');
        divCalculator.append(divTop);

        let butDel = document.createElement('span');
        butDel.classList.add('clear');
        butDel.innerHTML = 'C';
        divTop.append(butDel);

        let result = document.createElement('div');
        result.classList.add('screen');
        result.innerHTML = '0';
        divTop.append(result);

        let divKeys = document.createElement('div');
        divKeys.classList.add('keys');
        divCalculator.append(divKeys);

        let butObjList = [
            {class: "num", value: 7},
            {class: "num", value: 8},
            {class: "num", value: 9},
            {class: "operator", value: '+'},
            {class: "num", value: 4},
            {class: "num", value: 5},
            {class: "num", value: 6},
            {class: "operator", value: '-'},
            {class: "num", value: 1},
            {class: "num", value: 2},
            {class: "num", value: 3},
            {class: "operator", value: '/'},
            {class: "num", value: 0},
            {class: "dot", value: '.'},
            {class: "equal", value: '='},
            {class: "operator", value: '*'},
        ];
        let myBut = undefined;
        for (let butObj of butObjList) {
            myBut = document.createElement('span');
            myBut.classList.add(butObj.class);
            myBut.innerHTML = butObj.value;
            divKeys.append(myBut);
        }


        target.append(divCalculator);
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