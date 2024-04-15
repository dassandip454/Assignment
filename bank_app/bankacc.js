class BankAccount {
    constructor(accountNumber, ownerName, balance) {
      this.accountNumber = accountNumber;
      this.ownerName = ownerName;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited $${amount} into account ${this.accountNumber}`);
    }
  
    withdraw(amount) {
      if (amount > this.balance) {
        console.log("Insufficient funds");
      } else {
        this.balance -= amount;
        console.log(`Withdrawn $${amount} from account ${this.accountNumber}`);
      }
    }
  
    getBalance() {
      return this.balance;
    }
  
    displayAccountInfo() {
      console.log(`Account Number: ${this.accountNumber}`);
      console.log(`Owner Name: ${this.ownerName}`);
      console.log(`Balance: $${this.balance}`);
    }
  }

  const account1 = new BankAccount(10012345, "Sandip das", 1000);
  const account2 = new BankAccount(10022345, "Ratna das", 500);
  
  
  account1.displayAccountInfo();
  console.log(); 
  account1.deposit(200);
  account1.displayAccountInfo();
  console.log(); 
  account1.withdraw(400);
  account1.displayAccountInfo();
  console.log(); 
  account1.withdraw(1000); 
  console.log();
  
  account2.displayAccountInfo();
  console.log(); 
  account2.withdraw(600); 
  console.log(); 
  