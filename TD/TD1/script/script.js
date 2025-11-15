const MIN = 50;
const MAX = 1200;

function Update() {
    const image = document.getElementById('image');
    const BoutonAgrandir = document.getElementById('btnAgrandir');
    const BoutonReduire = document.getElementById('btnReduire');
        BoutonAgrandir.disabled = image.width >= MAX;
        BoutonReduire.disabled = image.width <= MIN;
}

function agrandir() {
    const image = document.getElementById('image');
    const largeurActuelle = image.width;
    const hauteurActuelle = image.height;
    const nouvelleLargeur = largeurActuelle * 1.10;
    
    if (nouvelleLargeur > MAX) {
        alert('Taille maximale atteinte : ' + MAX + 'px');
        return;
    }
    
    image.width = nouvelleLargeur;
    image.height = hauteurActuelle * 1.10;
    Update();
}

function reduire() {
    const image = document.getElementById('image');
    const largeurActuelle = image.width;
    const hauteurActuelle = image.height;
    const nouvelleLargeur = largeurActuelle * 0.90;
    
    if (nouvelleLargeur < MIN) {
        alert('Taille minimale atteinte : ' + MIN + 'px');
        return;
    }
    
    image.width = nouvelleLargeur;
    image.height = hauteurActuelle * 0.90;
    Update();
}

const INITIALE = 400;

function Slider(valeur) {
    const image = document.getElementById('image');
    const affichagePourcentage = document.getElementById('affichagePourcentage');
    const pourcentage = parseInt(valeur);
    const nouvelleLargeur = (INITIALE * pourcentage) / 100;
    const nouvelleHauteur = (INITIALE * pourcentage) / 100;
    image.width = nouvelleLargeur;
    image.height = nouvelleHauteur;
    
 
    affichagePourcentage.textContent = pourcentage + '%';
    Update();
}

function resetImage() {
    const image = document.getElementById('image');
    const sliderTaille = document.getElementById('sliderTaille');
    const affichagePourcentage = document.getElementById('affichagePourcentage');
    
    image.width = INITIALE;
    image.height = INITIALE;
    sliderTaille.value = 100;
    affichagePourcentage.textContent = '100%';
    Update();
}
;