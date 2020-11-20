//la concaténation des variables et des chaines de variables 
var var1="Je suuis une chaine de caractère";
var var2="concaténée à partir de plusieurs chaines";
var result=var1+""+var2;//la concaténation se fait avec l'opérateur+, on peut concaténer des variables avec des chaines de caractères
console.log(result);
document.write(result+ "<br>");
//la concaténation des variable de type number
var annee=2017;
var mois=11;
var calcul=annee + mois;//la concaténation avec des numbers ca déffère à celle des chaines de caractères,avec les numbers se fait comme opération d'addition

document.write(calcul)
//pour concaténer des number sous formes de chaines de caractères, on peut utliser la fonction toString()
var calcul=annee.toString() + mois.toString();
console.log(calcul);//ici il va concaténer sous forme string
document.write("Bonjour groupe de vitry vous etes en mois de :" +mois)