
var yes="oui";
var no="non";
var nb=1;//j'initialise le compteur de nombre de fois à 1
var pre ="";//j'initialise pre à string vide pour ne pas avoir undifined pour le premier essai
while((pre!=yes) && (pre!=no)){
     
     
    pre=prompt("entrez ni oui ni ");
    document.write ( pre+ " pour la " +nb+ "fois, dis moi oui ou non" + "<br>");
   nb++;//j'incrémente nb pour récupérer à chaque fois le numero de l'essai
}
document.write("<h1 style='background-color:cyan; text-align:center; '>fini ;-) !</h1>")
