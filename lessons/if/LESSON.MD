**Оператор if база**

[Теория](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/if...else)

    //Объявляем money и записываем значение 500
    let money = 500;
    //отнимаем от money 200 и записываем новое значение в money
    money = money - 200;
    //выводим money
    alert(money);
    //Объявляем money и записываем значение 500
    let money = 500;

    //Объявляем widthDrawAmount и записываем значение 200
    let widthDrawAmount = 200;
    //если widthDrawAmount(200) <= money(500) что является true
    if(widthDrawAmount <= money) {
    //тогда отнимаем от money 200 и записываем
    money = money - 200;
    }
    //выводим money
    alert(money);