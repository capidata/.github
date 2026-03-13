# Como Contribuir com a CAPIDATA

> _"Cada contribuição é um fio que fortalece o tecido final."_

A CAPIDATA não tem quadro de tarefas centralizado.
Cada pessoa e cada brigada cuida da própria história —
ou compartilha essa história com quem quiser.

O que temos em comum é o **processo**: cinco fases que qualquer contribuição percorre,
do momento em que nasce a ideia até o momento em que ela vive no ecossistema.

---

## As Cinco Fases

```text
1. PREPARAÇÃO     →  a ideia ganha forma e contexto
2. DESENVOLVIMENTO →  a história é construída
3. GARANTIA       →  a história é verificada
4. ENTREGA        →  a história chega ao ecossistema
5. CONSOLIDAÇÃO   →  a história vira memória coletiva
```

Você decide o ritmo. Você decide com quem compartilha.
O processo garante que o que chega ao ecossistema tem qualidade,
tem contexto e tem raiz em território real.

---

## Fase 1 — Preparação

> _A ideia ganha forma. O problema é nomeado. O sujeito é definido._

### O que acontece aqui

Antes de escrever uma linha de código, abrir um PR ou criar um repositório,
a contribuição precisa ter raiz. Isso significa responder:

**Quem é o sujeito?**

```text
Como [quem],
quero [o quê],
para que [por quê].
```

Toda história de contribuição começa com uma pessoa real —
não com uma feature, não com uma tecnologia, não com uma ideia abstrata.

**Qual o impacto no δ efetivo?**
Como essa contribuição aumenta o horizonte temporal de quem tem menos?

**Onde isso vive no ecossistema?**
Protocolo Core? IaaS? PaaS? SaaS? SuperApp? Governança?

### Como fazer

