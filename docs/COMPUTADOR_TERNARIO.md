# O Computador Ternário: história, soberania e o caminho não percorrido

_Compilação desenvolvida por **Silvano Neto**, com apoio de ferramenta de inteligência artificial generativa_

**Recife - Pernambuco - Brasil, 04 de Abril de 2026**

> "A imposição de uma única pilha tecnológica é o equivalente contemporâneo do epistemicídio."
> — Yuk Hui, sobre cosmotécnica e tecnodiversidade

---

## Sumário

A computação binária domina o mundo. Cada processador, cada memória, cada programa opera sobre dois estados: 0 e 1, ligado e desligado, sim e não. Essa dominância é apresentada como consequência inevitável da física dos transistores. A história conta outra coisa. A computação ternária existiu, funcionou, e foi abandonada por razões econômicas e geopolíticas, não por inferioridade técnica. A matemática prova que o sistema de base 3 é mais eficiente que o de base 2. A pergunta composicional que orienta a Ética do Desejo, "amplia ou diminui a potência de agir?", se aplica com precisão à arquitetura computacional que governa o mundo.

Este documento recupera a história do computador ternário, examina por que o binário venceu, e argumenta que desenvolver tecnologia ternária de forma soberana e nacional é caminho de ampliação de potência coletiva.

---

## I. A máquina esquecida: Setun

Em 1958, na Universidade Estatal de Moscou, o engenheiro Nikolay Brusentsov completou o Setun, o primeiro computador ternário moderno. A máquina operava em ternário balanceado: três estados por dígito, representados como -1, 0 e +1. Cinquenta unidades foram produzidas entre 1959 e 1965 e instaladas em mais de trinta universidades soviéticas.

O Setun consumia menos energia que seus equivalentes binários. Custava menos para produzir. A aritmética em ternário balanceado é elegante: números negativos não precisam de representação especial (como o complemento de dois do binário), bastando inverter os sinais dos dígitos. A negação de +1, 0, -1 é -1, 0, +1. Sem gambiarras.

Doze anos depois, Brusentsov desenvolveu o Setun-70, incorporando as ideias de programação estruturada de Edsger Dijkstra diretamente no hardware. Instruções e endereços eram codificados em "sílabas" de 6 trits (equivalentes a 9,5 bits). A dificuldade de programação caiu de 5 a 7 vezes em relação às máquinas binárias da época. Os programas se tornaram mais confiáveis, mais legíveis, mais fáceis de modificar.

O Setun não foi derrotado pela física. Foi derrotado pela economia política. A indústria soviética de semicondutores já estava comprometida com o padrão bin��rio ocidental. Produzir componentes ternários exigia cadeia de suprimentos dedicada que a burocracia não autorizou. A máquina que funcionava melhor perdeu para o ecossistema que já existia.

### Antes de Brusentsov: Thomas Fowler

A ideia ternária é mais antiga. Em 1840, o matemático autodidata inglês Thomas Fowler construiu uma calculadora mecânica ternária em Great Torrington, Devon. Fowler trabalhava com o sistema monetário pré-decimal britânico (libras, shillings, pence, farthings) e percebeu que a aritmética ternária balanceada simplificava cálculos com múltiplas bases. A máquina realizava multiplicação e divisão. A peça original não sobreviveu, mas Augustus DeMorgan deixou uma descrição de duas páginas a partir da qual uma réplica foi construída.

---

## II. Por que o ternário é matematicamente superior

A eficiência de um sistema numérico se mede pela economia de raiz (radix economy): quantos dígitos são necessários para representar uma faixa de valores, multiplicados pela base. Formalmente:

$$E(b, N) = b \times \lceil \log_b(N) \rceil$$

onde $b$ é a base e $N$ é o número de valores representáveis. O sistema ideal opera na base que minimiza $E$. A matemática prova que a base ideal é o número de Euler, $e \approx 2{,}718$. Como $e$ não é inteiro, o inteiro mais próximo é 3. O ternário é o sistema inteiro mais eficiente que existe.

Para representar os números de 0 a 999.999:
- Base 2 (binário) precisa de 20 dígitos. Produto: 40.
- Base 3 (ternário) precisa de 13 dígitos. Produto: 39.
- Base $e$ (teórico) precisaria de 14 dígitos. Produto: 38,056.

O ternário está mais perto do ótimo que o binário. Um fluxo de dados de N trits tem 3^N estados possíveis. Para N=12: binário tem 4.096 valores; ternário tem 531.441.

