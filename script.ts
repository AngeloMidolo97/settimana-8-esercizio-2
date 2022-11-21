class SonAccount {
    balanceInit: number;
    fixedDeposit: number = 1000;
    fixedWithdraw: number = 1500;
    constructor(_balanceInit:number=0){
        this.balanceInit = _balanceInit;
    }
    deposit(amount:number) {
        console.log('Your Deposit: ' + amount);
        this.balanceInit+=amount
    }
    depositFix() {
        this.deposit(1000);
        return 1000;
    }
    withdrawFix() {
        this.withdraw(1000);
        return 1000;
    }
    withdraw(amount:number) {
        console.log('Your Withdraw: ' + amount);
        this.balanceInit-=amount;
    }
}


let angeloAccount = new SonAccount();
angeloAccount.deposit(10000);
console.log('Angelo Balance after deposit: ' + angeloAccount.balanceInit)


angeloAccount.withdraw(2500);
console.log('Angelo Balance after withdraw: ' + angeloAccount.balanceInit)


class MotherAccount extends SonAccount {
    balanceInit: number;
    constructor(_balanceInit) {
        super(_balanceInit);
    }
    deposit(amount:number) {
        this.balanceInit+=amount-this.calcInterest(amount);
    }
    withdraw(amount: number) {
        this.balanceInit-=amount+this.calcInterest(amount);
    }
    calcInterest(amount:number) {
        let interest= 0;
        interest = amount/10
        return interest;
    }
};


let mother = new MotherAccount(10000);
console.log('Mother balance ' + mother.balanceInit);

mother.deposit(10000);
console.log('Mother balance after deposit ' + mother.balanceInit);

mother.withdraw(2000);
console.log('Mother balance after withdraw ' + mother.balanceInit);