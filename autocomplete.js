
document.addEventListener('DOMContentLoaded', function () {
    // Sugestões de exemplo
    const sugestoes = ["MLB, SPE1 - Recife",
        "MLB, SPI1 - Teresina",
        "MLB, SPR1 - Curitiba",
        "MLB, XPR1 - Curitiba",
        "MLB, SPR2 - Londrina",
        "MLB, XPR2 - Londrina",
        "MLB, SPR3 - Cascável",
        "MLB, SPR4 - Pato Branco",
        "MLB, SPR5 - Guarapuava",
        "MLB, SPR6 - Maringá",
        "MLB, SPR7 - Ponta Grossa",
        "MLB, SPR8 - Campina Grande do Sul",
        "MLB, SRD1 - Porto Velho",
        "MLB, SRJ1 - Cordovil",
        "MLB, SRJ10 - RJ Barra",
        "MLB, SRJ12 - Itaperuna",
        "MLB,  SRJ2 - Queimados",];

    // Elementos DOM
    const inputPesquisa = document.getElementById('localidade');
    const autocompleteResults = document.getElementById('autocomplete-results');

    // Evento de entrada no campo de pesquisa
    inputPesquisa.addEventListener('input', function () {
        const termoPesquisa = inputPesquisa.value.toLowerCase();
        const sugestoesFiltradas = sugestoes.filter(sugestao =>
            sugestao.toLowerCase().includes(termoPesquisa)
        );

        // Limpar a lista de resultados antigos
        autocompleteResults.innerHTML = '';

        // Adicionar novos resultados à lista
        sugestoesFiltradas.forEach(sugestao => {
            const li = document.createElement('li');
            li.textContent = sugestao;

            li.addEventListener('click', function () {
                inputPesquisa.value = sugestao;
                autocompleteResults.innerHTML = '';
            });

            autocompleteResults.appendChild(li);
        });
    });
});
