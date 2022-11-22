// Написать функцию, которая создает пустой объект, но без прототипа.

const makeFunc = () => {
    Object.create(null);
 }

makeFunc();