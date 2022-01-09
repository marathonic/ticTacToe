
//Here we have a module that holds a Gameboard object, and a Player factory function.

const theGame = (() => {

const Gameboard = {

    gBoard: ['o','x','o','x']
}

const Player = (name,level) => {
    console.log(`player name: ${name}, player level: {level}`)    
}
return {
    Gameboard,
    Player,
    };
    
})();

