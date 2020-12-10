var far=prompt("quel est la température en farenheit")
degres=far-32
degres=(far-32)/1.8
console.log(degres)
document.write(degres)
alert.degres
//conversion de celsius en farenheit
var tempC=prompt("saisir la température en Celsius");//on va demander à l'utilisateur de saisir le degrés en Celsius et on va récupefrer ca dans une variable qui est tempC, on dirait on va stocker ce qui est tapé par l'utilisateur dans une variable
var tempF=(tempC*9/5)+32;// je stocke la formule de calcul dans une variable, pour l'afficher après
document.write("la température en Farenheit est :" + tempF)//l'affichage de la variable tempF

//conveersion de farenheit en celsius
var tempFaren=prompt("saisir la température en Farenheit");
var tempCel=(tempFaren-32)*5/9;
document.write("la température en celsius est :" + tempCel)