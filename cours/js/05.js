var nb1=123;
var nb2="123";
//l'opérateur de comparaison == signifie égal à 
if(nb1==nb2){//test est-ce que les valeurs des variables sont égaux == test que sur les valeurs
    console.log("les deux valeurs sont égaux")
}
// on va tester la valeur et le type
if(nb1===nb2){//=== signifie que les deux variables sont strictement égaux(égaux en valeur et égaux en type)
//puisque nb1 n'est pas strictement égal à nb2, donc la condition n'est pas vrai et il va pas executer ce que est entre les {}
    console.log("les deux variables sont identiques en valeurs et en types");
}
    /*
    if (true){

    }else{

    }

    en gros si la condition est vérifiée donc elle renvoie true, si non elle renvoie false
    */
   //l'opérateur différent à !=
   if(nb1!=nb2){//renvoie false, donc il va pas éxécuter ce bloc la, il passe au else suivante

    console.log("ces deux variables ne sont égaux");

   }else{
       console.log("les deux variables sont égaux");
   }
//l'opérateur strictement différent !== , ici il teste sur la valeur et type
if(nb1!==nb2){//renvoie true, parce que ici les deux variables sont pas identiques en terme de valeurs et type (ici ce qui valide la condition c'est le type qui est différent(l'une est number; l'autre est de type string))
console.log("les deux variables sont strictement différents")

}
/* On a 4 opérateurs de comparaison
    == égal à (si la  valeur égal à)
    != not égal à (si la valeur est différent à)
    === strictement égal à (si la variable est égal à en terme de valeur et type)
    !== strictement différent à (si la variable est différente à l'aute variable(soit en type,soit en valuer , soit en les deux))

*/
   


var prenom,age;
 prenom = "alexis";
 age=50;
 mdp = "admin";
var userPrenom=prompt("Tapez votre prénom");
    if(userPrenom==prenom){//si la condition 1(condition sur le prénom) est vraie
        //je vérifie si le prénom tapé par l'utilisateur est égal à la valeur de prénom qui est ici"Amal"
        
        console.log("le prénom est correct");
        var userAge=prompt("donnez votre age")//je stocke la valeur saisi par l'utilisateur dans une variable userage, pour l'utiliser après pour les tests
    
    if(userAge==age){// si la condition2(condition sur l'age) est vrai
            console.log("bienvenue");
         //ici je demande à saisir le mot de passe 
            var userMdp=prompt("entrez le mdp" );
        if(userMdp==mdp){
            console.log("c'est correct"+userPrenom);
        
        }else{
            //le cas d'echec
         console.log("le mot de passe est pas correct");
        
        }
        else{   // si l'age tappé est différent à celle qui est annoncé en haut
          console.log("l'age saisi n'est pas correct");
        }
    
        }else{//si la condition n'est pas vrai(userPrenom==prenom)
        console.log("le prénom n'est pas correct");
        // la boite de dialogue confirm 
        var dev=confirm("aimez vous le developpement?");
        if(dev==true){
            console.log("c'est génial");
            var javascip=confirm("la programmation en js aussi , je suppose");
            if(javascip==true){
                document.write("c'est génial, bienvenue dans la jungle");
            }
            else{
                document.write("Dommage! le javascript vous permet d'animer votre page web")
            }
        }else{//ici signifie que le test if(dev==true)==>renvoie false
            document.write("quel dommage !");
        

        }
        

        }
