//number string any boolean date 


//#region Practica 1: Declarar Variables con Tipos Básicos

/* 


Objetivo: Declarar variables utilizando los tipos básicos en TypeScript (string, number, boolean) y observar la inferencia de tipos.

1-Declara una variable nombre de tipo string y asígnale tu nombre.
2-Declara una variable edad de tipo number y asígnale tu edad.
3-Declara una variable estaActivo de tipo boolean para indicar si estás activo o no.

*/

const nombre:string = "Alex";
const edad:number =30;
let estaActivo:boolean = true;

console.log(`${nombre} ${edad} ${estaActivo}`);
//#endregion



//#region  Ejercicio 2: Uso de const y let

/*Objetivo: Practicar la declaración de variables con const y let, entendiendo cuándo utilizar cada uno.

Declara una constante PI de tipo number y asígnale el valor 3.14.
Intenta reasignar un nuevo valor a PI y observa el error.
Declara una variable contador con let que inicialmente sea 0 y luego increméntala.*/

const PI:number = 3.14;

//PI=20;

let contador:number = 0;
contador++;

console.log(contador);



//#endregion

//#region Ejercicio 3: Tipos Unión

/*Objetivo: Entender y aplicar los tipos unión para permitir múltiples tipos en una variable.

Declara una variable identificador que pueda ser tanto number como string.
Asigna un número y luego un string a identificador.*/

let identificador: number | string;
identificador= 100;
identificador= "prueba";
//#endregion



//#region  Ejercicio 4: Arrays y Tuplas

/*
Objetivo: Declarar un array y una tupla, comprendiendo sus diferencias y casos de uso.

Declara un array hobbies que contenga strings.
Declara una tupla usuario que contenga un string (nombre) y un number (edad)
 */

export let hobbies:string[]=["Montar en Bicicleta", "Viajar","Montar en Skaterboard"];

export  const usuario = {
    nombre: "alex",
    edad: "30",

  }

//#endregion

//#region Ejercicio 5: Import y Export
/*
Objetivo: Familiarizarse con el sistema de módulos de TypeScript importando y exportando entre archivos.

En tu archivo 01-basic-types.ts, exporta alguna de las variables o todas.
Crea otro archivo en la misma carpeta llamado 02-imports-exports.ts.
Importa las variables exportadas del archivo 01-basic-types.ts y úsalas dentro del nuevo archivo.
 */



//#endregion

export{};