"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_1 = require("./customer");
var customer = new customer_1.Customer("Karina", "Vetlugina", 20);
console.log(customer.greeter());
console.log("Age: ".concat(customer.GetAge()));
