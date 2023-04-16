const game=()=>{
    let playerScore=0;
    let computerScore=0;
    let moves=0;

    const playGame=()=>{
        // const rockBtn=document.querySelector('.rock');
        // const paperBtn=document.querySelector('.paper');
        // const scissorBtn=document.querySelector('.scissor');

        const rockBtn=document.querySelector('img[src="/Images/Rock.png"]');
        const paperBtn=document.querySelector('img[src="/Images/paper.png"]');
        const scissorBtn=document.querySelector('img[src="/Images/scissor.png"]');

        // const playerOptions=[rockBtn,paperBtn,scissorBtn];
        const playerOptions = document.querySelectorAll('img');
        const computerOptions=['rock','paper','scissor'];

        playerOptions.forEach(option => {
            option.addEventListener('click',function(){
                const playerChoice = this.getAttribute('data-choice');

                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10-moves}`;
                  
  
                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];
                winner(playerChoice,computerChoice);

                if(moves==10){
                    gameover(playerOptions,movesLeft);
                }
            })
        })
    }

    const winner=(player,computer)=>{
        const result=document.querySelector('.result');
        const playerScoreBoard=document.querySelector('.p-count');
        const computerScoreBoard=document.querySelector('.c-count');
        player=player.toLowerCase();
        computer=computer.toLowerCase();

        if(player===computer){
            result.textContent='Tie'
        }
        else if(player=='rock'){
            if(computer == 'paper'){
                result.textContent='Computer Won';
                computerScore++;
                computerScoreBoard.textContent=computerScore;
            }
            else{
                result.textContent='Player Won';
                playerScore++;
                playerScoreBoard.textContent=playerScore;
            }
        }
        else if(player=='paper'){
            if(computer=='rock'){
                result.textContent='Player Won';
                playerScore++;
                playerScoreBoard.textContent=playerScore;
            }
            else{
                result.textContent='Computer Won';
                computerScore++;
                computerScoreBoard.textContent=computerScore;  
            }
        }
        else if(player=='scissor'){
            if(computer=='rock'){
                result.textContent='Computer Won';
                computerScore++;
                computerScoreBoard.textContent=computerScore;
            }
            else{
                result.textContent='Player Won';
                playerScore++;
                playerScoreBoard.textContent=playerScore;
            }
        }
    }



    const gameover=(playerOptions,movesleft)=>{

        const chooseMove=document.querySelector('.move');
        const result=document.querySelector('.result');
        const reloadBtn=document.querySelector('.reload');

        // playerOptions.forEach(option=>{
        //     option.style.display='none';
        // })
        document.querySelectorAll('button').forEach(button => {
            button.style.display = 'none';
          });

        chooseMove.innerText='Game Over Bachoo!!! Chel ja padoo';
        movesleft.style.display='none';

        if(playerScore>computerScore){
            result.style.fontsize='1.8rem';
            result.innerText='You Won The Game 🏆🎉';
            result.style.color='#9900ff';
        }
        else if(playerScore<computerScore){
            result.style.fontsize='1.8rem';
            result.innerText='Computer Won The Game 🤖';
            result.style.color='grey';
        }
        else{
            result.style.fontSize='1.8rem';
            result.innerText='It\'s a Tie 👨‍💻🫱🏻‍🫲🏻🤖';
            result.style.color='Blue';
        }
        reloadBtn.innerText='Restart';
        reloadBtn.style.display='flex';
        reloadBtn.addEventListener('click',function(){
            window.location.reload();
        })
    }

    playGame();
}

game();