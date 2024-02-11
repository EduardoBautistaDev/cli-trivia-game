import * as p from '@clack/prompts';
import { setTimeout } from 'node:timers/promises';
import color from 'picocolors';

let totalCorrect = 0;

async function askQuestion(question, answers, correctAnswerIndex) {
    const options = []
    answers.forEach((answer) => {
        options.push({value:answer});
    })

    const answer = await p.select({
        message:question,
        initialValue: '1',
        options:options,
    })

    if (answer == answers[correctAnswerIndex]) {
        totalCorrect ++;
    }
}

class Question {
    constructor(question, answersArray, correctAnswerIndex) {
        this.question = question;
        this.answersArray = answersArray;
        this.correctAnswerIndex = correctAnswerIndex;
    }
}

async function main() {
    await setTimeout(1000);
    p.intro(`${color.bgMagenta(color.black('Welcome'))}`)
    const question1 = new Question('Which does not show echo help?', ['option1', 'option2', 'option3'], 1)
    askQuestion(question1.question, question1.answersArray, question1.correctAnswerIndex);
    p.outro(`${color.bgMagenta(color.black('OK, bye!'))}`)
}

main().catch(console.error);