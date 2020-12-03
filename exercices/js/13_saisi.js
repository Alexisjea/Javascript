 var nb1=0;//initialiser la variable nombre à 0 pour déclancher l'éxécution de la boucle
while ((nb1<50)||(nb1>100)){// si nb1 est inférieur à 50 ou bien nb1 supérieur à 100 affiche la boite de dialogue (cad demande encore une fois à l'utilisateur de saisir un chiffre)
nb1=parseInt(prompt("donnez moi un chiffre entre 50 et 100"));
}
// si l'utiliisateur tape un chiffre entre 50 et 100 on va sortir de la boucle

 document.write("<h4>-------------Avec non !-------------</h4>")
while (!((nb1<50)||(nb1>100))){// si nb1 est inférieur à 50 ou bien nb1 supérieur à 100 affiche la boite de dialogue (cad demande encore une fois à l'utilisateur de saisir un chiffre)
nb1=parseInt(prompt("donnez moi un chiffre entre 50 et 100"));
}
// si l'utiliisateur tape un chiffre entre 50 et 100 on va sortir de la boucle
