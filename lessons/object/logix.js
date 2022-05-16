//создаем объект, задаем свойства
let wallet = {
    hotAccount: 1000, //свойство и значение
    checkingAccount: 10000,
    checker: {sum: 5, money: 100},
};

wallet.name = 'Имя'; //Добавляем нновое своейство
wallet.hotAccount = 3000; //меняем значение уже заданного свойства

//добавляем метод для объекта
wallet.sum = function () {
    return this.hotAccount + this.checkingAccount;
}



console.log(wallet.hotAccount); //получаем значение свойства
console.log(wallet.sum()); //вызываем метод из объекта


