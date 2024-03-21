#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const answers = {
    numberOne : Number,
    numberTwo : Number,
    operator : String
} = await inquirer.prompt([
    {
    type : "number",
    name : "numberOne",
    message : "Enter Your First number"},
    { type : "number",
    name: "numberTwo",
    message : " Enter Your Second number"},
    { type : "list",
    name : "operator",
    message : " Select Operators",
    choices : ["+","-","*","/","%","**"]
}]);
const {numberOne, numberTwo ,operator} = answers
let result 

switch (operator) {
    case "+":
        result = numberOne + numberTwo;
        break;
    case "-":
        result = numberOne - numberTwo;
        break;
    case "*":
        result = numberOne * numberTwo;
        break;
    case "/":
        result = numberOne / numberTwo;
        break;
    case "%":
        result = numberOne % numberTwo;
        break;
    case "**":
        result = numberOne ** numberTwo;
        break;
        default :
        console.log(chalk.red.bold("Invalid number"));
    }
    console.log(chalk.yellow(`${numberOne} ${operator} ${numberTwo} = ${result} `))

