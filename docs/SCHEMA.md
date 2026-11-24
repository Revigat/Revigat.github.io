# Dados estruturados (schema.org)

Cada página HTML publica um único bloco `<script type="application/ld+json">` dentro de `<head>`, depois das tags que já existiam (GA4 `G-9262P1QYFR`, pixel do Reddit, Open Graph, Twitter, canonical e hreflang). O texto visível da página não muda.

O JSON repete fatos que a página já mostra. Não entram nota, review, rua, telefone nem data.

## Ids estáveis

- Pessoa, em todas as páginas: `https://revigat.github.io/#person`
- Site, em todas as páginas: `https://revigat.github.io/#website`
- O resto usa a URL canônica daquela língua mais um fragmento: `#webpage`, `#product`, `#offer`, `#code`, `#software`, `#breadcrumb`, `#faq`

A página em português aponta a versão em inglês com `workTranslation`. A página em inglês aponta a versão em português com `translationOfWork`. As URLs são as mesmas do hreflang.

## Pessoa

O `jobTitle` em português é `Especialista em Estratégia Digital, Marketing Digital e Inteligência Artificial`.

O `jobTitle` em inglês é `Digital Strategy, Digital Marketing and Artificial Intelligence Specialist`.

`knowsAbout` segue a língua da página. Os seis temas do posicionamento ficam assim:

| Tema | pt-BR | en |
| --- | --- | --- |
| Estratégia digital | Estratégia Digital | Digital Strategy |
| Marketing digital | Marketing Digital | Digital Marketing |
| Inteligência artificial | Inteligência Artificial | Artificial Intelligence |
| Agentes de IA | Agentes de IA | AI agents |
| Mídia paga | Mídia paga | Paid media |
| Automação de marketing | Automação de marketing | Marketing automation |

A home também mostra estas competências, e elas entram na lista: Growth, Performance, Dados e KPIs (en: Data and KPIs), CRO, Funis de conversão (en: Conversion funnels), SEO, Governança de IA (en: AI governance), IA aplicada a negócios (en: AI applied to business), IA e automação (en: AI and automation), Data-driven, Arquétipos de marca (en: Brand archetypes), Teoria do aprendizado (en: Learning theory).

O bloco `Person` é o mesmo em todas as páginas daquele idioma, para o `@id` não ficar pela metade. O email `revigat@gmail.com` está no rodapé de todas. LinkedIn, a foto e Curitiba estão na home. O LinkedIn também está na página de skills.

`author`, `provider`, `publisher`, `copyrightHolder` e `Offer.seller` apontam para `#person`. `brand` no pacote de marketing é uma `Brand` com o nome Filippe Revigat, porque `brand` no schema.org aceita `Brand` ou `Organization`, não `Person`.

## O que cada página descreve

Home, nos dois idiomas: `Person`, `WebSite`, e um nó que é `ProfilePage` e `WebPage`. A página é sobre a pessoa.

Departamento de Marketing: `WebPage`, um nó `Product` e `CreativeWork` (pacote à venda e conjunto de arquivos), `Offer` com preço `200` e moeda `BRL`, URL do botão `https://pay.kiwify.com.br/1A9h6Z0`, `BreadcrumbList` (Início ou Home, depois a página) e `FAQPage`. As perguntas são o texto exato de `departamento-marketing/assets/app.js` ou `departamento-marketing/en/app.js`.

Skills de segurança: `WebPage`, `SoftwareSourceCode` com `codeRepository` `https://github.com/Revigat/skills-seguranca-ia`, `isAccessibleForFree` `true` e a licença na frase da página (cada pasta guarda a licença de origem). Não há `Offer` de 0 BRL: a página diz que o download é grátis e não mostra um preço em reais. `BreadcrumbList`. Sem `FAQPage`, porque a página não tem perguntas e respostas.

Auditor de Sites: `WebPage`, `SoftwareApplication` (a página apresenta um arquivo para instalar no Claude Code, no Grok e no Gemini), `Offer`, `BreadcrumbList` e `FAQPage` com o texto exato do HTML. Em português o preço na tela é `R$ 89,90`, gravado como `89.90` e `BRL`, porque o schema.org pede ponto na casa decimal. O botão é `https://pay.kiwify.com.br/9SfItxJ`. Em inglês a página mostra `US$ 25`, então a oferta é `25` e `USD`, no botão `https://pay.kiwify.com/NrF4xVg`.

A `FAQPage` é um nó separado (`#faq`). As perguntas não substituem o produto como `mainEntity` da `WebPage`.

## Ao mudar uma página

No mesmo commit, atualize o JSON se mudar nome, descrição, preço, moeda, link de compra, URL canônica, hreflang ou o texto de uma pergunta. Copie o texto visível. Não crie um segundo bloco JSON-LD. Não use travessão no texto novo.

## Checagem

Cada bloco foi lido com `JSON.parse`. Cada `@type` e cada propriedade, inclusive `Offer`, `Question`, `Answer`, `Brand`, `Place` e `ListItem`, foram conferidos no vocabulário atual de `https://schema.org/version/latest/schemaorg-current-https.jsonld`. A propriedade precisa existir e o `domainIncludes` precisa cobrir pelo menos um tipo do nó. Essa checagem local passou sem erro de domínio.

Ela não substitui o Rich Results Test do Google nem o Schema Markup Validator. Depois do merge, abra cada URL nesses dois testes.
