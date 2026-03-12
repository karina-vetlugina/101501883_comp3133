let greeter = (firstName: string, lastName: string): string => {
    return `Hello, ${firstName} ${lastName}`;
};

let firstName: string = "Karina";
let lastName: string = "Vetlugina";

console.log(greeter(firstName, lastName));