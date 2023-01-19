/*1. Realizar un algoritmo que permita ingresar por teclado un
valor de hora y una cantidad de horas, y muestre el salario
total*/

 let valorhoras = prompt("escribe el valor de la hora")
 let cantidadhora = parseInt(prompt("escribe la cantidad de horas trabajadas"))
	var  salariototal= parseInt(valorhoras)*parseFloat(cantidadhora);

 console.log(salariototal)

 /*2. Realizar un algoritmo que permita ingresar los tres lados de
un triángulo, y decir si es equilátero, escaleno o iscoceles*/

let lado1 = parseInt(prompt("escribe el valor del lado 1"))
let lado2 = parseInt(prompt("escribe el valor del lado 2"))
let lado3 = parseInt(prompt("escribe el valor del lado 3"))


if(lado1 == lado2 && lado1 == lado3){
	console.log("el triangulo es quilatero")
}
if(lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
	console.log("el triangulo es escaleno")
}
if(lado1 == lado2 || lado1 == lado3){
	console.log("el triangulo es isoseles")


}

 /*3. Cierta universidad para liquidar el pago de matrícula de un
estudiante le exige los siguientes datos:
a. • Número de inscripción
b. • Nombres
c. • Patrimonio.
d. • Estrato social.
e. La universidad cobra un valor constante para cada
estudiante de $50.000.
i. Si el patrimonio es mayor que $2´000.000 y el
estrato superior a 3, se le incrementa un
porcentaje del 3% sobre el patrimonio.
Hacer un algoritmo que muestre:
• Número de inscripción.
• Nombres.
• Pago de matrícula.*/


let inscripcion = parseInt(prompt("ingresa el numero de inscripcion"))
let nombree = prompt("escribe el nombre")
let patrimonio = parseFloat(prompt("escribe el valor del patrimonio"))
let estrato = parseInt(prompt("escribe el valor del estrato"))
let matricula= 50000;

if(patrimonio > 2000000 && estrato > 3){
	patrimonioaumento = patrimonio * 0.3;
	matricula+= patrimonioaumento;
}

console.log(nombree, inscripcion, matricula)


/*4 Determinar la cantidad de dinero recibida por un trabajador
por concepto de las horas semanales trabajadas en una
empresa, sabiendo que cuando las horas de trabajo exceden de
40, el resto se considera horas extras y se pagan al doble de
una hora normal, cuando no exceden de 8; si las horas extras
exceden de 8, se pagan las primeras 8 al doble de lo que se
paga una hora normal y el resto al triple. Del trabajador se
conocen los siguientes datos: nombres, número de horas
trabajadas en la semana y valor recibido por una hora normal
de trabajo.*/


let valorhora = parseFloat(prompt("escribe el valor de la hora"))
let nombre = prompt("escribe el nombre")
let cantidadhoras = parseInt(prompt("escribe la cantidad de horas trabajadas"))
	let  salaritotal= parseInt(valorhora)*parseFloat(cantidadhoras);


	if(cantidadhoras >8){
		console.log(salaritotal*2)
	}
	if(cantidadhoras >3){
		console.log(salaritotal*2)
	}else{
 		console.log(salaritotal)
	}

	/*5  Un almacén efectúa una promoción en la cual se hace un
descuento sobre el valor de la compra total, según el color
de la bolita que el cliente saque al pagar en caja. Si la
bolita es blanca no se le hará descuento alguno, si es verde
se le hará un 10% de descuento, si es amarilla un 25%, si es
azul un 50% y si es roja un 100%. Hacer un algoritmo para
determinar la cantidad final que un cliente deberá pagar por
su compra. Se sabe que sólo hay bolitas de los colores
mencionados*/



let bolita= Math.floor(Math.random(4))


if(bolita ==0){
	console.log("blanca: 0% de descuento")
}
if(bolita ==1){
	console.log("verde: 10% de descuento")
}
if(bolita ==2){
	console.log("amarilla: 25% de descuento")
}
if(bolita ==3){
	console.log("azul: 50% de descuento")
}
if(bolita ==4){
	console.log("rojo: 100% de descuento")
}

/*6 Una empresa con tres departamentos tiene establecido un plan
de incentivos para sus vendedores. Al final del período, a
cada departamento se le pide el importe global de las ventas.
A los departamentos que excedan el 33% de las ventas totales
se les adiciona al salario de los vendedores un porcentaje
equivalente al 20% del salario mensual. Las nóminas de los
tres departamentos son iguales. Si se tienen los siguientes
datos:
a. • Ventas del departamento 1
b. • Ventas del departamento 2
c. • Ventas del departamento 3
d. • Salario de los vendedores de cada departamento
Hacer un algoritmo que determine cuánto recibirán los
vendedores de cada departamento al finalizar el período*/


