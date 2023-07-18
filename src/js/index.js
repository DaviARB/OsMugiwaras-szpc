const personagens= document.querySelectorAll('.personagem');
console.log(personagens)

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window,innerWidth < 450){
            window.scrollTo({top: 0, behavior: `smooth`});
        }

        RemoverSelecaoDoPersonagem();

        personagem.classList.add('selecionado');

        AlterarImagemSelecionada(personagem);
        AlterarNomePersonagensSelecionado(personagem);
        AlterarDescricaoPersonagens(personagem);
    })
})

function AlterarImagemSelecionada(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `/src/imagens/card-${idPersonagem}.png`;
}

function AlterarDescricaodepersonagens(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function AlterarNomeDePersonagensSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function RemoverSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
