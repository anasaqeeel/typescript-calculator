import inquirer from "inquirer";
import chalk from "chalk";

function power(data:number,data1:number):number{
let result:number;
result =data;
for(let i =1;i<data1;i++){
    result*=data;
}
return result;
}

const colorfulText = `
  ${chalk.red("Q1")} ${chalk.green("PROJECT")} ${chalk.cyan("CAL")}${chalk.cyan("CULA")}${chalk.cyan("TOR")}
`;
console.log(colorfulText)

let input = await inquirer.prompt([
    {
        name: "operand1",
        type: "float",
        message: "Enter operand 1 >>: "
    },
    {
        name: "operand2",
        type: "float",
        message: "Enter operand 2 >>: "
    },
    {
        name: "operator",
        type: "checkbox",
        choices: ["+", "-", "*", "/", "^ (to the power) "],
        message: "Select operator: "
    }
]);

console.log(chalk.blue(input.operand1));
const selectedOperator = input.operator; 
for(let i of input.operator){
switch (i) {
    case "+":
        console.log(chalk.red(`${input.operand1} + ${input.operand2} => ${parseFloat(input.operand1) + parseFloat(input.operand2)}`));
        break;
    case "-":
        console.log(chalk.red(`${input.operand1} - ${input.operand2} => ${parseFloat(input.operand1) - parseFloat(input.operand2)}`)); 
        break;
    case "*":
        console.log(chalk.red(`${input.operand1} * ${input.operand2} => ${parseFloat(input.operand1) * parseFloat(input.operand2)}`));
        break;
    case "/":
        console.log(chalk.red(`${input.operand1} / ${input.operand2} => ${parseFloat(input.operand1) / parseFloat(input.operand2)}`));
        break;
    case "^ (to the power) ":
        console.log(chalk.red(`${input.operand1} + ${input.operand2} => ${(power(parseInt(input.operand1),parseInt(input.operand2)))}`));
        break;
}
}