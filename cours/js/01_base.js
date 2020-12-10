/* 
       les variables
       la declaration des variables en javascript se fait avec
       var nom_de_varaible=valeur;
       il ya deux versions javacript(deux standard) Ecmascript5(es5) et Ecmascript6(es6)
       avec Es6= let nom_variables=valeur;
       idealament les noms des variables contient des alphanumeriques avec underscore tout est attaché et pas de caractères speciaux ,il faut pas qu'il commence par un chiffre 
       je peux declarer des variables vides:
       var prenom;
​
   */
 /* 
    les types de variables:
        on a le type number(entier), string(chaine de caractere), boolean(true ou false),tableau,objet, float(nombre decimal qui est avec virgule)
        chaque instruction se termine avec pont virgule ;
        var age=30;// déclaration d'une variable de type number
        var prenom="Amal";//déclaration d'une varaible de type chaine de caractère
        var bool=true/false;//la declaration d'une variable
        var nombre_dec=5.35;//la declaration d'un nombre decimal(float)
​
​
    */
   var nom;//ici j'ai déclarer une variable
   nom="jeandenans";//ici j'affecte une valeur pour cette variable déclarée;
   console.log(nom);
   nom="iciici";//ici je réaffecte une autre valeur pour la variable nom, qui ecrase deja l'ancienne valeur
   console.log(nom);
   var prenom="alexis";
   console.log(typeof nom);
   var age=50;
   console.log(prenom);//console.log()permet d'afficher des variables et des instructions la console et pas dans la page html
   console.log(age); //pour afficher une variable dans l'html, on utilise la fonction write()
   document.write(prenom);
   
   //afficher une boite de dialogue
  alert("super groupe de vitry ont commencé le javascript");
  //on le fait aussi avec une autre manière avec window.alert()
  window .alert(prenom);

  var question=prompt("EST ce que vous avez aimer le javascript ?");
  console.log(question);
  //document.write(question);
  //la déclaration d'une constante se fait avec const, elle s'écrit en majuscules,c'est une valeur constante tout au long du projet qui change pas
  const DEVISE="Euro";
  const ANNEE="2020";
  console.log(typeof nom);//typeof permet d'aficher le type de la variable
  //on dit que javascript est autotypé, puisqu'il affecte les types de variables selon la valeur affectée

  //le changement de type de variable, changement de number vers string, de string vers number , de number vers float, de float vers number.
  var age=age.toString();//ici je change le type de variable age de number en chaine de caractere avec la fonction toString()
  console.log(typeof age)
  var votreDernierPrix//les noms des variables et les fonctions ca commence par une minuscule et pour chaque nouveau mot doit commencer par une majuscule
  var annee="2020";//variable annee est de type string 
  console.log(annee)
  var annee=parseInt(annee);//la fonction parseInt() permet de changer le type de variables en number integer (entier)
  console.log(annee);
  //Attention javasript est sensible à la casse ('case sensitive'), il fait la diféérence entre les majuscules et les minuscule maVariable différent de mavariable différent de ma_variable , ici pour javascript ils sont tous des variables différentes



  //la conversion de type de variable float avec parseFloat()
  var prix=200;
  console.log(typeof prix);
  var prix=parseFloat(prix);
  console.log(typeof prix);