### Ternário balanceado: a elegância algébrica

No ternário balanceado (dígitos -1, 0, +1), a aritmética ganha propriedades que o binário não tem. A tabela abaixo ilustra:

| Valor | Binário (complemento de dois, 8 bits) | Ternário balanceado |
|---|---|---|
| +5 | `00000101` | `T, +1, -1` (ou seja: 9 − 3 − 1 = 5) |
| −5 | `11111011` | `-1, +1, -1` (inversão simétrica de +5) |
| 0 | `00000000` | `0` |

No binário, representar −5 exige manipulação não intuitiva de todos os 8 bits (complemento de dois). No ternário balanceado, basta inverter o sinal de cada dígito. A negação é operação simétrica por construção.

A tabela de multiplicação de um dígito não gera carry em nenhum caso. No ternário desbalanceado (dígitos 0, 1, 2), carry ocorre em 63% dos casos de soma completa. No balanceado, cai para 29,6%. Menos carry significa circuitos mais simples e operações mais rápidas.

Números negativos não precisam de representação especial. O complemento de dois, a convenção que todo programador binário aprende a duras penas, é artefato de uma deficiência da base 2. No ternário balanceado, negar um número é inverter os sinais dos dígitos. A representação é simétrica por construção.

Arredondamento equivale a truncamento. Na prática, isso elimina uma classe inteira de erros numéricos que o binário carrega em toda operação de ponto flutuante.

### Lógica de três valores: verdadeiro, falso, desconhecido

O binário força a lógica a operar em dois valores: verdadeiro ou falso. O mundo real opera com incerteza. A lógica ternária inclui um terceiro estado (desconhecido, indeterminado, não-aplicável) que o binário precisa simular com convenções externas. Bancos de dados SQL usam NULL como terceiro valor. Circuitos digitais usam alta impedância (tri-state). Redes usam "don't care bits". Todos são patches sobre uma base que não comporta três estados nativamente.

---

## III. Por que o binário venceu: física, capital e dependência de caminho

### O argumento físico (real, mas parcial)

O transistor, componente fundamental dos circuitos digitais, opera com facilidade entre dois estados de voltagem: ligado e desligado. A margem de ruído entre esses dois estados é ampla: o circuito tolera variações de temperatura, envelhecimento e interferência sem confundir um estado com o outro. Operar com três estados reduz essa margem. Circuitos ternários exigem controle analógico mais preciso, sensores mais finos e mais energia para manter os estados distinguíveis.

O argumento é real. Mas é parcial. Transistores de nanotubos de carbono (2024) demonstraram operação estável em três estados com potência estática de 8,2 picowatts. A Huawei, em 2025, apresentou o primeiro chip ternário comercial em arquitetura CMOS digital convencional, usando camadas de voltagem de limiar (0V, 1,65V, 3,3V) para mapear três estados com estabilidade. O argumento físico que impediu o ternário em 1960 não impede em 2026.

### O argumento econômico (o verdadeiro vencedor)

Quando Brusentsov terminou o Setun, a indústria mundial de semicondutores já tinha investido bilhões em fabricação binária. Ferramentas de design, bibliotecas de células padrão, fluxos de verificação, tudo pressupunha dois estados. Cada universidade ensinava lógica binária. Cada linguagem de programação operava sobre bytes de 8 bits. O ecossistema inteiro, do silício ao software, estava travado em binário.

O Setun era tecnicamente superior em consumo de energia e custo. Perdeu porque o custo de mudar o ecossistema excedia o benefício de qualquer máquina individual. Efeito de rede: todos projetam para binário porque todos os outros projetam para binário. Dependência de caminho: uma escolha feita nos anos 1940 (usar transistores biestáveis como base computacional) determinou a trajetória de oitenta anos de desenvolvimento.

### O argumento geopolítico (o que ninguém nomeia)

A dominância do binário não é acidente da física. É resultado da hegemonia industrial dos Estados Unidos no pós-guerra. A cadeia de produção de semicondutores (design nos EUA, fabricação em Taiwan e Coreia do Sul, equipamento de litografia na Holanda) foi construída inteiramente sobre premissas binárias. Países que não participaram dessa cadeia se tornaram consumidores de arquitetura alheia. A dependência tecnológica do Sul Global em relação ao Norte se materializa, entre outros vetores, na impossibilidade de fabricar processadores com arquitetura própria.

