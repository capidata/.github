# Decisões da CAPIDATA

Registro público de todas as decisões tomadas pela comunidade.

> _"Em toda decisão Política e Estratégica, a dissidência é registrada formalmente._
> _A minoria sempre tem voz. Nenhuma decisão pode silenciá-la."_
> — Pacto Fundante, Art. 14

---

## Por que registrar decisões publicamente

Transparência não é burocracia — é o que transforma um grupo de pessoas numa comunidade com memória. Qualquer pessoa, a qualquer momento, pode entender por que o projeto está onde está, quem decidiu o quê e como.

Este registro também é o **ledger público** do protocolo Capiba operando na própria CAPIDATA — comemos nossa própria comida desde o início.

---

## Estrutura de arquivos

Cada decisão aprovada gera um arquivo nesta pasta:

```
decisoes/
├── README.md                          ← este arquivo
├── 2026/
│   ├── 0001-pacto-fundante.md         ← primeira decisão
│   └── NNNN-slug-da-decisao.md
└── ...
```

O número é sequencial e nunca reutilizado — mesmo que uma decisão seja revertida, o registro permanece.

---

## Formato de cada decisão

```markdown
# [NNNN] Título da Decisão

**Tipo:** Operacional | Financeiro | Estratégico | Político | Certificação
**Data:** AAAA-MM-DD
**Status:** Aprovada | Rejeitada | Revertida por [NNNN]
**Quórum exigido:** X/Y
**Votantes:** N Membros Plenos

---

## Proposta

[Descrição do que foi proposto e por quê]

## Resultado

- **Votos a favor:** N
- **Votos contra:** N
- **Abstenções:** N
- **Dissidência registrada:** Sim / Não

## Posição da minoria

[Se a minoria optou por tornar pública sua posição, ela aparece aqui]

## Links

- Issue de proposta: #N
- PR correspondente: #N (se aplicável)
- Discussão: [link]
```

---

## Tipos de decisão e onde são tomadas

| Tipo             | Onde          | Quórum                         |
| ---------------- | ------------- | ------------------------------ |
| **Operacional**  | GitHub Issues | Maioria simples                |
| **Financeiro**   | CapibaGov     | 2/3 dos Membros Plenos         |
| **Estratégico**  | CapibaGov     | 3/4 dos Membros Plenos         |
| **Político**     | CapibaGov     | 2/3 com proteção de minoria    |
| **Certificação** | CapibaGov     | Votação específica por tipo    |
| **Subjetivo**    | Sem votação   | Proteção individual automática |

---

## Decisões registradas

| #                                     | Tipo        | Data | Título                           | Status      |
| ------------------------------------- | ----------- | ---- | -------------------------------- | ----------- |
| [0001](./2026/0001-pacto-fundante.md) | Estratégico | 2026 | Aprovação do Pacto Fundante v0.1 | ✅ Aprovada |
| [0002](./2026/0002-capiba-mcp-sem-sdk.md) | Técnico | 2026 | Arquitetura do capiba-mcp sem SDK externo (v0.1) | ✅ Aprovada |
| [0003](./2026/0003-licenca-etica-capiba.md) | Estratégico | 2026 | Adoção da Licença Ética Capiba v0.1 | ✅ Aprovada |

---

_As próximas linhas desta tabela serão preenchidas pela comunidade._

_github.com/capidata — Pernambuco, 2026_
