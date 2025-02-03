let amigos = [];


function adicionarAmigo() {
    let nome = document.querySelector('input').value;

    if (nome == '' ) {
        alert('Por favor, insira um nome');
    } else {
        amigos.push(nome);
    }
    limparCampo();
}


let lista = document.getElementById(listaAmigos)
listaAmigos.innerHTML = ""

for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement('li');    
    li.textContent = amigos[i];               
    lista.appendChild(li);
}


function amigoAleatorio() {
    if (amigos.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        return amigos[indiceAleatorio];
    } else { 
        alert('Nenhum amigo para sortear.');
        return null;
    }
}

function sortearAmigo() {
    let amigo = amigoAleatorio();
    if (amigo) {
        let amigoSorteado = document.getElementById('resultado');
        amigoSorteado.innerHTML = 'O amigo sorteado foi: ' + amigo;
    }
}




function limparCampo() {
    nome = document.querySelector('input')
    nome.value = '';
}