A analogia com a hegemonia do dólar é precisa. Assim como a moeda de reserva mundial constrange as economias periféricas (forçando-as a acumular dólares para comerciar, a se submeter às decisões do Federal Reserve, a competir em termos definidos por outros), a arquitetura binária constrange o desenvolvimento tecnológico periférico. Não se fabrica processador fora do paradigma binário porque o ecossistema inteiro, ferramentas de design, propriedade intelectual, fábricas, está travado.

---

## IV. O renascimento: 2024-2026

### Huawei e o chip ternário (2025)

Em 2025, a Huawei apresentou o primeiro chip de lógica ternária do mundo em escala comercial. A arquitetura usa CMOS digital convencional com camadas de voltagem de limiar para representar três estados: 0V (zero), 1,65V (+1), 3,3V (-1). Os resultados declarados:

- Eficiência energética: 1,8 TOPS/W em processo de 7nm (três vezes superior a circuitos binários equivalentes).
- Redução de 40% na contagem de transistores.
- Aumento de 20% na velocidade.
- GPUs binárias precisam de 200W para 30 TFLOPS; o chip ternário alcança o mesmo com 75W.

O chip entrou em fase de tape-out. A SMIC (Semiconductor Manufacturing International Corporation) alcançou produção em massa em processo de 14nm. A mídia chinesa enquadrou o avanço como rompimento da hegemonia binária ocidental. O enquadramento é preciso: a China desenvolve ternário porque o binário está controlado por cadeias de suprimentos que os EUA podem sancionar.

### Nanotubos de carbono (2024)

Pesquisadores publicaram na Science Advances (2024) a demonstração de transistores de porta de fonte em nanotubos de carbono (CNT-SGT) que alternam de forma estável entre três estados lógicos. Os circuitos implementaram inversores ternários, portas NMIN e NMAX, e células SRAM ternárias. Uma rede neural ternária alcançou 100% de precisão na classificação de imagens.

Em 2026, nanotubos de carbono preenchidos demonstraram três estados lógicos (0, 1, 2) com potência estática de 8,2 picowatts e operação estável sob variações de processo. O material é candidato a substituir o silício como substrato de computação ternária em escala.

### Memória ternária (TCAM)

A memória endereçável por conteúdo ternário (TCAM) já é tecnologia madura. Opera com três entradas (0, 1, X/wildcard) e busca conteúdo inteiro em um único ciclo de clock. Em 2024-2025, novos designs em MoTe2, arquitetura NAND flash e transistores IGZO demonstraram escalabilidade, uniformidade e endurance superiores. Aplicações em aceleração de IA e redes neurais estão em fase de produção.

### Computação quântica ternária

Sistemas quânticos ternários usam qutrits (unidades ternárias quânticas) em vez de qubits. Cada qutrit é descrito como vetor complexo em espaço tridimensional. Vantagens demonstradas: menor consumo de energia, melhor tolerância a falhas, interconexões mais simples, menor custo quântico para operações equivalentes. Portas lógicas ternárias emergem naturalmente em modelos topológicos (anyons metapléticos), realizáveis por entrelaçamento e medição de carga topológica.

---

## V. RISC-V: a arquitetura aberta como piso de soberania

> **O Protocolo Capiba** é uma infraestrutura de comunicação, governança de dados e coordenação econômica desenhada para a realidade periférica brasileira. Projetado pela CAPIDATA a partir do Nordeste, o protocolo opera offline-first (funciona sem conexão permanente), em rede mesh (nós se comunicam diretamente, sem servidor central) e com tolerância a partição (a rede sobrevive quando partes dela caem). O caso de uso primário são comunidades do Semiárido e das periferias urbanas, onde a conectividade é intermitente, a energia é instável e o hardware disponível é de baixo custo. A pergunta que o Capiba responde é: que infraestrutura digital serve a quem vive onde o mercado não considera lucrativo servir?

Antes de chegar ao ternário, a soberania computacional passa por uma condição prévia: o conjunto de instruções. O conjunto de instruções (ISA, Instruction Set Architecture) é a linguagem fundamental que diz ao processador quais operações pode executar. A arquitetura x86 (Intel e AMD) e a ARM (ARM Holdings, controlada pela SoftBank) dominam o mercado global. As duas são proprietárias. Usar x86 exige ser Intel ou AMD. Usar ARM exige pagar licenças de milhões de dólares e esperar de 6 a 24 meses pela aprovação. Países que não controlam essas arquiteturas não controlam seus processadores.

### O que é o RISC-V

