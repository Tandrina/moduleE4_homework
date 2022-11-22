//      Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
//     Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
//     Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). 
//      Выбрав прибор, подумайте, какими свойствами он обладает.


function App(size) {
    this.size = size,
    this.color = 'silver'
}

App.prototype.turnApp = function (turn) {
    if (turn === 'on') {
        console.log("Устройство включено");
    } else if (turn === 'off') {
        console.log('Устройство выключено');
    } else {
        console.log('Команда введена неверно');
    }
}

App.prototype.costPower = function (power) {
    console.log(`Стоимость электроэнергии ${Math.round(power * 3.59)} рублей.`);
}


function OldFridge(color, shelvesNum, hasFreezer) {
    this.color = color,
    this.shelvesNum = shelvesNum,
    this.hasFreezer = hasFreezer,

    this.frozenTemp = function (currentTemperature, frozen) {
            if (currentTemperature <= -10 && frozen === true) {
                frozen = false;
                alert('Заморозка приостановлена.');
            } else if (currentTemperature > 0 && frozen !== true) {
                frozen = true;
                alert('Заморозка включена.');
            }}}


function NewComp(coolerNum, highTemp) {
    this.coolerNum = coolerNum,
    this.highTemp = highTemp,
    this.color = 'black',

    this.turnCooler = function (coolerNum, highTemp) {
            if (highTemp <= 60) {
                alert(`Температура нормальная, работают ${Math.round(this.coolerNum/2)} вентилятора`);

            } else if (this.highTemp > 60 && this.highTemp < 80) {
                alert(`Перегрев. Включено ${coolerNum} вентиляторов.`);

            } else if (this.highTemp >= 80) {
                alert('Перегрев. Требуется выключение питания.');
            }}}


NewComp.prototype = new App();
OldFridge.prototype = new App();

const newComputer = new NewComp(8, 95);
const fridge = new OldFridge(23, false);

newComputer.turnCooler(5, 99);