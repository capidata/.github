# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## capidata/.github — Repositório de governança da CAPIDATA.

Aqui vivem o estatuto, as decisões, os membros, as brigadas e os processos
que regem a comunidade construtora do protocolo Capiba.

---

## Trabalhando neste repositório (para Claude Code)

Este repositório não tem código — é exclusivamente documentação de governança em **português brasileiro**.

**Convenções ao editar:**

- Novos registros em `decisoes/` seguem numeração sequencial (`NNNN-slug.md`) e são **imutáveis após merge** — não editar, apenas adicionar adendos
- Membros são adicionados em `membros/README.md` via PR (o PR é o ato jurídico de adesão)
- Toda alteração no `estatuto/` requer quórum estratégico — não faça edits diretos sem registro de decisão correspondente

**Não há comandos de build, lint ou testes** — o repositório é inteiramente Markdown.

---

## O que é este repositório

`.github` na organização `capidata` tem dois papéis simultâneos:

**1. Perfil público da organização**
O `profile/README.md` é exibido em `github.com/capidata` —
é o que qualquer pessoa vê ao chegar na organização.

**2. CapibaGov provisório**
Enquanto as ferramentas próprias de governança do protocolo não existem,
este repositório _é_ o CapibaGov — onde decisões são tomadas, registradas
e auditadas publicamente via Issues, PRs e Discussions.

---

## Estrutura

```
.github/
├── .gitignore
├── CONTRIBUTING.md         processo de contribuição em 5 fases
├── LICENCA.md              Licença Ética Capiba v0.1
├── ISSUE_TEMPLATE/         templates para cada tipo de contribuição
│   ├── apresentacao.md
│   ├── brigada.md
│   ├── certificacao-estrangeiro.md
│   ├── emenda.md
│   ├── nova-solucao.md
│   └── territorio.md
│
├── brigadas/               brigadas técnicas reconhecidas
│   └── README.md
│
├── decisoes/               ledger público de decisões
│   ├── README.md
│   └── 2026/
│       ├── 0001-pacto-fundante.md
│       ├── 0002-capiba-mcp-sem-sdk.md
│       └── 0003-licenca-etica-capiba.md
│
├── estatuto/               constituição da comunidade
│   ├── CHANGELOG.md
│   ├── README.md
│   └── pacto-fundante-v0.1.md
│
├── membros/                registro de Membros Plenos
│   └── README.md
│
└── profile/
    ├── README.md           perfil público da organização (github.com/capidata)
    └── capidata.png        logotipo da organização
```

---

## Princípios que governam este repositório

Toda alteração aqui é uma alteração na constituição da comunidade.
Os 7 princípios invioláveis do Pacto Fundante se aplicam com peso especial:

- Mudanças no `estatuto/` exigem quórum estratégico (3/4 MPs, 30 dias)
- Mudanças no `LICENCA.md` exigem quórum estratégico
- Mudanças no `CONTRIBUTING.md` exigem quórum político (2/3 MPs)
- Adição de membros e brigadas é operacional (maioria simples)
- Decisões em `decisoes/` são imutáveis após merge — apenas adendos são permitidos

---

## Matriz de quórum (resumo)

| Tipo        | Quando usar                     | Quórum                     | Prazo    |
| ----------- | ------------------------------- | -------------------------- | -------- |
| Operacional | Membros, brigadas, correções    | Maioria simples            | Imediato |
| Financeiro  | Recursos, parcerias financeiras | 2/3 MPs                    | 72h      |
| Estratégico | Estatuto, licença, roadmap      | 3/4 MPs                    | 30 dias  |
| Político    | CONTRIBUTING, processos         | 2/3 MPs + proteção minoria | —        |
| Subjetivo   | Bem-estar individual            | Sem quórum                 | Imediato |

**Cláusula de transição:** enquanto houver menos de 3 Membros Plenos ativos,
o fundador pode decidir com auto-revisão documentada e Issue de acompanhamento.

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

| Categoria               | Finalidade                                |
| ----------------------- | ----------------------------------------- |
| 📣 Apresentações        | Quem você é e por que está aqui           |
| 🧭 Direção e Estratégia | Propostas de rumo e decisões estratégicas |
| 🛠️ Técnico              | Arquitetura, stack, roadmap               |
| 💡 Ideias               | Sementes de novas soluções                |
| 🌱 Territórios          | Relatos de uso e demandas reais           |
| ❓ Dúvidas              | Perguntas sobre o protocolo e o processo  |
| 📢 Avisos               | Convocações e comunicados oficiais        |

---

## Estado atual da comunidade

```
Membros Plenos:        1 (Silvano Neto — fundador)
Brigadas Técnicas:     0
Entidades Cadastradas: 0
Próximo marco:         5 pessoas nas Discussions → primeira assembleia
```

---

## Links essenciais

- Pacto Fundante: `estatuto/pacto-fundante-v0.1.md`
- Licença: `LICENCA.md`
- Processo de contribuição: `CONTRIBUTING.md`
- Decisões: `decisoes/README.md`
- Protocolo Capiba Core: `github.com/capidata/capiba-core`
- Extensão Zed: `github.com/capidata/capiba-zed`

---

_github.com/capidata/.github — Pernambuco, 2026_