Em 2010, na Universidade de Berkeley, os pesquisadores Krste Asanović, Andrew Waterman e Yunsup Lee criaram o RISC-V (pronuncia-se "risk-five"): uma arquitetura de conjunto de instruções aberta, livre de royalties, modificável por qualquer pessoa, fabricável por qualquer fundição. O primeiro chip foi produzido em 2011. Em 2020, a organização RISC-V International mudou a sede dos Estados Unidos para a Suíça, explicitamente para se proteger da guerra comercial entre EUA e China. A neutralidade suíça garante que nenhum governo pode restringir o acesso à arquitetura.

A diferença com ARM e x86 é estrutural:

| | RISC-V | ARM | x86 |
|---|---|---|---|
| Licença | Livre, sem royalties | Proprietária, US$ 1-10 milhões | Duopólio fechado (Intel/AMD) |
| Customização | Ilimitada via extensões | Fixa, limitada | Nenhuma |
| Fabricação | Qualquer fundição | Grandes empresas com licença | Apenas Intel/AMD |
| Dependência | Zero | Alta (ARM Holdings controla) | Total (duopólio) |

### O mundo se move

A China investiu CNY 15 bilhões (US$ 2,1 bilhões) em RISC-V via Conselho de Estado em 2024. A Alibaba (T-Head/DAMO Academy) lançou o processador Xuantie C930 com unidades vetoriais de 512 bits e motor de IA de 8 TOPS. A StarFive prepara o chip "Lion Rock" para data centers (produção em massa em 2026). A China já responde por 50% do volume global de núcleos RISC-V em 2025. A razão é explícita: as sanções americanas cortaram acesso a ARM e x86. O RISC-V é a rota de fuga.

A Índia lançou o programa Digital India RISC-V (DIR-V). O IIT Madras, em parceria com a ISRO (agência espacial indiana), desenvolveu o processador IRIS: chip RISC-V de 64 bits para aplicações aeroespaciais, projetado, fabricado e testado inteiramente na Índia. Está programado para voos espaciais. Meta: processador de 7 nanômetros até 2028.

A Europa investiu centenas de milhões via EU Chips Act. O consórcio European Processor Initiative produziu o eProcessor, primeiro chip RISC-V out-of-order europeu (outubro 2025). O consórcio DARE tem acordo de 6 anos (até 2030) para microprocessadores RISC-V de alto desempenho.

### O Brasil no RISC-V

O Brasil é membro Premier da RISC-V International desde 2024. Vinte e duas universidades integram RISC-V ao currículo de arquitetura de computadores. O projeto u32BR desenvolve microcontrolador nacional baseado em RISC-V. A UNICAMP colabora com o Barcelona Supercomputing Center em unidade de aceleração de multiplicação de matrizes integrada a processador RISC-V. O Instituto Eldorado (Campinas) participa da parceria. O programa CI-Innovator visa formar 4.000 engenheiros de design de chips até 2030.

A CEITEC (Centro Nacional de Tecnologia Eletrônica Avançada), em Porto Alegre, é a única fundição de semicondutores do Brasil sob controle estatal. Pode fabricar designs RISC-V sem licenciamento estrangeiro. A oportunidade é imediata: se a CEITEC for reconstituída e equipada, o Brasil tem condições de produzir processadores RISC-V nacionais para IoT, agricultura, saúde e governança comunitária, sem depender de nenhuma corporação estrangeira para a propriedade intelectual.

### RISC-V como piso, ternário como teto

A relação entre RISC-V e computação ternária é de complementaridade. O RISC-V é modular por design: o conjunto de instruções base (RV32I ou RV64I) é mínimo, e extensões opcionais adicionam funcionalidades sem quebrar compatibilidade.

Pesquisadores já demonstraram essa possibilidade. A extensão **ExTern** integra representação ternária CSD (Canonical Signed Digit) ao RISC-V, alcançando 34,3% de melhoria na frequência de operação e 31% de redução no tempo de execução. A extensão **xTern**, projetada para inferência de redes neurais ternárias em sistemas de borda, alcançou 67% mais throughput com apenas 5,2% a mais de consumo, resultando em 57,1% de ganho de eficiência energética. O processador **ART-9** implementa um núcleo ternário de 9 trits com 24 instruções ternárias customizadas em pipeline de 5 estágios, sobre base RISC-V.

