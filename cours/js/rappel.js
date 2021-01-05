//Les boites de dialogue:
//alert('');
//confirm('');
//prompt('');

//Affichage console
/*
console.log()
*/

//Déclaration de variable:
var maBoite; // le mot clé var permet de déclarer une variable, on peut l'appeler comme on veut.

maBoite = 10; // Affectation de valeur
monAutreBoite = 'bonjour'; 

//déclarer et affecter plusieurs variables en mm temps:
let prenom = 'Harry',
    nom = "Potter",
    profession = "sorcier"; // on peut déclarer plusieurs variables en mm temps avec un seul let. il suffit de les séparer par une virgule, et finir par un ;
document.write(prenom); // affiche Harry

let message = "Bonjour ";
message += "tout le monde";
//le += va ajouter une valeur sans remplacer le contenu de l'autre
document.write(message); // Affiche "Bonjour tout le monde"

// fonction prédéfinie typeof() permet de vérifier le type d'une variable
document.write(typeof(message)); // String 
// il existe plusieurs types de variables: string, number, boolean, array

const TAUX = 20; // Par convention les constantes s'écrivent en majuscule
//TAUX = 17; // renvoie une erreur
document.write("<br>");

// Exercice :
// L'internaute met dans son panier 0.8kg de pommes et 0.7kg de poires.
// Vous déclarez des variables, une pour chaque fruit, une pour chaque poids.
// Puis vous affichez la phrase "Votre panier contient des pommes et des poires pour un poids total de 1.5kg." où les fruits et le poids sont des variables.
let monFruit1 = "pommes",
    monFruit2 = "poires",
    poids1 = 0.8,
    poids2 = 0.7,
    poidsTotal = poids1 + poids2; // renvoi 1.5

document.write("votre panier contient des " + monFruit1 + " et des " + monFruit2 + " pour un poids total de " + poidsTotal + " kg.<br>");

//Comparaison avec == et === :
let varA = 1, //number
    varB = "1"; //string

if (varA == varB) {
    document.write("varA est égal à varB en VALEUR uniqument<br>");
} 

if(varA === varB) {
    document.write("varA est égal à varB en VALEUR et en TYPE<br>");
} else {
    document.write("varA est différent de varB en VALEUR et/ou en TYPE <br>");
}

// = le simple égal est réservé à l'affectation de valeur
// == le double égal va comparer la valeur
// === le triple égal va comparer la valeur et le type de variable

//Condition ternaire:
//La syntaxe ternaire est une autre syntaxe du if...else.
let voiture = "bmw";
let origine = (voiture == "bmw") ? "origine allemande <br>" : "autre origine <br>"; 

document.write(origine);
// Dans la ternaire, le "?" remplace le "if", les ":" remplacent le "else". Si la condition est vraie, on affecte à origine la premiere expression, sinon la seconde.

//isNaN() :
//NaN pour Not a Number. C'est utilisé pour réprésenter une quantité qui n'est pas un nombre.
//exemple : 2 * "lettres" ;  ne peut s'effecctuer et est NaN
console.log(2 * "lettres"); // affiche NaN

let age_membre = "18"; // string
if (isNaN(age_membre)) { // cette fonction vérifie si la variable n'est pas un nombre après conversion. Ici la condition est fausse car "18" est bien un nombre apres conversion
    document.write("ce n'est pas un nombre <br>")
} else {
    document.write("C'est un nombre <br>");
}

// Exercice :
// Demandez l'âge de l'internaute dans un prompt.
// Si la réponse est vide (on compare avec des quotes vides sans espace), on affiche "Vous n'avez pas répondu".
// Si la réponse n'est pas nombre, on affiche "Vous n'avez pas indiqué un nombre."
// Si la réponse est valide, on affiche "Vous avez indiqué avoir X ans." où X est l'âge de l'internaute.

//let age = prompt('Quel est votre age ?');

