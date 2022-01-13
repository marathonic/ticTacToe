

const theGame = (() => {

    const myBoard = (() => {
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
        let myArr = [];
        let nameLeft = document.querySelector('#nameLeft');
        let nameRight = document.querySelector('#nameRight');
        let popupDiv = document.querySelector('#popupDiv');        
        let playerName = document.querySelector('#playerName');
        let playerNameBtn = document.querySelector('#playerNameBtn');
        let playBtn = document.querySelector('#playBtn');
        let overlayPlayerWin = document.getElementById('overlayPlayerWin');
        let overlayPlayerName = document.getElementById('overlayPlayerName');
        let playerWinCount = 0;
        let computerWinCount = 0;
        let tradeShapesBtn = document.getElementById('tradeShapes');
        let p1Shape = document.querySelector('#playerOneShape');
        let p2Shape = document.querySelector('#playerTwoShape');
        
        playerNameBtn.addEventListener('click', function(){
            let user = playerName.value; 
            nameLeft.textContent = playerName.value;
            if(!nameLeft.textContent) nameLeft.textContent = 'Player One';
            nameRight.textContent = playerTwoName.value;
            if(!nameRight.textContent) nameRight.textContent = 'Player Two';
            document.getElementById('overlay').style.display="none";
        })

       tradeShapesBtn.addEventListener('click',function(){
           p1Shape.textContent == 'x' ? p1Shape.textContent = 'o' : p1Shape.textContent = 'x';
           p2Shape.textContent == 'o' ? p2Shape.textContent = 'x' : p2Shape.textContent = 'o';
           changeShape();
       })

        playBtn.addEventListener('click', function(){
            if(myArr.length > 0) changeShape();
            sq1.textContent = '';
            sq2.textContent = '';
            sq3.textContent = '';
            sq4.textContent = '';
            sq5.textContent = '';
            sq6.textContent = '';
            sq7.textContent = '';
            sq8.textContent = '';
            sq9.textContent = '';
            myArr.length = 0;
            console.log(myArr);
            playBtn.style.display="none";
            tradeShapesBtn.style.display="block";
        });
    
        const changeShape = () => shape == 'x' ? shape = 'o' : shape = 'x';
        
        sq1.addEventListener('click',function(){
            if(sq1.textContent) return false;
            sq1.textContent = shape;
            changeShape();
            myArr.push(shape)
        })
        sq2.addEventListener('click',function(){
            if(sq2.textContent) return false;
            sq2.textContent = shape;
            changeShape();
            myArr.push(shape)
        })
        sq3.addEventListener('click',function(){
            if(sq3.textContent) return false;
            sq3.textContent = shape;
            changeShape();
            myArr.push(shape)
        })
        sq4.addEventListener('click',function(){
            if(sq4.textContent) return false;
            sq4.textContent = shape;
            changeShape();
            myArr.push(shape)
        })
        sq5.addEventListener('click',function(){
            if(sq5.textContent) return false;
            sq5.textContent = shape;
            changeShape();
            myArr.push(shape)
        })
        sq6.addEventListener('click',function(){
            if(sq6.textContent) return false;
            sq6.textContent = shape;
            changeShape();
            myArr.push(shape)
        })
        sq7.addEventListener('click',function(){
            if(sq7.textContent) return false;
            sq7.textContent = shape;
            changeShape();
            myArr.push(shape)
        })
        sq8.addEventListener('click',function(){
            if(sq8.textContent) return false;
            sq8.textContent = shape;
            changeShape();
            myArr.push(shape)
        })
        sq9.addEventListener('click',function(){
            if(sq9.textContent) return false;
            sq9.textContent = shape;
            changeShape();
            myArr.push(shape)
        })


        function xWinner(){
            myArr.push('xWins');
                    myArr.length = 0;
                    console.log(myArr);

                    if(p1Shape.textContent == 'x') {
                        overlayPlayerName.textContent = nameLeft.textContent + ' wins!';
                    }
                    else if(p2Shape.textContent == 'x'){
                        overlayPlayerName.textContent = nameRight.textContent + ' wins!';
                    }
                    overlayPlayerWin.style.display="block";
                    
                    window.addEventListener('keydown', function(event){
                        if(event.key === 'Escape'){
                            overlayPlayerWin.style.display='none';
                            playBtn.click();
                        }
                    })
        }

        function oWinner(){
            myArr.push('oWins');
            myArr.length = 0;
            if(p2Shape.textContent == 'o'){
                overlayPlayerName.textContent = nameRight.textContent + ' wins!';
            }
            else if(p1Shape.textContent == 'o'){
                overlayPlayerName.textContent = nameLeft.textContent + ' wins!';
            }
            overlayPlayerWin.style.display="block";

            window.addEventListener('keydown', function(event){
                if(event.key === 'Escape'){
                    overlayPlayerWin.style.display="none";
                    playBtn.click();
                }
            })
        }

        document.getElementById('closeVictoryPopup').addEventListener('click',function(){
            overlayPlayerWin.style.display="none";
            playBtn.click();

        })

        container.addEventListener('click',function(){

            //hide tradeShapes button:
                tradeShapesBtn.style.display="none";

            //Produce reset button:
                playBtn.style.display="block";

            //FOR x:
            //first row
                if(sq1.textContent == 'x' && sq2.textContent == 'x' && sq3.textContent == 'x') {
                    xWinner();                    
                };
            //first column
                if(sq1.textContent == 'x' && sq4.textContent == 'x' && sq7.textContent == 'x') {
                    xWinner();
                };
            //second row
                if(sq4.textContent == 'x' && sq5.textContent == 'x' && sq6.textContent == 'x') {
                    xWinner();
                };
            //third row
                if(sq7.textContent == 'x' && sq8.textContent == 'x' && sq9.textContent == 'x') {
                    xWinner();
                };
            //middle column
                if(sq2.textContent == 'x' && sq5.textContent == 'x' && sq8.textContent == 'x') {
                    xWinner();
                };
            //third column
                if(sq3.textContent == 'x' && sq6.textContent == 'x' && sq9.textContent == 'x') {
                    xWinner();
                };
            //first diagonal
                if(sq1.textContent == 'x' && sq5.textContent == 'x' && sq9.textContent == 'x') {
                    xWinner();
                };
            //second diagonal            
                if(sq7.textContent == 'x' && sq5.textContent == 'x' && sq3.textContent == 'x') {
                    xWinner();
                };
            
            //FOR o:
                //first row
                if(sq1.textContent == 'o' && sq2.textContent == 'o' && sq3.textContent == 'o') oWinner();
            //first column
                if(sq1.textContent == 'o' && sq4.textContent == 'o' && sq7.textContent == 'o') oWinner();
            //second row
                if(sq4.textContent == 'o' && sq5.textContent == 'o' && sq6.textContent == 'o') oWinner();
            //third row
                if(sq7.textContent == 'o' && sq8.textContent == 'o' && sq9.textContent == 'o') oWinner();
            //middle column
                if(sq2.textContent == 'o' && sq5.textContent == 'o' && sq8.textContent == 'o') oWinner();
            //third column
                if(sq3.textContent == 'o' && sq6.textContent == 'o' && sq9.textContent == 'o') oWinner();
            //first diagonal
                if(sq1.textContent == 'o' && sq5.textContent == 'o' && sq9.textContent == 'o') oWinner();
            //second diagonal            
                if(sq7.textContent == 'o' && sq5.textContent == 'o' && sq3.textContent == 'o') oWinner();
            
            //FOR A TIE:
            if(myArr.length == 9 && !myArr.includes('xWins') && !myArr.includes('oWins')){
                alert('Tie!');
                myArr.length = 0;
            }
            })
        
    })();

    
})();

