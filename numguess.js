import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.italic.underline.bold('Welcome to number guessing game!'));
console.log(chalk.italic.underline.bold('You have to guess a number from 1 to 10 in three attempts.'));
console.log(chalk.italic.underline.bold('Good Luck...'));
let again = 'Yes';
let points = 0;
let tpoints = 0;
while (again === 'Yes') {
    let num = Math.floor(Math.random() * 10.0);
    points = 0;
    for (let i = 0; i < 3; i++) {
        let ans = await inquirer.prompt({
            type: 'number',
            name: 'guess',
            message: chalk.blueBright('Please Enter your guess')
        });
        if (num == ans.guess && i == 0) {
            console.log(chalk.bgGray.greenBright("BullsEye!!! You Guessed in 1st Attempt. You earned 100 points and a bonus 200 points."));
            points = 300;
            tpoints = tpoints + points;
            break;
        }
        else if (num == ans.guess && i == 1) {
            console.log(chalk.bgGray.blueBright("WoW!!! You Guessed in 2nd Attempt.  You earned 100 points and a bonus 100 points."));
            points = 200;
            tpoints = tpoints + points;
            break;
        }
        else if (num == ans.guess && i == 2) {
            console.log(chalk.bgGray.magentaBright("Congrats!!! You Guessed in 3rd Attempt. You earned 100 points only. "));
            points = 100;
            tpoints = tpoints + points;
            break;
        }
        else {
            console.log(chalk.bgCyanBright.redBright("Wrong Guess!!! "));
        }
        if (i == 2 && points == 0) {
            console.log(chalk.bgYellowBright.redBright.bold(`The number is ${num} `));
            console.log(chalk.bgYellowBright.redBright('Oooops!!! Better Luck next time.'));
        }
    }
    console.log(chalk.bgWhite.bgMagentaBright.italic(`You earned ${points} points in this game`));
    let user = await inquirer.prompt({
        type: 'list',
        name: 'agan',
        message: 'Would you like to play again?',
        choices: ['Yes', 'No']
    });
    again = user.agan;
    console.clear();
}
console.clear();
console.log(chalk.bgYellow.redBright.bold(`You earned a Total of ${tpoints} points in all your games`));
