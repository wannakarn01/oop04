class BankAccount {
    constructor(public ownerName: string, public balance: number) {
    }

    displayBalance(): void {
        console.log(`Account: ${this.ownerName}, Balance: $${this.balance}`);
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited: $${amount}`);
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn: $${amount}`);
        } else {
            console.log("Insufficient funds");
        }
    }
}

let account = new BankAccount("Praew", 500);

account.displayBalance();

account.deposit(200);
account.displayBalance();

account.withdraw(1000);
account.displayBalance();