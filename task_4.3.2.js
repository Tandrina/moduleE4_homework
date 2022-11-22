// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у
// переданного объекта свойство с данным именем. Функция должна возвращать true или false.

const obj = {
    name: 'Kane',
    age: 12,
    city: 'Moscow',
}

let text = 'fhfh'

function checkProp(obj, text) {
    console.log(text in obj);
}

checkProp(obj, text);