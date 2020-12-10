// var annee = prompt("saisir l'annee");

// if(annee % 4 ==0 && annee % 100 != 0){
//     document.write ("c'est bissextile") ;
//  }else if(annee % 400 == 0){
//     document.write ("c'est bissextile") ;
//  }else
//   document.write ("c'est pas bissextile") ; 





  var annee = prompt("saisir l'annee") ;
//soit annee est divisible par 4 et n'est pas divisible par 100 ou bien divisible par 400

if(!isNaN(annee))//on éxécute la condition ci dessous si seulement si la valeur annee est de type number, si non si il est de type number il va éxécuter le message de else

if((annee%4==0 && annee%100!=0 ) || (annee%400==0) ){// si la condition est vrai

}
else{// si non
 document.write("cette année n'est pas bissextile");
}                             
else{
    document.write("vous avez pas tappé une année correcte");
}

