console.log("Impressão, dentro do Arquivo modulo.js");

import mensagem000, { Mensagem001, PI, usuario } from "./constante.js";

console.log(PI);
console.log(usuario);

import { aritmetica as calc } from "./aritmetica.js";

//console.log(aritmetica.somar(3, 7));
//console.log(aritmetica.subtracao(7, 3));
console.log(calc.somar(3, 7));
console.log(calc.subtracao(7, 3));

mensagem000();

let mensagemClasse = new Mensagem001;
mensagemClasse;