/**
 * Exercice 1 :
 * Écrire un code qui affiche en fonction de l’âge, majeur ou mineur.
 */

const age = prompt('ton age ? ') ;

if(age >= 18 )
    {
        alert ('majeur') ;
    }
else
    {
        alert('mineur') ;
    }
/**
 * Exercice 2 :
 * Ecrire un code qui affiche en fonction de l’heure (entre 0 et 24) : Bon réveil (entre 0 et 8), Bonjour (entre 8 et 17),
 * Bonsoir (entre 17 et 22) et Bonne nuit (entre 22 et 8) et par défaut il affichera  Heuu.
 */

/*
 const heure = prompt('quelle heure est-il ?')

switch (true)
{
    case(heure >=0 && <= 8):
        console.log('Bon réveil') ;
        break ;

    case(heure >=8 && <=17) :
        console.log('Bonjour');
        break ;
    case(heure >=17 && <=22) :
        console.log('Bonsoir') ;
        break ;

    case(heure >=22 && <=8) :
        console.log('Bonne nuit') ;
        break ;
}

 */

/**
 * Exercice 3 :
 * Même que exercice 1, mais utilisé les conditions ternaires
 */

const agee = +prompt('ton age ? ') >= 18 ? alert('majeur') : alert('mineur') ;
