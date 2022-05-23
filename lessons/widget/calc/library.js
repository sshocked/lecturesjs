let myCalculator = {
    init: function (target) {
        target.innerHTML = '<h1>Calculator Design Using HTML Layout</h1>\n' +
            '<div class="container">\n' +
            '    <div class="header">Calculator</div>\n' +
            '    <input value="0" type="text" class="result">\n' +
            '    <div class="first-row">\n' +
            '        <input type="button" name="" value="&radic;" class="global">\n' +
            '        <input type="button" name="" value="(" class="global">\n' +
            '        <input type="button" name="" value=")" class="global">\n' +
            '        <input type="button" name="" value="%" class="global">\n' +
            '    </div>\n' +
            '    <div class="second-row">\n' +
            '        <input type="button" name="" value="7" class="global bNumer">\n' +
            '        <input type="button" name="" value="8" class="global bNumer">\n' +
            '        <input type="button" name="" value="9" class="global bNumer">\n' +
            '        <input type="button" name="" value="/" class="global">\n' +
            '    </div>\n' +
            '    <div class="third-row">\n' +
            '        <input type="button" name="" value="4" class="global bNumer">\n' +
            '        <input type="button" name="" value="5" class="global bNumer">\n' +
            '        <input type="button" name="" value="6" class="global bNumer">\n' +
            '        <input type="button" name="" value="X" class="global">\n' +
            '    </div>\n' +
            '    <div class="fourth-row">\n' +
            '        <input type="button" name="" value="1" class="global bNumer">\n' +
            '        <input type="button" name="" value="2" class="global bNumer">\n' +
            '        <input type="button" name="" value="3" class="global bNumer">\n' +
            '        <input type="button" name="" value="-" class="global">\n' +
            '    </div>\n' +
            '    <div class="conflict">\n' +
            '        <div class="left">\n' +
            '            <input type="button" name="" value="0" class="big bNumer">\n' +
            '            <input type="button" name="" value="." class=" small">\n' +
            '            <input type="button" name="" value="Del" class=" red small white-text top-margin">\n' +
            '            <input type="button" name="" value="=" class=" green white-text big top-margin equal">\n' +
            '        </div>\n' +
            '        <div class="right">\n' +
            '            <input type="button" name="" value="+" class="global grey plus">\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>\n';

            this.result = document.querySelector('.result');
            let bNumbers = document.querySelectorAll('.bNumer');
            for(let but of bNumbers) {
                but.addEventListener('click', function () {
                    if(myCalculator.result.value === '0') { //проверяем что текущее значение равно 0
                        myCalculator.result.value = but.value; //тогда просто устанавливаю result равным кнопке на которую нажали
                    } else {
                        myCalculator.result.value += but.value;
                    }
                });
            }

        let butPlus = document.querySelector('.plus');
        butPlus.addEventListener('click', function () {
            myCalculator.previousValue = myCalculator.result.value;
            myCalculator.previousAction = 'sum';
            myCalculator.result.value = 0;
        });

        let butEqual = document.querySelector('.equal');
        butEqual.addEventListener('click', function () {
            if(myCalculator.previousAction === 'sum') {
                myCalculator.result.value = parseInt(myCalculator.previousValue) + parseInt(myCalculator.result.value);
            }
        });


    },
    result: undefined,
    previousValue: 0,
    previousAction: '',
}