// if (age == "" || age == null) {
//     document.write("Vous n'avez pas répondu <br>");
// } else if (isNaN(age)){
//     document.write("Vous n'avez pas indiqué un nombre. <br>");
// } else {
//     document.write("Vous avez indiqué avoir " + age + " ans <br>" );
// }

//Boucle While
var z = 0;
while (z <= 5) {
    document.write(z + '---');
    z++;
}
document.write("<hr>");
//Exercice: Retirer les tirets à la fin (derriere le chiffre 5)
document.write("version Diana <br>");
var z = 0;
while (z <= 4) {
    document.write(z + "---");
    z++;
    if(z==5){
        document.write(z);
    }
}
document.write("<hr>");
document.write("version Omar <br>");
var z = 0;
while (z <= 5) {
    if (z < 5) {
        document.write(z + "---");
    } else {
        document.write(z);
    }
    z++
}
document.write("<hr>");
document.write("version Zeineb <br>");

var z = 0;
while(z <= 5) {
    if (z != 5) {
        document.write(z + "---");
    }else {
        document.write(z);
    }
    z++;
}
document.write("<br>");
document.write("version Zeineb bis <br>");
var z = 0;
while (z <= 5) {
    if (z === 5)  {
        document.write(z);
    }else{
        document.write(z+ "---");
    }
    z++;
}

//Exercice : stocker toutes les couleurs recueillies dans un prompt et ne les afficher que lorsque l'utilisateur aura écrit "stop"

//on commence par créer nos variables (ici on a besoin de deux variables)
// -une pour le prompt
//var color = prompt("Veuillez saisir une couleur ou écrivez stop");
// -une pour stocker les couleurs
var stock = "";

//mise en place de la boucle avec des conditions à l'intérieur
// while(true) { // boucle infinie
//     if (color != "stop") {
//         stock += color + '<br>';
//         color = prompt("Saisissez une AUTRE couleur");
//     } else {
//         break; // met fin à la boucle infinie
//     }
// }
// document.write("Liste de toutes les couleurs : <br>" + stock);

//La boucle while(true): s'arrete avec, à l'intérieur, une condition qui déclenche un "break" qui permet de sortir de la boucle.
document.write("<hr>");
//Version Amal
// var color="";
// var stock="";
// var arret=true;
// while(arret){
//     if(color!="stop"){
//         stock+=color+" ";
//        color=prompt("donner une couleur");
//     }else{
//           arret=false;
//     }
// }
// document.write(stock);

//Boucle imbriquée
document.write("<table border=5 style='border-color: blue'<tr>");
for(var z=1; z <= 100 ; z+=10) { // incrémenter pour les lignes (10 lignes) par paliers de 10
    console.log(z); // 1 - 11 - 21 - 31 - 41 - 51 - 61 -71 ... jusqu'à 100
    for(var m=z; m <= z+9; m++) { // boucle des cellules 
        document.write('<td>' + m + '</td>');
    }
    document.write("</tr>");
}
document.write("</table>");

document.write("<h2>Fonctions prédéfinie</h2>");
// Comme dans tous les langages de programmation, javascript possède des fonctions.

//Déclaration d'une variable
var phrase = "salut je m'appelle Zeineb";
document.write(phrase + "<br>");

//indexOf
document.write("Zeineb se trouve à la position: " + phrase.indexOf("Zeineb") + "<br>");
// Retourne la position de la 1ere lettre de Zeineb dans la phrase
//ATTENTION: on commence à compter à partir 0
// arguments = parameters : on appelle argument tout ce qui se trouve à l'intérieur des () d'une fonction

//substr
var phrase = "Bonjour Pierre comment vas-tu?";
var decoupe = phrase.substr(8,6); // retourne Pierre
document.write(decoupe + "<br>");
//la fonction substr permet de récuperer un morceau de la chaine de caracteres.
//1er argument: où commence la découpe / 2eme argument: combien de caracteres ?

