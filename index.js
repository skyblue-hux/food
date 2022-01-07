var begin = document.getElementById("beginning");
var eraIcons = document.getElementsByClassName("era_icons");

document.addEventListener("scroll", function(e) {
  if (pageYOffset >= 90) {
    for (var i = 0; i < 2; i++) {
      eraIcons[i].style.position = "fixed";
      eraIcons[i].style.top = 0;
    }
    eraIcons[0].style.animation = "icon0_move 4s infinite";
    eraIcons[1].style.animation = "icon1_move 4s infinite";
  }
})
