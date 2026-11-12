/* Troque BUY_URL pelo link de checkout (Kiwify, Hotmart etc.) quando estiver pronto. */
const BUY_URL = "https://pay.kiwify.com.br/1A9h6Z0";

const CATS = [
  { id: "all", label: "Todas" },
  { id: "start", label: "Começar e coordenar", cls: "c1" },
  { id: "research", label: "Pesquisa", cls: "c2" },
  { id: "strategy", label: "Estratégia", cls: "c3" },
  { id: "campaigns", label: "Campanhas e conteúdo", cls: "c4" }
];

const SKILLS = [
  { id:"onboard", cat:"start", name:"Onboard", cmd:"/marketing:onboard",
    sum:"Monta o briefing completo do negócio numa conversa guiada e salva em marketing-brief.md.",
    steps:[
      ["O negócio","O que é vendido, para quem, a que preço, como é entregue e a meta de receita do marketing."],
      ["O cliente","ICP, avatar, dores e desejos nas palavras dele, objeções e um banco inicial de linguagem."],
      ["Os concorrentes","As 3 a 5 alternativas que o comprador realmente pondera, inclusive “não fazer nada”."],
      ["O mercado","TAM/SAM/SOM de trabalho, segmento de entrada e regras da categoria, com grau de confiança."],
      ["Posicionamento, oferta, canais, voz e números","A frase de posição, o pacote, o canal principal, as regras de voz e as métricas datadas."]
    ]},
  { id:"cmo", cat:"start", name:"CMO virtual", cmd:"/marketing:cmo",
    sum:"Lê o briefing, acha o elo mais fraco e coordena os especialistas num plano priorizado.",
    steps:[
      ["Transformar a meta em número e data","Se isso não veio na conversa, o CMO propõe os dois e confirma antes de seguir."],
      ["Diagnosticar o elo mais fraco","Percorre pesquisa → posicionamento → oferta → canal → funil → criativo → medição e para no primeiro elo que quebra."],
      ["Questionar o autodiagnóstico","Se você pediu anúncio e a oferta ainda é palpite, ele diz isso com base no briefing."],
      ["Montar o plano de trabalho","Sequência de 3 a 7 rodadas, cada uma com o especialista ou a skill, o input e o entregável."],
      ["Executar ou devolver o plano","Você escolhe rodar agora ou receber as instruções. No fim, entra o ritmo semanal e o número a observar."]
    ]},
  { id:"marketing-audit", cat:"start", name:"Auditoria de marketing", cmd:"/marketing:marketing-audit",
    sum:"Avalia o marketing em 7 camadas e devolve um plano de correção de 90 dias, ranqueado por impacto.",
    steps:[
      ["Pontuar sete camadas","Pesquisa, posicionamento, oferta, canais, funil, criativo e medição."],
      ["Ranquear as lacunas","A ordem segue o impacto na receita, não a tarefa mais fácil ou mais visível."],
      ["Devolver o plano de 90 dias","A sequência de correção, com o que atacar primeiro e o que pode esperar."]
    ]},
  { id:"weekly-review", cat:"start", name:"Revisão semanal", cmd:"/marketing:weekly-review",
    sum:"Compara os números com a meta, diagnostica o que quebrou e define o único foco da semana.",
    steps:[
      ["Montar a tabela da semana","Cada indicador com realizado, plano e semana anterior. Número que falta vira lacuna, não some."],
      ["Seguir o maior desvio até a etapa que quebrou","Nomeia o estágio, não só o sintoma."],
      ["Separar ruído de tendência","Uma semana ruim é clima passageiro; três na mesma direção pedem mudança de plano."],
      ["Fechar o foco da semana anterior","O que ficou pela metade segue ou é encerrado em voz alta."],
      ["Definir UM foco para a próxima","A ação de maior impacto, com dono e definição de “pronto” na sexta."]
    ]},
  { id:"market-research-sprint", cat:"research", name:"Sprint de pesquisa de mercado", cmd:"/marketing:market-research-sprint",
    sum:"Desenha o mercado completo: tamanho, segmentos, tendências, canais e espaços pouco explorados.",
    steps:[
      ["Dimensionar o mercado","Tamanho com a conta à mostra e premissas com grau de confiança."],
      ["Recortar e ranquear segmentos","Escolhe o segmento de entrada, por onde começar de verdade."],
      ["Ler tendências e janelas de tempo","O que está subindo, o que é moda e o que já passou."],
      ["Listar canais e regras da categoria","Onde o comprador se reúne e o que é obrigação versus diferencial."],
      ["Apontar o espaço em branco","Nichos pouco atendidos, e gravar o retrato no briefing."]
    ]},
  { id:"customer-deep-dive", cat:"research", name:"Imersão no cliente", cmd:"/marketing:customer-deep-dive",
    sum:"Monta o retrato do cliente (avatar, linguagem, dores e objeções) nas palavras dele.",
    steps:[
      ["Construir o avatar","O dia a dia, os gatilhos e os lugares onde essa pessoa se informa."],
      ["Montar o banco de linguagem","Frases literais de que a copy deve nascer, não paráfrases."],
      ["Ranquear as dores","Pelo que elas custam: intensidade vezes frequência, na voz do comprador."],
      ["Separar objeção dita da objeção real","O que a pessoa fala versus o que de fato trava a compra."],
      ["Gravar no briefing","A seção do cliente no marketing-brief.md fica pronta para o resto do departamento."]
    ]},
  { id:"competitor-teardown", cat:"research", name:"Desmontagem de concorrente", cmd:"/marketing:competitor-teardown",
    sum:"Desmonta um concorrente de ponta a ponta e termina com um plano concreto de como vencê-lo.",
    steps:[
      ["Perfilar a empresa","Modelo, preços, sinais de time e lançamentos recentes."],
      ["Abrir a oferta e o posicionamento","Pacote, garantias, a posição que eles declaram e as afirmações já lotadas na categoria."],
      ["Mapear a mensagem e andar o funil","Os ganchos que eles repetem e a jornada vista como comprador."],
      ["Olhar bibliotecas públicas de anúncios","O que está no ar e há quanto tempo: permanência costuma sinalizar investimento."],
      ["Caçar fraquezas e escrever como vencer","Reclamações dos próprios clientes e o terreno em que o modelo deles não consegue seguir você."]
    ]},
  { id:"battlecard", cat:"research", name:"Battlecard de vendas", cmd:"/marketing:battlecard",
    sum:"Ficha de uma página: quando você ganha, quando perde e como responder cada objeção desse rival.",
    steps:[
      ["Reunir a inteligência","Oferta, preço, posicionamento e como as vendas contra eles realmente terminaram, com grau de confiança."],
      ["Escrever “quando ganhamos”","As 3 a 5 condições em que você é de fato a melhor escolha, ligadas a diferença concreta."],
      ["Escrever “quando perdemos”","Com honestidade: é o que faz o time confiar no restante da ficha."],
      ["Preparar perguntas-armadilha","Perguntas que o vendedor planta cedo, apoiadas em fraqueza verificada, nunca em premissa falsa."],
      ["Tratar as objeções e a forma de falar do rival","Respostas com evidência e uma regra curta: específico, respeitoso, sem denegrir."]
    ]},
  { id:"research-to-brief", cat:"research", name:"Pesquisa para o briefing", cmd:"/marketing:research-to-brief",
    sum:"Organiza pesquisas soltas no briefing, com nível de confiança em cada achado e contradições à vista.",
    steps:[
      ["Listar as fontes com data","Recência importa na hora de graduar a confiança."],
      ["Extrair o que muda decisão","Número, citação e padrão, para encaminhar para a seção certa do briefing."],
      ["Graduar T1, T2 ou T3","Fonte, estimativa ou palpite. Palpite vestido de dado não entra como fato."],
      ["Expor contradições","Não apaga e não faz média: as duas versões ficam registradas para resolver."],
      ["Mesclar no briefing e reportar o delta","O que entrou, o que mudou de grau e a próxima pesquisa que mais fortaleceria o arquivo."]
    ]},

  { id:"positioning-workshop", cat:"strategy", name:"Workshop de posicionamento", cmd:"/marketing:positioning-workshop",
    sum:"Define a frase de posicionamento e testa contra os concorrentes que já estão no briefing.",
    steps:[
      ["Listar as alternativas reais","O que o comprador faz no seu lugar, inclusive “não fazer nada” ou “se virar na planilha”."],
      ["Listar diferenças verdadeiras","Corta tudo o que o cliente não valoriza, por mais que o time tenha orgulho."],
      ["Ligar diferença → valor → quem mais se importa","Uma diferença só conta pelo valor que cria, e todo valor tem um recorte que sente mais."],
      ["Rascunhar três frases candidatas","No formato: para QUEM, contra QUAL alternativa, a DIFERENÇA, a PROVA."],
      ["Estressar, escolher e gravar","Testa contra as afirmações dos concorrentes, guarda a argumentação e atualiza o briefing."]
    ]},
  { id:"message-map", cat:"strategy", name:"Mapa de mensagem", cmd:"/marketing:message-map",
    sum:"Mensagem central, três pilares com prova e uma lista de frases que a marca não usa.",
    steps:[
      ["Destilar uma mensagem central","Tudo o que vier depois precisa subir até ela."],
      ["Apoiar em três pilares","Cada pilar leva a prova junto: pilar sem evidência não sustenta copy."],
      ["Escrever as frases proibidas","Jargão, hype e o vocabulário que esta marca simplesmente não usa."],
      ["Gravar o mapa no briefing","Assim cada peça futura nasce alinhada, e não “cada um diz uma coisa”."]
    ]},
  { id:"offer-builder", cat:"strategy", name:"Construtor de oferta", cmd:"/marketing:offer-builder",
    sum:"Monta a oferta: resultado, pacote, lógica de preço, garantia e urgência só se for real.",
    steps:[
      ["Nomear o resultado que o cliente compra","O “depois”, específico e honesto, não a lista de entregáveis."],
      ["Montar o pacote de valor","Cada item precisa matar uma dor nomeada. Enfeite sai."],
      ["Definir a lógica do preço","Contra o custo do problema, o valor do resultado e a alternativa mais próxima."],
      ["Desenhar a reversão de risco","Primeiro o medo maior do comprador; depois a garantia que anula esse medo."],
      ["Urgência só se for real","Sem prazo inventado. No fim, a página-resumo da oferta entra no briefing."]
    ]},
  { id:"objection-map", cat:"strategy", name:"Mapa de objeções", cmd:"/marketing:objection-map",
    sum:"Lista as objeções, separa o que o cliente diz do que ele quer dizer, e escreve a resposta de cada uma.",
    steps:[
      ["Coletar na literalidade","Paráfrase destrói o detalhe que diagnostica a trava."],
      ["Separar o dito do real","O que está embaixo da frase: preço, risco, timing, credibilidade."],
      ["Ranquear pelo impacto na receita","As três que mais derrubam ou atrasam negócio ganham o trabalho mais fundo."],
      ["Responder começando pela resposta","Uma frase direta, o reenquadramento e a prova que já existe no briefing."],
      ["Definir onde matar cada objeção","FAQ, e-mail, anúncio ou call, para gravar a biblioteca no briefing."]
    ]},
  { id:"channel-picker", cat:"strategy", name:"Escolha de canal", cmd:"/marketing:channel-picker",
    sum:"Escolhe um canal principal com base em evidência e monta o plano de 90 dias, com critério de corte.",
    steps:[
      ["Montar a lista a partir de evidência","Onde o cliente já se reúne, não o canal da moda ou o que o time prefere."],
      ["Pontuar em quatro eixos","Presença do ICP, capacidade de executar, economia e velocidade de sinal."],
      ["Fazer a conta dos finalistas","Quantas vendas o canal precisa gerar, por mês, para se pagar, e se esse volume é plausível."],
      ["Comprometer-se a um canal principal","No máximo dois de apoio, que alimentem o principal, não um segundo apostão paralelo."],
      ["Desenhar os 90 dias","Setup, volume, escala ou corte, com os números de “está funcionando” definidos antes do gasto."]
    ]},
  { id:"funnel-map", cat:"strategy", name:"Mapa do funil", cmd:"/marketing:funnel-map",
    sum:"Mapeia o funil com números reais, acha o vazamento que mais custa e desenha uma correção testável.",
    steps:[
      ["Desenhar o funil como ele é","Etapa por etapa, com os números que de fato existem, não o funil desejado no slide."],
      ["Nomear a pergunta de cada etapa","O que o comprador precisa responder para avançar."],
      ["Achar o vazamento mais caro","O furo que mais dinheiro deixa escapar, não o mais visível."],
      ["Desenhar um único conserto","Dimensionado para testar em cerca de duas semanas."]
    ]},
  { id:"kpi-tree", cat:"strategy", name:"Árvore de KPIs", cmd:"/marketing:kpi-tree",
    sum:"Define a métrica-norte, os indicadores que a puxam e o painel semanal de uma página.",
    steps:[
      ["Escolher a métrica-norte","O número que define se a semana foi ganha."],
      ["Quebrar em 3 a 5 drivers","Cada um com dono e indicadores antecedentes."],
      ["Especificar o painel semanal","Uma página, não uma pilha de relatórios que ninguém usa."],
      ["Nomear a métrica que importa agora","O foco imediato, para o time parar de discutir o que é “ganhar”."]
    ]},
  { id:"experiment-backlog", cat:"strategy", name:"Backlog de experimentos", cmd:"/marketing:experiment-backlog",
    sum:"Lista testes de crescimento com nota e desenha os cinco melhores como experimentos de verdade.",
    steps:[
      ["Gerar a fila a partir do briefing","Hipóteses ligadas à evidência que você já tem, não a uma moda de growth."],
      ["Dar uma nota honesta","Prioriza com critério explícito, sem inflar o que só é fácil de executar."],
      ["Desenhar os cinco primeiros","Teste mínimo viável, com a regra de decisão escrita antes de começar."]
    ]},
  { id:"pricing-test", cat:"strategy", name:"Teste de preço", cmd:"/marketing:pricing-test",
    sum:"Desenha um teste de preço sem queimar a confiança de quem já é cliente.",
    steps:[
      ["Estabelecer a linha de base","Preço atual, conversão nesse preço e receita por prospect."],
      ["Escrever a hipótese com evidência","Sem o “porque”, não é hora de testar ao vivo. Primeiro, pesquisa de disposição a pagar."],
      ["Mudar UMA estrutura","Faixa, âncora ou empacotamento, não três coisas ao mesmo tempo."],
      ["Proteger a confiança","Prospects novos; cliente atual não é reprecificado no meio do relacionamento sem aviso; preço cotado é honrado."],
      ["Fixar a regra de decisão antes","O que faz o novo preço virar o preço, o que faz reverter, e o registro no briefing."]
    ]},
  { id:"brand-voice", cat:"strategy", name:"Voz da marca", cmd:"/marketing:brand-voice",
    sum:"Cria o guia de voz a partir de textos reais da marca, com regras, exemplos e o que nunca usar.",
    steps:[
      ["Auditar as amostras","Se forem poucas, o perfil nasce mesmo assim, marcado como provisório."],
      ["Extrair os padrões","O que se repete nos textos que realmente soam como a marca."],
      ["Escrever regras do tipo faça / não faça","Cada regra acompanhada de uma linha real. Regra sem exemplo é só opinião."],
      ["Definir os registros","Como a voz afrouxa ou aperta por formato, e o que nunca muda."],
      ["Listar palavras banidas e calibrar","Três reescritas antes/depois e o perfil salvo para o departamento inteiro usar."]
    ]},

  { id:"launch-plan", cat:"campaigns", name:"Plano de lançamento", cmd:"/marketing:launch-plan",
    sum:"Monta o plano de trás para frente a partir da data, com peças, prazos, canais e plano B.",
    steps:[
      ["Partir da data inegociável","O plano caminha para trás, não “a gente vê no caminho”."],
      ["Fixar a ideia central","O argumento do lançamento, não só a lista de posts."],
      ["Levantar todas as peças com prazo","O inventário completo, com dono e data de entrega."],
      ["Coreografar canal a canal","O que entra em cada frente, e quando."],
      ["Combinar os gatilhos no meio do caminho","O plano B é escrito agora, antes de a emoção entrar no lançamento."]
    ]},
  { id:"content-calendar", cat:"campaigns", name:"Calendário de conteúdo", cmd:"/marketing:content-calendar",
    sum:"Trinta dias de conteúdo por pilar e plataforma, com os ganchos da primeira semana já escritos.",
    steps:[
      ["Checar a base","Sem pilares de mensagem no briefing, o calendário vira só uma grade de postagem."],
      ["Definir a mistura da semana","O mix segue o que o funil mais precisa agora, no formato nativo de cada plataforma."],
      ["Gerar o banco de ideias","Ideias de pedra fundamental, cruzando pilar com dor, desejo ou prova."],
      ["Distribuir os 30 dias","Pilar, etapa da jornada e encadeamento de reaproveitamento."],
      ["Pré-escrever os ganchos da semana 1","Para a execução começar, não parar na planilha."]
    ]},
  { id:"hook-factory", cat:"campaigns", name:"Fábrica de ganchos", cmd:"/marketing:hook-factory",
    sum:"Gera 20 ganchos para um tema, com estrutura primeiro, ranqueados e com a justificativa.",
    steps:[
      ["Fixar o tema e a audiência","Um assunto, um recorte, não vinte variações de alvo."],
      ["Escrever a partir da estrutura","Os ganchos nascem em categorias comprovadas, não de inspiração solta."],
      ["Chegar aos 20","Volume suficiente para escolher, não para publicar tudo."],
      ["Ranquear e mostrar o raciocínio","Por que este abre melhor que aquele, para você decidir com critério."]
    ]},
  { id:"ad-scripts", cat:"campaigns", name:"Roteiros de anúncio", cmd:"/marketing:ad-scripts",
    sum:"Três roteiros de vídeo, em formatos distintos, com fala, notas de cena e variações de CTA.",
    steps:[
      ["Travar o ângulo","Uma frase: a crença que o anúncio instala e para quem."],
      ["Escolher três formatos","Os que cabem na plataforma e na oferta."],
      ["Escrever em blocos, com a fala literal","Gancho nos três primeiros segundos, agitação, mecanismo e CTA."],
      ["Oferecer três ganchos por roteiro","Ranqueados: o gancho é a maior parte do anúncio."],
      ["Incluir notas de cena e dois CTAs","Um direto e um mais leve, com passagem de tempo de 30 a 45 segundos."]
    ]},
  { id:"creative-brief", cat:"campaigns", name:"Briefing criativo", cmd:"/marketing:creative-brief",
    sum:"Briefing de uma página para o designer ou editor executar sem nenhuma pergunta de volta.",
    steps:[
      ["Objetivo e insight da audiência","O que o trabalho precisa fazer, e a percepção do público que o sustenta."],
      ["A proposição de uma frase","Uma ideia só: o que a peça precisa deixar instalado."],
      ["Prova, obrigatórios e referências","O que precisa aparecer, o que não pode, e referências que calibram o tom."],
      ["Especificações de formato","Tamanho, duração, variações: o suficiente para produzir sem reunião extra."]
    ]},
  { id:"landing-page", cat:"campaigns", name:"Página de vendas", cmd:"/marketing:landing-page",
    sum:"Texto completo da landing, seção por seção, com nota de design em cada bloco.",
    steps:[
      ["Opções de título e a abertura","A promessa e o mecanismo, na linguagem do briefing."],
      ["Prova, oferta e objeções","A argumentação completa, não um fio de arame com espaços vazios."],
      ["FAQ e blocos de CTA","Perguntas reais do comprador e o próximo passo, repetido onde importa."],
      ["Nota de design por seção","O texto já chega pronto para o designer montar, não como um esquema oco."]
    ]},
  { id:"email-sequence", cat:"campaigns", name:"Sequência de e-mails", cmd:"/marketing:email-sequence",
    sum:"Sequência completa (boas-vindas, nutrição, lançamento ou reativação) com um trabalho por e-mail.",
    steps:[
      ["Escolher o tipo de sequência","Boas-vindas, nutrição, lançamento ou reativação."],
      ["Dar um único trabalho a cada e-mail","Assunto, corpo e o que aquele disparo precisa conseguir."],
      ["Escrever o texto inteiro","Pronto para ir à ferramenta, não um roteiro de tópicos."],
      ["Definir o timing","Quando cada peça sai, e por quê."]
    ]},
  { id:"lead-magnet-builder", cat:"campaigns", name:"Material de captura", cmd:"/marketing:lead-magnet-builder",
    sum:"Escolhe e escreve um material gratuito que atrai quem pode virar cliente, não colecionador de brinde.",
    steps:[
      ["Pontuar ideias contra a oferta paga","O ímã precisa apontar para a mesma compra, não para um público diferente."],
      ["Escolher a vencedora e delinear","Estrutura clara antes de redigir."],
      ["Escrever o conteúdo principal","O material em si, não só a capa."],
      ["Redigir a captura e a divulgação","O texto de opt-in e o de promoção que entregam o material."]
    ]},
  { id:"repurpose", cat:"campaigns", name:"Reaproveitamento", cmd:"/marketing:repurpose",
    sum:"Transforma um conteúdo forte em dez versões nativas para outras plataformas, reconstruídas, não recortadas.",
    steps:[
      ["Inventariar as ideias do material","Cada afirmação, história, número, método ou tese contrária."],
      ["Ranquear o que se sustenta sozinho","O melhor derivado costuma nascer de uma ideia no meio do texto, não do título original."],
      ["Mapear as dez versões","Posts, e-mail, carrossel, roteiro curto e ganchos, nos canais do briefing."],
      ["Reconstruir de baixo para cima","Na voz da marca, com CTA nativo de cada plataforma, e uma sequência para não repetir a mesma ideia no mesmo público em 48 horas."]
    ]},
  { id:"case-study-writer", cat:"campaigns", name:"Redator de case", cmd:"/marketing:case-study-writer",
    sum:"Transforma um resultado real de cliente em case estruturado, com uma versão curta para as redes.",
    steps:[
      ["Inventariar o material bruto","Quem é o cliente, o antes, o que foi feito, os números com recorte de tempo e as falas literais."],
      ["Colocar os números à prova","Linha de base, janela e o que mais acontecia no período. Número sem base não entra como prova."],
      ["Escrever o case na estrutura","Situação, travamento, intervenção, números e citações."],
      ["Cortar a versão para redes","Gancho, arco em três tempos, um número e CTA, refeita para o feed, não só encolhida."],
      ["Passar a regra de nomes","Respeita o que pode ou não ser publicado, e o que ainda precisa de autorização."]
    ]},
  { id:"campaign-debrief", cat:"campaigns", name:"Debrief de campanha", cmd:"/marketing:campaign-debrief",
    sum:"Análise depois da campanha: meta versus resultado, o que manter, mudar ou cortar, e as lições no briefing.",
    steps:[
      ["Relembrar a meta de antes do lançamento","Se ela não foi escrita, esse já é o primeiro achado."],
      ["Colocar meta, resultado e economia lado a lado","Bater o número e ainda assim ser inviável também é um resultado."],
      ["Separar a campanha em elementos","Ângulo, audiência, oferta, formato, gancho, canal, página e timing."],
      ["Diagnosticar elemento a elemento","Onde os dados não isolam a causa, fica registrado “não dá para saber”, não um palpite vestido de lição."],
      ["Decidir manter, cortar ou mudar","Com as lições portáveis gravadas no briefing para a próxima campanha sair mais barata."]
    ]}
];


