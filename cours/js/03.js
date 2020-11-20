//les opérateurs arithmétiques
var nb1,nb2,result,mult,mod,div;//il permet de déclarer plusieurs variables en même temps, au lieu de mettre ce qui est au dessous:
/*var nb1;
  var nb2;
  var result;*/

nb1=10;//ici je fait l'affectation de valeurs pour la variable
nb2=42

//les additions
result=nb1 + nb2;
console.log(result)
//les soustractions
result=nb2 - nb1;
console.log(result);
//les multiplications
mult=nb1*nb2;
document.write(mult+"<br>");
//les divisions
div=nb2/nb1;
document.write(div)
//le reste des divisions
mod=nb2%nb1;//c'est le reste de la division 
document.write(mod);
//les incrémentations
var nb3=6;
nb3 = nb3 +1;//la première façon d'incrémenter
console.log(nb3);
var nb4=1
nb4++; //la 2eme façon d'incrémenter, nb3++, permet de s'incrémenter par un
nb4++;//à chaque fois je fais ++ j'incrémente avec 1
nb4++; 
// on peut le faire autrement
++nb4;
/*
nb4++ est équivalent à ++nb4 est équivalent à nb4 = nb4+1 c'est équivalent à nb4+=1
*/  
console.log(nb4);
//les décrémentation, c'est l'inverse d'incrémentation
var nb5=8;
nb5++;//ici c'est 9
nb5--;//ici c'est 8
nb5-=1; //ici c'est 7
//nb5-- équivalent a nb5 = nb5-1 c'est équivalent à nb5-=1
