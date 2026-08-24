/* ====================================================================
   FURLAN ACADEMY — CONTEÚDO

   Este arquivo guarda TODO o conteúdo do site. O index.html não precisa
   ser tocado nunca mais: ele é só o motor.

   Os dois arquivos precisam ficar na MESMA PASTA, com estes nomes
   exatos, em minúsculas:
       index.html
       conteudo.js

   ------------------------------------------------------------------
   OS QUATRO NÍVEIS

     MATÉRIA   (Matemática)
      └ ASSUNTO   (Geometria analítica)
         └ TEMA      (Plano cartesiano)
            └ SUBTEMA   (Distância entre dois pontos)
               └ videos, escritas e atividades

   ------------------------------------------------------------------
   MATEMÁTICA

   Fórmula na linha do texto:     $x^2 + 1$
   Fórmula centralizada:          $$d = \sqrt{2}$$

   ATENÇÃO: aqui dentro toda barra invertida vira DUAS.
   Escreva \\sqrt, \\frac, \\cdot — nunca \sqrt sozinho.
   A tela "Criar aula" do site já faz isso automaticamente.

   ------------------------------------------------------------------
   ATIVIDADES

   Tipos: "multipla", "varias", "numerica", "plano".

   ALTERNATIVAS
   De 2 a 8 por questão (letras A até H). O padrão do formulário é 5,
   como no ENEM. Escrevendo direto aqui no arquivo, basta pôr mais ou
   menos itens na lista "alternativas" — o site se adapta sozinho.

   ESTILIZAÇÃO DO TEXTO

   Vale em qualquer campo — leitura, pergunta, alternativa, explicação:
       **negrito**        vira negrito
       *itálico*          vira itálico
       `código`           vira letra de máquina

   Só na aba de leitura, no começo da linha:
       ## Subtítulo       vira subtítulo
       - item             vira lista com marcador
       1. item            vira lista numerada
       > trecho           vira citação recuada

   CORES DAS MATÉRIAS

   O campo cor aceita qualquer código hexadecimal. As dez testadas,
   que funcionam bem no fundo escuro, são:

       #5C8AF5 Azul       #3ECF8E Verde      #F2765A Coral
       #C79BFF Lilás      #FFC65C Âmbar      #4ECDE0 Turquesa
       #FF8FB1 Rosa       #A8DE5C Limão      #6FC5FF Céu
       #E3C489 Areia

   Se for escolher outra por conta própria, use um tom claro: a cor
   vira fundo do número da aula, que tem texto escuro em cima.

   IMAGEM NO MEIO DO TEXTO
   Deixe a linha sozinha, com uma linha em branco antes e depois:

       ![legenda da figura](imagens/arquivo.png)

   Pode repetir quantas vezes quiser, em qualquer posição: texto,
   imagem, texto, imagem. A legenda é opcional — deixe ![](...) para
   figura sem legenda. Vale na leitura, no enunciado e na explicação.

   A citação preserva a quebra de linha, então serve para verso e
   diálogo. Em Português, use para o texto de apoio da questão.

   O ENUNCIADO e a EXPLICAÇÃO das questões aceitam tudo isso também,
   não só a aba de leitura.
   Linha em branco separa um parágrafo do outro.

   Os asteriscos dentro de $fórmulas$ ficam intactos, então uma
   multiplicação como $2 * 3$ nunca vira itálico por engano.

   IMAGENS
   Qualquer questão aceita dois campos opcionais de imagem:
       imagem:            aparece junto do enunciado
       imagemExplicacao:  aparece junto da explicação, depois da resposta

   O caminho pode ser um endereço da internet OU um arquivo da sua
   própria pasta. O jeito recomendado é criar uma pasta "imagens" ao
   lado do index.html e escrever assim:
       imagem: "imagens/grafico.png"
   Assim a figura vai junto com o site e nunca some.

   As alternativas SEMPRE embaralham sozinhas, então pode escrever a
   correta em primeiro lugar sem problema. Para embaralhar também a
   ORDEM das questões, ponha embaralharQuestoes: true no subtema.
   ==================================================================== */

