console.log(prompts[0]);

// Função para gerar a lista de prompts na seção "resultados_pesquisa"
function pesquisar() {
    
    // Obtem uma sessão HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados_pesquisa");

    // Variável que armazena o conteúdo digitado no campo pesquisa do Input
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase(); // Convertendo para minúsculas

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";

    // Itera sobre cada prompt e adiciona seu HTML à string de resultados
    for (let dado of prompts) {
        // Convertendo título e descrição para minúsculas
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();

        // Verifica se o campo de pesquisa está presente no título ou na descrição (case-insensitive)
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
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
    }

    // Se não houver resultados, exibe uma mensagem indicando que nada foi encontrado
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>";
    }

    /*
        Abaixo Usei campoPesquisa.trim() para garantir que espaços em branco não sejam considerados como uma entrada válida.
        Se o campo estiver vazio, a mensagem "Digite um valor válido" será exibida na seção de resultados, e a função retornará sem executar o restante do código.
    */ 
    if (campoPesquisa.trim() === "") {
        section.innerHTML = "<p>Digite um valor...</p>";
        return; // Sai da função para não continuar a execução
    }

    // Atualiza o conteúdo da seção com a lista de prompts gerada
    section.innerHTML = resultados;
}