const DEPTS = [
  { id:"mr", name:"Pesquisa de mercado", count:"10 especialistas",
    blurb:"Tamanho, segmentos, demanda, preço, canais e o espaço que ainda ninguém ocupou bem.",
    agents:[
      ["market-sizer","TAM, SAM e SOM com as premissas rastreadas e um teste de sanidade."],
      ["trend-tracker","O que está subindo ou caindo, a janela de tempo, e o que é tendência versus moda."],
      ["whitespace-finder","Nichos pouco atendidos e necessidades não resolvidas que valem a pena assumir."],
      ["pricing-researcher","Como o mercado cobra, a disposição a pagar e onde está o poder de preço."]
    ]},
  { id:"ci", name:"Inteligência de concorrentes", count:"10 especialistas",
    blurb:"Dossiê, oferta, mensagem, funil e as fraquezas que os próprios clientes deles já verbalizam.",
    agents:[
      ["competitor-profiler","O dossiê completo de um concorrente."],
      ["weakness-hunter","Fraquezas exploráveis que os próprios clientes dele já reclamam."],
      ["ad-library-analyst","O que eles veiculam nas bibliotecas públicas de anúncios. Permanência costuma indicar investimento."],
      ["funnel-walker","Percorre o funil deles como comprador e documenta a máquina."]
    ]},
  { id:"cr", name:"Pesquisa de cliente", count:"10 especialistas",
    blurb:"ICP, avatar, dores, desejos e o banco de frases literais de que a copy deve nascer.",
    agents:[
      ["icp-architect","O perfil do cliente ideal a partir de vitórias e perdas reais."],
      ["voc-miner","O banco de linguagem literal com que a copy deve ser escrita."],
      ["pain-mapper","Dores ranqueadas por intensidade e frequência, nas palavras do comprador."],
      ["objection-collector","Objeções ditas versus reais, e a prova que dissolve cada uma."]
    ]},
  { id:"ms", name:"Estratégia de marketing", count:"10 especialistas",
    blurb:"Posicionamento, oferta, canal, funil, lançamento, orçamento, métricas e experimentos.",
    agents:[
      ["positioning-strategist","A posição que você realmente pode ganhar, e o argumento por trás dela."],
      ["offer-strategist","A oferta: resultado, pacote, lógica de preço, reversão de risco e urgência real."],
      ["channel-strategist","Um canal principal até funcionar, escolhido com evidência."],
      ["metrics-architect","A árvore de métricas: o norte, os drivers e o painel semanal."]
    ]},
  { id:"cs", name:"Estratégia criativa", count:"10 especialistas",
    blurb:"Ângulos, ganchos, roteiros, copy, e-mail, social e o briefing que o designer executa sozinho.",
    agents:[
      ["hook-writer","Ganchos que param o scroll, com a estrutura primeiro, depois o ranking."],
      ["ad-scriptwriter","Roteiros de vídeo em formatos nomeados, com notas de cena."],
      ["sales-copywriter","Copy de resposta direta, na linguagem do comprador."],
      ["creative-briefer","Briefs que um designer executa sem uma reunião a mais."]
    ]}
];

