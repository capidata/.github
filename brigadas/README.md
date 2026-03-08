# Brigadas Técnicas da CAPIDATA

Registro das brigadas técnicas reconhecidas pela comunidade.

> _"Brigadas Técnicas são coletivos de desenvolvimento com histórico verificável_
> _de contribuição ao ecossistema, reconhecidos pela CAPIDATA mediante deliberação operacional."_
> — Pacto Fundante, Art. 8°

---

## O que é uma Brigada Técnica

Uma brigada é um **coletivo** — não um indivíduo — com foco técnico definido e contribuições reais ao ecossistema Capiba. Pode ser um grupo de amigos, um coletivo de tecnologia popular, uma equipe universitária, um grupo de um movimento social.

Brigadas não são empresas contratadas. São **partes da comunidade** com responsabilidade sobre repositórios específicos e acesso a recursos da rede.

---

## O que uma Brigada recebe

- Voto em decisões técnicas e de roadmap
- Acesso prioritário ao CapibaCompute (computação distribuída da rede)
- Remuneração em Créditos de Rede (CR) pelas contribuições ao commons
- Responsabilidade formal sobre repositórios sob sua curadoria
- Reconhecimento público neste registro

---

## Como uma Brigada é reconhecida

```
1. HISTÓRICO
   O coletivo tem contribuições verificáveis em pelo menos
   um repositório do ecossistema Capiba.

2. PROPOSTA
   Abre uma Issue com o título: [BRIGADA] Nome da Brigada
   Descreve: foco técnico, membros, repositórios de interesse,
   histórico de contribuição.

3. DELIBERAÇÃO
   Votação operacional (maioria simples dos Membros Plenos ativos).
   Prazo: 7 dias.

4. RECONHECIMENTO
   PR aprovado adicionando a brigada a este arquivo.
   Acesso aos recursos configurado pelos mantenedores.

5. REVISÃO ANUAL
   Todo reconhecimento é revisado anualmente.
   Brigada inativa por 6 meses entra em modo de revisão automática.
```

---

## Formato de cada brigada

```markdown
### [Nome da Brigada]

**Foco:** [área técnica principal]
**Membros:** [lista de GitHub handles]
**Repositórios sob curadoria:** [lista]
**Reconhecida em:** [data]
**Revisão:** [data da próxima revisão anual]

[Descrição curta da brigada e do que constrói]
```

---

## Brigadas reconhecidas

_Nenhuma brigada reconhecida ainda._

A CAPIDATA está no momento zero — somos uma pessoa e um protocolo.
A primeira brigada será reconhecida quando a comunidade tiver massa crítica suficiente.

Se você tem um coletivo interessado em contribuir, **venha se apresentar nas [Discussions](https://github.com/orgs/capidata/discussions)** antes de abrir a Issue formal. A conversa vem antes do processo.

---

## Áreas abertas para brigadas

O ecossistema Capiba tem repositórios esperando curadoria em todas as camadas:

| Camada             | Repositórios                                                                                                         | Stack principal         |
| ------------------ | -------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| **Protocolo Core** | `capiba-core`                                                                                                        | Rust                    |
| **IaaS**           | `capiba-node`, `capiba-net`, `capiba-storage`, `capiba-compute`                                                      | Rust, Go                |
| **PaaS**           | `capiba-api-gateway`, `capiba-ml`, `capiba-flow`, `capiba-studio`                                                    | Go, Python              |
| **SaaS**           | `capiba-feira`, `capiba-saude`, `capiba-educa`, `capiba-terra`, `capiba-credito`, `capiba-voz`, `capiba-cultura`     | TypeScript, Go          |
| **SuperApps**      | `capiba-app-mei`, `capiba-app-associacao`, `capiba-app-cooperativa`, `capiba-app-movimento`, `capiba-app-territorio` | TypeScript, Rust (WASM) |
| **Governança**     | `.github`                                                                                                            | Markdown                |

Não sabe por onde começar? Leia o [README da organização](../README.md) e as [feature stories por área](../README.md#-o-que-você-pode-construir-aqui).

---

_github.com/capidata — Pernambuco, 2026_
