let nomes = [];

function adicionarAmigo() {
     const inputAmigo = document.getElementById('amigo');

     const nomeAmigo = inputAmigo.value.trim();
    
     if (nomeAmigo === '') {
    
     alert('Por favor, digite um nome válido!');
    
    return;
    
    }
    
      nomes.push(nomeAmigo);
}

function sortearAmigo() {

}