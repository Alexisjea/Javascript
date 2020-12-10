var solution = Math.floor(Math.random() * 100) + 1; //c'est valeur générer aléatoirement
//1 penser à demander à l'utilisateur de saisir un chiffre , je le garde dans une variable 
//solution c'est la valeur à chercher
//vous allez comparer ces deux valeurs, soit il est plus grand soit plus petit soit ils sont égaux
var devinette=prompt("tapez un chiffre");
//
console.log(solution) 
if (devinette==solution){
  console.log("lbravo")


}else if(devinette<solution){
   console.log("ton chiffre est plus grand");

}
else{
   console.log("ton chiffre  est plus petit")
}
// comment je réaffiche le pormpt à chaque fois que l'utilisater tape pas le bon chiffre 
// si la devinette est différente à solution affiche le prompt
var devinette
while (devinette!=solution){
   var devinette=prompt("tapez un chiffre");
if(devinette>solution){
   alert("ton chiffre est plus grand");
}else if(devinette<solution){
   alert("ton chiffre est plus petit");
}
}
alert("bravo !!!")

for(var compteur=1;compteur<6;compteur++){
   //si la valeur est égal solution : bravo
   // si non: si valeur > solution (plus grand), si non si valeur est < (valeur est plus petit)
   var devinette=prompt("tapez un chiffre");
  if(compteur<6){//on va tester si toujours le compteur est inférieur à 6 pour j'execute ce script
   if(devinette==solution){
      console.log("bravo ! tu as trouvé la solution au bout de "+solution+"fois");
      compteur=6;//on va mettre le compteur à 6 pour q'il sors de la boucle
   }  else{//elle va traiter la devinette est différente de solution(on a deux sous conditions(soit plus petit, soit plus grand))
            if(devinette>solution){//si devinette est plus grande que solution
               alert("ton chiffre est plus grand !");
            }else{//si non (n'est pas égal , n'est pas supérieur , donc forcément qe c'est plus petit)
               alert("ton chiffre est plus petit !");
            }
      }
   } else{// si non si le compteur est dépasse 6(n'est pas inférieur à 6)
      console.log("dommage la partie est terminée");

   }
} 