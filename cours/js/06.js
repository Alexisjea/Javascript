var login="admin";
var mdp="admin";
// les opérateurs logiques , ET,OU,NON
// ET/AND==> &&, je cumule plusieurs conditions en même temps
// OU/OR ==> || , si une des conditions est vérifié ca renvoie true
// NON/NOT ==> !
if(login=="admin" && mdp=="admin"){// si l'un des deux variables est différent la condition sera pas validée
//si login est correct et mdp n'est pas correct=======>je passe pas
//si login est incorrect et mdp est correct======>je passe pas
//si login est incorrect et mdp est incorrect======>je passe pas
}
/*---------------------------Opérateur  OR/OU----------------------*/
if(login=="admin" || mdp=="admin"){
// ici il suffit qu'une des conditions soient vrai, je passe (signifie que la condition renvoie true)
}
if((A) && (B)){
    //si A est vrai et B est vrai => renvoie true
    //si A est vrai et B est faux => renvoie false
   //si A est Faux et B est faux => renvoie false
   //si A est faux et B est vrai => renvoie false
}
if((A) || (B)){
    //si A est vrai et B est faux => renvoie true
    //si A est faux et B est vrai => renvoie true
   //si A est Faux et B est faux => renvoie false
   //si A est vrai et B est vrai => renvoie true
}
if(!(A)){
    //if(login=="admin")==>renvoie true
    //if(!(login=="admin"))==> ici je cherche que le login n'est pas égal à "admin", alors que ce n'est pas le cas ==> renvoie false
    /*----------------------------
     if(!(true))==> renvoie false
     if(!(false))==> renvoie true
    
    */
    //avec le non ! on cherche le conbtraire de la condition
   
}if(!(login=="admin"|| mdp=="admin")){
    //ce bloc sera exécuté si la condition renvoie true
    console.log("vrai");
}
else{
    //ce bloc sera éxécuté si la condition renvoie false
    console.log("faux");
}

