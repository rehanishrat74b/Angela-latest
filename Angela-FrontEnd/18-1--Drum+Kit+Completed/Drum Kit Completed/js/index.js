document.querySelectorAll(".drum").forEach(drum => {
  drum.addEventListener("click", function () {
    /*this.classList.add("active");

    setTimeout(() => {
      this.classList.remove("active");
    }, 100); */// 100ms effect   

    //console.log(this.classList + "[data-key]");
    playDrum(this);
    playSound(this.getAttribute("data-key"));

  });
});

function playDrum(drumElement) {
  drumElement.classList.add("active");

  setTimeout(() => {
    drumElement.classList.remove("active");
  }, 100); // 100ms effect

}

document.body.addEventListener("keydown", function (event) {
  var keyList = ["w", "s", "d", "f", "h", "i", "j"];
  if (keyList.includes(event.key)) {
    key = event.key.toLowerCase();
    var drum = document.body.querySelector(".drum." + key);
    /* or
      const drum = document.querySelector(`.drum[data-key="${key}"]`);
    */
    playDrum(drum);
    playSound(key);
  }

});

function playSound(key) {

  var soundFile = "sounds/";
  switch (key) {
    case "w":
      soundFile += "tom-1.mp3";
      break;
    case "s":
      soundFile += "tom-2.mp3";
      break;
    case "d":
      soundFile += "tom-3.mp3";
      break;
    case "f":
      soundFile += "tom-4.mp3";
      break;
    case "h":
      soundFile += "crash.mp3";
      break;
    case "i":
      soundFile += "kick-bass.mp3";
      break;
    case "j":
      soundFile += "snare.mp3";
      break;

    default:
      // something to default to
      soundFile += "tom-1.mp3";
      break;
  }

  var sound = new Audio(soundFile);
  sound.play();
}