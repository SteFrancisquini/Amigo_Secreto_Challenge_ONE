let amigos = [];
let amigosSorteados = [];
let nome = '';

function adicionarAmigo() {
  const amigo = document.querySelector('#amigo');

  if (amigo.value === '') {
    alert('Campo vazio! Por favor, insira um nome.')
  } else {
    amigos.push(amigo.value);
    const listaAmigos = document.querySelector('#listaAmigos')
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
      listaAmigos.innerHTML += `<li>${amigos[i]}</li>`
    }
    amigo.value = '';
  }
};

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Adicione um amigo primeiro!');
  } else {
    const numeroSorteado = Math.floor(Math.random() * (amigos.length - 0) + 0);
    if (nome === amigos[numeroSorteado]) {
      alert('Você mesmo foi sorteado, tente novamente!');
      return;
    }
    if (amigosSorteados.indexOf(amigos[numeroSorteado]) < 0) {
      const resultado = document.querySelector('#resultado');
      resultado.innerHTML = amigos[numeroSorteado];
      amigosSorteados.push(amigos[numeroSorteado]);

    } else {
      if (amigosSorteados.length === amigos.length) {
        alert('Todos amigos já foram sorteados, inicie o jogo novamente!');
      } else {
        sortearAmigo();
      }

    }
  }
};

function salvarNome() {
  const nomePessoa = document.querySelector('#nome')
  nome = nomePessoa.value;
}

function novoSorteio() {
  nome = '';
  amigos = [];
  amigosSorteados = [];
  document.querySelector('#nome').value = '';
  document.querySelector('#listaAmigos').innerHTML = '';
  document.querySelector('#resultado').innerHTML = '';

}


