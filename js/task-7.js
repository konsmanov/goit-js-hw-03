// # Задание 7 - дополнительное, выполнять не обязательно
//
// Напиши скрипт управления личным кабинетом интернет банка. Есть объект `account`
// в котором необходимо реализовать методы для работы с балансом и историей
// транзакций.
//
//     ```js
// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
const Transaction = {
 DEPOSIT: 'deposit',
 WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  balance: 0, // Текущий баланс счета
  transactions: [], // История транзакций
  createTransaction(amount, type) {
      let idTransaction = account.transactions.length+1                              // Метод создает и возвращает объект транзакции.
      return { id: idTransaction, type: type, amount: amount,}                       // Принимает сумму и тип транзакции.
  },
  deposit(amount) {                                                                  // Метод отвечающий за добавление суммы к балансу.
      this.transactions.push(this.createTransaction(amount, 'deposit'));       // Принимает сумму танзакции.
      this.balance = this.balance + amount;                                          // Вызывает createTransaction для создания объекта транзакции
  },                                                                                 // после чего добавляет его в историю транзакций
  withdraw(amount) {                                                                    // Метод отвечающий за снятие суммы с баланса.
      if (amount < this.balance) {                                                      // Принимает сумму танзакции.
          this.transactions.push(this.createTransaction(amount, 'withdraw'));     // после чего добавляет его в историю транзакций.
          this.balance = this.balance - amount;                                         // Вызывает createTransaction для создания объекта транзакции
      } else {                                                                          // Если amount больше чем текущий баланс, выводи сообщение
          console.log(`Снятие ${amount} не возможно, недостаточно средств.`);           // о том, что снятие такой суммы не возможно, недостаточно средств.
      }
  },
  getBalance() {return this.balance},                                                    //Метод возвращает текущий баланс
  getTransactionDetails(id) {
      let result = {};
      this.transactions.forEach(function (currentValue) {
            if (currentValue.id === id){
                result = currentValue;
            }
      })                                                                                  // Метод ищет и возвращает объект транзации по id
      return result;
  },
  getTransactionTotal(type) {                                                           // Метод возвращает количество средств
      let result = 0;                                                                   // определенного типа транзакции из всей истории транзакций
      this.transactions.forEach(function (currentValue) {
          if (currentValue.type === type){
              result = result + currentValue.amount;
          }
      })
      return result;
  },
};


