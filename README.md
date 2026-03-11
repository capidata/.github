# CAPIDATA

> _"Transforme sua dor em potência, o tempo todo, sempre."_

**CAPIDATA** é a comunidade que constrói o ecossistema **Capiba** —
um protocolo anti-colonial de soberania, inteligência e governança popular de dados.

O Capiba é para a tecnologia o que uma constituição é para uma nação:
o pacto fundante que define o que não pode ser violado,
o que pode ser construído, e quem tem direito a quê.

Construído no Nordeste. Para o Brasil. Para a América Latina. Para o Sul Global.

---

## Por que o Capiba existe

O povo brasileiro gera dados o tempo todo.
Cada compra no MEI. Cada consulta no SUS. Cada votação na assembleia da cooperativa.
Cada ocupação registrada. Cada colheita documentada. Cada filho matriculado.

Esses dados são capturados por plataformas estrangeiras,
processados fora do território, vendidos de volta como "serviço",
e usados para aprofundar a dependência de quem os gerou.

O Capiba inverte essa lógica.

O dado nasce no território. Permanece no território.
Gera inteligência para quem o produziu.
E é governado por quem tem mais a perder com ele.

Não é utopia. É protocolo.

---

## A ética que nos move

O Capiba não é só infraestrutura técnica. É infraestrutura ética.

O capitalismo nos controla nos melancolizando — privatizando o sofrimento, transformando a dor coletiva em depressão individual. A CAPIDATA é o espaço onde esse sofrimento ganha nome coletivo, causa identificada e ação que emerge da compreensão.

Cinco ideias orientam tudo que construímos:

**1. Conatus** — Cada pessoa, cada comunidade, cada território se esforça para perseverar no próprio ser. A tecnologia ou amplia essa potência ou a diminui. Não existe meio-termo. Quando corpos se encontram e se fortalecem mutuamente, o que nasce é alegria. Quando se destroem, tristeza. O bem é aquilo que amplia a potência de agir; o mal é aquilo que a diminui.

**2. O desejo é produção, não falta** — A CAPIDATA não existe para preencher uma carência. Existe para produzir realidade. A criação deliberada de falta é a arte da classe dominante. O Capiba recusa essa lógica: o que as comunidades já praticam — o mutirão, a cozinha comunitária, a moeda social, o coco de roda — são expressões de potência que a teoria não precisa inventar, apenas tornar legível.

**3. O poder está em toda parte — inclusive aqui dentro** — Este projeto não cria um espaço livre de poder. Cria um espaço que assume a responsabilidade de tornar seus mecanismos de poder legíveis e contestáveis. Os padrões de dominação do sistema que combatemos podem se reproduzir aqui dentro. Reconhecê-los é dever de todos.

**4. Uma paixão compreendida é o começo de uma ação** — Compreender a causa do afeto é o primeiro ato político. Não basta sentir a injustiça; é preciso nomear sua mecânica. É por isso que o Capiba exige explicabilidade de toda IA, transparência de todo processo, e legibilidade de toda decisão.

**5. Condições, não programa** — A transformação não é decreto que se adota. São condições de possibilidade que se constroem. A diferença entre prescrever o que as pessoas devem ser e criar espaço para que elas produzam seu próprio saber é a diferença entre dominação e liberdade.

O ensaio *Brasil e A Ética do Desejo* desenvolve essa fundamentação em profundidade. O glossário operativo dos conceitos está em [`docs/ETICA_DO_DESEJO.md`](./docs/ETICA_DO_DESEJO.md).

---

## O que já existe

- [x] Constituição do Core (princípios invioláveis)
- [x] Arquitetura do ecossistema (IaaS → PaaS → SaaS → SuperApps)
- [x] Modelo de governança (quórum dinâmico, proteção de assimetria, protocolos de conflito)
- [x] Modelo de identidade (DID soberano + Perfil de Horizonte Temporal)
- [x] Protocolo de commons (PRIVATE / HIDDEN / COMMONS / PUBLIC)
- [x] Fundamentação filosófico-política (ensaio *Brasil e A Ética do Desejo*)
- [x] Pacto Fundante v0.2 (estatuto com preâmbulo, 8 princípios, resolução de conflitos)
- [x] Mapa de soluções (20+ repositórios planejados)
- [ ] **Você**

