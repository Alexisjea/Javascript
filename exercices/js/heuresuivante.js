var h = prompt("entrez l'heure")
var m =prompt("entrez les minutes")
var s = prompt("entrez les secondes")

//vérifier l'heure, les minutes et les secondes saisi par l'utilisateur

if ((h>=0 && h<=23) && (m>=0 && m<=59)&&(s>=0 && s<=59)){
    // on va incrémenter les secondes et tester sur les cas spécifiques(minute est à 60, lorsque seconde est à 60 et lorsque heure est à 24)
   s++;//on va incrémenter par une seconde a chaque fois
    if(s==60){//60 secondes c'est que j'ai fait une minute (j'ai une minute et 00 seocndes)
    m++;//minute=minute+1//minute+=1
    s=0;
        if(m==60){//60minute c'est une heure
        h++;//j'incrémente les heures
        m=0//je met les minutes à 0

   
            if(h==24){//si heure est a 24 ca signifie on est à minuit 00
                h=0;//je met l'heure à 00
            }//fin de if h
    
    }// fin de if m
   
}//fin de if s

document.write("dans une seconde il sera :" +h+"h"+m+"m"+s+"s");
}else{// si non

    document.write("la date saisi n'est pas correcte")
}

