#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
while (condition) {
    let task = await inquirer.prompt([{
            name: "addtask",
            type: "input",
            message: chalk.italic.magentaBright("What do you want to add in your Todos ?")
        },
        {
            name: "addMore",
            type: "confirm",
            message: chalk.bold.cyanBright("Do you want to add more ?"),
            default: "false"
        }
    ]);
    todos.push(task.addtask);
    condition = task.addMore;
    console.log(todos);
}
