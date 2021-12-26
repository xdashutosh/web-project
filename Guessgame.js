
const randno=Math.trunc(Math.random()*20)+1;
// document.querySelector('.btn').textContent=randno;

let score=10;


      
    document.querySelector('.btn').addEventListener('click',()=>{

        const guess_value=Number(document.querySelector('.box').value);


        if (score>=1) {
            
        

        if (guess_value<randno && guess_value>0) {
            document.querySelector('#hints').textContent="⬇️To Low! Try Again!";
            score= score-1;
            document.querySelector('#totalscore').textContent=score;
        }
        else if(guess_value>randno &&guess_value<=20)
        {
            document.querySelector('#hints').textContent="⬆️To high! Try Again!";
            score= score-1;
            document.querySelector('#totalscore').textContent=score;

        }
        else if (guess_value===randno)
        {
            document.querySelector('#hints').textContent="😃Congrats! You Guessed it!";
         document.querySelector('#highscore').textContent=score;
         document.querySelector('body').style.backgroundColor="green";
        document.querySelector('#hints').style.backgroundColor="green";
        document.querySelector('#hints').style.color="black";
        document.querySelector('#gamesec').style.boxShadow="7px 7px 12px black ,-7px -7px 12px black";
        document.querySelector('#hints').style.fontSize="30px";
        

            

        }

        
        else{
            document.querySelector('#hints').textContent="🛑NOT IN RANGE!";
            score=score-1;
            document.querySelector('#totalscore').textContent=score;
        }

       
    }
    else{
        document.querySelector('#hints').textContent="😞YOU LOST!";
        document.querySelector('body').style.backgroundColor="red";
        document.querySelector('#hints').style.backgroundColor="red";
        document.querySelector('#hints').style.color="white";



    }
    
    });