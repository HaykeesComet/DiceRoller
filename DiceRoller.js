const dieRoll = Math.floor( Math.random() * 6 ) + 1;
console.log(`You rolled a ${dieRoll}.`);
//document.write(`You rolled a ${dieRoll}.`);

const dieRoll2 = Math.floor( Math.random() * 6 ) + 1;
console.log(`You rolled a ${dieRoll2}.`);
//document.write(`You rolled a ${dieRoll2}.`);

document.querySelector('main').innerHTML = `<h1>You rolled a ${dieRoll} and ${dieRoll2}.</h1>`;