---

## O que estamos construindo agora

### `capiba-core` — A Constituição Tecnológica

O núcleo imutável. Escrito em Rust.
Define identidade soberana, fluxo de dados, governança e proteção de assimetria.
Tudo no ecossistema constrói sobre ele. Nada pode violá-lo.

**Você pode contribuir se:**

- Conhece Rust ou quer aprender com propósito
- Tem experiência com protocolos distribuídos (libp2p, CRDTs, DIDs)
- Quer escrever especificações formais (RFC-style)
- Trabalha com criptografia aplicada
- Tem experiência com sistemas offline-first

---

## Feature Stories por Área de Conhecimento

O Capiba não é um projeto de tecnologia com impacto social.
É um projeto de transformação social que usa tecnologia.
Por isso, cada área de conhecimento tem papel estrutural —
não periférico, não de apoio, mas fundante.

---

### 🖥️ Engenharia de Dados e Infraestrutura

**História:** Dona Josefa vende tapioca numa feira de Caruaru.
Ela nunca teve acesso a crédito porque não tem "histórico bancário".
Mas ela tem 8 anos de vendas diárias registradas num caderninho.
O Capiba transforma esse caderninho em soberania.

**O que construir:**

- `capiba-node` — nó de infraestrutura que roda num Raspberry Pi sem internet estável
- `capiba-storage` — armazenamento federado com DuckDB local + sincronização P2P
- `capiba-net` — rede mesh entre nós de bairro usando LoRa e Wi-Fi
- `capiba-compute` — computação distribuída para inteligência coletiva
- Pipeline de ingestão offline-first tolerante a partição
- Motor de sincronização CRDT para dados de commons
- Benchmarks de performance em hardware de baixo custo

**Stack:** Rust, Go, DuckDB, SQLite, libp2p, LoRa, Raspberry Pi

**Feature stories específicas:**

```
Como MEI sem internet estável,
quero que meus dados sejam sincronizados automaticamente
quando a conexão voltar,
para que minha contribuição ao commons não se perca.

Como cooperativa agrícola no sertão,
quero um nó local que funcione sem luz elétrica por até 48h,
para que a governança não pare em período de seca.

Como brigada técnica de bairro,
quero instalar um CapibaNode em menos de 30 minutos
usando apenas um pen drive,
para que qualquer pessoa possa replicar sem depender de mim.
```

---

### 💻 Desenvolvimento de Software

**História:** A Associação de Moradores do Coque, no Recife,
toma decisões em assembleia toda segunda-feira.
As atas somem. As decisões não são cumpridas. Ninguém sabe quem era responsável.
O CapibaGov resolve isso sem precisar de internet, sem precisar de técnico.

**O que construir:**

- `capiba-app-mei` — SuperApp offline-first para trabalhadores por conta própria
- `capiba-app-associacao` — SuperApp de governança comunitária
- `capiba-voz` — mensageria P2P sem WhatsApp/Meta
- `capiba-feira` — marketplace solidário sem taxa de plataforma
- `capiba-flow` — orquestração visual de processos (sem código)
- Interfaces acessíveis (WCAG AA, funciona em 3G, tela pequena)
- PWA offline-first com sincronização transparente
- SDK JavaScript/TypeScript para o protocolo Capiba

**Stack:** TypeScript, React Native, Svelte, Go, Rust (WASM)

**Feature stories específicas:**

```
Como presidente de associação de moradores,
quero registrar uma votação em assembleia sem internet,
para que a decisão seja válida mesmo no porão da sede.

Como MEI feirante,
quero ver meu "horizonte atual do negócio" em uma tela simples,
para tomar decisões sem precisar de contador.

Como cooperado,
quero receber um alerta quando uma decisão que me afeta
está prestes a ser tomada sem quórum suficiente,
para que minha voz não seja silenciada por ausência técnica.

Como usuário com baixa literacia digital,
quero completar o cadastro do meu negócio
em menos de 5 minutos com ajuda de áudio,
para que a tecnologia não me exclua.
```

---

