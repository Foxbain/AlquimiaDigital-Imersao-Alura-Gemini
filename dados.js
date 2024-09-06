let prompts = [
    {
      titulo: "Prompt para Marketing",
      descricao: "Desvende o poder dos prompts e revolucione seu marketing! Com a IA, crie conteúdos personalizados, otimizados e em grande escala. Aumente sua produtividade, explore novas ideias e conquiste resultados incríveis. Descubra como os prompts podem transformar seu negócio!",
      linkIA: "https://gemini.google.com/app",
      dicas: [
        "Seja Claro e Conciso : Evite frases ambíguas e longas demais.",
        "Dê contexto : Forneça informações relevantes sobre o tema que você deseja abordar.",
        "Seja específico : Quanto mais detalhes você fornecer, melhor será o resultado.",
        "Use palavras-chave : As palavras-chave ajudam a IA a entender o assunto principal.",
        "Experimente, TESTE, e Melhore: Não tenha medo de testar diferentes prompts até encontrar a formulação perfeita.",
      ],
      exemplos: [
        {
          prompt: [
            "Tenho um blog no nicho (INSERIR NICHO) onde falo principalmente sobre [ASSUNTOS TRATADOS NO BLOG]. Haja como um especialista em [ESPECIALIDADE] e me dê ideias de títulos para conteúdo baseado nas principais dores, desejos e dúvidas do meu nicho, que são: [LISTAR AS DÚVIDAS]",
            "teste",
          ],
            
          
          parametros: {
            nicho: "Marketing Digital",
            assunto: "SEO, marketing de conteúdo",
            especialidade: "SEO",
            duvidas: "como aumentar o tráfego do site, como criar um blog de sucesso"
          }
        },
      ]
    },

{
    titulo: "Prompt Para Suporte",
    descricao: "Quer um suporte técnico mais eficiente e personalizado? com prompts de suporte você pode, automatizar tarefas, personalizar o atendimento e aumentar a satisfação do cliente. Reduzir custos e tempo, melhore a eficiência e obtenha insights valiosos sobre seus clientes.",
    linkIA: "https://gemini.google.com/app",
    dicas: [
        "Seja Claro e Conciso : Evite frases ambíguas e longas demais.",
        "Dê contexto : Forneça informações relevantes sobre o tema que você deseja abordar.",
        "Seja específico : Quanto mais detalhes você fornecer, melhor será o resultado.",
        "Use palavras-chave : As palavras-chave ajudam a IA a entender o assunto principal.",
        "Experimente, TESTE, e Melhore: Não tenha medo de testar diferentes prompts até encontrar a formulação perfeita.",
    ],
    exemplos: [
        {
            prompt: [ 
                "Considerando o seguinte erro em anexo (ANEXAR ERRO) crie um resumo deste erro e além disso, crie 3 soluções para este mesmo erro.",
            ],
            parametros: {
                nicho: "Suporte Técnico",
                assunto: "Suporte Técnico",
                especialidade: "Tecnologia e Informação",
                duvidas: "Mensagem de erro",
            }
            
        }
    ]
},
{
    titulo: "Prompt Para Imagem",
    descricao: "A IA gera imagens incríveis a partir de simples descrições.  Sem precisar ser um expert em design, você pode criar logos, artes, e muito mais.  Explore infinitas possibilidades, você só precisa seguir o passo a passo que vou lhe mostrar.",
    linkIA: [
        "https://gemini.google.com/app",
        "https://www.midjourney.com/home",
        "https://www.freepik.com/pikaso/ai-image-generator",
    ],
    dicas: [
        "Você vai precisar de um programa de print screen",
        "print uma imagem semelhante que lhe interessa ou que te desperte um insight.",
        "Copie essa imagem no Gemini e pela para o Gemini descrever essa imagem com todos os detalhes e cores.",
        "Com as informações que você coletou do Gemini, Crie seu prompt",
        "EX: Preciso que analise essa imagem e descreva ela com detalhes para mim. A descrição deve conter os elementos abaixo, 1. Estilo de arte 2. Objeto 3. Detalhes do Objeto 4. Cores.",
        "O Gemini constroi imagens somente em comando inglês, então você deve traduzir o prompt que criou e pedir para o Gemini Criar"
    ],
    exemplos: [
        {
            prompt: "Create a cartoon-style image with rounded and expressive shapes, common characteristics in animations and games. Despite the cartoon style, the image contains a certain realism in the details, such as the texture of the clothing fabric and the lighting of the eyes. This is a two-dimensional image without depth illusion. The figure in the image is a rogue, a classic character from RPG games, especially from the Final Fantasy series. The character is easily recognizable by their brown hood and light tunics. The rogue is small and chubby, with large yellow eyes and a neutral expression. They wear a brown hood with a brown cape, striped pants, and red boots. The rogue holds a dagger in both hands. They are in a static pose with one leg slightly in front of the other. The background of the image is simple, with a gradient of green and blue colors.",
            parametros: {
                nicho: "Criação e Design",
                assunto: "Criação de Imagem",
                especialidade: "Tecnologia e Informação",
                duvidas: "Como criar imagens com IA",
            }
            
        }
    ]
},
  ];