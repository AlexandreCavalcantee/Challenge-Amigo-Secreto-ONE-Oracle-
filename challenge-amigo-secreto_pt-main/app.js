let nomes = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();
    
    if (nomeAmigo === '') {
        alert('Por favor, digite um nome válido!');
        return;
    }
    
    nomes.push(nomeAmigo);
    
    const listaAmigos = document.getElementById('listaAmigos');
    const li = document.createElement('li');
    li.textContent = nomeAmigo;
    listaAmigos.appendChild(li);
    
    inputAmigo.value = '';
    inputAmigo.focus();
}

function sortearAmigo() {
    if (nomes.length < 2) {
        alert('Adicione pelo menos 2 amigos para realizar o sorteio!');
        return;
    }
    
    const dadores = [...nomes];
    const receptores = [...nomes];
    
    const pares = [];
    
    for (let i = 0; i < nomes.length; i++) {
        const dador = dadores[i];
        
        const possiveisReceptores = receptores.filter(nome => nome !== dador);
        
        if (possiveisReceptores.length === 0) {
            return sortearAmigo();
        }
        
        const indiceAleatorio = Math.floor(Math.random() * possiveisReceptores.length);
        const receptor = possiveisReceptores[indiceAleatorio];
        
        const indiceReceptor = receptores.indexOf(receptor);
        receptores.splice(indiceReceptor, 1);
        
        pares.push({ dador, receptor });
    }
    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    pares.forEach(par => {
        const li = document.createElement('li');
        li.textContent = `${par.dador} → ${par.receptor}`;
        resultado.appendChild(li);
    });
}