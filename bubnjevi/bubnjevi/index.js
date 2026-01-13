
for(let i = 0; i < document.querySelectorAll('.drum').length; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function() {
    let innerHTML = this.innerHTML;
    makeSound(innerHTML);
    });
    
}

function makeSound(key) {
    switch (key) {
        case 'w':   
            playTom1();
            break;
        case 'a':
            playTom2();
            break;
        case 's':
            playTom3();
            break;
        case 'd':
            playTom4();
            break;
        case 'j':
            playSnare();
            break;
        case 'k':
            playCrash();
            break;
        case 'l':
            playKickBass();
            break;
        default:
            console.log(innerHTML);
    }

var audio = new Audio('sounds/tom-1.mp3');
audio.play();