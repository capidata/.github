# Decisão 0003 — Adoção da Licença Ética Capiba v0.1

**Data:** Março 2026
**Tipo:** Estratégico
**Quórum exigido:** 3/4 dos Membros Plenos (mínimo 30 dias de deliberação)
**Quórum aplicado:** Cláusula de transição — 1/1 Membro Pleno ativo
**Status:** ✅ Aprovada

---

## O que foi decidido

Adoção da **Licença Ética Capiba v0.1** como licença padrão de todos
os repositórios do ecossistema CAPIDATA, com efeito imediato.

---

## Por que uma licença própria

Nenhuma licença existente satisfaz simultaneamente as três necessidades do projeto:

1. **Liberdade para commons** — uso irrestrito por comunidades, cooperativas,
   pesquisa e movimentos sociais
2. **Contribuição obrigatória de comerciais** — empresas com fins lucrativos
   devolvem valor antes de usar
3. **Vedações éticas absolutas** — vigilância, venda de dados e publicidade
   comportamental vedados para qualquer entidade, sem exceção

A Peer Production License (P2P Foundation) cobre os pontos 1 e 2 mas não tem
vedações éticas explícitas. A Hippocratic License tem vedações éticas mas não
tem o mecanismo de contribuição de comerciais. A GPL protege a liberdade do
código mas permite usos que violam os princípios do protocolo Capiba.

A Licença Ética Capiba combina os três requisitos numa licença redigida
em português, sob direito brasileiro, com linguagem popular acessível
e versão jurídica formal.

---

## Principais características

**Art. 2°** — Uso livre para Entidades de Commons (MEIs, cooperativas,
associações, movimentos sociais, pesquisa pública)

**Art. 3°** — Entidades Comerciais: acordo prévio com a CAPIDATA

**Art. 5°** — Vedações absolutas (cláusulas pétreas da licença):

- Venda de dados de usuários
- Publicidade comportamental
- Treinamento de IA sem consentimento das comunidades geradoras
- Vigilância e controle de pessoas
- Serviços a forças repressivas
- Remoção de avisos de licença

**Art. 6°** — Dados de Commons pertencem às comunidades, não à CAPIDATA

**Art. 9°** — Lei brasileira aplicável; pt-BR como único texto com valor jurídico

---

## Compatibilidade e tensões reconhecidas

A Licença Ética Capiba não é compatível com MIT, Apache 2.0 ou GPL,
pois adiciona restrições que essas licenças não permitem.

Esta incompatibilidade é deliberada e aceita. O ecossistema Capiba
pode incorporar código de terceiros apenas se licenciado sob termos
compatíveis (Peer Production License, Hippocratic License ou similar).

Dependências de terceiros sob licenças incompatíveis devem ser
documentadas e, quando possível, substituídas por alternativas compatíveis.

---

## Aplicação nos repositórios

Todo repositório do ecossistema deve incluir:

```
# No README.md
Licença: Licença Ética Capiba v0.1

# No Cargo.toml / package.json / pyproject.toml
license = "LicençaÉticaCapiba-0.1"

# Arquivo LICENSE ou LICENCA.md na raiz
Texto completo da licença
```

---

## Registro de dissidência

Nenhuma dissidência registrada.

---

_Decisão registrada por: Silvano Neto (fundador)_
_github.com/capidata/.github/decisoes/2026/0003-licenca-etica-capiba.md_
