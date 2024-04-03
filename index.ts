#! /usr/bin/env node
import inquirer from "inquirer";

let todos: string[] = [];
// let condition = true;


async function creat(todos: string[]) {
do{ 
  let welcom = "Welcom to the todolist";

  let oprate = await inquirer.prompt({
    name: "op",
    type: "list",
    message: "What you want to do ?",
    choices: ["Add", "View", "Update", "Delete"],
  });
  if (oprate.op === "Add") {
    let additem = await inquirer.prompt({
      name: "adit",
      type: "input",
      message: "Please Add Item!",
    });
    todos.push(additem.adit);
    console.log(todos);
  }
  if (oprate.op === "View") {
    console.log(todos);
  }
  if (oprate.op === "Update") {
    let Updat = await inquirer.prompt([
      {
        name: "u1",
        type: "list",
        message: "Select item to update",
        choices: todos,
      }
    ])
    let Updat2 = await inquirer.prompt([
        {
          name: "u2",
          type:  "input",
          message: "Update Item",
          
        }])
        let newUp = todos.filter(val => val != Updat.u1)
        todos = [...todos, Updat2.u2]
    }
    if (oprate.op === "Delete") {
        let remove  = await inquirer.prompt({
            name: "rem",
            type: "list",
            message: "Select an item to delete",
            choices: todos
        })
    }
}while (true)
 } 
creat(todos)