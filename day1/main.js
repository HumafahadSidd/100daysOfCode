"use strict";
/*Q2 - Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple,
such as, “Hello Eric, would you like to learn some Python today?”
*/
let person_name = 'Eric';
console.log(`Hello ${person_name},Would you like to learn some ython today?`);
// Q3 - Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/
let My_name = 'huMa';
console.log(My_name.toLowerCase());
console.log(My_name.toUpperCase());
let titleCase = My_name.charAt(0).toUpperCase() + My_name.slice(1).toLowerCase();
console.log(titleCase);
