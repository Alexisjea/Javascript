//les tableaux c'est un type de servent à stocker plusieurs informations et de type différents dans une même variable
// les tableaux sont des variables particulières qu'on retrouve dans presque tous les languages de programation
//un tableau est constitué d'une seule ligne et plusieurs colonnes(nombre de colonnes c'est infinie)
//les tableau servent aussi à contenir les résultats des programmes
/*
la déclaration d'un tableau
1ère méthode de déclaration de tableau
var apprenants=new Array('amelie','ahmad','riad','diana','mona');//j'ai déclaré une variable de type tableau qui contient 5 éléments
type tableau qui contient 5 éléments
//deuxième méthode de déclaration de tableau
var apprenants=['jean','nirmal','omar','alexis','djinde','selsabil'];
//les indices du tableau commence par 0 en tant que premier élément, permettent d'accèder aux informations du tableau 
*/
var apprenants=['jean','alexis','djinde','selsabil','omar']
console.log(apprenants[0]);
//pour accéder à un élément du tableau ------------nom_du_tableau[indice]------
for(var i=0;i<apprenants.length;i++){
    document.write(apprenants[i]+"<br>");
}

//vous allez créer un script qui lis un tableau chiffre et affiche pour chaque chiffre s'il est pair ou bien impair
var chiffres=[1,5,8,7,9,45,12,32,55,14,91,22];
console.log(chiffres[0]);
//pour accéder à un élément du tableau ------------nom_du_tableau[indice]------
for(var i=0;i<chiffres.length;i++){
  

if(chiffres[i]%2==0){//if(1%2==0)
    document.write(chiffres[i]+"pair<br>")
}else {
document.write(chiffres[i]+"impair<br>")
}

// i ici ca sert à etre l'indice du tableau
}


//var fruits=['mangue','fraise','figue','kiwi'];
//ecrire un programme qui affiche la liste des fruits présents dans le tableau, puis demander à l'utilisateur de tapper un nom de fruit et verifier est ce qu'il existe dans la liste ou non,si existe affiché disponible si non vous affichez indisponible