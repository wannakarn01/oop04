class BankAccount {
    constructor(public ownerName: string, public balance: number) {
    }

    displayBalance(): void {
        console.log(`Account: ${this.ownerName}, Balance: $${this.balance}`);
    }
}

let account1 = new BankAccount("John", 1000);
let account2 = new BankAccount("Alice", 2500);

account1.displayBalance();
account2.displayBalance();