const MATERIAS = [ {
  id: "enem",
  nome: "ENEM",
  cor: "#A8DE5C",
  descricao: "",
  assuntos: [     {
      id: "lingua-portuguesa",
      titulo: "Língua Portuguesa",
      resumo: "",
      temas: [         {
          id: "interpretacao",
          titulo: "Interpretação",
          resumo: "",
          subtemas: [             {
              id: "interpretacao-visual-25",
              titulo: "Interpretação visual 25",
              resumo: "Atividades referentes a questões do ENEM 2025 que possuiam imagens",

              videos: [],

              escritas: [],

              atividades: [
                {
                  tipo: "multipla",
                  pergunta: "<p>O retrato como gênero da pintura ocidental ficou vinculado às elites, tornando invisíveis as populações que não faziam parte do círculo dominante. Num país de tradição escravocrata e colonizado por europeus como o Brasil, pouquíssimas pessoas negras e indígenas foram retratadas em pintura, e menos ainda identificadas com seus nomes nos retratos. Daí a importância, para a história da arte e para a história brasileira, dos retratos de Dalton Paula.</p><figure class=\"figura\"><img src=\"imagens/ENEMQ152025.png\" alt=\"legenda da imagem\" loading=\"lazy\"><figcaption>legenda da imagem</figcaption></figure><p>Ao dar protagonismo a Zeferina e a João de Deus Nascimento, o artista Dalton Paula evidencia que a(s)</p>",
                  alternativas: ["arte pode promover formas de afirmação de identidade social.", "comunidades periféricas passam a adquirir o gênero retrato.", "personagens retratadas simbolizam a sociedade brasileira.", "pintura funciona como instrumento de ascensão social.", "imagens tradicionais preservam memórias afetivas."],
                  correta: 0,
                  explicacao: "<h4>Como o texto funciona</h4><p>O texto arma o problema em duas frases: o retrato sempre foi gênero de elite, e no Brasil quase nenhuma pessoa negra ou indígena foi pintada — <strong>e menos ainda identificada pelo nome</strong>. Guarde essa última parte, porque é ela que o gabarito cobra.</p><p>Dalton Paula faz exatamente o inverso: pinta Zeferina (líder do Quilombo do Urubu) e João de Deus Nascimento (participante da Revolta dos Búzios), dá a cada um a dignidade formal do retrato de elite e os identifica pelo nome no título da obra. Ao ocupar um gênero que historicamente excluiu essas pessoas, a arte devolve rosto, nome e lugar na história — isto é, <strong>promove uma afirmação de identidade social</strong>.</p><h4>Por que as outras não servem</h4><ul><li><strong>Comunidades periféricas passam a adquirir o gênero retrato</strong>: o texto não fala em comunidades adquirindo um gênero, e sim em duas figuras históricas específicas sendo finalmente representadas. Além disso, quem pinta é um artista dentro do circuito do Masp, não uma comunidade.</li><li><strong>As personagens simbolizam a sociedade brasileira</strong>: é o contrário do gesto do artista. Transformá-las em símbolo genérico apagaria de novo suas identidades — e o texto insiste justamente na importância de nomeá-las.</li><li><strong>A pintura funciona como instrumento de ascensão social</strong>: não há ascensão de ninguém. Zeferina e João de Deus são figuras do passado; o que está em jogo é reconhecimento histórico, não mobilidade social.</li><li><strong>Imagens tradicionais preservam memórias afetivas</strong>: a obra questiona a tradição do retrato, não a preserva. E a memória em jogo é coletiva e histórica, não afetiva/familiar.</li></ul><h4>Fica de dica</h4><p>Quando a questão diz \"ao dar protagonismo a...\", ela quer o <strong>efeito político do gesto</strong>, não uma descrição do quadro.</p>"
                },
                {
                  tipo: "multipla",
                  pergunta: "<figure class=\"figura\"><img src=\"imagens/ENEMQ212025.png\" alt=\"legenda da imagem\" loading=\"lazy\"><figcaption>legenda da imagem</figcaption></figure><p>Nesse cartaz publicitário, os recursos verbais e não verbais constroem um argumento que objetiva</p>",
                  alternativas: ["divulgar a obra de Fernando Pessoa no Brasil.", "valorizar a realização de eventos literários no país.", "ressaltar o impacto da leitura na vida das pessoas.", "fomentar o turismo cultural na cidade de São Paulo.", "evidenciar a influência de Pessoa na literatura brasileira."],
                  correta: 2,
                  explicacao: "<h4>Como o texto funciona</h4><p>O cartaz vive de um trocadilho. \"Fernando\" é um nome qualquer, de qualquer pessoa. Somado a \"Pessoa\", vira o nome do poeta português — e, ao mesmo tempo, continua significando <em>virar uma pessoa</em>. Quem entra é um sujeito comum; quem sai é alguém transformado.</p><p>A ilustração diz a mesma coisa por imagem: a cabeça do homem está tomada por cidades, viagens e figuras — o repertório que a leitura deposita em quem lê. E o slogan de apoio fecha o raciocínio sem metáfora: \"todo mundo sai melhor do que entrou\".</p><p>Verbal e não verbal apontam para o mesmo lugar: <strong>o que a leitura faz com a vida de quem lê</strong>.</p><h4>Por que as outras não servem</h4><ul><li><strong>Divulgar a obra de Fernando Pessoa</strong>: o nome do poeta é usado como recurso de linguagem, não como objeto de divulgação. Nenhum poema, livro ou dado sobre ele aparece.</li><li><strong>Valorizar eventos literários no país</strong>: a Bienal é quem assina o anúncio, não o argumento dele. O cartaz não defende que feiras de livro sejam importantes; defende que ler transforma.</li><li><strong>Fomentar o turismo cultural em São Paulo</strong>: os prédios e monumentos da ilustração estão dentro da cabeça do leitor — são imaginário, não roteiro turístico. A cidade aparece só no endereço do evento.</li><li><strong>Evidenciar a influência de Pessoa na literatura brasileira</strong>: exigiria alguma relação entre autores ou obras. O cartaz só explora a homonímia entre o sobrenome e o substantivo comum.</li></ul><h4>Fica de dica</h4><p>Nome de autor famoso em publicidade quase sempre é <strong>trocadilho</strong>, não tema. Antes de assumir que a peça é <em>sobre</em> aquele autor, teste se o nome está sendo usado pelo som ou pelo sentido literal.</p>"
                },
                {
                  tipo: "multipla",
                  pergunta: "<figure class=\"figura\"><img src=\"imagens/ENEMQ222025.png\" alt=\"legenda da imagem\" loading=\"lazy\"><figcaption>legenda da imagem</figcaption></figure><p>Nesse cartaz, a utilização de frases que projetam a vida profissional de duas crianças tem como objetivo</p>",
                  alternativas: ["sugerir a arrecadação de fundos para o sustento de povos originários no país.", "sensibilizar a sociedade sobre os benefícios decorrentes do combate ao racismo.", "indicar a importância da orientação vocacional na educação de crianças no Brasil.", "chamar a atenção sobre a necessidade de ações voltadas para a educação infantil.", "valorizar o trabalho de agências internacionais na luta contra a discriminação racial."],
                  correta: 1,
                  explicacao: "<h4>Como o texto funciona</h4><p>Repare no descompasso proposital: as fotos mostram crianças, mas as legendas as apresentam já adultas e formadas — médico aos 36, advogada aos 29. O cartaz salta para um futuro que ainda não existe.</p><p>Esse futuro é condicional. O texto de apoio informa que a maioria dessas 31 milhões de crianças hoje não tem acesso à educação, à saúde e ao desenvolvimento por causa da discriminação racial. Ou seja: o médico e a advogada são <strong>o que essas crianças poderiam se tornar se o racismo fosse combatido</strong>. A projeção profissional existe para mostrar à sociedade o que se ganha com esse combate — daí a resposta ser sensibilizar sobre os <strong>benefícios decorrentes do combate ao racismo</strong>.</p><h4>Por que as outras não servem</h4><ul><li><strong>Arrecadação de fundos para o sustento de povos originários</strong>: o pedido é \"contribua para uma infância sem racismo\", que é adesão a uma causa, não doação para sustento. E a campanha abrange crianças negras também, não só indígenas.</li><li><strong>Importância da orientação vocacional</strong>: as profissões são hipóteses de futuro, não escolhas de carreira sendo orientadas. Nada no cartaz trata de como ajudar uma criança a decidir o que ser.</li><li><strong>Necessidade de ações voltadas para a educação infantil</strong>: a educação é citada como um dos direitos negados, mas ao lado de saúde e desenvolvimento. O obstáculo nomeado é a discriminação racial, não a falta de uma política de educação infantil.</li><li><strong>Valorizar o trabalho de agências internacionais</strong>: a UNICEF assina a peça, não se elogia nela. O foco é o leitor e as crianças.</li></ul><h4>Fica de dica</h4><p>Anúncio de campanha social costuma funcionar por <strong>contraste entre o que é e o que poderia ser</strong>. Achou a projeção de futuro? Pergunte: futuro que depende de quê? A resposta a essa pergunta costuma ser o gabarito.</p>"
                },
                {
                  tipo: "multipla",
                  pergunta: "<h4>TEXTO I</h4><p>A Ilha do Ferro, situada a 18 km do município de Pão de Açúcar, não é uma ilha, como o nome indica. A história do povoado é semelhante à de inúmeros outros que encontramos às margens do Rio São Francisco, entre Alagoas e Sergipe. O que torna diferente o lugar é sua gente. Hoje, dezenas de artistas populares povoam a Ilha do Ferro, trabalhando principalmente com o entalhe em madeira. Onde pessoas comuns enxergariam apenas troncos e galhos retorcidos, eles vislumbram bancos, bonecos, pássaros, cobras e bailarinas. \"Às vezes, você passa por um pedaço de madeira uma vez e não vê nada, passa cinco vezes por ele e não vê nada\", conta um dos artistas, \"mas, na décima vez, você consegue enxergar alguma forma nesse pedaço de madeira e transformá-lo em arte\".</p><h4>TEXTO II</h4><figure class=\"figura\"><img src=\"imagens/ENEMQ242025.png\" alt=\"legenda da imagem\" loading=\"lazy\"><figcaption>legenda da imagem</figcaption></figure><p>A originalidade do trabalho dos artistas da Ilha do Ferro se dá pela</p>",
                  alternativas: ["reutilização de materiais para redução do impacto ambiental.", "ressignificação da matéria-prima atribuindo-lhe nova função.", "reprodução em madeira de modelos artísticos canônicos.", "representação de práticas corporais da comunidade.", "replicação seriada para distribuição em larga escala."],
                  correta: 1,
                  explicacao: "<h4>Como o texto funciona</h4><p>A frase-chave do Texto I é: \"onde pessoas comuns enxergariam apenas troncos e galhos retorcidos, eles vislumbram bancos, bonecos, pássaros, cobras e bailarinas\". O galho não muda — muda o que se vê nele. O depoimento do artista reforça: é preciso passar dez vezes pelo mesmo pedaço de madeira até enxergar uma forma ali dentro.</p><p>O Texto II é a prova disso. Os bailarinos são feitos de gravetos que continuam parecendo gravetos: os braços e pernas mantêm a torção original do galho, e é justamente essa torção que vira gesto de dança. A matéria-prima <strong>ganha uma função nova sem deixar de ser o que era</strong> — ressignificação.</p><h4>Por que as outras não servem</h4><ul><li><strong>Reutilização de materiais para redução do impacto ambiental</strong>: nenhum dos dois textos menciona preocupação ambiental, descarte ou sustentabilidade. Usar galho caído não é, por si só, um projeto ecológico.</li><li><strong>Reprodução em madeira de modelos artísticos canônicos</strong>: seria o inverso do processo descrito. A forma não vem de um modelo prévio da história da arte — vem do que o artista enxerga naquele galho específico.</li><li><strong>Representação de práticas corporais da comunidade</strong>: o Texto I lista bancos, bonecos, pássaros, cobras e bailarinas. Balé não é prática da comunidade ribeirinha, e o conjunto dos temas é variado demais para caber nessa leitura.</li><li><strong>Replicação seriada para distribuição em larga escala</strong>: contradiz frontalmente o método. Como cada peça depende do formato único do graveto, a produção em série é impossível.</li></ul><h4>Fica de dica</h4><p>\"Originalidade\" em questões sobre arte popular quase nunca é sobre técnica sofisticada — costuma ser sobre <strong>o olhar que transforma o material disponível</strong>.</p>"
                },
                {
                  tipo: "multipla",
                  pergunta: "<h4>TEXTO I</h4><p>Os trabalhos da exposição <em>Adriana Varejão: suturas, fissuras, ruínas</em> colocam em pauta o exame da história visual, das tradições iconográficas europeias e do fazer artístico ocidental. O corte, a rachadura, o talho e a fissura são elementos de narrativas recorrentes nos trabalhos da artista desde 1992. As produções recentes incluem pinturas tridimensionais de grande escala das séries <em>Ruínas de charque</em> e <em>Línguas</em>.</p><h4>TEXTO II</h4><figure class=\"figura\"><img src=\"imagens/ENEMQ252025.png\" alt=\"legenda da imagem\" loading=\"lazy\"><figcaption>legenda da imagem</figcaption></figure><p>A utilização de recursos visuais como suturas, cortes e ruínas por Adriana Varejão, na obra Azulejaria em carne viva, remete à(s)</p>",
                  alternativas: ["sobreposição da cultura brasileira à arte portuguesa.", "manutenção da representação realista na arte brasileira.", "violências desencadeadas pelo processo colonial brasileiro.", "desigualdades nos incentivos à produção artística brasileira.", "negligência na conservação do patrimônio arquitetônico luso-brasileiro."],
                  correta: 2,
                  explicacao: "<h4>Como o texto funciona</h4><p>A obra tem duas camadas em conflito. Por fora, a azulejaria portuguesa: geométrica, limpa, azul e branca — o símbolo mais reconhecível da presença colonial na arquitetura brasileira, e uma superfície que existe justamente para <em>cobrir</em>. Por dentro, carne viva: massa vermelha, orgânica, exposta.</p><p>O gesto da artista é rasgar a primeira camada para revelar a segunda. A leitura vem daí: por trás da fachada civilizada e ordenada da colonização há sangue e ferida. Os \"cortes, suturas e ruínas\" citados no Texto I não são decoração — são a maneira de dizer que <strong>o processo colonial brasileiro foi violento</strong>, e que essa violência estava sendo escondida sob o revestimento.</p><h4>Por que as outras não servem</h4><ul><li><strong>Sobreposição da cultura brasileira à arte portuguesa</strong>: sobrepor sugeriria uma cultura cobrindo pacificamente a outra. Aqui não há sobreposição, e sim ruptura — a carne rompe o azulejo, não se acomoda sobre ele.</li><li><strong>Manutenção da representação realista</strong>: a obra é tridimensional, usa poliuretano e alumínio e trabalha por metáfora. Não é retrato fiel de nada; é imagem simbólica.</li><li><strong>Desigualdades nos incentivos à produção artística</strong>: nem o Texto I nem a obra tratam de financiamento, mercado ou política cultural.</li><li><strong>Negligência na conservação do patrimônio arquitetônico</strong>: a rachadura é metafórica, não um problema de manutenção predial. Ler literalmente aqui é cair na armadilha.</li></ul><h4>Fica de dica</h4><p>Em obra de arte contemporânea, <strong>material é argumento</strong>. Pergunte sempre: o que esse material significava antes de entrar na obra? Azulejo português = colonização; carne = violência sobre corpos.</p>"
                },
                {
                  tipo: "multipla",
                  pergunta: "<figure class=\"figura\"><img src=\"imagens/ENEMQ262025.png\" alt=\"legenda da imagem\" loading=\"lazy\"><figcaption>legenda da imagem</figcaption></figure><p>Esse texto, que apresenta um prato da culinária brasileira, evidencia</p>",
                  alternativas: ["valor afetivo nas nomenclaturas.", "variedade linguística entre regiões.", "disputa regional pelo melhor prato.", "modos de preparo de um mesmo alimento.", "paladares diversificados entre diferentes estados."],
                  correta: 1,
                  explicacao: "<h4>Como o texto funciona</h4><p>O texto anuncia sua própria tese na segunda linha: o doce \"é prova da diversidade do Brasil, <strong>pelas variações em seu nome de batismo</strong>\". O que varia de um lugar para outro não é o prato — é a palavra.</p><p>O infográfico existe para provar isso: o mesmo creme recebe curau em Minas, São Paulo, Mato Grosso e Goiás; corá, piruruca, pururuca ou jimbelê em outras partes de Minas; canjiquinha no Rio; canjica de milho verde na Bahia. E há ainda a inversão: o nome que designa uma versão no norte designa a outra no sul. Isso é <strong>variação lexical de base regional</strong>, o conteúdo clássico de variedade linguística.</p><h4>Por que as outras não servem</h4><ul><li><strong>Valor afetivo nas nomenclaturas</strong>: \"nome de batismo\" é uma brincadeira do redator, não uma afirmação sobre afeto. O texto não diz que alguém se apega ao nome nem que ele carrega memória.</li><li><strong>Disputa regional pelo melhor prato</strong>: não há confronto. O texto registra a diversidade com curiosidade; a palavra \"confunde\" descreve o leitor, não uma briga entre regiões.</li><li><strong>Modos de preparo de um mesmo alimento</strong>: essa é a mais perigosa. O texto de fato distingue duas versões (creme amarelo e creme branco com grãos), mas usa isso apenas para explicar por que os nomes se invertem. O preparo é meio; o nome é o assunto.</li><li><strong>Paladares diversificados entre estados</strong>: sabor e preferência não são discutidos em momento nenhum.</li></ul><h4>Fica de dica</h4><p>Quando o texto vier de revista de língua portuguesa e o infográfico for um mapa de nomes, a resposta é quase sempre <strong>variação linguística</strong>. Confirme lendo a frase-tese do primeiro parágrafo.</p>"
                },
                {
                  tipo: "multipla",
                  pergunta: "<figure class=\"figura\"><img src=\"imagens/ENEMQ302025.png\" alt=\"legenda da imagem\" loading=\"lazy\"><figcaption>legenda da imagem</figcaption></figure><p>Com base na relação dos elementos não verbais com a frase “VOCÊ (NÃO) ESTÁ SOZINHO”, nessa capa de revista, a função poética fica evidente, pois</p>",
                  alternativas: ["essa frase informa sobre os riscos de um determinado comportamento social.", "o conteúdo da mensagem expressa a atitude do enunciador sobre o tema.", "a construção dessa frase possibilita mais de uma interpretação.", "essa frase estabelece um diálogo direto com o leitor.", "a linguagem utilizada volta-se para si mesma."],
                  correta: 2,
                  explicacao: "<h4>Leia o enunciado com atenção antes de tudo</h4><p>O comando diz: \"a função poética fica evidente, <strong>pois</strong>\". Repare no que isso significa. O enunciado <strong>já afirma</strong> que a função poética está ali — isso é ponto de partida, não é o que está sendo perguntado. O que ele pede, com esse \"pois\", é a <strong>justificativa retirada da capa</strong>: o que, especificamente nesta frase, faz a função poética aparecer.</p><p>Guardar essa diferença resolve a questão.</p><h4>Como o texto funciona</h4><p>O recurso está nos parênteses, que são um sinal <strong>gráfico</strong> — só funcionam na escrita, não na fala. Eles não separam um comentário, como fariam normalmente. Estão ali para manter duas leituras vivas ao mesmo tempo, na mesma linha:</p><ul><li>Ignorando os parênteses: \"você está sozinho\"</li><li>Incluindo os parênteses: \"você não está sozinho\"</li></ul><p>A ilustração sustenta as duas ao mesmo tempo. São dezenas de pessoas, cada uma isolada em seu próprio buraco escuro: todas sozinhas, e justamente por isso nenhuma está sozinha em estar sozinha. A chamada confirma — metade da população brasileira se sente solitária.</p><p>Ou seja, o trabalho sobre a forma da frase produz um sentido duplo que nenhuma das duas leituras sozinha daria conta. É por <strong>possibilitar mais de uma interpretação</strong> que a elaboração poética se torna evidente.</p><h4>Por que as outras não servem</h4><p>Três distratores descrevem funções da linguagem diferentes:</p><ul><li><strong>Informa sobre os riscos de um comportamento</strong>: seria função referencial, centrada no assunto e na informação objetiva.</li><li><strong>Expressa a atitude do enunciador</strong>: seria função emotiva, centrada em quem fala.</li><li><strong>Estabelece um diálogo direto com o leitor</strong>: seria função conativa, centrada no receptor.</li></ul><p>E sobra a mais perigosa de todas:</p><ul><li><strong>A linguagem volta-se para si mesma</strong>: essa alternativa é a <strong>definição de manual</strong> da função poética. E é exatamente por isso que ela não responde. O enunciado já partiu do princípio de que a função poética está presente; repetir a definição como justificativa é andar em círculo — não diz nada sobre a capa, sobre os parênteses, sobre a ilustração. Serviria igualmente para qualquer texto poético do mundo. O comando pede o mecanismo concreto <strong>desta</strong> capa, e o mecanismo é a dupla leitura criada pelo parêntese.</li></ul><h4>Fica de dica</h4><p>Quando o enunciado do ENEM já afirma o conceito e liga com <strong>\"pois\", \"porque\", \"uma vez que\", \"na medida em que\"</strong>, ele quer a evidência dentro do texto — nunca a definição do conceito de volta. A alternativa que só repete a teoria costuma ser armadilha para quem decorou nomenclatura sem ler a capa.</p>"
                },
                {
                  tipo: "multipla",
                  pergunta: "<figure class=\"figura\"><img src=\"imagens/ENEMQ362025.png\" alt=\"legenda da imagem\" loading=\"lazy\"><figcaption>legenda da imagem</figcaption></figure><p>Esse texto trata de um problema social com o propósito de</p>",
                  alternativas: ["divulgar campanha virtual contra casos de feminicídio.", "promover engajamento do setor educacional na luta contra a violência.", "comparar o impacto da violência na qualidade de vida de meninas e meninos.", "ressaltar a importância da segurança dos estudantes no ambiente escolar.", "dar visibilidade a estudos e pesquisas do setor de segurança."],
                  correta: 1,
                  explicacao: "<p></p>"
                },
                {
                  tipo: "multipla",
                  pergunta: "<h4>TEXTO I — Origem, tradição e resistência</h4><p>Foi sentada em seu banco de quartzo que a avó do universo, moradora da Maloca do Céu, criou os homens, os animais, a terra e as águas. O banco foi entregue aos ancestrais dos atuais Tukano, que passaram a reproduzi-lo em madeira. O mito Tukano — povo do noroeste da Amazônia que ainda hoje fabrica os bancos em seu estilo tradicional — indica o lugar dos bancos entre os objetos sagrados, ao mesmo tempo parte do universo primitivo e fonte do poder de criação. A presença nos mitos de origem de alguns povos atesta a antiguidade da arte de talhar bancos: os primeiros registros do uso desses objetos entre ameríndios das terras baixas da América do Sul, do Caribe e da América Central datam de, pelo menos, 4 mil anos.</p><h4>TEXTO II</h4><figure class=\"figura\"><img src=\"imagens/ENEMQ392025.png\" alt=\"legenda da imagem\" loading=\"lazy\"><figcaption>legenda da imagem</figcaption></figure><p>Os textos I e ll demonstram, na confecção dos bancos, uma íntima relação de sacralidade entre o ser humano e a natureza, perceptível por meio da</p>",
                  alternativas: ["representação realista de animais, mostrando o domínio do homem sobre a natureza.", "manutenção da herança cultural, atribuindo nova função aos elementos da fauna.", "anulação dos traços que permitem reconhecer o animal representado.", "presença de grafismos na forma animal representada no banco.", "criação de figuras fantásticas baseadas em formas animais."],
                  correta: 1,
                  explicacao: "<h4>O detalhe do enunciado que decide tudo</h4><p>Repare no sujeito: \"<strong>Os textos I e II</strong> demonstram... perceptível por meio da\". A resposta precisa estar ancorada <strong>nos dois textos</strong>, não só na imagem. Qualquer alternativa que só descreva um detalhe visual já nasce fraca, porque deixa o Texto I de fora.</p><h4>Como os textos funcionam</h4><p><strong>Texto I — a herança que se mantém.</strong> A avó do universo criou o mundo sentada num banco de quartzo. Esse banco foi entregue aos ancestrais dos Tukano, que passaram a reproduzi-lo em madeira — e o povo Tukano \"ainda hoje fabrica os bancos em seu estilo tradicional\". Some a isso os 4 mil anos de registros do uso desses objetos. Tudo no texto insiste na <strong>continuidade</strong>: o gesto atravessa milênios sem se romper.</p><p><strong>Texto II — o animal ganha outra função.</strong> O tatu existe na natureza como bicho. Na peça de Yamalui Kamayurá, ele vira assento — e não um assento qualquer, mas o objeto sagrado que repõe o banco da criação. O animal sai da ordem natural e entra na ordem ritual: continua sendo tatu, e ao mesmo tempo passa a cumprir um papel que nenhum tatu cumpre no mundo.</p><p>É aí que a <strong>sacralidade entre ser humano e natureza</strong> fica visível. Não é o homem dominando o bicho nem o bicho sendo apenas retratado: um elemento da fauna é incorporado à vida ritual do povo, dentro de uma tradição preservada. Herança mantida + fauna com função nova.</p><h4>Por que as outras não servem</h4><ul><li><strong>Representação realista de animais, mostrando o domínio do homem sobre a natureza</strong>: contradiz o Texto I duas vezes. A peça não é realista (é estilizada) e, sobretudo, \"domínio\" é o oposto de \"relação de sacralidade\" — no mito, a natureza é fonte do poder de criação, não coisa a ser dominada.</li><li><strong>Anulação dos traços que permitem reconhecer o animal</strong>: basta olhar. Focinho alongado, patas, casco: o tatu é identificável de imediato. Se fosse irreconhecível, aliás, a relação com a natureza se perderia.</li><li><strong>Presença de grafismos na forma animal</strong>: os grafismos existem na peça, mas essa é a armadilha. Primeiro, o Texto I <strong>não menciona grafismo nenhum</strong> — logo, a alternativa não dá conta dos dois textos, como o enunciado exige. Segundo, padrão gráfico é tratamento de superfície: ele decora o objeto, mas não é ele que transforma um animal em banco sagrado nem que garante a continuidade de 4 mil anos.</li><li><strong>Criação de figuras fantásticas baseadas em formas animais</strong>: o tatu é animal real e comum na região do Xingu. Não há criatura mítica, híbrida ou inventada.</li></ul><h4>Fica de dica</h4><p>Quando o comando começa com \"os textos I e II\", teste cada alternativa nos dois. A que só se sustenta na imagem — mesmo sendo verdadeira sobre a imagem — costuma ser o distrator mais bem construído da questão.</p>"
                },
                {
                  tipo: "multipla",
                  pergunta: "<p>A artista Marija Tiurina criou uma série chamada Palavras intraduzíveis, com diversas ilustrações detalhadas que transmitem o sentido desses vocábulos, que nenhuma palavra única em outras línguas pode descrever.</p><figure class=\"figura\"><img src=\"imagens/ENEMQ432025.png\" alt=\"legenda da imagem\" loading=\"lazy\"><figcaption>legenda da imagem</figcaption></figure><p>O uso do texto verbal nesse desenho assume a função de</p>",
                  alternativas: ["descrever de forma técnica a ilustração.", "destacar os múltiplos sentidos do verbete.", "explicar o significado da expressão ilustrada.", "apresentar termos equivalentes em outras línguas.", "apontar para a dificuldade de compreensão do termo."],
                  correta: 2,
                  explicacao: "<h4>Como o texto funciona</h4><p>A imagem sozinha não bastaria: quem visse apenas as mãos em concha com água não saberia que existe uma palavra árabe para aquilo. O texto verbal entra para completar o que falta — nomeia (\"Gufra\"), indica a língua (\"árabe\") e, principalmente, <strong>define</strong>: \"a quantidade de água que pode ser segurada com as mãos\".</p><p>Essa definição é a razão de ser da série. Como o enunciado avisa, nenhuma palavra única de outra língua descreve o conceito; então o único jeito de transmiti-lo é explicá-lo por extenso. Verbal e visual se completam: a imagem mostra, o texto explica.</p><h4>Por que as outras não servem</h4><ul><li><strong>Descrever de forma técnica a ilustração</strong>: uma descrição da ilustração falaria das mãos, da menina, do barquinho. O texto não descreve o desenho — define a palavra que o desenho representa. E não há nada de técnico no vocabulário empregado.</li><li><strong>Destacar os múltiplos sentidos do verbete</strong>: só um sentido é apresentado. Além disso, não se trata de verbete de dicionário, e sim de uma legenda dentro de uma obra ilustrada.</li><li><strong>Apresentar termos equivalentes em outras línguas</strong>: é o contrário exato da premissa. A série existe justamente porque <strong>não há</strong> equivalente em palavra única — por isso a saída foi a paráfrase.</li><li><strong>Apontar para a dificuldade de compreensão do termo</strong>: o conceito é facílimo de entender; qualquer pessoa já segurou água nas mãos. A dificuldade está em <strong>traduzir</strong> em uma só palavra, não em compreender. E, de todo modo, o texto verbal não comenta dificuldade alguma: ele resolve o problema explicando.</li></ul><h4>Fica de dica</h4><p>Quando a questão pergunta a função do texto verbal numa imagem, teste: <strong>tire o texto</strong>. O que se perde é a função dele. Aqui, sem a legenda, perde-se o significado — logo, a função é explicar.</p>"
                }
              ]
            },

          ]
        },

      ]
    },

  ]
},

  /* ------------------------------------------------------------------
     Nenhuma matéria ainda. Use a aba "Criar aula" lá em cima:
     ela monta o código e diz exatamente onde colar.

     A forma de cada bloco, para você reconhecer o que colar onde:

     {
       id: "matematica",              <- MATÉRIA
       nome: "Matemática",
       cor: "#5C8AF5",
       descricao: "...",
       assuntos: [
         {
           id: "geometria-analitica", <- ASSUNTO
           titulo: "Geometria analítica",
           resumo: "...",
           temas: [
             {
               id: "plano-cartesiano", <- TEMA
               titulo: "Plano cartesiano",
               resumo: "...",
               subtemas: [
                 {
                   id: "distancia",     <- SUBTEMA (aqui mora o conteúdo)
                   titulo: "Distância entre dois pontos",
                   resumo: "...",
                   videos: [],
                   escritas: [],
                   atividades: []
                 }
               ]
             }
           ]
         }
       ]
     },
     ------------------------------------------------------------------ */

];