### 🤖 Inteligência Artificial e Machine Learning

**História:** O Movimento dos Trabalhadores Sem Terra
tem 40 anos de memória de lutas, ocupações, decisões, colheitas.
Esse conhecimento está em caixas de papelão, na cabeça de militantes,
em fitas cassete. O Capiba transforma essa memória em inteligência coletiva viva.

**O que construir:**

- `capiba-ml` — plataforma de ML com governança comunitária dos modelos
- Modelo **PreçoJusto**: detecta dumping e calcula preço equitativo por território
- Modelo **RiscoColheita**: clima + solo + histórico para cooperativas agrícolas
- Modelo **DemandaBairro**: oferta e demanda local sem algoritmo extrativista
- Modelo **EvasãoEscolar**: intervenção antes da evasão, não depois
- Modelo **CréditoRede**: score por reputação de commons, não por banco
- Motor de cálculo do **δ efetivo** (Perfil de Horizonte Temporal)
- RAG (Retrieval Augmented Generation) sobre memória coletiva de movimentos
- Federação de treinamento: modelo aprende sem dados saírem do território
- Explicabilidade obrigatória: toda previsão tem justificativa legível

**Stack:** Python, PyTorch, Rust (bindings), Federated Learning, ONNX

**Princípio inviolável:**

```
Todo modelo do ecossistema Capiba:
  · Pertence à rede que gerou os dados (não ao desenvolvedor)
  · É explicável: nenhuma caixa-preta para comunidades
  · É auditável: qualquer membro vê o que influenciou a previsão
  · É revogável: comunidade pode retirar dados do treinamento
  · Nunca decide: informa, projeta, sugere — humano decide
```

**Feature stories específicas:**

```
Como agente de saúde comunitária,
quero receber um alerta quando o padrão de consultas do bairro
indica início de surto de dengue,
para agir antes, não depois.

Como coordenador do MST,
quero perguntar em linguagem natural sobre decisões
tomadas em assembleias dos últimos 10 anos,
para que a memória coletiva não morra com os mais velhos.

Como cooperativa de costureiras,
quero saber qual o preço justo para meu produto
baseado no que outras cooperativas similares praticam,
sem que meus dados de custo sejam expostos.
```

---

### ⚖️ Governança e Direito

**História:** Uma cooperativa de catadores em Olinda
quer se formalizar mas não entende o marco legal.
Quer distribuir sobras mas não sabe como fazer isso legalmente.
Quer fazer contratos com a prefeitura mas não tem advogado.
O Capiba oferece inteligência jurídica popular, não advocacia de escritório.

**O que construir:**

- Constitucionalização do capiba-core: linguagem jurídica + técnica simultâneas
- Mapeamento de marcos legais por tipo de entidade
  (Lei do Cooperativismo, Marco das OSCs, Estatuto da Cidade, etc.)
- Templates de estatuto social compatíveis com o protocolo Capiba
- Motor de compliance automático (LGPD, Marco Civil, legislação municipal)
- Protocolo de resolução de conflitos (mediação graduada, instâncias acessíveis)
- Modelo de licença ética (derivada da Peer Production License)
- Documentação jurídica da propriedade coletiva de dados e modelos de IA
- Interface entre DID soberano e CNPJ/CPF (identidade estatal)
- Mapeamento de vedações: o que o ecossistema não pode fazer juridicamente

**Perfis necessários:**

- Advogados especialistas em cooperativismo e economia solidária
- Pesquisadores de direito digital e proteção de dados (LGPD)
- Especialistas em direito indígena e quilombola
- Pesquisadores de propriedade intelectual coletiva

**Feature stories específicas:**

```
Como fundadora de cooperativa,
quero gerar um estatuto social válido juridicamente
que seja compatível com o protocolo de governança Capiba,
para não precisar escolher entre forma jurídica e ética.

Como território quilombola,
quero que meus dados de mapeamento territorial
sejam protegidos juridicamente como propriedade coletiva,
para que não possam ser usados contra mim em disputa fundiária.

Como gestor municipal parceiro,
quero um modelo de contrato de dados abertos
que não transfira propriedade nem soberania para a prefeitura,
para que a parceria não vire captura.
```

