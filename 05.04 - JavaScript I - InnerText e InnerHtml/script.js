// Capturando os elementos
const titulo = document.getElementById('titulo');
const listaNaoOrdenada = document.getElementsByTagName('ul')[1];  // Pegando o primeiro ul que é o da nav
const link = document.getElementsByTagName('a')[4];  // Alterei o índice para 4, pois já existem outras tags 'a'
const listaOrdenada = document.getElementById('lista-ordenada');

// Adicionando conteúdo textual aos elementos 'h1' e 'a'
titulo.innerText = 'Título Exemplo';
link.innerText = 'Proz Educação';

// Adicionando três itens simples na lista não ordenada
listaNaoOrdenada.innerHTML = `
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
`;

// Adicionando três itens com links para outros sites na lista ordenada
listaOrdenada.innerHTML = `
  <li><a href="https://duckduckgo.com/">DuckDuckGo</a></li>
  <li><a href="https://searx.space/">SearX</a></li>
  <li><a href="https://www.phind.com/">Phind</a></li>
`;