RISC-V oferece o piso: arquitetura de processador livre, fabricável, soberana. Extensões ternárias oferecem o teto: capacidade computacional que o binário puro não alcança com a mesma eficiência. O Brasil pode construir sobre o RISC-V (que já existe, já tem ecossistema, já tem parceiros) e ao mesmo tempo pesquisar extensões ternárias que nenhum outro país da América Latina investiga.

O hardware que o protocolo Capiba precisa (nós offline-first, baixo consumo, tolerantes a partição, seguros) pode ser um chip RISC-V fabricado na CEITEC, com extensões ternárias para aceleração de IA e criptografia, alimentado por energia solar no semiárido. Cada componente dessa frase já é viável individualmente. A composição é o trabalho que falta.

### RISC-V para a periferia: o hardware do Capiba

O ecossistema de hardware RISC-V para edge computing já é maduro. A Espressif (fabricante do ESP32, o microcontrolador mais usado em IoT) produz mais de dez variantes RISC-V: o ESP32-P4 (dual-core 400MHz com extensões de IA e core de baixo consumo a 40MHz), o ESP32-C6 (Wi-Fi 6 + Bluetooth 5.4, certificação de segurança PSA Nível 2) e o ESP32-S31 (dual-core 320MHz com Wi-Fi 6, Bluetooth 5.4, Ethernet e 60 GPIOs).

Placas single-board RISC-V já competem com o Raspberry Pi. A Orange Pi RV2 (US$ 42, março 2025) consome 6,2W sob carga, 60% mais barata que o Raspberry Pi 4B. A Banana Pi BPI-F3 tem acelerador de IA de 2,0 TOPS. A Milk-V Jupiter teve o melhor desempenho real em testes de 2025.

O CapibaNode (nó de infraestrutura do protocolo) pode rodar num hardware RISC-V de US$ 42, sem licença proprietária, com aceleração de IA, conectividade mesh e consumo de 6W. No semiárido, onde o painel solar de 50W alimenta o que precisa, esse hardware é infraestrutura de soberania territorial.

---

## VI. A soberania tecnológica como questão composicional

### Cosmotécnica: cada civilização pode ter fundação técnica diferente

Yuk Hui (já integrado à Ética do Desejo, capítulo XX) argumenta que tecnologia não é universal. Toda técnica é unificação de uma ordem cósmica com uma ordem moral através de atividade técnica. A lógica binária reflete tradições filosóficas específicas: o dualismo cartesiano (mente/corpo, sujeito/objeto, sim/não), a separabilidade que Denise Ferreira da Silva (capítulo VII) identificou como dispositivo colonial. Apresentar o binário como "natural" ou "ótimo" é epistemicídio técnico: apaga a possibilidade de que outras civilizações desenvolvam fundações computacionais diferentes.

O ternário balanceado, com sua simetria natural entre positivo, zero e negativo, reflete uma ontologia diferente. O mundo onde existe meio-termo, onde o indeterminado tem lugar, onde a negação é operação simétrica e não convenção forçada. A lógica ternária é mais próxima do *ch'ixi* de Rivera Cusicanqui (capítulo VII da Ética), conceito aimará que nomeia a coexistência de contrários sem síntese que apague a contradição. Três estados: sim, não, e a tensão entre os dois.

### A dependência de caminho como ambitio automatizada

A dominância do binário opera pelo mesmo mecanismo que a Ética do Desejo diagnostica como *ambitio* automatizada (capítulo V): o desejo de reconhecimento, descrito por Spinoza, convertido em modulação algorítmica invisível que orienta condutas sem que o sujeito perceba a condução. O ecossistema binário modula o campo de possibilidades técnicas antes que o engenheiro perceba que está escolhendo. As ferramentas de design pressupõem binário. Os currículos ensinam binário. As fábricas produzem binário. O engenheiro que "decide livremente" projetar em binário já está decidindo dentro de um campo desenhado para que nenhuma alternativa pareça viável. A governamentalidade algorítmica (capítulo V) opera também no nível da arquitetura computacional.

A pergunta composicional tripla se aplica:

1. **Amplia ou diminui a potência de agir?** A dependência do ecossistema binário estrangeiro diminui a potência tecnológica de países periféricos. Cada sanção que corta acesso a ferramentas de design de chips (como as sanções dos EUA contra a China) demonstra que potência tecnológica construída sobre arquitetura alheia é potência revogável.

2. **O que faz com o excedente?** O valor gerado pela computação global flui para quem controla a cadeia: empresas americanas de design (Qualcomm, NVIDIA, AMD), fabricantes taiwanesas (TSMC) e equipamentos holandeses (ASML). O excedente da computação periférica é capturado pelo centro.

