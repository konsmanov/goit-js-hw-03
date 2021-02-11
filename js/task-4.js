// # Задание 4
//
// Напиши функцию `countTotalSalary(employees)` принимающую объект зарплат. Функция
// считает общую сумму запрплаты работников и возращает ее. Каждое поле объекта,
//     передаваемого в функцию, имеет вид `"имя":"зарплата"`.
//
//     ```js
// const countTotalSalary = function(employees) {
//   // твой код
// };
//
// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countTotalSalary({})); // 0
//
// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330
//
// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400
// ```
const countTotalSalary = function(employees) {
    let Salary = [];
    for (const key in employees) {
        Salary.push(employees[key]);
    }
    let totalSum = 0;
    for (const sum of Salary){
        totalSum = totalSum + sum;
    }
    return totalSum;
}

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400