---

### 🔬 Ciência e Pesquisa

**História:** O Brasil tem um dos maiores acervos de
biodiversidade, saberes tradicionais e diversidade cultural do planeta.
Esse conhecimento é sistematicamente extraído por universidades do Norte,
publicado em inglês, e devolvido ao país como "descoberta estrangeira".
O Capiba é infraestrutura para ciência anti-colonial.

**O que construir:**

- Protocolo de dados de pesquisa com soberania comunitária
  (comunidade decide o que pesquisador pode usar e publicar)
- Integração com repositórios abertos (Zenodo, OpenAlex, LA Referencia)
- Modelo de consentimento informado digital para pesquisa com comunidades
- Infraestrutura para ciência cidadã: comunidade como produtora de dados
- Métricas de impacto territorial (não apenas fator de impacto de revista)
- Protocolo de repartição de benefícios (CBD/Nagoya para dados)
- Arquivo vivo de saberes tradicionais com governança das comunidades detentoras

**Áreas de pesquisa prioritárias:**

- Economia solidária e commons digitais
- Assimetria de poder e teoria dos jogos aplicada
- Saúde coletiva e epidemiologia popular
- Agroecologia e soberania alimentar
- Educação popular e tecnologia
- Cartografia crítica e territorialidade

**Perfis necessários:**

- Pesquisadores em ciência de dados aplicada ao Sul Global
- Antropólogos, sociólogos e geógrafos com experiência territorial
- Especialistas em etnobotânica, agroecologia, saúde coletiva
- Epistemólogos do Sul e pesquisadores anti-coloniais
- Estatísticos com experiência em dados assimétricos

**Feature stories específicas:**

```
Como pesquisadora de etnobotânica,
quero coletar dados com comunidades quilombolas
sob protocolo em que a comunidade define o que posso publicar,
para que minha pesquisa não seja mais uma extração.

Como movimento de agroecologia,
quero que os dados de produção das cooperativas
alimentem pesquisa universitária parceira
sem que isso transfira propriedade dos dados,
para que ciência e movimento cresçam juntos.

Como epidemiologista do SUS,
quero cruzar dados de saúde comunitária do CapibaSaúde
com dados do DATASUS
sob governança que protege a identidade dos moradores,
para que a pesquisa sirva ao bairro antes de servir ao artigo.
```

---

### 📡 Mídia, Comunicação e Narrativa

**História:** Quando o agronegócio invade um território quilombola,
a primeira batalha não é no campo — é na narrativa.
Quem conta a história primeiro define quem é o invasor e quem é o ocupante.
O Capiba é infraestrutura de contra-narrativa soberana.

Soberania de comunicação é extensão de soberania política. O alcance construído ao longo de anos por um comunicador popular pode ser destruído por decisão unilateral de uma corporação. Sem infraestrutura própria, toda construção de consciência política está vulnerável ao ponto de falha corporativo. O `capiba-voz` não é luxo — é necessidade estratégica.

**O que construir:**

- `capiba-voz` — plataforma de comunicação P2P sem intermediário corporativo
- Sistema de transmissão ao vivo para assembleias (sem YouTube/Meta)
- Arquivo público e pesquisável de memória de lutas e movimentos
- Ferramentas de produção de conteúdo acessível (áudio, vídeo, infográfico)
- Protocolo de verificação de fatos dentro da rede (fact-checking comunitário)
- Dashboard de transparência pública (prestação de contas legível para não-técnicos)
- Kit de comunicação para movimentos (identidade visual, templates, manifesto)
- Integração com rádios comunitárias e TVs populares
- Protocolo anti-desinformação para redes de commons

**Perfis necessários:**

- Jornalistas com experiência em jornalismo popular e comunitário
- Comunicadores de movimentos sociais
- Designers gráficos e de UX com sensibilidade popular
- Produtores de conteúdo em áudio e vídeo
- Especialistas em acessibilidade comunicacional

**Feature stories específicas:**

