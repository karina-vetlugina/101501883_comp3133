class Customer {
    firstName: string;
    lastName: string;

    greeter(): string {
        return `Hello, ${this.firstName} ${this.lastName}`;
    }
}

let customer = new Customer();
customer.firstName = "Karina";
customer.lastName = "Vetlugina";

console.log(customer.greeter());