//substring
//cette fonction fait la même chose que substr() SAUF que le deuxième argument est la POSITION d'ARRET. (dans le 2eme arg, on ne commence pas a compter a zéro)
var decoupe2 = phrase.substring(8, 14); // retourne Pierre
document.write(decoupe2 + '<br>');

//Autres fonctions: valueOf / toLowerCase / toUpperCase
document.write(phrase.toLowerCase() + "<br>"); // passe toute la chaine de caractères en minuscules.
document.write(phrase.toUpperCase() + '<br>'); // passe toute la chaine de caractères en majuscules
document.write(phrase.valueOf() + "<br>"); // retourne la valeur de la variable phrase. Elle n'a pas besoin d'arguments.

document.write(phrase.length + '<br>'); //il n'y a pas de parenthèses car il s'agit d'une propriété. // retourne 30
// La propriété statique String.length renvoie la valeur 1.

//Une fonction comporte TOUJOURS des parenthèses

document.write("<h2>Fonctions UTILISATEUR, déclaration et exécution</h2>");
//"Don't Repeat Yourself" DRY (philosophie informatique pour éviter la redondance d'actions)
//A chaque fois qu'on répète une action, il faut se demander et voir si il n'est pas possible de créer un fonction. On peut créer nos fonctions avec nos propres arguments(paramètres).

//DECLARATION DE FONCTION
//la manière appelée Function statment (déclaration de fonction)
function maFonction() {
    //ici le code à exécuter
    return document.write("<p>Nous avons une belle journée ensoleillée</p>");
}

//la manière appelée Function operator (opérateur de fonction)
var maFonction2 = function () {
    //ici notre code
    return document.write("<p>Nous avons passé une belle journée sous la pluie</p>");
}

//EXECUTION DES FONCTIONS :
maFonction();
maFonction2();
//en exécutant une fonction, on exécute tout le code qui s'y trouve

//Fonctions avec arguments
function direBonjour(prenom){
    var message = document.write('<p>Bonjour' + prenom + ' Comment vas-tu aujourd\'hui ? </p>');
    return message;
}
direBonjour("Zeineb");

//var prenom1 = prompt("Bonjour quel est votre prénom ?");
//direBonjour(prenom1);

//RETURN
//lorsqu'une instruction return est utilisée dans une fonction, l'éxécution de la fonction se termine. Si une valeur est fournie, elle sera renvoyée à l'appelant de la fonction. Si l'expression définissant la valeur de retour est absente, la valeur undefined sera renvoyée.
// mini exercice: créez une fonction test qui prendra deux arguments: width et height. Si ces arguments sont supérieurs à 0, ca nous retourne widith*height sinon la fonction nous renverra 0.
function test(width,height){
    if ((width && height)>0){
    
         return width*height ;
    }
return 0;
}
document.write(test(3, 4) + "<br>"); // renvoi 12
document.write(test(-3, 12) + "<br>"); // renvoi 0


document.write("<hr> </hr>")
// il est possible d'appeler une fonction avant sa déclaration.
// Uniquement si la façon de la déclarer est "function statement" (voir début du chapitre).
// Voir notion d'Hoisting : Javascript va déplacer la déclaration avant l'éxécution.

meteo("été", 30);
meteo("hiver",0);
meteo("automne",5);
meteo("printemps", 21);

function meteo(saison, temperature){
    var message = "Nous sommes en " + saison + " et il fait " + temperature + " degrés<br>";
    return document.write(message);
}
document.write("<hr></hr>")
//faire une fonction meteo2() permettant de gérer le s à degrè(s) , les valeurs 0, 1 et -1 n'ont pas de s
// et gèrer aussi le "en" ou le "au" selon la saison

meteo2("été", 30);
meteo2("hiver",0);
meteo2("automne",5);
meteo2("printemps", 21);


