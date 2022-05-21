const dino = document.querySelector('.dino');

function handleKeyup(event){
    if (event.keyCode ===32){
        console.log('Pressionou espaço!');
    }
}
function jump(){
    let position = 0;

    let upInterval = setInterval(() =>{
        if (position >= 150){
            clearInterval(upInterval);
            let downInterval =  setInterval(() => {
                if(position <=0){
                    clearInterval(downInterval)
                }else{
                position -= 20;
                dino.style.botton = position + 'px';
                }
                
            },20);

        }else{
        position += 20;
        dino.style.botton = position + 'px';
        }

    },20);

    
}


document.addEventListener('keyup', handleKeyup);

//site keicode.info, pode pressionar as teclas e será msotrado o codigo