//operadores
const area = () => {
    let base = parseInt(prompt("Ingrese la base del triángulo:"));
    let altura = parseInt(prompt("Ingrese la altura del triángulo:"));
    let resultado = (base * altura) / 2;
    document.write("la base del triangulo es: " + base + "<br>");
    document.write("la altura del triangulo es: " + altura + "<br>");
    return resultado;
};

function suma() {
    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));
    let suma = num1 + num2;
    document.write("El primer número ingresado es: " + num1 + "<br>");
    document.write("El segundo número ingresado es: " + num2 + "<br>");
    return suma;
}


const cuadrado = () => parseInt(prompt("Ingrese un número:")) ** 2;

function dolares() {
    let euro = parseInt(prompt("Ingrese la cantidad de euros:"));
    let tasa = 1.08;
    let cambio = euro * tasa;
    return cambio;
}

function lado() {
    let lado = parseInt(prompt("Ingrese el lado de un cuadrado:"));
    let area = lado * lado;
    let perimetro = lado * 4;
    return [area, perimetro];
}

function cilindro() {
    let radio = parseInt(prompt("Ingrese el radio del cilindro:"));
    let altura = parseInt(prompt("Ingrese la altura del cilindro:"));
    let area = 2*3.1416 * radio * (radio+altura);
    let volumen = Math.PI * radio * radio * altura;
    return [area, volumen];
}



function  circunferencia () {
    let radio = parseInt(prompt( "Ingrese la radio de la circunferencia" ));
    let longitud = (2*3.1416*radio);
    let area =Math.PI * Math.pow(radio, 2);
    return [longitud, area];
}


function  promedio() {
    let num1 = parseInt(prompt( "Ingrese el primer numero: " ));
    let num2 = parseInt(prompt( "Ingrese el segundo numer " ));
    let num3 = parseInt(prompt( "Ingrese el tercer numero " ));
    let promedio = (num1+num2+num3)/3 ;
    return promedio;
}

















//condicionales
const positivo_negativo = () => {
    let numero = parseInt(prompt("Ingrese un número"));
    let resultado;
    
    if (numero >= 0) {
        resultado = "El número ingresado es positivo";
    } else {
        resultado = "El número ingresado es negativo";
    }
    
    return resultado;
}



function mayor_menor(){
    let num1= parseInt(prompt("ingrese el primer numero"));
    let num2 = parseInt(prompt("ingrese el segundo numeroo"));
    
    if (num1 > num2) {
        mayor = "el primer número, el cual es " +num1+ " es el mayor";
        menor = "el segundo número, el cual es "+num2+" es el menor";
        return[menor, mayor];
        
    
    } else if (num1 < num2) {
        menor = "el primer número, el cual es "+num1+" es el menor";
        mayor = "el segundo número, el cual es "+num2+" es el mayor";
        return[menor, mayor];
    
    } else {
        igual = "ambos números son iguales";
        return igual;
    }

}

function numeros_enteros(){
    let num1= parseInt(prompt("ingrese el primer numero"));
    let num2= parseInt(prompt("ingrese el segundo numero"));
    let num3= parseInt(prompt("ingrese el tercer numero"));
    document.write("primer numero: " + num1 + "<br>"+"segundo numero:"+ num2+"<br>"+"tercero numero:"+ num3+ "<br>");
   
    if (num1 >= num2 && num1 >= num3) {
        mayor = "El primer número es el mayor"; 
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = "El segundo número es el mayor";
    } else {
        mayor = "El tercer número es el mayor";
    }
    
    if (num1 <= num2 && num1 <= num3) {
        menor = "El primer número es el menor";
    } else if (num2 <= num1 && num2 <= num3) {
        menor = "El segundo número es el menor";
    } else {
        menor = "El tercer número es el menor";
    }
  return [mayor, menor];


}

function numerosAYB(){

let A=parseInt(prompt("ingrese el primer  numero"));
let B=parseInt(prompt("ingrese el segundo numero"));
document.write("primer numero: " + A + "<br>"+"segundo numero:"+ B+"<br>");
if (A<B){
    sumas =(A+B) ;
    sumas= " A es menor que B la suma es: "+sumas;
    return sumas;
    
  } else {
    restas= (A-B);
    restas=" A es meyor que B la resta es: "+restas;
    return restas;
    ;
}
}




function conciente(){

    let A=parseInt(prompt("ingrese el primer  numero"));
    let B=parseInt(prompt("ingrese el segundo numero"));
    let cociente = A / B;
    let no=("La división no es posible porque el divisor es cero.");
   if (B == 0 ) {
    return no;
   } else {
    cociente= "El cociente entre "+A+" y "+B+" es: "+cociente;
    return cociente;
   }
}

function suma_multiplicar(){
    let A=parseInt(prompt("ingrese el primer  numero"));
    let B=parseInt(prompt("ingrese el segundo numero"));
    document.write("primer numero: " + A + "<br>"+"segundo numero:"+ B+"<br>");
    if ( A<0 || B<0) {
        SUMA= (A+B);
        SUMA= "Un numero es negativo por lo tanto la suma es: "+SUMA;
        return SUMA;
    } else {
        MULTIPLICAR=(A*B);
        MULTIPLICAR= " Los numeros son positivos por lo tanto la multiplicacion es: "+MULTIPLICAR;
        return MULTIPLICAR;
    }
}

function año(){
    let año=parseInt(prompt("ingrese el año"));
    if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0)  {

        return ( año+" :es bisiesto");
    } else {
        return( " no es bisiesto");
    }
}












//ciclos


function multiplo3() {
    let resultados = [];
    for (let i = 0; i <= 100; i += 3) {
        resultados.push(i);
    }
    return resultados;
}

function impares(){
    let resultados = [];
    for(let i = 1; i < 101; i+=2){
        resultados.push(i);
    }
    return resultados;
}

function pares(){
    let resultados = [];
    for(let i = 0; i < 101 ; i+=2){
        resultados.push(i);
    }
    return resultados; 

}


function cuadrados() {
    let cuadrado = [];
    for (let numero of Array.from({length: 31}, (_,numero) => parseInt(numero) + 1)) {
        cuadrado.push(`El cuadrado de ${numero} es ${numero*numero}`);
    }
    return cuadrado;
}



function suma_cuadrados(){
    let suma = 0;
    for (let i = 1; i <= 100; i++) {
        let cuadrado = i * i;
        suma = suma + cuadrado;
    }
    return suma;
}

function dos_numero(){
    let uno = parseInt(prompt("Ingrese un número"));
    let dos = parseInt(prompt("Ingrese el segundo número"));
    let no = ("El primer número debe ser menor que el segundo.");
    if (uno >= dos) {
        return no;
    }
    
    let numerosEntre = [];
    let i = uno + 1; 
    while (i < dos) {
        numerosEntre.push(i);
        i++;
    }
    let numer="Los números entre "+ uno+ " y "+dos+ " son:"+ numerosEntre;
    return numer;
   }


function suma_numeros(){

    let suma = 0;
        let numero;
        do {
            numero = parseInt(prompt("Ingrese un número. Para finalizar ingrese 0:"));
            
            suma += numero;
        } while (numero !== 0);
        return suma;


}