const FAQS = [
  { q:"Preciso do Claude Code?",
    a:"O pacote rende mais no Claude Code: é lá que os agentes especialistas, os comandos /marketing: e o carregamento automático do briefing foram feitos para rodar. As skills (arquivos SKILL.md) e os 150 prompts também funcionam no Claude (claude.ai e o aplicativo desktop), no Grok Bot e em outros agentes que leem arquivos SKILL.md, como instruções. O Claude Code é uma ferramenta paga à parte e não está incluso no valor do pacote." },
  { q:"Está em português?",
    a:"Esta é a versão original: skills, agentes e prompts estão em inglês. Esta página e o suporte são em português. Os comandos seguem no formato /marketing:nome. Quando você conversa com os agentes em português, eles respondem em português." },
  { q:"Como eu recebo o acesso depois de pagar?",
    a:"Depois do pagamento, você recebe o pacote e o passo a passo de instalação. É um conjunto de arquivos para instalar no Claude Code. O caminho natural é o download, não um painel online, porque as skills precisam rodar localmente na sua máquina." },
  { q:"Eu preciso saber programar?",
    a:"Não. Você instala o pacote no Claude Code e dispara os fluxos por comando, como /marketing:onboard ou /marketing:hook-factory. Alguma familiaridade com o Claude Code ajuda, mas o trabalho de marketing não exige escrever código." },
  { q:"O que é o briefing único?",
    a:"É o arquivo marketing-brief.md: negócio, mercado, cliente, concorrentes, posicionamento, oferta, canais, voz e números. A skill /marketing:onboard monta esse arquivo numa conversa guiada. Um gancho de início de sessão carrega o briefing automaticamente, para você não reexplicar o negócio a cada conversa." },
  { q:"Isso substitui a minha estratégia?",
    a:"Não. O departamento faz o trabalho pesado: pesquisa, rascunhos, planos, peças. A estratégia e as decisões continuam com você. O CMO virtual aponta um gargalo e propõe o próximo passo; quem aprova é você." },
  { q:"Tem garantia?",
    a:"Sim. Você tem 7 dias de garantia. Se não gostar, pede o reembolso pela própria Kiwify e recebe 100% do valor de volta." }
];