function meteo2(saison, temperature){
    var degre ="";
    if (temperature== 0 || temperature ==-1 || temperature== 1)  {
    degre = "degré";
}
else{
   degre = "degrés"
}
if (saison == "printemps"){
    var message = "nous sommes au printemps et il fait" + temperature + " " + degre;
}else{
    var message = "nous sommes en" + saison + " et il fait " + temperature + " " + degre;
}
return document.write(message);
  
}

document.write("<hr>");

meteo3("été", 30);
meteo3("hiver",0);
meteo3("automne",5);
meteo3("printemps", 21);


function meteo3(saison, temperature){
 var article = "en";
 var s = "s"
 if (saison == "printemps"){
     article = "au";

 }
 if(temperature == -1 || temperature == 0 || temperature == 1){
     s = "";
 }
 var message = "nous sommes " + article + " " + saison + " et il fait" + temperature + " degré" + s + "<br>";
 return document.write(message);
}

// ESPACE GLOBAL ET LOCAL 

/*
Selon l'endroit où une variable est déclarée selon l'endroit ou la variable est déclarée et affectée, elle pourra être accessible (visible) de partout dans le script OU dans une zone bien définie.
On parle de portée d'une variable.

Une variable est déclarée sans le mot VAR (de façon implicite) : peu importe l'endroit où elle est déclarée (dans une fonction ou pas), elle est ACCESSIBLE DE PARTOUT dans le script. on parle alors de variable GLOBALE.

Une variable est déclarée avec le mot clé VAR (de façon explicite):
-à l'extérieur de la fonction : elle sera GLOBALE
-à l'intérieur de la fonction : elle sera LOCALE(accessible uniquement dans la fonction) 
*/
document.write("<h2>portée des variables</h2>");
var animal = "Loup";// variable externe donc Globale

function jungle(){
    var animal = "Tigre"; // LOCALE
    return animal;
}

document.write("avant éxécution de la fonction: " + animal + "<br>");//affiche loup
jungle();// en éxécutant la fonction on ne change pas le contenu de la variable (car elles ne sont pas liées)
document.write(animal) // affiche loup

document.write("<hr>");

var animal = "loup"; // variable GLOBALE
function jungle2(){
    animal = "tigre"; // variable GLOBALE
}
document.write(animal + "<br>") // affiche loup
jungle2();
document.write(animal); // affiche tigre
//comme on n'a pas mis le mot clé var devant animal dans la fonction jungle2, alors on reprends la variable globale déjà déclarée et on assigne une nouvelle valeur. C'est pour cela qu'après l'éxécution de la fonction tigre remplace Loup.


document.write("<hr>");
function ocean() {
    poisson = "requin"; //déclaration implicite (sans VAR avant poisson)
}
ocean();
document.write(poisson); // affiche requin car variable Globale

// avec le mot clé VAR, la portée de la variable va dépendre du fait qu'elle soit dans une fonction ou pas.
// avec le mot clé LET, la portée de la variable va dépendre du fait qu'elle soit dans un bloc ou pas (un bloc pouvant etre: une fonction mais aussi un if ou autre ...)

let pays = "france";
function monde(){
    let pays = "brésil";
}
document.write(pays);
monde();
document.write(pays);

document.write("<h2>Les types ARRAY</h2>");

var fruits = ["Banane", "Orange", "Pomme", "Mangue"];
console.log(fruits);

console.log(fruits.join()); // la méthode join() permet de créer et de renvoyer une nouvelle chaine de caratère en concaténant tous les éléments d'un tableau.

var monTableau = ["Amélie", "Diana", "Alexis", "Zeineb", "Amal", 96];
document.write(monTableau);// affiche la totalité du tableau
document.write(monTableau[3]); // affiche zeineb
console.log(typeof(monTableau)); // affiche object
document.write("<br>");
// mini exo : remplacez Zeineb par Alphonse

monTableau[3]="alphonse";
console.log(monTableau[3]);