3. **Expande ou contrai o espaço de possibilidades futuras?** A dependência binária contrai. Fecha caminhos alternativos. Torna inviável qualquer inovação que não caiba no paradigma. Desenvolver ternário de forma soberana expande.

### O caso brasileiro

O Brasil não tem pesquisa ternária em andamento. O Plano Brasileiro de Inteligência Artificial (PBIA, 2024-2028) prevê R$ 23 bilhões em investimento, focado em infraestrutura local de IA, nuvem soberana, semicondutores e data centers. O foco é correto. A lacuna é que toda essa infraestrutura será construída sobre arquitetura binária estrangeira, reproduzindo a dependência que pretende superar.

O argumento aqui proposto é que o Brasil, ao investir em tecnologia de semicondutores, deveria incluir pesquisa em computação ternária como linha estratégica. As razões:

A primeira é soberania de arquitetura. Desenvolver processadores ternários desde o design até a fabricação criaria cadeia de valor inteiramente nacional, sem dependência de propriedade intelectual estrangeira. A China demonstrou (via Huawei) que o ternário é caminho viável para escapar das sanções que controlam o binário.

A segunda é eficiência energética. A Caatinga onde vivem os mais pobres do Brasil (capítulo XVII da Ética) é também a região com maior potencial solar. Processadores que consomem um terço da energia para a mesma capacidade computacional são infraestrutura de justiça climática.

A terceira é adequação ao conatus periférico. O protocolo Capiba (que a CAPIDATA constrói) opera em território com eletricidade instável, conexão intermitente e hardware de baixo custo. Processadores que fazem mais com menos são processadores para a periferia.

A quarta é a cosmotécnica nordestina que o capítulo XX da Ética já nomeou. A tríade Vieira Pinto, Milton Santos e Renato Dagnino demonstrou que a técnica periférica não é "atrasada". É funcionalmente produzida pela divisão internacional do trabalho como dependência. Desenvolver ternário é recusar essa função. É produzir tecnologia que não existe no centro, a partir de necessidades que o centro não reconhece.

---

## VII. O custo de reversão e os três regimes

O princípio de maximização de potências (capítulo XIII da Ética) se aplica à decisão sobre computação ternária:

**Experimentar** onde o custo de reversão é baixo. Criar laboratórios de pesquisa em universidades públicas (UFPE, UNICAMP, USP) com simuladores de lógica ternária. Desenvolver compiladores e linguagens para arquitetura ternária em software. Treinar a primeira geração de engenheiros que pensem em três estados. O custo de um laboratório de simulação é da ordem de milhões de reais, não de bilhões. Se não funcionar, o conhecimento gerado ainda vale.

**Acumular** onde o custo é moderado. Financiar prototipagem de circuitos ternários em parceria com fabricantes nacionais (CEITEC, se reconstituído) e internacionais (China, que já tem a tecnologia). Construir base de propriedade intelectual brasileira em design ternário. Acumular patentes, papers e expertise ao longo de uma década.

**Proteger** onde o custo é irreversível. Não entregar a propriedade intelectual ternária a corporações estrangeiras. Não permitir que a pesquisa pública seja patenteada por privados. Não repetir o erro de financiar pesquisa com dinheiro público para que o resultado seja apropriado pelo mercado. A soberania da arquitetura é o ativo. Uma vez cedida, não se recupera.

---

## VIII. O computador ternário e o RISC-V como contraconduta

Benjamin (capítulo VIII da Ética) alertou que a estetização da política permite expressão sem alterar relações de propriedade. O análogo tecnológico é evidente: a "soberania digital" que compra hardware americano, instala software americano e chama o resultado de "nuvem soberana" é expressão sem alteração das relações de propriedade tecnológica. Soberania de fachada.

O RISC-V e o ternário são contracondutas no sentido foucaultiano. Recusam a condução do pensamento computacional pelo paradigma proprietário-binário ocidental sem precisar destruir o ecossistema existente. Operam como a liana de Touam Bona (capítulo VII da Ética): usam o que existe como suporte (ferramentas de simulação, conhecimento de semicondutores acumulado, parcerias internacionais) sem ser capturadas pelo que as sustenta. Crescem por dentro e transformam por composição.