document.getElementById("y").textContent = new Date().getFullYear();

document.querySelectorAll("[data-buy]").forEach(el => {
  el.setAttribute("href", BUY_URL);
});

const nav = document.getElementById("nav");
const burger = document.getElementById("burger");
const links = document.getElementById("navLinks");
burger.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  burger.setAttribute("aria-expanded", open ? "true" : "false");
  burger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
});
links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  links.classList.remove("open");
  burger.setAttribute("aria-expanded", "false");
}));
const progress = document.getElementById("progress");
const sticky = document.getElementById("stickyCta");
const hero = document.getElementById("top");
function onScroll(){
  nav.classList.toggle("scrolled", window.scrollY > 8);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
  const passed = hero.getBoundingClientRect().bottom < 80;
  if (passed) { sticky.hidden = false; sticky.classList.add("show"); }
  else { sticky.classList.remove("show"); sticky.hidden = true; }
}
onScroll();
window.addEventListener("scroll", onScroll, { passive:true });

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduce && "IntersectionObserver" in window){
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold:.12, rootMargin:"0px 0px -8% 0px" });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach(el => el.classList.add("in"));
}

const grid = document.getElementById("skillGrid");
const filtersEl = document.getElementById("filters");
const searchEl = document.getElementById("skillSearch");
let activeCat = "all";
let query = "";

