const books = [
  { name: "Código Limpo", price: 30 },
  { name: "O milagre da manhã", price: 5 },
  { name: "Alice no país das maravilhas", price: 10 },
  { name: "Quem pensa enriquece", price: 50 },
  { name: "O livro da ciência", price: 40 },
];

const filteredBooks = books
  .filter(({ price }) => price > 20)
  .map(
    ({ name, price }) =>
      `O preço do livro: "${name}", caiu para R$${price} reais.`
  );

console.log(filteredBooks);