```
Como comunicador do MTST,
quero transmitir uma assembleia ao vivo
para militantes em outros estados
sem depender do YouTube que pode nos derrubar,
para que nossa voz não seja censurada por algoritmo.

Como associação de moradores,
quero gerar automaticamente um relatório de prestação de contas
em linguagem simples e visual,
para que qualquer morador entenda o que foi feito com o dinheiro.

Como rádio comunitária,
quero receber alertas do CapibaSaúde sobre surtos no território
e publicar automaticamente em formato de nota para o ar,
para que a informação chegue a quem não tem smartphone.
```

---

### 🎨 Design e Experiência

**História:** A maioria dos sistemas para comunidades populares
foi desenhada por pessoas que nunca viveram o que essas comunidades vivem.
O resultado é tecnologia que exclui quem mais precisa.
O Capiba é desenhado de dentro para fora.

**O que construir:**

- Sistema de design anti-colonial:
  estética que nasce de referências do Nordeste, da periferia, do quilombo —
  não de Cupertino nem do Vale do Silício
- Biblioteca de componentes acessíveis (WCAG AA, baixa literacia digital)
- Pesquisa de campo com usuários reais (MEI, feirante, cooperado, militante)
- Testes de usabilidade em condições reais (3G, tela pequena, baixa bateria)
- Iconografia e linguagem visual sem eurocentrismo
- Design de serviço para os SuperApps (jornadas completas, não só telas)
- Mapeamento de jornadas de usuários em diferentes territórios

**Perfis necessários:**

- Designers de produto com experiência em contextos de baixa renda
- Pesquisadores de UX com metodologia participativa
- Ilustradores e artistas visuais da cultura popular nordestina/brasileira
- Especialistas em acessibilidade digital
- Antropólogos do design

**Feature stories específicas:**

```
Como MEI com 50 anos e primeiro smartphone,
quero concluir meu cadastro no Capiba
sem precisar ler nada (só áudio e ícones),
para que a tecnologia não me exclua por não ter estudado.

Como designer da comunidade,
quero que o sistema de design do Capiba
use referências visuais do Maracatu e do Cordel,
para que o software pareça nosso, não importado.
```

---

### 🌱 Economia Solidária e Movimento Popular

**História:** O Brasil tem mais de 20.000 empreendimentos de economia solidária.
A maioria opera no invisível — sem dados, sem inteligência, sem conexão entre si.
O Capiba é a infraestrutura que faltava para a economia solidária
se tornar um sistema econômico alternativo ao capitalismo, não apenas resistência.

**O que construir:**

- Mapeamento vivo de empreendimentos solidários (commons:regional)
- Protocolo de intercâmbio solidário (escambo, crédito mútuo, commons)
- Integração com clubes de troca, bancos comunitários e moedas sociais
- Modelo de Valor de Shapley aplicado à distribuição de sobras em cooperativas
- Índice de saúde cooperativa (não financeiro: participação, diversidade, δ coletivo)
- Conexão com cadeias produtivas solidárias (do produtor ao consumidor)
- Ferramentas de formação em autogestão e cooperativismo

**Perfis necessários:**

- Economistas com experiência em economia solidária e commons
- Militantes e gestores de cooperativas e associações
- Especialistas em finanças solidárias e bancos comunitários
- Pesquisadores de movimentos sociais e autogestão
- Educadores populares e formadores políticos

**Feature stories específicas:**

```
Como rede de bancos comunitários,
quero que a moeda social local seja interoperável
com os Créditos de Rede do Capiba,
para que a economia solidária ganhe escala sem perder identidade.

Como cooperativa de produção,
quero calcular automaticamente a distribuição de sobras
de forma que seja matematicamente justa
e explícavel para cada cooperado,
para que ninguém sinta que foi prejudicado.
```

---

### 📚 Educação e Formação Política

**História:** Paulo Freire disse que ninguém educa ninguém —
as pessoas se educam em comunhão, mediatizadas pelo mundo.
O CapibaEduca não é uma plataforma de cursos.
É infraestrutura para que o conhecimento circule
de quem sabe para quem quer aprender,
sem mediação de certificadora privada.

**O que construir:**

