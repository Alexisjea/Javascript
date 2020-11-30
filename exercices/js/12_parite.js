
for(var nb1=1; nb1<=10; nb1++){
    
    
if(nb1%2===0){//pour vérifier que le chiffre est pair, le reste de la division par 2 est égal à 0
document.write(nb1+"est pair" + "<br>");
    
    
 }
else{//si non les chiffre est impair 
  document.write(nb1+"est impair" + "<br>");
     
 }

}
document.write("--------------------------Avec chiffre saisi par l'utilisateur <br>")

var nbUser=prompt("choisir un nombre entier");//on récupère le chiffre saisi par l'utilisateur
if(!isNaN(nbUser)) {
for(var chiffre=1;chiffre<=nbUser;chiffre++){
   
}
}else{//le sinon de (!isNaN())
    document.write("il faut bien saisir un chiffre");
}

document.write("--------------------------On commence à partir de chiffre tapper par l'utilisateur en ajoutant 10 <br>")

var nbUser1=parseInt(prompt("choisir un chiffre"))//on va convertir en number ce que l'utilisateur a taper
for (var tour=nbUser1 ; tour<=(nbUser1+10); tour++){//nbUser1+10 c'est la condition de sortie de la condition 
 document.write
 if(tour%2===0){//si la condition renvoi true fait ceci 
        document.write(tour+"est pair <br>")

    }else{
        document.write(tour+"est impair <br>");
    }
}