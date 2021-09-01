function Account(name) {
    this.name = name;
    this.iban = 'GR' + Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000;
    this.balance = 0;
};

Account.prototype.getBalance = function () {
    return this.balance;
};


Account.prototype.deposit = function (getMoney) {
    return this.balance += getMoney;
};

Account.prototype.withdraw = function (loseMoney) {
    if (!!loseMoney && typeof (loseMoney) === typeof (0) && 0 < loseMoney && loseMoney < this.balance) {
        this.balance -= loseMoney;
        return;
    }
    console.log("Invalid amount");

};


const costumer1 = new Account("Kostas Minaidis");
const costumer2 = new Account("Fuad Yerdelen");


costumer2.deposit(200);
costumer2.withdraw(10);
costumer1.withdraw(-10);

console.log(costumer2.getBalance());