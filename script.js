"use strict";

// TODO - write your code here.

const randomDamage = (min, max) => Math.floor(Math.random() * (max - min)) + min;
randomDamage(1, 11);

const chooseOption = (opt1, opt2) => {
    const randNum = Math.floor(Math.random() * (opt2 - opt1)) + opt1;
    return randNum ? opt2 : opt1;
};
chooseOption(0, 2);

const attackPlayer = function (health) {
    return health - randomDamage();
};

const logHealth = (player, health) => console.log('${player} health: ${health}');

const logDeath = (winner, loser) => console.log('${winner} defeated ${loser}');

const isDead = (health) => health <= 0;

function fight(player1, player2, player1Health, player2Health) {
    while (true) {
        let attacker = chooseOption(player1, player2);

        if (attacker === player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            if (isDead(player2Health)) {
                logDeath(player1, player2);
                break;
            }
        } else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
            if (isDead(player1Health)) {
                logDeath(player2, player1);
                break;
            }
        }
    }
}
fight = {
    player1: "Alice",
    player2: "Brandon",
    player1Health: 100,
    player2Health: 100,
}