O RISC-V já é contraconduta material. Cada processador fabricado sobre arquitetura aberta é território reconquistado. Cada universidade que ensina RISC-V em vez de ARM é engenheiro que não depende de licença estrangeira para pensar. Cada chip produzido na CEITEC sem royalties é soberania que se materializa em silício.

O ternário é contraconduta epistêmica. Pergunta: e se a base da computação fosse outra? Se o processador operasse com três estados em vez de dois? Se o código fosse sequência de trits? Se a lógica incluísse o indeterminado como categoria nativa? Se a técnica refletisse uma ontologia onde os contrários coexistem em vez de se excluírem?

A convergência entre os dois é o caminho: RISC-V como piso soberano (imediato, viável, com ecossistema global), extensões ternárias como teto de inovação (médio prazo, com pesquisa acumulável), e o protocolo Capiba como software que habita essa infraestrutura e a torna útil para quem vive na periferia.

Mas a contraconduta técnica não opera sozinha. Opera dentro de um ecossistema de recusas coordenadas. A liana não é uma planta. É rede de lianas que transforma a floresta por dentro.

### Contracondutas infraestruturais

- **Protocolos federados** (ActivityPub, Matrix) contra plataformas centralizadas. Cada instância federada é território que não pertence ao Meta.
- **Redes mesh** (LoRa, Wi-Fi comunitário) contra dependência de operadoras. O sinal que não passa pela torre da operadora é sinal que não pode ser cortado por decisão corporativa.
- **CRDTs e sincronização offline-first** contra a exigência de conectividade permanente. O dado que existe sem servidor central é dado soberano.
- **Moedas sociais** (Banco Palmas, Créditos de Rede do Capiba) contra o circuito financeiro que extrai via spread e taxa. Cada transação em moeda social é circuito que não alimenta o banco.

### Contracondutas epistêmicas

- **Software em português primeiro** contra a hegemonia do inglês como língua da técnica. Cada variável nomeada em português, cada README que a Dona Josefa de Caruaru entende, é gesto de soberania epistêmica.
- **IA explicável e auditável** contra a caixa-preta. A comunidade que inspeciona o modelo de IA que a afeta pratica *parresia* técnica, o dizer-a-verdade arriscado que Foucault identificou como gesto político: diz a verdade sobre o algoritmo que o poder preferia manter opaco.
- **Ciência cidadã** (comunidade como produtora de dados) contra ciência extrativa (pesquisador que coleta, publica em inglês e vai embora). O protocolo de dados de pesquisa com soberania comunitária é contraconduta contra o epistemicídio acadêmico.

### Contracondutas somáticas e temporais

- **Assembleia presencial sem celular** contra a mediação algorítmica permanente.
- **O forró depois da assembleia** contra a produtividade permanente. A *dépense*, o gasto improdutivo que Bataille (capítulo IV da Ética) identificou como o que escapa à lógica da acumulação, como contraconduta ao cálculo utilitário: o gasto que o capitalismo chama de desperdício é o que sustenta a comunidade.
- **O maracatu de baque virado** sincroniza sistemas nervosos antes que a consciência processe. Goodman (capítulo X): o som fabrica realidade. A alfaia que bate no corpo é infraestrutura somática de composição.
- **A cozinha comunitária organizada boca a boca**, de porta em porta, contra a cozinha organizada por grupo de WhatsApp. A segunda é mais rápida. A primeira é ilegível ao algoritmo. A lentidão deliberada protege o espaço onde a nomeação coletiva pode acontecer sem ser capturada.

### Contracondutas jurídico-institucionais

- **Licença Ética Capiba** contra GPL e MIT neutras. Usar o direito autoral (instrumento do capital) para proteger o commons (contra o capital) é *marronage* jurídica: a fuga que se faz por dentro do sistema do senhor, usando suas ferramentas para construir território livre.
- **Consentimento material** (Art. 12-A da Licença v0.3) contra o consentimento formal: exigir condições reais antes de aceitar o "sim" é contraconduta contra a ficção jurídica liberal que trata corpos desiguais como iguais perante o contrato.
- **Governança desagregada** contra o voto igualitário que ignora assimetria: mulheres deliberando sobre dados reprodutivos sem precisar convencer a assembleia geral é contraconduta contra a democracia que homogeneiza.

### Contracondutas ecológicas