CATS.forEach(c => {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "filter";
  b.textContent = c.label;
  b.dataset.cat = c.id;
  b.setAttribute("aria-pressed", c.id === "all" ? "true" : "false");
  b.addEventListener("click", () => {
    activeCat = c.id;
    filtersEl.querySelectorAll(".filter").forEach(x => x.setAttribute("aria-pressed", x === b ? "true" : "false"));
    renderSkills();
  });
  filtersEl.appendChild(b);
});

function catMeta(id){ return CATS.find(c => c.id === id) || { label:"", cls:"" }; }

function renderSkills(){
  const q = query.trim().toLowerCase();
  const list = SKILLS.filter(s => {
    if (activeCat !== "all" && s.cat !== activeCat) return false;
    if (!q) return true;
    return (s.name + " " + s.cmd + " " + s.sum).toLowerCase().includes(q);
  });
  grid.innerHTML = "";
  if (!list.length){
    grid.innerHTML = "<p class='empty'>Nenhuma skill encontrada para essa busca. Tente outro termo ou limpe o filtro.</p>";
    return;
  }
  const frag = document.createDocumentFragment();
  list.forEach(s => {
    const cat = catMeta(s.cat);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "card skill";
    btn.innerHTML = `<span class="cat-pill ${cat.cls}">${cat.label}</span>
      <span class="cmd">${s.cmd}</span>
      <h3>${s.name}</h3>
      <p>${s.sum}</p>
      <span class="more">Ver passos <svg width="12" height="12" aria-hidden="true"><use href="#i-arrow"/></svg></span>`;
    btn.addEventListener("click", () => openModal(s));
    frag.appendChild(btn);
  });
  grid.appendChild(frag);
}
searchEl.addEventListener("input", e => { query = e.target.value; renderSkills(); });
renderSkills();

