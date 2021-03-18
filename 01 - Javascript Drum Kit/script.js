const keys = document.querySelectorAll(".key");

function getKeyCode(event) {
    let keycode;

    const isKeyboard = event.type === "keydown";
    if (isKeyboard) {
        keycode = event.keyCode;
    }else {
        keycode = event.path[1].dataset.key;
       
    }

    return keycode;
}

function playAudio(keycodeAudio) {
    const audio = document.querySelector(`audio[data-key="${keycodeAudio}"]`);
    audio.currentTime = 0;
    audio.play();
}

function playSound(event) {
    let keycodeAudio = getKeyCode(event);

    const key = document.querySelector(`.key[data-key="${keycodeAudio}"]`);


    let keyExists = !key;
    if(keyExists) {
       return;
    }

    playAudio(keycodeAudio);
    addPlayingClass(key);
}

function addPlayingClass(key) {
    key.classList.add('playing');
}

function removePlayingClass(event) {
    event.target.classList.remove('playing');
}

keys.forEach((key) => {
    key.addEventListener('click', playSound);
    key.addEventListener('transitionend', removePlayingClass);

})

window.addEventListener("keydown", playSound);

