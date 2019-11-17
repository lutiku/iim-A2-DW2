// https://developer.mozilla.org/fr/docs/Web/Events

/**
 * Exercice 1 :
 * Ajoutez au document un event listener au click, compter et affichez le nombre de click
 */


window.addEventListener('DOMContentLoaded', function()
{
    const scare = document.getElementById('test') ;
    scare.addEventListener("click", function( event )
    {
        // Affiche le compte courant de clics à l'intérieur de la div cliquée
        event.target.innerHTML = "click count: " + event.detail;
    }, false);

}) ;

/**
 * Exercice 2 :
 * Ajoutez au document un event listener lorsqu'on copy, affichez une alert avec le contenu de la copy
 */
window.addEventListener('copy', (event) => {
    console.log('copy action initiated')
    navigator.clipboard.readText().then(clipText => document.getElementById("text").innerText = clipText);
    alert(clipText) ;
});


/**
 * Exercice 3 :
 * Ajoutez au document un event listener lorsqu'on tape sur le clavier, affichez le contenu de notre frappe dans la console
 */
/*
document.addEventListener('keydown', logKey);

function logKey(e) {
    log.textContent += ` ${e.code}`;
    alert(`${e.code}`)
}*/

/**
 * Exercice 4 :
 * Ajoutez au document un event listener lorsqu'on scroll, affichez la position du scroll
 * - Affichez lorsqu'on arrive tout en bas et tout en haut
 * - Lorsqu'on arrive tout en bas, remontez automatiquement tout en haut
 */
/*Remonter en Haut de page */
document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = function(ev) {
        document.getElementById("cRetour").className = (window.pageYOffset > 100) ? "cVisible" : "cInvisible";
    };
});

/*Afficher la position du scroll*/
function myFunction() {
    var elmnt = document.getElementById("myDIV");
    var x = elmnt.scrollLeft;
    var y = elmnt.scrollTop;
    document.getElementById ("demo").innerHTML = "Scroll Horizontal: " + x + "px<br>Scroll Vertical: " + y + "px";
}