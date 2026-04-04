# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## capidata/.github — Repositório de governança da CAPIDATA.

Aqui vivem o estatuto, as decisões, os membros, as brigadas, os processos e a fundamentação filosófico-política que regem a comunidade construtora do protocolo Capiba.

---

## Trabalhando neste repositório (para Claude Code)

Este repositório não tem código — é exclusivamente documentação de governança em **português brasileiro**.

**Convenções ao editar:**

- Novos registros em `decisoes/` seguem numeração sequencial (`NNNN-slug.md`) e são **imutáveis após merge** — não editar, apenas adicionar adendos. A partir da decisão 0004, toda decisão Estratégica ou Política inclui a seção "Avaliação prévia (Art. 17)" com três campos obrigatórios: quem é afetado e assimetria de horizonte temporal, se a decisão prescreve ou cria condições, e custo de reversão.
- Membros são adicionados em `membros/README.md` via PR (o PR é o ato jurídico de adesão)
- Toda alteração no `estatuto/` requer quórum estratégico — não faça edits diretos sem registro de decisão correspondente
- O Pacto Fundante vigente é a **v0.3** — toda referência ao pacto deve apontar para `pacto-fundante-v0.3.md`, não para versões anteriores
- A Licença vigente é a **v0.3** — toda referência à licença deve apontar para a versão atual do `LICENCA.md`
- As cláusulas pétreas são **8** (não 7) — incluir sempre o princípio VIII (Autocorreção permanente)
- O critério hermenêutico central do Pacto é composicional: "amplia ou diminui a potência de agir dos corpos que compõem esta rede?" — usar essa pergunta como orientação quando houver ambiguidade interpretativa

**Não há comandos de build, lint ou testes** — o repositório é inteiramente Markdown.

---

## O que é este repositório

`.github` na organização `capidata` tem dois papéis simultâneos:

**1. Perfil público da organização**
O `profile/README.md` é exibido em `github.com/capidata` — é o que qualquer pessoa vê ao chegar na organização.

**2. CapibaGov provisório**
Enquanto as ferramentas próprias de governança do protocolo não existem, este repositório _é_ o CapibaGov — onde decisões são tomadas, registradas e auditadas publicamente via Issues, PRs e Discussions.

---

## Estrutura

```text
.github/
├── .gitignore
├── CLAUDE.md               este arquivo — guia para Claude Code
├── CONTRIBUTING.md          processo de contribuição em 5 fases
├── LICENCA.md               Licença Ética Capiba v0.3
├── README.md                README da comunidade (ecossistema, feature stories, áreas)
├── .github/
│   └── ISSUE_TEMPLATE/      templates para cada tipo de contribuição
│       ├── apresentacao.md
│       ├── brigada.md
│       ├── certificacao-estrangeiro.md
│       ├── emenda.md
│       ├── nova-solucao.md
│       └── territorio.md
│
├── brigadas/                brigadas técnicas reconhecidas
│   └── README.md
│
├── decisoes/                ledger público de decisões
│   ├── README.md
│   └── 2026/
│       ├── 0001-pacto-fundante.md
│       ├── 0002-capiba-mcp-sem-sdk.md
│       ├── 0003-licenca-etica-capiba.md
│       └── 0004-pacto-fundante-v02-etica-do-desejo.md
│
├── docs/                    documentação de fundamentação
│   ├── Brasil_e_A_Etica_do_Desejo.md   ensaio completo em markdown
│   └── ETICA_DO_DESEJO.md              glossário operativo dos conceitos
│
├── estatuto/                constituição da comunidade
│   ├── CHANGELOG.md
│   ├── README.md
│   ├── pacto-fundante-v0.1.md          versão anterior (registro histórico)
│   └── pacto-fundante-v0.3.md          versão vigente
│
├── membros/                 registro de Membros Plenos
│   └── README.md
│
└── profile/
    ├── README.md            perfil público da organização (github.com/capidata)
    └── capidata.png         logotipo da organização
```

---

## Fundamentos filosófico-políticos

O Pacto Fundante v0.2 incorpora a fundamentação do ensaio *Brasil e A Ética do Desejo* (Silvano Neto, 2026). Claude Code deve compreender os seguintes conceitos ao trabalhar neste repositório:

**Conatus** (Spinoza) — a essência de cada coisa é o esforço de perseverar no próprio ser. O critério de avaliação de toda ferramenta, processo e decisão é composicional: amplia ou diminui a potência de agir?

**Discurso do mestre vs. discurso do analista** (Lacan) — o primeiro prescreve o que o sujeito deve ser e fazer; o segundo cria espaço para que o outro produza seu próprio saber. O Pacto orienta a comunidade para o segundo.

**Autocorreção permanente** — a CAPIDATA reconhece que padrões de dominação sistêmica podem reproduzir-se internamente. Os documentos deste repositório são corpo vibrátil: aceitam ser transformados pelo confronto com quem vive o que teorizam.

**Três camadas de conflito** — ideológica (divergências programáticas reais), narcisista (disputa identitária desproporcional), material (disputas sobre recursos concretos). Cada camada exige instrumento diferente. Confundi-las agrava o conflito.

**Acting out** — a deserção súbita, o cisma explosivo, a adesão fervorosa a um novo líder são mecanismos regulares, não traição excepcional. O Pacto os acolhe em vez de punir.

Esses conceitos informam a linguagem dos documentos e devem ser respeitados ao gerar ou editar conteúdo. O glossário completo está em `docs/ETICA_DO_DESEJO.md`.

---

## Princípios que governam este repositório

