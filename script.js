var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount(_balanceInit) {
        if (_balanceInit === void 0) { _balanceInit = 0; }
        this.fixedDeposit = 1000;
        this.fixedWithdraw = 1500;
        this.balanceInit = _balanceInit;
    }
    SonAccount.prototype.deposit = function (amount) {
        console.log('Your Deposit: ' + amount);
        this.balanceInit += amount;
    };
    SonAccount.prototype.depositFix = function () {
        this.deposit(1000);
        return 1000;
    };
    SonAccount.prototype.withdrawFix = function () {
        this.withdraw(1000);
        return 1000;
    };
    SonAccount.prototype.withdraw = function (amount) {
        console.log('Your Withdraw: ' + amount);
        this.balanceInit -= amount;
    };
    return SonAccount;
}());
var angeloAccount = new SonAccount();
angeloAccount.deposit(10000);
console.log('Angelo Balance after deposit: ' + angeloAccount.balanceInit);
angeloAccount.withdraw(2500);
console.log('Angelo Balance after withdraw: ' + angeloAccount.balanceInit);
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(_balanceInit) {
        return _super.call(this, _balanceInit) || this;
    }
    MotherAccount.prototype.deposit = function (amount) {
        this.balanceInit += amount - this.calcInterest(amount);
    };
    MotherAccount.prototype.withdraw = function (amount) {
        this.balanceInit -= amount + this.calcInterest(amount);
    };
    MotherAccount.prototype.calcInterest = function (amount) {
        var interest = 0;
        interest = amount / 10;
        return interest;
    };
    return MotherAccount;
}(SonAccount));
;
var mother = new MotherAccount(10000);
console.log('Mother balance ' + mother.balanceInit);
mother.deposit(10000);
console.log('Mother balance after deposit ' + mother.balanceInit);
mother.withdraw(2000);
console.log('Mother balance after withdraw ' + mother.balanceInit);
