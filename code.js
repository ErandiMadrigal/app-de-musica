var indice = 0;
onEvent("canciones", "input", function( ) {
  var cancion = getText("canciones");
  if (cancion  == "dance with me") {
    indice = 1;
  } else if ((cancion == "ocean drive")) {
    indice = 2;
  } else if ((cancion == "hadal ahbek")) {
    indice = 3;
  }
});
onEvent("anterior", "click", function( ) {
  indice = indice - 1;
  if (indice == 1) {
    setProperty("canciones", "text", "text");
  }
});
onEvent("siguiente", "click", function( ) {
  indice = indice + 1;
});
onEvent("pausa", "click", function( ) {
  stopSound();
});
onEvent("play", "click", function( ) {
  if (indice == 1) {
    playSound("assets/dance with me .mp3", false);
    setImageURL("image1", "https://i.pinimg.com/originals/1f/28/0d/1f280db52b27c1209fa7bf49aa37f545.gif");
  } else if ((indice == 2)) {
    playSound("assets/ocean drive.mp3", false);
    setImageURL("image1", "https://media1.tenor.com/images/5b6eeb4365ad1132e5ed5175a17bf6d6/tenor.gif");
  } else if ((indice == 3)) {
    playSound("assets/hadal ahbek.mp3", false);
    setImageURL("image1", "https://64.media.tumblr.com/4a02982f2498b37db7a051e8a7043373/tumblr_oa7cmgoRJT1tfv6zjo1_500.gifv");
  }
});