document.write(monTableau.length) // 6

var monSuperTableau = ["Harry potter", "Riad", "Eren", "San Gohan", "Ron","Bat man", "Rosa Parks", "Mikasa Ackerman",126,true ,false]; // Tous les types peuvent être contenus dans un tableau


var max = monSuperTableau.length;
console.log(max);
document.write("<hr></hr>")
// Parcourir un tableau
for (var i=0; i < max; i++){
    document.write(monSuperTableau[i] + "<br>")
}

document.write("<hr>");
var deuxDimensions = [['fraises', 'pommes', 'bananes',] , ['ananas', 'papaye', 'goyave']] ;
//Exo: comment je fait pour afficher bananes ?

document.write(deuxDimensions[0][2]);
//Affiche bananes. Le 0 représente le premier tableau [fraises, pommes, bananes ]et le 2 représente l'élément situé en position 2 de ce même tableau.
console.log(deuxDimensions);

// EXERCICE Appolo 11 
/*
Vous devez créer un compteur (countdown) qui parte de 12 jusqu'a 0
Quand on arrive au chiffre 7, afficher "ignition sequence start" à la place du 7
*/
document.write("<hr>");
document.write("Appolo 11 avec une boucle for");
document.write("<hr>")
countdown = 12
for (var countdown=12;countdown>0;countdown--){
if (countdown==7){
document.write("iginition sequence start ")
}else{
   document.write(countdown+ "<br>");  
}

}
document.write("<hr>");

var z = 12;
while (z>=0){
    if (z==7){
    document.write("ignition sequence start")
    }else{
        document.write(z + "<br>");
    }
    
    z--;

}

document.write("<h2>Les Objets</h2>");
/* 
Les personnes qui nous entourent possèdent des informations (nom, prénom, age,sexe nationalité...) et peuvent effectuer des actions (manger, boire, parler, marcher...).
Il en va de même pour les objets.
Exemple: une voiture, elle possède des informations (marque modèle, couleur...) et peut effectuer des actions (avancer , reculer , tourner ...)
les objets informatiques sont comme les objets réels. On va avoir un receptacle qui va contenir des informations (données) et des actions(fonctions).
La programmation orientée objet est le fait de faire interagir les objets entre eux.

*/

//Déclaration d'un objet
// Pour un tableau (array) on utilise les [], pour un objet on utilise les {} 
var monObjet = new Object();// création d'objet appelée CONSTRUCTOR
monObjet.sonPrenom="Will"; // le remplissage
monObjet['sonNom'] = "Smith"; // autre manière de remplir

var monAutreObjet = {}; //création d'objet appelée OBJECT LITERAL NOTATION
monAutreObjet.sonPrenom = "Will";
monAutreObjet["sonNom"] = "Smith";

//Affichage
document.write(monAutreObjet.sonNom); // Affiche Smith
document.write("<br>");
document.write(monAutreObjet['sonPrenom']); // Affiche Will
document.write("<hr>");

var sangoku = {
    nom : "San", //clé valeur
    prenom : "Goku",
    age: 35 //pas de point virgule pour
};

sangoku.femme = "chichi";
document.write(sangoku.femme); // affiche chichi

//EXERCICE
// Créez un objet maVoiture qui contient ces infos : marque, modèle , couleur, optionDeSerie(plusieurs: clim, autoradio, park-assit, cuir), année(number), toitOuvrant(booléan), motorisation(sous forme d'objet: energie, puissance , etancheité(boolan))
document.write("<br> exo")
document.write("<hr>")
var maVoiture = {
    marque : "audi",
    modele : "rs6",
    couleur : "bleu",
    optionDeSerie :['clim','autoradio','park-assit','cuir'],
    annee : 2020,
    toitOuvrant : false,
    motorisation: {
        energie :"essence",
        puissance :"250cv",
        etachaneite:true
    },

}
document.write(maVoiture.marque);





