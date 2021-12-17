reload = document.querySelector('.reload');
play = document.querySelector('.play');
thanos = document.querySelector('.thanos');
mario = document.querySelector('.mario');
gamover = document.querySelector('.gamover');
scoreCont = document.querySelector('.scoreCont');

const gameStart = new Audio('./tracks/main-track.mp3')
gameStart.loop=true;
gameStart.volume=0.5;
[play, reload].forEach(element => {
    addEventListener('click', letsplay = () => {
        const jump = new Audio('./tracks/jump.mp3')
        const game_over= new Audio('./tracks/game-over.wav');
        gameStart.play();
        cross = true;
        score = 0;
        thanos = document.querySelector('.thanos');
        thanos.classList.add('thanosanim');
        play.style.visibility = "hidden";
        document.onkeydown = (e) => {
            if (e.keyCode == 38) {
                mario = document.querySelector('.mario');
                mario.classList.add('mariojump');

                setTimeout(() => {
                    mario.classList.remove('mariojump');
                }, 900)

            }
            else if (e.keyCode == 39) {
                mario = document.querySelector('.mario');
                marioX = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
                mario.style.left = marioX + 50 + "px";
            }
            else if (e.keyCode == 37) {
                mario = document.querySelector('.mario');
                marioX = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
                mario.style.left = (marioX - 50) + "px";
            }
        };


        setInterval(() => {
            mario = document.querySelector('.mario');
            thanos = document.querySelector('.thanos');

            marioX = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
            marioY = parseInt(window.getComputedStyle(mario, null).getPropertyValue('top'));

            thanosX = parseInt(window.getComputedStyle(thanos, null).getPropertyValue('left'));
            thanosY = parseInt(window.getComputedStyle(thanos, null).getPropertyValue('top'));

            offsetX = Math.abs(marioX - thanosX);
            offsetY = Math.abs(marioY - thanosY);

            if (offsetX < 70 && offsetY < 100) {
                gameStart.pause();
                game_over.play();
                thanos = document.querySelector('.thanos');
                gamover = document.querySelector('.gamover');
                reload = document.querySelector('.reload');
                reload.style.visibility = "visible";
                gamover.style.visibility = "visible";
                thanos.classList.remove("thanosanim");
            }
            else if (offsetX < 93 && cross) {
                jump.play();
            
                score += 1;
                updateScore(score);
                cross = false;
                setTimeout(() => {
                    cross = true;
                }, 1000);
            }

        }, 10);

        reload.addEventListener('click', () => {
            gamover = document.querySelector('.gamover');
            reload.style.visibility = "hidden";
            gamover.style.visibility = "hidden";
            scoreCont = document.querySelector('.scoreCont');
            scoreCont.innerHTML = "Your Score : " + 0;

            thanos = document.querySelector('.thanos');
                thanosSpeed = parseFloat(window.getComputedStyle(thanos, null).getPropertyValue('animation-duration'));  newthanosSpeed = 3;
                thanos.style.animationDuration = 2 + 's';
        })


        function updateScore(score) {
            scoreCont = document.querySelector('.scoreCont');
            scoreCont.innerHTML = "Your Score : " + score;
        }
        setInterval(() => {
    
            if(score == '10'){
                thanosSpeed = parseFloat(window.getComputedStyle(thanos, null).getPropertyValue('animation-duration'));
                thanos = document.querySelector('.thanos');
                thanos.classList.remove('thanosanim');
                thanos.classList.add('thanosanim');
                newthanosSpeed =   thanos.style.animationDuration = 1.8 + 's';
                       
            }
           else if(score == '20'){
                thanosSpeed = parseFloat(window.getComputedStyle(thanos, null).getPropertyValue('animation-duration'));
                thanos = document.querySelector('.thanos');
                thanos.classList.remove('thanosanim');
                thanos.classList.add('thanosanim');
                newthanosSpeed =   thanos.style.animationDuration = 1.6 + 's';
                       
            }
           else if(score == '30'){
                thanosSpeed = parseFloat(window.getComputedStyle(thanos, null).getPropertyValue('animation-duration'));
                thanos = document.querySelector('.thanos');
                thanos.classList.remove('thanosanim');
                thanos.classList.add('thanosanim');
                newthanosSpeed =   thanos.style.animationDuration = 1.4 + 's';
                       
            }
           else if(score == '40'){
                thanosSpeed = parseFloat(window.getComputedStyle(thanos, null).getPropertyValue('animation-duration'));
                thanos = document.querySelector('.thanos');
                thanos.classList.remove('thanosanim');
                thanos.classList.add('thanosanim');
                newthanosSpeed =   thanos.style.animationDuration = 1.2 + 's';
                      
            }
           else if(score == '50'){
                thanosSpeed = parseFloat(window.getComputedStyle(thanos, null).getPropertyValue('animation-duration'));
                thanos = document.querySelector('.thanos');
                thanos.classList.remove('thanosanim');
                thanos.classList.add('thanosanim');
                newthanosSpeed =   thanos.style.animationDuration = 1.0 + 's';
                      
            }
            
        }, 30);
        
    })
})