- **Semente crioula** contra a semente transgênica patenteada. Cada semente guardada pela agricultora do sertão é commons genético que resiste ao cercamento da Monsanto.
- **Agroecologia** contra a monocultura. O bioma como sujeito com conatus (Krenak, capítulo VII da Ética) contra o bioma como recurso a extrair.
- **Personalidade jurídica do rio** (precedente: Whanganui na Nova Zelândia, Atrato na Colômbia). O Rio Capibaribe como ator político da Camada 6 contra o rio como esgoto. Reconhecer o rio como sujeito de direito é contraconduta ontológica: muda o que conta como pessoa.

### Contracondutas narrativas

- **O podcast que ensina Marx em Borborema** contra a academia que tranca teoria atrás de paywall.
- **A mística do MST** contra a transitoriedade radical do feed: celebrar Palmares toda semana produz *Jetztzeit* (Benjamin, capítulo IX da Ética), o "tempo-de-agora" que irrompe no presente e interrompe o tempo homogêneo do capital.
- **O círculo de cultura freireano** contra a educação bancária: a sala onde o professor aprende é contraconduta contra o discurso do mestre que prescreve.

### A rede de lianas

Nenhuma dessas contracondutas funciona sozinha. A semente crioula precisa da cooperativa para circular. A cooperativa precisa do processador RISC-V para governar seus dados. O processador precisa da rede mesh para comunicar. A rede precisa da assembleia presencial para deliberar. A assembleia precisa do forró para sustentar o vínculo. O forró precisa do território para acontecer. O território precisa da semente para alimentar.

O RISC-V e o ternário entram nessa rede como a camada que faltava: o hardware soberano sobre o qual o software soberano pode rodar, governado por comunidade soberana, alimentado por energia soberana, para produzir dados soberanos. Cada camada sustenta as outras. Nenhuma se basta.

A Índia já lança chips aeroespaciais RISC-V nacionais. A China já produz chips ternários. A Europa já fabrica processadores RISC-V sem dependência americana. O Brasil tem 22 universidades ensinando RISC-V, uma fundição estatal (CEITEC) e um plano de US$ 4 bilhões para semicondutores. O que falta é a composição. As peças estão sobre a mesa. Falta o gesto de montá-las como se o futuro já estivesse começando.

A resposta não precisa estar pronta. A pergunta já é potência. E algumas das peças já existem.

---

## Referências

Brusentsov, N. P.; Alvarez, J. R. "Ternary Computers: The Setun and the Setun 70." In: _SoRuCom 2006_, IFIP, 2006.

Fowler, T. (via DeMorgan, A.). "The Ternary Calculating Machine of Thomas Fowler." _IEEE Annals of the History of Computing_, 2005.

Hayes, B. "Third Base." _American Scientist_, v. 89, n. 6, 2001.

Huawei Technologies. "Ternary Logic Chip Architecture." Patent filed 2024, tape-out 2025.

Hui, Y. _The Question Concerning Technology in China: An Essay in Cosmotechnics_. Falmouth: Urbanomic, 2016.

Kim, S. et al. "High-performance ternary logic circuits based on carbon nanotube source-gating transistors." _Science Advances_, 2024.

Lee, J. et al. "Ternary Content-Addressable Memory Based on a Single Two-Dimensional Transistor." _ACS Nano_, 2024.

Prigogine, I.; Stengers, I. _Order Out of Chaos_. London: Heinemann, 1984.

RISC-V International. "About RISC-V." Disponível em: riscv.org/about/. Acesso em 2026.

RISC-V International. "RISC-V in Brazil: Leading the Open Compute Era in Latin America." Blog, 2024.

RISC-V International. "Soccer, Chips, RISC-V and Brazil." Blog, fev. 2024.

Shahangian, S. et al. "ExTern: Boosting RISC-V core performance using ternary encoding." _Microprocessors and Microsystems_, 2024.

Wimmer, P. et al. "xTern: Energy-Efficient Ternary Neural Network Inference on RISC-V-Based Edge Systems." _arXiv:2405.19065_, 2024.

IIT Madras; ISRO. "IRIS: Atmanirbhar Aerospace-Quality SHAKTI-based Semiconductor Chip." Press release, fev. 2025.

European Processor Initiative. "eProcessor: Europe's First Out-of-Order RISC-V Processor Chip." Oct. 2025.

Barcelona Supercomputing Center; Instituto Eldorado; UNICAMP. "Brazil and Europe Sign Innovative Project with RISC-V Technology for HPC." 2024.

Vieira Pinto, Á. _O Conceito de Tecnologia_. 2 vols. Rio de Janeiro: Contraponto, 2005.

---

_github.com/capidata — Pernambuco, 2026_
