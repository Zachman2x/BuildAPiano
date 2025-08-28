const keys = document.querySelectorAll('.key');
const WHITE_KEYS = ['a', 's', 'd', 'f', 'j', 'k', 'l'];
const BLACK_KEYS = ['w', 'e', 'r', 'i', 'o'];

const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

keys.forEach((key) => {
  key.addEventListener('click', () => playNote(key));
});

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add('active'); 
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active');
  });
}


// Key Trigger Event
document.addEventListener('keydown', (e) => {
  // Get the key that triggered the event
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  //Hot cross buns
  if(key == 'q'){
    playNote(whiteKeys[2]);
    setTimeout(1500);
    playNote(whiteKeys[1]);
    setTimeout(1500);
    playNote(whiteKeys[0]);
    setTimeout(1500);
    playNote(whiteKeys[2]);
    setTimeout(1500);
    playNote(whiteKeys[1]);
    setTimeout(1500);
    playNote(whiteKeys[0]);
    setTimeout(1500);
    playNote(whiteKeys[0]);
    setTimeout(1500);
    playNote(whiteKeys[0]);
    setTimeout(1500);
    playNote(whiteKeys[1]);
    setTimeout(1500);
    playNote(whiteKeys[1]);
    setTimeout(1500);
    playNote(whiteKeys[1]);
    setTimeout(1500);
    playNote(whiteKeys[2]);
    setTimeout(1500);
    playNote(whiteKeys[1]);
    setTimeout(1500);
    playNote(whiteKeys[0]);
  }

  if (whiteKeyIndex > -1) {
    playNote(whiteKeys[whiteKeyIndex]);
  }

  if (blackKeyIndex > -1) {
    playNote(blackKeys[blackKeyIndex]);
  }
  // If the key is being held down, don't play the note again
  if (e.repeat) {
    return;
  }
});