Toda alteração aqui é uma alteração na constituição da comunidade. Os **8 princípios invioláveis** do Pacto Fundante v0.2 se aplicam com peso especial:

| # | Princípio | Critério operacional |
| --- | --- | --- |
| I | Soberania | Nenhum dado sai do território sem consentimento explícito |
| II | Anti-colonial | Português primeiro. Tensão entre contrários é potência |
| III | Assimetria como dado | Quem tem mais a perder decide mais — protocolo compensa ativamente |
| IV | Ilegibilidade estratégica | Legibilidade serve ao povo, não ao extrator |
| V | Conatus coletivo | Ampliou a potência de agir? Se não, redesenhar |
| VI | Commons, não mercadoria | Vedação é recusa ética à expropriação |
| VII | Prática, não discurso | Se o usuário não entende, a ferramenta falhou |
| VIII | Autocorreção permanente | Aceitar ser transformado pelo confronto |

**Regras de alteração:**

- Mudanças no `estatuto/` exigem quórum estratégico (3/4 MPs, 30 dias)
- Mudanças no `LICENCA.md` exigem quórum estratégico
- Mudanças no `CONTRIBUTING.md` exigem quórum político (2/3 MPs)
- Adição de membros e brigadas é operacional (maioria simples)
- Decisões em `decisoes/` são imutáveis após merge — apenas adendos são permitidos
- Mudanças em `docs/` (fundamentação) exigem quórum político quando alteram conceitos referenciados pelo Pacto

---

## Resolução de conflitos (Título IV do Pacto)

O Pacto v0.2 estabelece quatro instâncias graduadas antes do desligamento compulsório. Claude Code deve respeitar esta sequência ao gerar documentação sobre conflitos:

1. Conversa direta entre as partes, com facilitação se solicitada
2. Mediação por pares escolhidos pelas partes (15 dias)
3. Deliberação da comunidade com registro público
4. Desligamento compulsório (3/4 MPs, último recurso após esgotamento das instâncias anteriores)

O desligamento exige fundamentação que explicite qual princípio foi violado e por qual conduta específica — fundamentação genérica não é admitida.

---

## Matriz de quórum (resumo)

| Tipo | Quando usar | Quórum | Prazo |
| --- | --- | --- | --- |
| Operacional | Membros, brigadas, correções | Maioria simples | Imediato |
| Financeiro | Recursos, parcerias financeiras | 2/3 MPs | 72h |
| Estratégico | Estatuto, licença, roadmap | 3/4 MPs | 30 dias |
| Político | CONTRIBUTING, processos, docs de fundamentação | 2/3 MPs + proteção minoria | — |
| Subjetivo | Bem-estar individual | Sem quórum | Imediato |

**Art. 17 — Avaliação prévia obrigatória para decisões Estratégicas e Políticas:**
Toda proposta deve ser acompanhada de: (I) identificação dos afetados e assimetria de horizonte temporal; (II) análise de se prescreve ou cria condições; (III) avaliação do custo de reversão.

**Cláusula de transição:** enquanto houver menos de 3 Membros Plenos ativos, o fundador pode decidir com auto-revisão documentada e Issue de acompanhamento.

---

## Como contribuir aqui

**Para se apresentar:**
Issue → template `apresentacao.md`

**Para propor emenda ao Pacto:**
Issue → template `emenda.md` → abre período de 30 dias de deliberação

**Para registrar relato de território:**
Issue → template `territorio.md`

**Para se tornar Membro Pleno:**
PR adicionando seu nome em `membros/README.md`
O PR é o ato jurídico de adesão ao Pacto Fundante.

**Para propor nova solução para o ecossistema:**
Issue → template `nova-solucao.md` → ou Discussion em 💡 Ideias

---

## Slash commands úteis neste repositório

```
/capiba-onboard       → entenda a CAPIDATA e o Pacto Fundante
/capiba-historia      → escreva uma história de contribuição
/capiba-pr            → gere descrição de PR com checklists
```

---

## Discussions — categorias

| Categoria | Finalidade |
| --- | --- |
| 📣 Apresentações | Quem você é e por que está aqui |
| 🧭 Direção e Estratégia | Propostas de rumo e decisões estratégicas |
| 🛠️ Técnico | Arquitetura, stack, roadmap |
| 💡 Ideias | Sementes de novas soluções |
| 🌱 Territórios | Relatos de uso e demandas reais |
| ❓ Dúvidas | Perguntas sobre o protocolo e o processo |
| 📢 Avisos | Convocações e comunicados oficiais |

---

## Estado atual da comunidade

```
Pacto Fundante:        v0.3 — com fundamentação filosófico-política evoluída
Licença:               Ética Capiba v0.3
Membros Plenos:        1 (Silvano Neto — fundador)
Brigadas Técnicas:     0
Entidades Cadastradas: 0
Próximo marco:         5 pessoas nas Discussions → primeira assembleia
```

---

## Links essenciais

- Pacto Fundante vigente: `estatuto/pacto-fundante-v0.3.md`
- Ensaio de fundamentação: `docs/Brasil_e_A_Etica_do_Desejo.md`
- Glossário operativo: `docs/ETICA_DO_DESEJO.md`
- Licença: `LICENCA.md`
- Processo de contribuição: `CONTRIBUTING.md`
- Decisões: `decisoes/README.md`
- Protocolo Capiba Core: `github.com/capidata/capiba-core`
- Extensão Zed: `github.com/capidata/capiba-zed`

---

_github.com/capidata/.github — Pernambuco, 2026_
