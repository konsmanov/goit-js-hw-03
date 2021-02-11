// # Задание 1
//
// Напиши скрипт, который, для объекта `user`, последовательно:
//
// - добавляет поле `mood` со значением `'happy'`
// - заменяет значение `hobby` на `'skydiving'`
// - заменяет значение `premium` на `false`
// - выводит содержимое объекта `user` в формате `ключ:значение` используя
//     `Object.keys()` и `for...of`
//
//     ```js
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };
// ```
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mod = 'happy';
user.hobby = 'skydiving';
user.premium = 'false';

for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}