- `capiba-educa` — plataforma de educação popular offline-first
- Biblioteca de commons: materiais didáticos livres, em português, regionalizados
- Certificação comunitária: a rede valida o saber, não o MEC
- Currículo anti-colonial: história do Brasil desde a perspectiva dos vencidos
- Formação técnica em soberania digital para comunidades
- Módulos de formação política em autogestão, cooperativismo, direitos
- Integração entre CapibaEduca e CapibaFeira
  (aprende a gestão enquanto vende)

**Perfis necessários:**

- Educadores populares e pedagogos freirianos
- Especialistas em EAD e tecnologia educacional
- Produtores de conteúdo didático em linguagem popular
- Pesquisadores em educação anti-colonial
- Formadores políticos de movimentos

**Feature stories específicas:**

```
Como liderança do MST,
quero criar um curso de formação política
que funcione offline nos acampamentos,
para que a formação não dependa de sinal de celular.

Como jovem da periferia,
quero que meu conhecimento de marcenaria
seja certificado pela rede de cooperativas,
para conseguir trabalho sem precisar de diploma de escola privada.
```

---

### 🎵 Cultura, Arte e Memória

**História:** O Mangue Beat nasceu do Recife misturando
lama do mangue com antenas parabólicas.
Potência local com conexão global, sem perder a identidade.
O CapibaCultura é essa antena — para artistas que não querem
ser engolidos pelo Spotify nem silenciados pelo algoritmo.

O nordestino não precisa escolher entre a modernidade e o arcaico, entre Marx e o Xangô, entre o digital e o coco. A potência regional está exatamente na tensão entre contrários — não na pureza de nenhuma das posições.

**O que construir:**

- `capiba-cultura` — plataforma de economia criativa popular
- Arquivo vivo de cultura popular: Maracatu, Coco, Forró, Repente, Frevo
- Mapeamento de mestres e detentores de saberes tradicionais
- Protocolo de propriedade intelectual coletiva
  (a comunidade é a detentora, não o indivíduo)
- Distribuição de música e arte sem Spotify/YouTube
- Conexão entre produção cultural e CapibaFeira
  (artista também é MEI)
- Financiamento coletivo dentro da rede (sem Kickstarter)

**Perfis necessários:**

- Músicos, artistas visuais, cineastas, escritores populares
- Pesquisadores de cultura popular e patrimônio imaterial
- Especialistas em direito autoral coletivo
- Produtores culturais com experiência em economia criativa

**Feature stories específicas:**

```
Como coquista de Arcoverde,
quero publicar minha música na rede Capiba
e receber diretamente de quem ouve,
sem que o Spotify leve 70% e o algoritmo me enterre.

Como mestra de Maracatu,
quero que o arquivo do meu grupo
pertença ao grupo, não a uma plataforma,
para que minha nação não suma quando eu morrer.
```

---

### 🌍 Relações Internacionais e Sul-Sul

**História:** La Via Campesina conecta 200 milhões de
pequenos produtores em 81 países.
O Zapatismo inspirou movimentos em todos os continentes.
O Capiba é infraestrutura para que essa solidariedade
não dependa de plataformas do Norte para circular.

**O que construir:**

- Federação internacional de nós Capiba (América Latina primeiro)
- Protocolo de interoperabilidade com commons de outros territórios
- Tradução automática com governança comunitária
  (não Google Translate — modelo treinado em línguas do Sul)
- Conexão com redes parceiras:
  La Via Campesina, MST, ALBA, CLOC, Cooperativa Mondragón,
  Cooperation Jackson, Rojava, Zapatistas
- Protocolo de solidariedade digital entre territórios em crise

**Perfis necessários:**

- Especialistas em relações internacionais com foco no Sul Global
- Tradutores de espanhol, inglês, francês, árabe, quéchua, guarani
- Pesquisadores de movimentos sociais transnacionais
- Diplomatas populares com experiência em redes internacionais

---

## Como Entrar

O projeto está no **momento zero** — e isso é uma vantagem.
Você não está entrando em algo pronto. Está fundando algo.

**Se você é desenvolvedor(a):**

