/*
syntaxe switch
var semaine=prompt("donnez un chiffre entre 1 et 7") 
switch(semaine){(//selon la valeur de la variable semaine )
    case 1://cas numero 1 (c'est la première valeur de semaine)
    instruction1;
    break;
    case 2:
        instruction2;
        break;
        
    case 3 :
        instruction3;
        break;//break pour sortir de ce cas la 
        
    default:// on fait d'autres possibilités, on traite les cas d'erreurs de l'utilisateur


}
*/ 
var semaine=parseInt(prompt("le chiffre tappé correspond à Lundi"));
switch(semaine){
    case 1:
        console.log("le chiffre tappé correspond à lundi");
        break;
    case 2:
        console.log("le chiffre tappé correspond à mardi");
        break; 
    case 3:
        console.log("le chiffre tappé correspond à mercredi");
        break; 
    case 4:
        console.log("le chiffre tappé correspond à jeudi");
        break; 
    case 5:
        console.log("le chiffre tappé correspond à vendredi");
        break;
    case 6:
        console.log("le chiffre tappé correspond à samedi");
        break; 
    case 7:
        console.log("le chiffre tappé correspond à dimanche");
        break;
    default:
        console.log("le chiffre tappé ne correspond pas à un jour de la semaine");
  
}
//demander à l'utilisateur de tapper le premiercaractère de son navigateur préféré
var browser=prompt("tappez le premier caractère de ton navigateur");

switch(browser){
case "c":
    console.log("google chrome")
    break;
case "m":
    console.log("mozilla")
    break;
case "o":
    console.log("opéra")
    break;
default:
    console.log("error")
//il ya pas besoin de mettre break avec default
}
//vous allez déclarer deux variables a et b 
//a=5
//b=7
document.write("<h4> donnez un opérateur arithmétique avec switch</h4>")
var a=5;
var b=7;
var operateur=(prompt("donnez un opérateur arithmétique "));// je demande à l'utilisateur de saisir un opérateur arithmétique.
switch(operateur){
    case "+":
        document.write("l'addition de" +a+ "et de"+b+ "donne"+(a+b))
        break;
    case "-":
        document.write("la soustraction de " +a+ " et de " +b+ " donne " + (a-b))
        break;
    case "*":
        document.write("la multiplication de " +a+ " et de " +b+ " donne " + (a*b))
        break;
    case "/":
        document.write("la division de " +a+ " et de " +b+ " donne " + (a/b))
        break;
    case "%":
        document.write("la soustraction de " +a+ " et de " +b+ " donne " + (a%b))
        break;
    default:
        document.write("l'opérateur est incorrect")
}

