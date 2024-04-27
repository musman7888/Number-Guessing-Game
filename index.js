#! /usr/bin/env node 
import inquirer from "inquirer";
let total = 0;
let win = 0;
let lose = 0;
// getting number of rounds to play from user
let rounds = await inquirer.prompt([{
        message: "Enter the number of rounds to play:  ",
        type: "number",
        name: "round"
    }]);
// creating random number
let randm = () => Math.ceil(Math.random() * 6);
total = rounds.round;
let guessNumber = async () => {
    const datas = await inquirer.prompt([{
            message: "Guess the generated number (1-6): ",
            type: "number",
            name: "guess"
        }]);
    // validating input data, of invalid input, will prompt user to enter valid number
    if (datas.guess > 6 || datas.guess < 1 || !(parseInt(datas.guess))) {
        console.log("Please enter only valid numbers from 1 to 6");
        guessNumber();
    }
    else {
        rounds.round -= 1;
        if (datas.guess === randm()) {
            console.log("You won");
            win++;
            if (rounds.round != 0)
                guessNumber();
        }
        else {
            console.log("You lose");
            lose++;
            if (rounds.round != 0)
                guessNumber();
        }
        if (rounds.round == 0) {
            console.log(`total win = ${win} \ntotal lose = ${lose} `);
        }
    }
};
guessNumber();
