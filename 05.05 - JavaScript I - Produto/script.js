// Método Simples
const main = document.querySelector('main');

// Adicionando o título
const titulo = document.createElement('h1');
titulo.id = 'titulo';
titulo.textContent = 'Produtos Incríveis';
main.appendChild(titulo);

// Adicionando o produto
const produtoDiv = document.createElement('article');
produtoDiv.id = 'produto-1';
produtoDiv.innerHTML = `
  <h3>Curso profissionalizante</h3>
  <p class="descricao"><img src="../05.04 - JavaScript I - InnerText e InnerHtml/img/logotipo_proz.svg" alt="logotipo da Proz Educação" /><br>Este curso profissionalizante foi desenvolvido para pessoas que desejam se tornar profissionais na a área de TI. Provendo soluções de ponta no setor de serviços de nuvem.</p>
  <p class="preco">R$ 299,99</p>
`;
main.appendChild(produtoDiv);

// Método Complexo
// Definindo o objeto produto
const produto = {
  nome: 'Super Smartphone',
  img: '📱',
  descricao: 'Este smartphone faz tudo que você precisa e um pouco mais.',
  preco: 'R$ 999,99'
};

// Função para criar o elemento produto
function criarProduto(produto) {
  const produtoDivComplexo = document.createElement('article');
  produtoDivComplexo.id = 'produto-2';  // Atribuindo um ID diferente ao produto criado pelo método complexo

  const nomeProduto = document.createElement('h3');
  nomeProduto.textContent = `${produto.nome}`;
  produtoDivComplexo.appendChild(nomeProduto);

  const imgProduto = document.createElement('span');
  imgProduto.className = 'img';
  imgProduto.textContent = `${produto.img}`;
  produtoDivComplexo.appendChild(imgProduto);

  const descricaoProduto = document.createElement('p');
  descricaoProduto.className = 'descricao';
  descricaoProduto.textContent = `${produto.descricao}`;
  produtoDivComplexo.appendChild(descricaoProduto);

  const precoProduto = document.createElement('p');
  precoProduto.className = 'preco';
  precoProduto.textContent = `${produto.preco}`;
  produtoDivComplexo.appendChild(precoProduto);

  return produtoDivComplexo;
}

// Adicionando o produto criado pelo método complexo
main.appendChild(criarProduto(produto));