
//Here we have a module that holds a Gameboard object, and a Player factory function.

const theGame = (() => {

    let shape = 'x';
    let square = document.querySelectorAll('.square');
    let sq1 = document.querySelector('#sq1');
    let sq2 = document.querySelector('#sq2');
    let sq3 = document.querySelector('#sq3');
    let sq4 = document.querySelector('#sq4');
    let sq5 = document.querySelector('#sq5');
    let sq6 = document.querySelector('#sq6');
    let sq7 = document.querySelector('#sq7');
    let sq8 = document.querySelector('#sq8');
    let sq9 = document.querySelector('#sq9');
    let container = document.querySelector('#container');
    //Let's figure out how to change the shape every time a move is played.
    //maybe we can add an eventListener to the container div! Upon clicking inside the container, change the shape!
    ////
    

    // container.addEventListener('click',function(){
    //     if(shape == 'x') return shape = 'o';
    //     if(shape == 'o') return shape = 'x';
    // })

    const changeShape = () => shape == 'x' ? shape = 'o' : shape = 'x';
    
    sq1.addEventListener('click',function(){
        if(sq1.textContent) return false;
        sq1.textContent = shape;
        changeShape();
    })
    sq2.addEventListener('click',function(){
        if(sq2.textContent) return false;
        sq2.textContent = shape;
        changeShape();
    })
    sq3.addEventListener('click',function(){
        if(sq3.textContent) return false;
        sq3.textContent = shape;
        changeShape();
    })
    sq4.addEventListener('click',function(){
        if(sq4.textContent) return false;
        sq4.textContent = shape;
        changeShape();
    })
    sq5.addEventListener('click',function(){
        if(sq5.textContent) return false;
        sq5.textContent = shape;
        changeShape();
    })
    sq6.addEventListener('click',function(){
        if(sq6.textContent) return false;
        sq6.textContent = shape;
        changeShape();
    })
    sq7.addEventListener('click',function(){
        if(sq7.textContent) return false;
        sq7.textContent = shape;
        changeShape();
    })
    sq8.addEventListener('click',function(){
        if(sq8.textContent) return false;
        sq8.textContent = shape;
        changeShape();
    })
    sq9.addEventListener('click',function(){
        if(sq9.textContent) return false;
        sq9.textContent = shape;
        changeShape();
    })

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

