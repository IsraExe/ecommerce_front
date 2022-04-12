const containerDeRolagem = document.querySelector('#carousel-rolagem')
const botaoProximo = document.getElementById('slide-proximo')
const botaoAnterior = document.getElementById('slide-anterior')

// Rolagem através de botão
botaoProximo.addEventListener('click', () => {
    containerDeRolagem.scrollBy({ 
        left: 400,
        behavior: 'smooth' 
    })
})

botaoAnterior.addEventListener('click', () => {
    containerDeRolagem.scrollBy({ 
        left: -400,
        behavior: 'smooth' 
    })
})



// Permite rolagem através do botão de rolagem do mouse
containerDeRolagem.addEventListener('wheel', event => {
    if(event.deltaY < 0) {
        event.target.scrollBy({ 
            left: 400,
            behavior: 'smooth' 
        })
    } else {
        event.target.scrollBy({ 
            left: -400,
            behavior: 'smooth' 
        })
    }
})

// Permite a rolagem através do toque em dispositivos móveis
containerDeRolagem.addEventListener('touchstart', handleTouchStart, false);        
containerDeRolagem.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches 
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            containerDeRolagem.scrollBy({ 
                left: 400,
                behavior: 'smooth' 
            })
        } else {
            containerDeRolagem.scrollBy({ 
                left: -400,
                behavior: 'smooth' 
            })
        }                       
    } 
    

    /* resetar valores */
    xDown = null;
    yDown = null;                                             
};