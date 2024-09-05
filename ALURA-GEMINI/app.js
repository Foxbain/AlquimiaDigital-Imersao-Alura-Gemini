console.log(prompts[0]);

let section = document.getElementById("resultados_pesquisa");
// console.log(section);


// Função para gerar a lista de prompts na seção "resultados_pesquisa"
function pesquisar() {

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";

    // Itera sobre cada prompt e adiciona seu HTML à string de resultados
    for (let dado of prompts) {
        
        // Cria um elemento HTML para cada prompt com suas informações
        resultados += `
        <div class="item-resultado">
            <h2 class="h2-dados">
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <p class="dicas-meta">${dado.dicas}</p>
            <h3 class="h3-dados">EXEMPLO</h3>
            <p class="prompt-meta p-dados">${dado.exemplos[0].prompt}</p>
            <a href="${dado.linkIA}" target="_blank">Sugestões? Envie um e-mail para foxbain@gmail.com</a>
        </div>
        `;
    }

    // Atualiza o conteúdo da seção com a lista de prompts gerada
    section.innerHTML = resultados;
}