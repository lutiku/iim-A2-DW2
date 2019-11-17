/**
 * Exercice 1 :
 * créer une fonction avec un argument, qui affiche l’argument
 */

function test(argument) {
    console.log(argument) ;
}

test('salut ça va ') ;

/**
 * Exercice 2 :
 * créer une fonction qui prend un nombre en argument et qui le multiplie par deux et retourne le résultat.
 */
function m(nombre) {

    return +nombre * 2 ;
} ;
console.log(m(4) );
/**
 * Exercice 3 :
 * créer une fonction qui détermine si le nombre passé en argument est pair ou impaire.
 */



function p(i)
{
    return i % 2 ? "impair" : "pair" ;
}
console.log(p(3)) ;

/**
 * Exercice 4 :
 * Créer une fonctionne qui s’invoque elle-même
 */

(function self(name) {
    console.log('bonjour ', name);
})
('moi') ;

/**
 * Exercice 5 :
 * Affichez la liste des arguments dans un tableau, sans directement utilisez les arguments en eux même
 */

function t(a,b,c)
{
    console.log(a,b,c);
}
t(2,4,5) ;

/**
 * Exercice 6 :
 * Reproduire la suite de fibonnachi : 1-1-2-3-5-8-13-21
 */
function fibonacci(nb) {
    if(nb<2)
    {
        return nb ;
    }
    console.log('fib : ', nb) ;
    return fibonacci(nb-1) + fibonacci(nb-2) ;
}
console.log(fibonacci(12)) ;