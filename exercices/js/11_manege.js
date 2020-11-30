
 document.write("<h1>--------------------boucle do while----------------------------</h1>")
//Avec boucle while 
    var tour1 =1;
var nbTours=prompt("Donnez moi le nombre de tour");//on récupère le nombre de tours saisi
if(nbTours<=10){//ici on limite l'utilisateur à ne pas faire plus que 10 tours , s'il tape un chiffre supérieur à 10, opn va lui afficher un message d'erreur
    
    
    while(tour1<=nbTours){
    //tant que compteur <=nbTours fait ceci ....
    document.write("c'est le tour n°"+tour1+"<br>");
    tour1++; //j'incrémente le compteur qui affiche le nombre de tour à chaque fois 
    }
    
}
else{//le sinon de la condition if
    document.write("<h5>il faut tapper un chiffre inférieur ou égal à 10</h5>");
}
 document.write("<h1>--------------------boucle for----------------------------</h1>")

var tour=prompt("Donnez moi le nombre de tour");//on récupère le nombre de tours saisi
//Avec boucle for 
if(nbTours<=10){
for(var tour=1 ; tour<=nbTours; tour++){
    
    document.write("c'est le tour n°"+tour+"<br>");}

else{
     document.write("<h5>il faut tapper un chiffre inférieur ou égal à 10</h5>");
 }
}  