let play = true;
while (play) {
let startGame = confirm('Do you want to play a game?');
let prize = 0;
if (!startGame) {
    alert('You did not become a billionaire, but can.');
    play = false;
} else {
        let possiblePrize = 100;
        let constPrize = 100;
        let maxRange = 9;
        let randomNumber;
        const attempt = 3;
        const stepRange = 4;
        const stepPrize = 2;
        for (let i = 0; i < attempt;) {
            if (i === 0) {
                randomNumber = Math.floor(Math.random() * maxRange);
            }
            let numberUser = parseInt(prompt(`
    Choose a roulette pocket number from 0 to ${maxRange - 1}
    Attemts left: ${attempt-i}
    Total prize: ${prize}$
    Possible prize on current attempt: ${possiblePrize}$
            `));
            if (numberUser === randomNumber && numberUser !== '') {
                maxRange += stepRange;
                prize += possiblePrize;
                startGame = confirm(`Congratulation, you won!   Your prize is: ${prize} $. Do you want to continue? `);
                possiblePrize = possiblePrize * stepPrize;
                constPrize *= stepPrize;
                possiblePrize = constPrize;
                i = 0;
            } else {
                if (i === stepPrize) {
                    prize = 0;
                }
                possiblePrize = possiblePrize / stepPrize;
                i++;
            }
            if (!startGame) {
                break;
            }
            if (!numberUser) {
                prize = 0;
                break;
            }
        }
        alert(`Thank you for your participation. Your prize is: ${prize} $`);
    }
}