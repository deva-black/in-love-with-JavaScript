// HÁ 3 FORMAS DE CRIAÇÃO DE VARIÁVEIS EM JS (KEYWORDS): VAR, LET E CONST

// O que é variável em JavaScript? Veja o que a documentação MDN diz:

/* "Uma variável (variable) é um local nomeado para armazenar um valor. 
Dessa forma, um valor pode ser acessado através de um nome predeterminado" 
https://developer.mozilla.org/pt-BR/docs/Glossary/Variable*/

/* Declarando variável >> palavra reservada (keyword) + label (etiqueta) 
ou identificador (nome que dará acesso ao conteúdo da variável)*/

var nomeDaVariavel; // palavra reservada "var" + identificador da variável "nomeDaVariavel". Valor undefined
let outroNomeDaVariavel; // palavra reservada "let" + identificador da variável "outroNomeDaVariavel"
const vaiDarErro; // palavra reservada "const" + identificador da variável "vaiDarErro"
/* OBS: Uncaught SyntaxError: Missing initializer in const declaration
A palavra reservada CONST precisa ser declarada e inicializada ao mesmo tempo (na mesma linha)*/

// Inicializando uma variável: guardando um valor na variável declarada após o operador "="
nomeDaVariavel = {chave: "valor"}; // tipo de dado derivado (não-primitivo): object, par key/value

// Declarando e inicializando (atribuindo valor) uma variável
var nomeDaVariavel = "valor atribuído"; // tipo de dado primitivo: string (caracteres). Refatorando cód. li. 12 e 19
let outroNomeDaVariavel = 1; // tipo de dado primitivo: number (número)
/* OBS: Uncaught SyntaxError: Identifier 'outroNomeDaVariavel' has already been declared
A palavra reservada LET não permite redeclaração no mesmo escopo.
Isso significa que seu escopo é bloqueado (Cannot redeclare block-scoped variable 'outroNomeDaVariavel')*/
const vaiDarBom = true; // tipo de dado primitivo: boolean (booleano)
const vaiDarBom = false; 
/* O mesmo vale para a palavra reservada CONST quanto ao escopo ser bloqueado.
OBS: Cannot redeclare block-scoped variable 'vaiDarBom'. 
Além de CONST não aceitar reatribuição de valor.
OBS: Uncaught SyntaxError: Identifier 'vaiDarBom' has already been declared*/

console.log(nomeDaVariavel);
console.log(outroNomeDaVariavel);
console.log(vaiDarBom);