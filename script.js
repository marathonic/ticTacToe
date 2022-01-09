
//Here we have a module that holds a Gameboard object, and a Player factory function.

const theGame = (() => {

    let container = document.getElementById('container');

const Gameboard = {

    gBoard: ['o','x','o','x']
}

const appendToBoard = () => {
    container.append(Gameboard.gBoard);
};

const Player = (name,level) => {
    console.log(`player name: ${name}, player level: {level}`)    
}

return {
    Gameboard,
    appendToBoard,
    Player,
    };
    
})();

