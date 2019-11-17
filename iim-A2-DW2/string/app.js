// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String

/**
 * Exercice 1 :
 * Affichez la lettre à la position 2
 */
const char1 = "Bonjour";


console.log(char1[1]) ; //Affiche O

/**
 * Exercice 2 :
 * Affichez la taille de cette string
 */
const char2 = "Hello my name is ";

console.log(char2.length) ; //Affiche le nombre de caractères

/**
 * Exercice 3 :
 * Créez un tableau contenant les mots de cette phrase
 * Exemple :
 *  string -> "Hi John Doe"
 *  expected -> ["hi", "John", "Doe"]
 */

const char3 = "Hello my name is ";
const char3bis = char3.split(" ") ;
console.log(char3bis) ;




/**
 * Exercice 4 :
 * Concaténez les chaines de caractères entre elle
 */
const word1 = "Oui ";
const word2 = "ou Non";
console.log(word1 + word2) ;

/**
 * Exercice 4 :
 * Insérez une variable dans la variable phrase et affichez phrase
 * Remarque : Ne pas concaténer
 */
const age = 10;
const phrase = `Mon âge est ${age}` ;
console.log(phrase);


/**
 * Exercice 5 :
 * Supprimez les 5 derniers charactères de la chaine
 */
const char5 = "les prochaines caractères";
char5.substr(0, char5.length - 5) ;




/**
 * Exercice 6 :
 * Remplacer le mot "oranges" par "bananes", en utilisant une fonction bien sûr 😅
 */
const char6 = "j\'aime les oranges";

console.log(char6.replace('oranges', 'bananes'));


/**
 * Exercice 7 :
 * Trouvez la position du mot "orange"
 */
const char7 = "des oranges";
char7.search('oranges') ;
/**
 * Exercice 8 :
 * Vérifier si la première phrase contient le mot "baleine"
 */
const char8 = "Baleine bleu";
console.log(char8.toLowerCase().includes('baleine')) ;




/**
 * Exercice 9 :
 * Affichez cette phrase en minuscule, puis en majuscule
 */
const char9 = "Bonjour Je Suis Dan, Je Viens Du Sud !";
console.log('minuscule : ', char9.toLowerCase()) ;
console.log('minuscule : ', char9.toUpperCase()) ;

/**
 * Exercice 10 : Bonus
 * Effacez les espaces inutiles
 */
const char10 = '   Supprimez les espaces avant et après cette phrase    ';
//console.log('char 10 : ', char10.trim()) ;
console.log(char10.trim()) ; //Supprime les blancs en début et fin de chaîne

/**
 * Exercice 11 : Bonus
 * Écrire cette phrase en :
 * - SnakeCase
 * - Kebab-case
 * - CamelCase
 */

c10 =char10.trim() ;

console.log(c10.replace(' ', '-')) ;


/*
const char10bis = char10.trim().split(" ");
console.log(char10bis)

const c10 = char10bis.split();
console.log(c10)*/