# Decisões da CAPIDATA

Registro público de todas as decisões tomadas pela comunidade.

> _"Em toda decisão Política e Estratégica, a dissidência é registrada formalmente —_
> _não como nota de rodapé, mas como parte integral da decisão publicada._
> _A minoria sempre tem voz. Nenhuma decisão pode silenciá-la."_
> — Pacto Fundante v0.2, Art. 18

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

A partir da v0.2 do Pacto Fundante, toda decisão Estratégica ou Política inclui, além dos campos originais, três avaliações obrigatórias previstas no Art. 17: a identificação dos grupos afetados e da assimetria de horizonte temporal entre eles, a análise de se a decisão prescreve comportamento ou cria condições para que os membros produzam seu próprio saber, e a avaliação do custo de reversão. A posição da minoria, quando tornada pública, é parte integral do documento — não apêndice.

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

## Avaliação prévia (Art. 17)

### Quem é afetado — e quem tem mais a perder?
[Identificação dos grupos afetados e da assimetria de horizonte temporal entre eles]

### A decisão prescreve ou cria condições?
[Análise de se a decisão diz o que os membros devem ser e fazer,
ou se cria espaço para que produzam seu próprio saber e ação]

### Se der errado, qual o custo de voltar atrás?
[Avaliação do custo de reversão — decisões de alto custo exigem
quórum mais elevado ou prazo de deliberação estendido]

## Resultado

- **Votos a favor:** N
- **Votos contra:** N
- **Abstenções:** N
- **Dissidência registrada:** Sim / Não

## Posição da minoria

[Se a minoria optou por tornar pública sua posição,
ela aparece aqui como parte integral da decisão — não como apêndice]

## Links

- Issue de proposta: #N
- PR correspondente: #N (se aplicável)
- Discussão: [link]
```

A avaliação prévia do Art. 17 é obrigatória para decisões Estratégicas e Políticas. Para decisões Operacionais e Financeiras, os campos podem ser preenchidos de forma simplificada quando a complexidade da decisão o justificar.

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

| #                                                          | Tipo        | Data | Título                                                  | Status      |
| ---------------------------------------------------------- | ----------- | ---- | ------------------------------------------------------- | ----------- |
| [0001](./2026/0001-pacto-fundante.md)                      | Estratégico | 2026 | Aprovação do Pacto Fundante v0.1                        | ✅ Aprovada |
| [0002](./2026/0002-capiba-mcp-sem-sdk.md)                  | Técnico     | 2026 | Arquitetura do capiba-mcp sem SDK externo (v0.1)        | ✅ Aprovada |
| [0003](./2026/0003-licenca-etica-capiba.md)                | Estratégico | 2026 | Adoção da Licença Ética Capiba v0.1                     | ✅ Aprovada |
| [0004](./2026/0004-pacto-fundante-v02-etica-do-desejo.md)  | Estratégico | 2026 | Pacto Fundante v0.2 — Incorporação da Ética do Desejo   | ✅ Aprovada |

---

_As próximas linhas desta tabela serão preenchidas pela comunidade._

_github.com/capidata — Pernambuco, 2026_
