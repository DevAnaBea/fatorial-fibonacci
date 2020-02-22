// import "./styles.css";
// let cont = 0
// let x = 0;
// let quantidade= prompt(`Digite a quantidade de numeros:`)
// for(x=1;x<=quantidade;x+=2) {
//   cont ++;
// }
// document.write(`Existem ${cont} pares entre 1 e ${quantidade}<br>`);

// let a = 0;
// let b = 1;
// let quantidade = prompt(`Digite quantos numeros de Fibonacci quer imprimir:`);
// document.write(`${a}   ${b}`);

// for (let x = 0; x < quantidade-2; x++) {
//   let resultado = a + b;
//   document.write(`   ${resultado}   `);
//   a = b;
//   b = resultado;
// }

// Numero fatorial

// let fatorial = 1;
// let numero = prompt(`Digite o numero fatorial que quer calcular:`);
// document.write(`${numero}! ( `);
// while (numero > 0) {
//   fatorial = numero * fatorial;
//   if (numero !== 1) {
//     document.write(`${numero} x `);
//   } else {
//     document.write(`${numero}) = `);
//   }
//   numero--;
// }
// document.write(`${fatorial}`);

// Do While
//do {
// incremento ou decremento
//} while(condição)

// a soma de todos os numeros pares entre dois numeros quaisquer
function pares() {
  do {
    if (n1 % 2 === 0) {
      soma = soma + n1;
    }
    n1++;
  } while (n1 < n2);
  document.write(` ${soma}`);
}
let n1 = Number(prompt(`Digite o numero inicial:`));
let n2 = Number(prompt(`Digite o numero final:`));
document.write(`A soma dos numero pares entre ${n1} e ${n2} é:`);
n1++;
let soma = 0;
pares();

