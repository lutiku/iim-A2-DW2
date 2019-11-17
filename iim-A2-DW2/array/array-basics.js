/**
 * Exercice 1
 * Créez un tableau
 */
let array = [] ;
/**
 * Exercice 2
 * Créez un tableau avec des valeurs initiales : "orange", "red", "pink", "blue"
 */
let array2= new Array("orange", "red", "pink", "blue") ;
/**
 * Exercice 3
 * Créez un tableau ramplie de false et un maximum de 10 entrées
 */
let array3= new Array(10).fill(false) ;
/**
 * Exercice 4
 * Créez un tableau et ajoutez-y plusieurs valeurs
 */
let array4 =[] ;
array.push(1) ;
/**
 * Exercice 5
 * Créez un ntableau et affichez la valeur deuxième valeur
 */
let array5= [1,2] ;
array5[1] ;
array5[array.length-1] ;
/**
 * Exercice 6
 * Créez un tableau et ajoutez-y 10 éléments et supprimez la deuxième valeur
 */

let array6= new Array(10).fill(1) ;
console.log(array6) ;
array6.splice(1,1);
console.log(array6) ;

/**
 * Exercice 7 :
 * Créez un tableau et ajoutez-y 10 éléments et supprimez la première valeur
 */
let array7= new Array(10).fill(1) ;
console.log(array7);
array7.shift() ;
console.log(array7) ;
/**
 * Exercice 8 :
 * Créez un tableau et ajoutez-y 10 éléments et supprimez la dernière valeur
 */
let array8= new Array(10).fill(1) ;
console.log(array8)
array8.pop() ;
console.log(array8) ;
/**
 * Exercice 9 :
 * Créez une matrice (un tableau à deux dimension x et y) et initialisez les valeurs de x et y à 0
 */
let array9 = [[0,0],[0,0], [0,0]] ;

/**
 * Exercice 10 :
 * Créez une matrice (un tableau à deux dimension x et y) et affichez toute les valeurs
 */
let array10 = [[0,1],[2,3], [4,5]] ;

for (let i =0 ; i<= array10.length -1 ; i++)
{
    console.log('ma position : ', array10[i]) ;
}

array10.forEach(funtion)

/**
 *Exercice 11 : Bonus
 * Immutabilité
 */

const arr1 = ['Tab 1'] ;
const arr2 = arr1 ;
arr1.splice(0,1) ; //arr1 = []
console.log('arr 1 : ', arr1) ; //[]
console.log('arr 2 : ', arr2) ; //[]

//const arr1 = ['Tab 1'
//