import inquirer from "inquirer";

const answer: {
    sentence: string 
} = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence to count words:",
    }
])

const words = answer.sentence.trim().split(" ")

console.log(words)

console.log(`Your sentence word count is ${words.length}`);