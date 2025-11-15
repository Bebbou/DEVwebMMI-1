const Canevas = document.getElementById("echoCanvas");
const ctx = Canevas.getContext("2d");

const X = Canevas.width / 2;
const Y = Canevas.height / 2;
const nbCercles = 10;

function dessinerCercle(x, y, rayon, couleur) {
  ctx.beginPath();
  ctx.arc(x, y, rayon, 0, 2 * Math.PI);
  ctx.strokeStyle = couleur;
  ctx.lineWidth = 5; 
  ctx.stroke();
}

function dessinerEcho(maxRayon) {
  const ecart = maxRayon / nbCercles;

  for (let i = 0; i < nbCercles; i++) {
    const rayonActuel = maxRayon - i * ecart;
    ctx.globalAlpha = 0 + i / nbCercles;
    dessinerCercle(X, Y, rayonActuel, "#00CCFF");
  }
  ctx.globalAlpha = 1;
}

function lancerAnimation() {
  ctx.clearRect(0, 0, Canevas.width, Canevas.height);
  const selecteur = document.getElementById("vibrationSelector");
  const maxRayonLu = parseInt(selecteur.value);
  dessinerEcho(maxRayonLu);
}
lancerAnimation();