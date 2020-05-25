var d = document.querySelectorAll(".btn").length;

//For Button LiSteners
for (var i = 0; i < d; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    makeSound(this.innerHTML);
  });
}
//For Keyboard Listeners
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case "7":
      var tom1 = new Audio("crash.mp3");
      tom1.play();
      break;
    case "8":
      var tom2 = new Audio("kick-bass.mp3");
      tom2.play();
      break;
    case "9":
      var tom3 = new Audio("snare.mp3");
      tom3.play();
      break;
    case "4":
      var tom4 = new Audio("tom-1.mp3");
      tom4.play();
      break;
    case "5":
      var tom5 = new Audio("tom-2.mp3");
      tom5.play();
      break;
    case "6":
      var tom6 = new Audio("tom-3.mp3");
      tom6.play();
      break;
    case "2":
      var tom7 = new Audio("tom-4.mp3");
      tom7.play();
      break;
  }
}
