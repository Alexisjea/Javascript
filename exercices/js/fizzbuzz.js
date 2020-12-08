//boucle for pour afficher tous les chiffres de 1à 100
for (var i=1; i<101 ; i++){

if((i%3==0) && (i%5==0)){// je vérifie que le chiffre es divisible par 3 et 5 en meme temps 
document.write("fizzbuzz"+"<br>");
}else if(i%3==0){//pour vérifier que le nombre est divisible par 3
document.write("fizz"+"<br>");
}
else if(i%5!=0)  {// pour tester si compteur est divisible par 5 et non par 3 (non divisible par 3, elle est validé avec le else déjà)
document.write("buzz"+"<br>")
}
else{
     document.write(i+"<br>")

}
   
}
