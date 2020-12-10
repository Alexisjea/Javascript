var nb1=parseInt(prompt("donner votre premier numero"));//parseInt permet de convertir ce que l'utilisateur va tapper en un number
var nb2=parseInt(prompt("donner votre deuxieme numero"));//je stocke la valeur saisi par l'utilisateur dans une variable

/*--------------la version sans vérification le type des variables */
if(nb1<nb2){
    console.log("le numéro nb1 est inférieur à nb2");
    document.write("le numéro nb1 est inférieur à nb2");
   
}
else if(nb1>nb2){
    console.log("le numéro nb1 est supérieur à nb2");
    document.write("le numéro nb1 est supérieur à nb2");
}
else if(nb1==nb2){
    console.log("les deux variables sont strictement égaux")
    document.write("le numéro nb1 est strictement égal à nb2");
}
else{//tous les cas d'echec(les cas qui ne sont pas traités ou bien les autres possibilités) les cas possibles d'echec(on tape rien , on tappe des alphabets , on donne un seul chiffre)
    console.log("vous n'avez saisi aucun chiffre")
    document.write("vous n'avez saisi aucun chiffre");
}

/*correction avec verification de types de variables qu'il soit number*/ 

//isNaN()=> renvoie true lorsque la variable n'est pas de
if((!isNaN(nb1)) && (!isNaN(nb2))) //début de condition1
    
if(nb1<nb2){
    console.log("le numéro nb1 est inférieur à nb2");
    document.write("le numéro nb1 est inférieur à nb2");
   
}
else if(nb1>nb2){
    console.log("le numéro nb1 est supérieur à nb2");
    document.write("le numéro nb1 est supérieur à nb2");
}
else if(nb1==nb2){
    console.log("les deux variables sont strictement égaux")
    document.write("le numéro nb1 est strictement égal à nb2");
}
/*lafin de la condition 1 */else{
    console.log("vous n'avez saisi aucun chiffre")
    document.write("vous n'avez saisi aucun chiffre");
}
