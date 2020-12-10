// les conditions se fait le bloc si sinon 
/*
if(condition)
Instruction1;
Instruction2;
Instruction3;
. . .
else{
autre instruction


}

*/
//var nb=20;
//if(nb1<50){//ici les accolades pour limiter les instructions pour la condition if
    //ici j'écris toutes les instructions
    //console.log("le nb1 est inférieur à 50");
//}else{
    //si la condition n'est pas valider il execute le code qui est dans le bloc sinon(else)
    //console.log("le nb1 est supérieur ou égal à 50");
//}
 
/*var age =prompt("quel est votre age");
//ecrire une condition qui prends l'age est affiché mineur s'il est inférieur à 18 et majeur si il est supérieur ou égal à 18
if (age>=18){
    console.log("l'age est inférieur Bienvenu vous etes majeur");
}else{
    console.log("l'age est vous êtes mineur aurevoir ");
}
document.write(age)
/*
si on a plusieurs conditions on peut faire des if...else imbriqués la syntaxe: 
if(condition1){
    instruction;
    . . .
}else if(condition2){
    intruction 1;
    .....
}else if(condition3){
    intruction 1;
    . . . . .
}else{
    //else à la fin de chaque bloc if, permet de traiter les conditions qui ne sont pas vrai
}

Ecrire une conddition qui permet d'afficher réussi si la moyenne est>10 rattrappage si la moyenne <10 et supérieur à 9 et refus si la moyenne est <9
*/
var moyenne=prompt("tapez votre moyenne");//pour saisir la moyenne par l'utilisateur
if(moyenne<9){//ici on va traiter l'intevalle qui est strictement inférieur à 9
    console.log("refus");

}else if(moyenne<10){// si non signifie que moyenne >9 et moyenne <10
    console.log("rattrapage");
    //le traitement de >9 et <10

}else{// else ici traite l'autre partie qui n'est pas annoncé, ici c'est le >=10
    console.log("reussi");
}
