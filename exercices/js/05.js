var nombre1=5;
var nombre2=3;
var temp=nombre2;//pour garer la valeur de nombre 2 parce qu'il sera écrasé par la nouvelle valeur de nombre 1
//console.log(temp);
nombre2=nombre1;//réaffectation d'une nouvelle valeur pour nombre2, ici nombre2 prend la valeur de nombre1,
console.log(nombre2);// ici la valeur de nombre2 prend celle de nombre1
nombre1=temp;// pour récupérer la vrai valeur de nombre 2 , j'affecte la variable temp
console.log(nombre1);