const bg = document.getElementById("modalBg");
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");
let lastFocus = null;
function openModal(s){
  lastFocus = document.activeElement;
  const cat = catMeta(s.cat);
  const pill = document.getElementById("modalCat");
  pill.className = "cat-pill " + cat.cls;
  pill.textContent = cat.label;
  document.getElementById("modalCmd").textContent = s.cmd;
  document.getElementById("modalTitle").textContent = s.name;
  document.getElementById("modalSum").textContent = s.sum;
  const ol = document.getElementById("modalSteps");
  ol.innerHTML = s.steps.map(([title,d]) => `<li><strong>${title}.</strong> ${d}</li>`).join("");
  bg.hidden = false;
  bg.classList.add("open");
  document.body.style.overflow = "hidden";
  modal.focus();
}
function closeModal(){
  bg.classList.remove("open");
  bg.hidden = true;
  document.body.style.overflow = "";
  if (lastFocus && lastFocus.focus) lastFocus.focus();
}
modalClose.addEventListener("click", closeModal);
bg.addEventListener("click", e => { if (e.target === bg) closeModal(); });
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && bg.classList.contains("open")) closeModal();
});

const tabs = document.getElementById("deptTabs");
const panel = document.getElementById("deptPanel");
function renderDept(i){
  DEPTS.forEach((d, idx) => {
    const t = tabs.children[idx];
    if (t) t.setAttribute("aria-selected", idx === i ? "true" : "false");
  });
  const d = DEPTS[i];
  panel.innerHTML = `<h3>${d.name}</h3><p class="sub">${d.blurb} Amostra de 4 dos ${d.count}.</p>
    <div class="agent-list">${d.agents.map(([n,s]) => `<div class="agent"><code>${n}</code><p>${s}</p></div>`).join("")}</div>
    <p class="dept-more">Os outros especialistas do departamento vêm no pacote, junto com estes.</p>`;
}
DEPTS.forEach((d, i) => {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "dept-tab";
  b.setAttribute("role","tab");
  b.setAttribute("aria-selected", i === 0 ? "true" : "false");
  b.id = "tab-" + d.id;
  b.innerHTML = `<small>${d.count}</small><b>${d.name}</b>`;
  b.addEventListener("click", () => renderDept(i));
  tabs.appendChild(b);
});
renderDept(0);