- Abra uma **Discussion** na categoria [💡 Ideias](https://github.com/orgs/capidata/discussions/categories/ideias) ou [🛠️ Técnico](https://github.com/orgs/capidata/discussions/categories/tecnico)
- Ou abra uma **Issue** com o template [Nova Solução](ISSUE_TEMPLATE/nova-solucao.md)
- Ou simplesmente comece — e documente o contexto no PR quando chegar lá

### Entregável desta fase

Um enunciado claro do problema e do sujeito.
Pode ser uma Issue, uma Discussion, um comentário, ou um parágrafo no PR.
O que importa é que o contexto existe e é legível por qualquer pessoa da comunidade.

---

## Fase 2 — Desenvolvimento

> _A história é construída. No seu ritmo, do seu jeito._

### O que acontece aqui

Você constrói. Sem metodologia imposta, sem sprint obrigatório,
sem standup diário que ninguém aguenta.

O único compromisso é com o **protocolo**:
o que você constrói precisa ser compatível com o Capiba Core.
Rode a suite de compatibilidade antes de avançar para a fase 3.

**Esta fase não é só sobre código.**
Uma pesquisadora documentando um território, um advogado revisando o estatuto,
uma artista construindo a identidade visual, uma educadora popular escrevendo
um módulo de formação — todas estão na Fase 2. O "construir" aqui é qualquer
produção que transforma a ideia da Fase 1 em algo verificável por outra pessoa.

### Boas práticas (não obrigações)

**Commits com contexto:**

```text
feat(capiba-feira): adiciona índice de preço justo por território

Calcula preço médio ponderado por δ efetivo dos MEIs contribuintes.
Resolve: #42 — MEI sem referência de preço no mercado local.
```

**Branches com intenção:**

```text
feature/preco-justo-territorial
fix/sincronizacao-offline-bairro
docs/guia-capiba-node-raspberry
```

**Trabalho compartilhado:**
Se quiser par, abra uma Discussion em [🛠️ Técnico](https://github.com/orgs/capidata/discussions/categories/tecnico)
com o título `[PAR] O que você está construindo`.
Alguém pode aparecer.

### Compatibilidade com o Core

Toda contribuição precisa demonstrar que respeita os princípios do protocolo Capiba.

**Agora (momento zero):** crie um arquivo `COMPAT.md` na raiz do seu trabalho
documentando como cada princípio inviolável é respeitado ou não se aplica.
Use o template gerado pelo `/capiba-compat` no Zed.

**Quando disponível:** a suite formal de testes do `capiba-core` substituirá
o `COMPAT.md` manual:

```bash
cd capiba-core/compat
./check.sh --target ../seu-repositorio
```

Até lá, o `COMPAT.md` é o caminho oficial e igualmente válido.

### Entregável desta fase

Código, documentação, pesquisa, arte — o que sua história produz.
Num estado que você considera pronto para ser verificado por outra pessoa.

---

## Fase 3 — Garantia

> _A história é verificada. Não por hierarquia — por cuidado coletivo._

### O que acontece aqui

Garantia de qualidade na CAPIDATA tem três dimensões:

**Técnica:** o código funciona? É seguro? É acessível?

**Ética:** a contribuição respeita os princípios invioláveis do Pacto Fundante?
Especialmente: soberania, ilegibilidade estratégica e conatus coletivo.

**Territorial:** foi testado em condição real?
Hardware de baixo custo, conectividade instável, baixa literacia digital —
dependendo do que você construiu, pelo menos um desses contextos precisa ter sido testado.

### Como fazer

**Abra um Pull Request** com:

```markdown
## O que esta PR faz

[Descrição da contribuição]

## Sujeito

Como [quem], quero [o quê], para que [por quê].

## Checklist técnico

- [ ] Passa na suite de compatibilidade do capiba-core
- [ ] Funciona offline (se aplicável)
- [ ] Funciona em hardware de baixo custo (se aplicável)
- [ ] Documentação atualizada
- [ ] Testes incluídos

## Checklist ético

- [ ] Não viola soberania de dados
- [ ] Não cria dependência de serviço externo sem consentimento
- [ ] IA informa e sugere — humano decide (se aplicável)
- [ ] Acessível para baixa literacia digital (se aplicável)

## Testado em território real?

- [ ] Sim — descreva: \_\_\_
- [ ] Não — por quê: \_\_\_
- [ ] Não aplicável
```

**Revisão:**

- Todo PR precisa de no mínimo **1 revisão** de outro contribuidor
- PRs que afetam o protocolo Core precisam de **2 revisões** de Membros Plenos
- Revisão não é aprovação de chefe — é cuidado entre pares

**Cláusula de transição (enquanto houver menos de 3 Membros Plenos ativos):**
O autor pode mergear após auto-revisão documentada, desde que registre
no PR o motivo da ausência de revisor externo e abra uma Issue de acompanhamento
para revisão retroativa quando a comunidade crescer.

### Entregável desta fase

PR aberto, revisado e aprovado.
Sem aprovação, a história não avança — mas isso não é bloqueio,
é convite a melhorar junto.

---

## Fase 4 — Entrega

> _A história chega ao ecossistema. O fio entra no tear._

### O que acontece aqui

O PR é mergeado. A contribuição entra no repositório oficial.

Para repositórios SaaS e SuperApps: a versão é tagueada e documentada.
Para o protocolo Core: passa pelo Comitê de Guardiões antes do merge.

### Versionamento

Seguimos [Semantic Versioning](https://semver.org/lang/pt-BR/):

```text
MAJOR.MINOR.PATCH

MAJOR → mudança incompatível com versões anteriores
MINOR → nova funcionalidade compatível
PATCH → correção de bug compatível
```

Para projetos em fase inicial (< 1.0.0), `MINOR` pode indicar mudanças significativas.

### Release notes

Toda versão tagueada tem release notes que respondem:

- O que mudou
- Por que mudou
- Quem foi afetado (o sujeito da história)
- Como atualizar (se necessário)

### Entregável desta fase

Código no repositório oficial, versionado, com release notes.
A contribuição agora pertence ao commons.

---

## Fase 5 — Consolidação

> _A história vira memória coletiva. O tear guarda o padrão._

### O que acontece aqui

Contribuições não somem depois de mergeadas.
Elas alimentam a **memória coletiva** do ecossistema — que informa tudo que vem depois.

Consolidação significa:

**Documentar o aprendizado:**
O que funcionou? O que não funcionou? O que você faria diferente?
Não precisa ser formal — pode ser um comentário na Issue, uma Discussion, um parágrafo no README.

**Atualizar o ecossistema:**
Se sua contribuição criou um novo padrão, protocolo ou decisão de arquitetura,
atualize os documentos correspondentes:

- `capiba-*/docs` para documentação geral
- `capiba-core/spec` para especificações do protocolo
- `.github/decisoes` se gerou uma decisão formal

**Relatar o impacto territorial (quando possível):**
Se a contribuição foi usada em território real, um relato — mesmo curto — na categoria
[🌱 Territórios](https://github.com/orgs/capidata/discussions/categories/territorios)
das Discussions fecha o ciclo:
do problema real → à solução → de volta ao território.

### Entregável desta fase

Aprendizado documentado. Ecossistema atualizado.
O próximo contribuidor que chegar encontra o caminho mais iluminado do que estava antes.

---

## Assistente Capiba no Zed

Se você usa o [Zed](https://zed.dev) com a extensão `capiba-zed` instalada,
o assistente tem acesso direto ao protocolo Capiba via servidor MCP.
Não é obrigatório — mas acelera o processo.

### Slash commands por fase

| Fase | Comando | O que faz |
| ---- | ------- | --------- |
| 1 | `/capiba-historia` | Estrutura a história de contribuição (Como/quero/para que) |
| 1 | `/capiba-ideia` | Sessão de ideação com contexto do ecossistema |
| 1–5 | `/capiba-fase <nome>` | Guia detalhado para a fase atual |
| 2 | `/capiba-compat` | Gera rascunho do `COMPAT.md` contra os princípios do Core |
| 3 | `/capiba-revisar` | Revisão ética e técnica do código aberto no editor |
| 3 | `/capiba-teste` | Gera testes contextualizados para o código selecionado |
| 3–4 | `/capiba-pr` | Gera descrição de PR com checklists preenchidos |
| — | `/capiba-onboard` | Onboarding — entenda a CAPIDATA e o Pacto Fundante |

### MCP tools disponíveis no Agent Panel

Com o `capiba-mcp` ativo no painel do agente, o Claude tem acesso a:

| Tool | Quando usar |
| ---- | ----------- |
| `capiba_gerar_historia` | Fase 1 — estruturar o enunciado do problema e do sujeito |
| `capiba_fase_atual` | Qualquer fase — detecta em que ponto do processo o worktree está |
| `capiba_get_principio` | Fase 2–3 — consultar um princípio inviolável específico (1–8) |
| `capiba_check_compat` | Fase 3 — análise estática da contribuição contra os princípios |
| `capiba_get_decisao` | Qualquer fase — lê uma decisão do ledger por número |

### Como ativar o capiba-mcp no Zed

Consulte [`capiba-zed/docs/setup.md`](https://github.com/capidata/capiba-zed/blob/main/docs/setup.md)
para instalação do binário e configuração do `settings.json`.

---

## Resumo das Fases

| Fase                   | O que é                                | Onde acontece       | Entregável                       |
| ---------------------- | -------------------------------------- | ------------------- | -------------------------------- |
| **1. Preparação**      | Nomear o problema e o sujeito          | Discussion ou Issue | Contexto documentado             |
| **2. Desenvolvimento** | Construir                              | Branch local        | Contribuição pronta para revisão |
| **3. Garantia**        | Verificar técnico, ético e territorial | Pull Request        | PR aprovado                      |
| **4. Entrega**         | Integrar ao ecossistema                | Merge + tag         | Versão no repositório oficial    |
| **5. Consolidação**    | Transformar em memória coletiva        | Docs + Discussion   | Aprendizado registrado           |

---

## Primeira contribuição

Nunca contribuiu com open source? Não sabe por onde começar?

Algumas entradas com peso real:

- **Se apresente** → [Discussion de apresentações](https://github.com/orgs/capidata/discussions/categories/apresentacoes) — é o gesto fundante
- **Relate um problema real** de território → Issue com template [🌱 Território](ISSUE_TEMPLATE/territorio.md) — sua experiência tem peso político especial
- **Faça uma pergunta** → [Discussion de dúvidas](https://github.com/orgs/capidata/discussions/categories/duvidas) — toda dúvida ilumina um caminho que outros vão percorrer
- **Corrija ou melhore documentação** → PR direto — especialmente em pt-BR, onde cada palavra importa

Toda contribuição começa com uma conversa.

---

## O que não é bem-vindo

- Contribuições que violam os [princípios invioláveis](estatuto/pacto-fundante-v0.2.md#nossos-princípios--o-que-não-pode-ser-mudado) do Pacto Fundante
- Código que cria dependência de serviço externo sem consentimento explícito
- Soluções construídas sem nenhum contato com o problema real que pretendem resolver
- Qualquer coisa que reduza a soberania de quem usa para aumentar a conveniência de quem constrói

---

_github.com/capidata — Pernambuco, 2026_