- Leia a constituição do Core: [`capiba-core/spec`](https://github.com/capidata/capiba-core)
- Leia o [Pacto Fundante](./estatuto/pacto-fundante-v0.2.md) — é o documento que define quem somos
- Abra uma issue com sua área de interesse
- Primeiro PR bem-vindo: qualquer coisa que funcione offline num Raspberry Pi

**Se você não é desenvolvedor(a):**

- Seu conhecimento é tão fundante quanto o código
- Abra uma issue em [`.github`](https://github.com/capidata/.github)
  descrevendo sua área e o que você pode construir
- A primeira assembleia da CAPIDATA está sendo convocada

**Se você é uma entidade (MEI, Associação, Cooperativa, Movimento):**

- Você é o usuário real que dá sentido a tudo isso
- Entre em contato para ser o primeiro território piloto
- Sua experiência tem peso político especial nas decisões

---

## Princípios Invioláveis

1. **Soberania**: nenhum dado sai do território sem consentimento explícito
2. **Anti-colonial**: o projeto é escrito em português primeiro, sempre. A tensão entre contrários é potência, não defeito
3. **Assimetria como dado**: quem tem mais a perder decide mais sobre o que perde — e o protocolo compensa assimetrias de potência ativamente
4. **Ilegibilidade estratégica**: o direito à opacidade é protegido por design. Legibilidade serve ao povo, não ao extrator
5. **Conatus coletivo**: a tecnologia aumenta a potência, nunca a substitui. Critério composicional: ampliou a potência de agir?
6. **Commons, não mercadoria**: o código é livre; os dados das comunidades, soberanos. A vedação é recusa ética à expropriação
7. **Prática, não discurso**: cada feature precisa rodar em território real. Se o usuário não entende, a feature falhou
8. **Autocorreção permanente**: a CAPIDATA aceita ser transformada pelo confronto com quem vive o que ela teoriza

---

## O que o Capiba não é

- Não é uma startup social
- Não é uma ONG que "empodera comunidades"
- Não é uma plataforma com modelo de negócio disfarçado de impacto
- Não é tecnologia neutra — é tecnologia com ética embutida
- Não é projeto acadêmico sem aplicação real
- Não é para ser vendido, nem para virar produto de grande empresa
- Não é cordialidade que usa o vínculo pessoal para reproduzir hierarquia — é cordialidade que compõe: a vizinha que cuida, o mutirão que constrói, a cozinha que alimenta
- Não é espaço livre de contradição — é espaço que reconhece a contradição e a trabalha

---

## Licença

Capiba usa a **Licença Ética Capiba** (derivada da Peer Production License).

As vedações abaixo não são regras arbitrárias de restrição de uso: constituem a recusa ética à expropriação da subjetividade criativa das comunidades pelo capital.

- ✅ Uso livre para entidades sem fins lucrativos e commons
- ✅ Uso livre para cooperativas e economia solidária
- ✅ Uso livre para pesquisa com repartição de benefícios
- ⚠️ Uso mediante contribuição ao commons para entidades comerciais
- ❌ Vedado: venda de dados de usuários
- ❌ Vedado: publicidade comportamental
- ❌ Vedado: extração de dados para IA sem consentimento comunitário
- ❌ Vedado: uso por forças repressivas, vigilância e controle social

---

## Documentação

| Documento | Descrição |
| --- | --- |
| [`estatuto/pacto-fundante-v0.2.md`](./estatuto/pacto-fundante-v0.2.md) | Pacto Fundante — quem somos, como decidimos, o que nos protege |
| [`docs/Brasil_e_A_Etica_do_Desejo.md`](./docs/Brasil_e_A_Etica_do_Desejo.md) | Ensaio completo — fundamentação filosófico-política |
| [`docs/ETICA_DO_DESEJO.md`](./docs/ETICA_DO_DESEJO.md) | Glossário operativo dos conceitos |
| [`CONTRIBUTING.md`](./CONTRIBUTING.md) | Como contribuir |
| [`LICENCA.md`](./LICENCA.md) | Licença Ética Capiba |

---

## Contato e Comunidade

- GitHub: [github.com/capidata](https://github.com/capidata)

_Construído em Pernambuco. 2026._

---

> _"A teoria não precisa inventar o que já existe;_
> _precisa tornar legível o que a experiência já pratica."_
> — Silvano Neto, Brasil e A Ética do Desejo (2026)
