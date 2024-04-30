#! /usr/bin/env node

// importing  inquirer & chalk packages
import inquirer from "inquirer";
import chalk from "chalk";

// ------Display a colorful welcome message.-----
console.log(chalk.bold.greenBright("=".repeat(65)));
console.log(chalk.bold.italic.cyanBright("\n  <<<<<<<<<<====== Code With Saad -- Word Counter ====>>>>>>>>>"));

console.log(chalk.magenta.bold("=".repeat(65)));

// <<<<<< ===== Prompt the user to enter a sentence ====>>>>>
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.yellow("Enter a sentence"),
    }
]);

//--------- Triming the sentence and splitting it into words based on "spaces" ------------

let words = answers.sentence.trim().split(" ");

//======= Analysis of user input sentence====== 
console.log("=".repeat(40));
console.log(chalk.bold(chalk.yellowBright.italic("- Sentence Words: ")));
console.log(words);
console.log(chalk.bold(`\n - word Count: ${chalk.bold.greenBright(words.length)}`));
console.log(chalk.bold.blueBright("=".repeat(40)));


