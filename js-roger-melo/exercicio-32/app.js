/*
  Neste exercício, vamos praticar um pouco do que vimos até aqui, através da 
  API do GIPHY, que é um website de GIFs (https://giphy.com/).

  - Seu desafio é implementar uma funcionalidade de busca dos GIFs. Quando o 
    usuário digitar o termo de busca no input e pressionar enter, um GIF deve 
    ser exibido na tela. Como neste exemplo: https://youtu.be/RHe-uCJGCeA
  - Observe que o GIF mais recente é inserido acima dos GIFs anteriores;
  - Para fazer requests para a API do GIPHY, você precisará de uma API key. 
    Para obtê-la, siga os seguintes passos:
    - Acesse https://developers.giphy.com/dashboard/ e faça o login;
    - No Dashboard, clique em "Create an App", clique em "API Selected" e em 
      "Next Step";
    - Dê um nome e descrição para o app e crie-o;
    - Clique no código da API key para copiá-la;
  - O submit do form deve ser feito para o endpoint abaixo. Atente-se para os 2
    [PLACEHOLDERS] que devem ser substituídos:
    - https://api.giphy.com/v1/gifs/search?api_key=[SUA_CHAVE_DA_API_AQUI]&limit=1&q=[VALOR_INSERIDO_NO_INPUT]
    - Se quiser testar outras possibilidades, os endpoints da API estão 
      listados na documentação: https://developers.giphy.com/docs/api/endpoint#search
  - Ignore os avisos no console. Para limpá-lo, pressione "ctrl + L".
*/

const apiKey = null;//gere a sua chave da api, bruh!

const form = document.querySelector("#form");
const searchBar = document.querySelector("#search");
const outPut = document.querySelector(".out");

const getUserInput = (e) => {
  e.preventDefault();
  const userInput = searchBar.value;
  searchGif(userInput);
};

const searchGif = async (userInput) => {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=1&q=${userInput}`
    );
    const unWrapper = await response.json();
    const gif = unWrapper.data[0].images.original.webp;
    InsertIntoDom(gif);
  } catch (error) {
    throw new Error(`There's something wrong now, try again later`);
  }
};

const InsertIntoDom = (gif) => {
  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", `${gif}`);
  outPut.appendChild(imgElement);
};

form.addEventListener("submit", getUserInput);
