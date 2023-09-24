let botGod = document.getElementById(`botGod`)
let imagemGod = document.getElementById(`imagemGod`)
botGod.addEventListener('click', function() {
    if (imagemGod.style.display === 'none'){
        imagemGod.style.display = 'block'
    } else {
        imagemGod.style.display = 'none'
    }
})

let botWe = document.getElementById(`botWe`)
let imagemWe = document.getElementById(`imagemWe`)
botWe.addEventListener('click', function() {
    if (imagemWe.style.display === 'none'){
        imagemWe.style.display = 'block'
    } else {
        imagemWe.style.display = 'none'
    }
})

const audioButton1 = document.getElementById("audioButton1");
const audioButton2 = document.getElementById("audioButton2");
const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");

audioButton1.addEventListener("click", () => {
  if (audio1.paused) {
    audio1.play();
    audioButton1.innerHTML = '<i class="fa-solid fa-pause fa-lg" style="color: White;"></i>';
  } else {
    audio1.pause();
    audioButton1.innerHTML = '<i class="fa-solid fa-play fa-lg" style="color: White;"></i>';
  }
});

audioButton2.addEventListener("click", () => {
  if (audio2.paused) {
    audio2.play();
    audioButton2.innerHTML = '<i class="fa-solid fa-pause fa-lg" style="color: White;"></i>';
  } else {
    audio2.pause();
    audioButton2.innerHTML = '<i class="fa-solid fa-play fa-lg" style="color: White;"></i>';
  }
});