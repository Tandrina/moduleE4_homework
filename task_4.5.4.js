class App {
    constructor(size) {
        this.size = size,
            this.color = 'silver'
    }

    turnApp(turn) {
        if (turn === 'on') {
            console.log("Устройство включено");
        } else if (turn === 'off') {
            console.log('Устройство выключено');
        } else {
            console.log('Команда введена неверно');
        }
    }

    costPower(power) {
        console.log(`Стоимость электроэнергии ${Math.round(power * 3.59)} рублей.`);
    }
}


class OldFridge extends App {
    constructor(color, shelvesNum, hasFreezer, size) {
        super(size);
        this.color = color;
        this.shelvesNum = shelvesNum;
        this.hasFreezer = hasFreezer;
    }

    frozenTemp(currentTemperature, frozen) {
        if (currentTemperature <= -10 && frozen === true) {
            frozen = false;
            alert('Заморозка приостановлена.');
        } else if (currentTemperature > 0 && frozen !== true) {
            frozen = true;
            alert('Заморозка включена.');
        } else {
            alert(`Температура в норме - ${currentTemperature} градусов.`)
        }
    }
}


class NewComp extends App {
    constructor(size) {
        super(size);
        this.color = 'black';
    }

    turnCooler(coolerNum, highTemp) {
        if (highTemp <= 60) {
            alert(`Температура нормальная, работают ${Math.round(coolerNum / 2)} вентилятора`);

        } else if (highTemp > 60 && highTemp < 80) {
            alert(`Перегрев. Включено ${coolerNum} вентиляторов.`);

        } else if (highTemp >= 80) {
            alert('Перегрев. Требуется выключение питания.');
        }
    }
}

const newComputer = new NewComp();
const fridge = new OldFridge();

fridge.frozenTemp(20, true);
console.log(fridge.color);

newComputer.costPower(235);
newComputer.turnCooler(8, 45);
