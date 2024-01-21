/*
  01

  - Implemente uma função que recebe uma string por parâmetro e retorna a 
    string invertida;
    
    Exemplos: 
      - Se '123' é recebido por parâmetro, '321' deve ser retornado;
      - Se 'abc' é recebido por parâmetro, 'cba' deve ser retornado;
    
  - Após implementar a função, implemente outra versão da função. Essa 2ª 
    versão deve fazer o mesmo que a função anterior faz, mas de forma diferente.
*/

const revertString = (word) => {
  const invertedString = [];

  for (letter in word) {
    invertedString.unshift(word[letter]);
  }
  return invertedString.join("");
};
console.log(revertString("Let him cook"));

const reverseString = (word) => (reversed = [...word].reverse().join(""));
console.log(reverseString("banana"));
/*
  02
  
  - Descubra o que o código abaixo está fazendo e refatore-o.
*/

const numbers = [5, 20, 7, 32, 47, 15, 83, 91, 27, 33];
const foundNumber = numbers.includes(15)

// numbers.forEach((number) => {
//   if (number === 15) {
//     foundNumber = true;
//   }
// });