const faqList = document.getElementById("faqList");
FAQS.forEach((f, i) => {
  const wrap = document.createElement("div");
  wrap.className = "faq";
  const id = "faq-a-" + i;
  wrap.innerHTML = `<button type="button" aria-expanded="false" aria-controls="${id}"><span>${f.q}</span><svg aria-hidden="true"><use href="#i-plus"/></svg></button>
    <div class="ans" id="${id}"><p>${f.a}</p></div>`;
  const btn = wrap.querySelector("button");
  const ans = wrap.querySelector(".ans");
  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") === "true";
    faqList.querySelectorAll("button").forEach(b => b.setAttribute("aria-expanded","false"));
    faqList.querySelectorAll(".ans").forEach(a => a.classList.remove("open"));
    if (!open){ btn.setAttribute("aria-expanded","true"); ans.classList.add("open"); }
  });
  faqList.appendChild(wrap);
});

(function(){
  const c = document.getElementById("net");
  if (!c || reduce) return;
  const ctx = c.getContext("2d");
  let w, h, pts, raf;
  function resize(){
    const r = c.parentElement.getBoundingClientRect();
    w = c.width = Math.floor(r.width * devicePixelRatio);
    h = c.height = Math.floor(r.height * devicePixelRatio);
    c.style.width = r.width + "px";
    c.style.height = r.height + "px";
    const n = Math.min(70, Math.floor((r.width * r.height) / 18000));
    pts = Array.from({length:n}, () => ({
      x: Math.random()*w, y: Math.random()*h,
      vx: (Math.random()-.5)*0.22*devicePixelRatio,
      vy: (Math.random()-.5)*0.22*devicePixelRatio
    }));
  }
  function tick(){
    ctx.clearRect(0,0,w,h);
    const max = 140 * devicePixelRatio;
    for (let i=0;i<pts.length;i++){
      const pt = pts[i];
      pt.x += pt.vx; pt.y += pt.vy;
      if (pt.x<0||pt.x>w) pt.vx*=-1;
      if (pt.y<0||pt.y>h) pt.vy*=-1;
      ctx.beginPath();
      ctx.arc(pt.x,pt.y,1.4*devicePixelRatio,0,Math.PI*2);
      ctx.fillStyle="rgba(34,211,238,.55)";
      ctx.fill();
      for (let j=i+1;j<pts.length;j++){
        const q = pts[j];
        const dx=pt.x-q.x, dy=pt.y-q.y, d=Math.hypot(dx,dy);
        if (d<max){
          ctx.beginPath();
          ctx.moveTo(pt.x,pt.y); ctx.lineTo(q.x,q.y);
          ctx.strokeStyle=`rgba(59,130,246,${0.16*(1-d/max)})`;
          ctx.lineWidth=devicePixelRatio;
          ctx.stroke();
        }
      }
    }
    raf = requestAnimationFrame(tick);
  }
  resize();
  tick();
  window.addEventListener("resize", resize, { passive:true });
})();

// hero word rotators (title + eyebrow, in sync)
(function(){
  var groups=[].map.call(document.querySelectorAll('.rotator'),function(g){return g.querySelectorAll('.rot-item');}).filter(function(x){return x.length>1;});
  if(!groups.length) return;
  var i=0;
  setInterval(function(){
    var n=(i+1)%groups[0].length;
    groups.forEach(function(items){
      var cur=items[i]; cur.classList.remove('is-on'); cur.classList.add('is-out');
      setTimeout(function(){cur.classList.remove('is-out');},600);
      items[n].classList.add('is-on');
    });
    i=n;
  },2600);
})();