let ventasdepartamento1 = prompt("escribe el total de las  ventas del departamento1")
let ventasdepartamento2 = prompt("escribe el total de las  ventas del departamento2")
let ventasdepartamento3 = prompt("escribe el total de las  ventas del departamento3")
let salariobasico = 1000000

totalventas = parseFloat(ventasdepartamento1) + parseFloat(ventasdepartamento2)+ parseFloat(ventasdepartamento3)
adicion =salariobasico*0.20
limite = totalventas*0.33

if(totalventas>limite){
	console.log(salariobasico+adicion)
}
else{
	console.log(salariobasico)
}

/*7 Dados los valores A, B y C que son los parámetros de una
ecuación de segundo grado, elaborar un algoritmo para hallar
las posibles soluciones de dicha ecuación*/

let a = parseInt(prompt("escribe el valor de a"))
let b = parseInt(prompt("escribe el valor de b"))
let c = parseInt(prompt("escribe el valor de c"))

d=b^2-4*a*c
e=2*a

if (d = 0){
	console.log("x1 = x2 =", - b / e)
}
if (d > 0){
	console.log("x1 =", (- b + Math.pow(d)) / e)
	console.log("x2 =", (- b - Math.pow(d)) / e)
}
else{
	console.log("x1 =", - b / e, "+", Math.pow(- d) / e, "i")
	console.log("x2 =", - b / e, "-", Math.pow(- d) / e, "i")
}



/*8. Cierta universidad tiene un programa para estimular a los
estudiantes con buen rendimiento académico. Si el promedio es
de 4,5 o más y el alumno es de pregrado entonces cursará 28
créditos y se le hará un 25% de descuento. Si el promedio es
mayor o igual a 4,0 pero menor que 4,5 y el alumno es de
pregrado, entonces cursará 25 créditos y se le hará un 10% de
descuento. Si el promedio es mayor que 3,5 y menor que 4,0 y
es de pregrado, cursará 20 créditos y no tendrá ningún
descuento. Si el promedio es mayor o igual a 2,5 y menor que
3,5 y es de pregrado, cursará 15 créditos y no tendrá
descuento. Si el promedio es menor de 2,5 y es de pregrado,
no podrá matricularse. Si el promedio es mayor o igual a 4,5
y es de posgrado, cursará 20 créditos y se le hará un 20% de
descuento. Si el promedio es menor de 4,5 y es de posgrado
cursará 10 créditos y no tendrá descuento.*/

let promedio = parseFloat(prompt("escribe el promedio"))
let alumno = prompt ("escribe el nombre del alumno")
let tipo = prompt("escribe si eres estudiante de pregrado o posgrado")

if(promedio>=4.5 && tipo=="pregrado")
{
	console.log("descuento del 25% y puedes cursar 28 creditos")
}
if(promedio>=4.0 && promedio <4.5 && tipo=="pregrado")
{
	console.log("descuento del 10% y puedes cursar 25 creditos")
}
if(promedio>=3.5 && promedio <4.0 && tipo=="pregrado")
{
	console.log("puedes cursar 20 creditos")
}
if(promedio >=2.5 && promedio <3.5 && tipo=="pregrado")
{
	console.log("puedes cursar 15 creditos")

}
if(promedio <2.5  && tipo=="pregrado")
{
	console.log("no te puedes matricular")
}
if(promedio>=4.5 && tipo=="posgrado")
{
	console.log("descuento del 20% y puedes cursar 20 creditos")
}
if(promedio<=4.0 && tipo=="posgrado")
{
	console.log("puedes cursar 10 creditos")
}


/*9 .Un almacén de escritorios hace los siguientes descuentos: si
el cliente compra menos de 5 unidades se le da un descuento
del 10% sobre la compra; si el número de unidades es mayor o
igual a cinco, pero menos de 10 se le otorga un 20% y, si son
10 o más se le da un 40%. Hacer un algoritmo que determine
cuánto debe pagar un cliente si el valor de cada escritorio
es de $800.000.*/


let unidades = parseInt(prompt("Escribe la cantidad de escritorios que quieres comprar"))
valor=800000

if(unidades< 5 ){
	descuento1 = valor*0.10
	console.log(valor-descuento1)
}
if(unidades<10 && unidades > 5 ){
	descuento2 = valor*0.20
	console.log(valor-descuento2)
}
if(unidades>10 ){
	descuento3 = valor*0.40
	console.log(valor-descuento3)
}


