var roundScore, scores, activePlayer;

scores = [0, 0];
activePlayer = 0;
roundScore = 0;
document.querySelector('#dice-1').style.opacity = 0;
document.querySelector('#player-1-turn').style.display = 'none';



// function random number


document.querySelector('#roll-dice').addEventListener('click', function () {

    document.querySelector('#dice-1').style.opacity = 1;

    var dice = Math.floor((Math.random() * 6) + 1);


    document.querySelector('#dice-1').src = 'dice-' + dice + '.png';


    if (dice !== 1) {

        roundScore += dice;

        document.querySelector('#current-' + activePlayer).textContent = roundScore;

    } else {

        if (activePlayer === 0) {

            document.querySelector('#player-0-turn').style.display = 'none';
            document.querySelector('#player-1-turn').style.display = 'block';
        } else if (activePlayer === 1) {

            document.querySelector('#player-1-turn').style.display = 'none';
            document.querySelector('#player-0-turn').style.display = 'block';
        }



        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;



        roundScore = 0;

        document.querySelector('#current-0').textContent = '0';
        document.querySelector('#current-1').textContent = '0';



    }


});









// function hold 



document.querySelector('#hold').addEventListener('click', function () {

    document.querySelector('#dice-1').style.opacity = 0;
    scores[activePlayer] += roundScore;
    
    if (scores[activePlayer] >= 100) {

        document.querySelector('#player-0-turn').style.opacity = 0;
        document.querySelector('#player-1-turn').style.opacity = 0;
        
        document.querySelector('#player' + activePlayer).innerHTML = "<font color='red'>WINNER</font>";
        document.querySelector('#botom').style.opacity = 0;
        document.querySelector('#roll-dice').style.cursor = 'auto';
        document.querySelector('#hold').style.cursor = 'auto';
        
    }

    document.querySelector('#player' + activePlayer + '-score').textContent = scores[activePlayer];
    document.querySelector('#current-' + activePlayer).textContent = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    if (activePlayer === 1) {

        document.querySelector('#player-0-turn').style.display = 'none';
        document.querySelector('#player-1-turn').style.display = 'block';
    } else if (activePlayer === 0) {

        document.querySelector('#player-1-turn').style.display = 'none';
        document.querySelector('#player-0-turn').style.display = 'block';
    }




});



//function start a new game


document.querySelector('#new-game').addEventListener('click', function () {

    document.querySelector('#player0-score').textContent = '0';
    document.querySelector('#player1-score').textContent = '0';
    scores = [0, 0];

    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#player-0-turn').style.display = 'block';
    document.querySelector('#player-1-turn').style.display = 'none';
    document.querySelector('#dice-1').style.opacity = 0;
    roundScore = 0;
    activePlayer = 0;
    document.querySelector('#roll-dice').style.cursor = 'pointer';
    document.querySelector('#hold').style.cursor = 'pointer';
    document.querySelector('#player0').textContent = 'PLAYER 1';
    document.querySelector('#player1').textContent = 'PLAYER 2';
    document.querySelector('#botom').style.opacity = 1;

})
