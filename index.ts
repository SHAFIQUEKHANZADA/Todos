#! /usr/bin/env node
import inquirer from "inquirer";
 

let todos: string[] = []

async function name() {
  do{ 
  let welcom = await inquirer.prompt([{
    name: "wel",
    type: "rawlist",
    message: "What do you want to do ?",
    choices: ["Add", "View", "Update", "Delete"]
  }])
  if (welcom.wel === "Add") {
    let ad = await inquirer.prompt([{
      name: "a",
      type: "input",
      message: "Please Add Items!"
    }])
    todos.push(ad.a)
    console.log(todos);
  } else if (welcom.wel === "View") {
    console.log(todos)
  } else if (welcom.wel === "Update") {
    let upd = await inquirer.prompt([{
      name: "up",
      type: "list",
      message : "Select item for update",
      choices: todos.map(val => val)
    }])
    let addU = await inquirer.prompt([{
      name: "Addm",
      type: "input",
      message: "Add item..."
    }]) 
    let newTo = todos.filter(val => val != upd.up)
    todos = [...newTo, addU.Addm]
    console.log(todos);
  } else if (welcom.wel === "Delete") {
    let remove = await inquirer.prompt([{
      name: "rem",
      type: "list",
      message: "Delete item",
      choices : todos.map(z => z)
    }]) 
    let newRem = todos.filter(val => val != remove.rem)
    todos = [...newRem]
    console.log(todos);
  }
 

  } while(todos)
}
name()