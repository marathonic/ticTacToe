
//Here we have a module that holds a Gameboard object, and a Player factory function.

const theGame = (() => {
    let square;
    let shape = 'x';
    let container = document.getElementById('container');
    for(let i = 0; i < 9; i++){
        square = document.createElement('div');
        square.classList.add('squares');
        square.id = 'sq' + i;
        
        container.append(square);
    }

const Gameboard = {
    
    gBoard: ['o','x','o','x'],

    move: square.addEventListener('click',function(e){
        if(Gameboard.gBoard[-1] == 'x'){
            shape = 'o';
            alert(shape);
            square.textContent = shape;
        }
        alert(shape);
    }),

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

