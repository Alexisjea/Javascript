document.write("<h4>Affichage de triangle avec for </h4>")
var diese="";//j'ai initialiser une variable de type string qui est vide
for(var nb=0;nb<8;nb++){   // la boucle va tourner 7 fois
    diese+="#"; // à chaque éxécution de la boucle 
    document.write(diese+"<br>");
    

}
document.write("<h4>Affichage de triangle avec while </h4>")
var j=1
var triangle="";//initialiser la variable triangle à une chaine de caractère vide , sinon il va afficher undefined
while(j<=7){
    triangle+="#";// je concatine la variable triangle par une diese à chaque incrémentation
    document.write(triangle+"<br>");
    j++;//avec while il faut absolument incrémenter le compteur(j), si non l'incrémentation n'est pas automatique ici
}