import { Customer } from "./customer";

let customer = new Customer("Karina", "Vetlugina", 19);

console.log(customer.greeter());
console.log(`Age: ${customer.GetAge()}`);