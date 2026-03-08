# Decisão 0002 — capiba-mcp: implementação sem SDK externo (v0.1)

**Data:** Março 2026
**Tipo:** Técnico
**Quórum exigido:** Maioria simples (operacional)
**Quórum aplicado:** Cláusula de transição — 1/1 Membro Pleno ativo
**Status:** ✅ Aprovada

---

## O que foi decidido

O servidor MCP do protocolo Capiba (`capiba-mcp`) será implementado
na versão 0.1 com protocolo **JSON-RPC 2.0 sobre stdio**, sem dependência
de SDK externo, em Rust nativo.

---

## Contexto

O Model Context Protocol (MCP) possui SDKs oficiais em TypeScript e Python.
Em março de 2026, o SDK Rust oficial está em desenvolvimento mas sem versão
estável publicada no crates.io.

O `capiba-mcp` precisa:

- Compilar para o host nativo (Linux/macOS/Windows)
- Ter zero dependências de runtime além do binário
- Funcionar em hardware modesto (Raspberry Pi, VPS de baixo custo)
- Ser auditável — qualquer pessoa deve entender o protocolo lendo o código

---

## Alternativas consideradas

**A) SDK TypeScript/Node.js**
Descartada. Node.js não é parte da stack do ecossistema Capiba.
Adicionaria runtime pesado para um servidor que precisa ser leve.

**B) SDK Python**
Descartada. Python é a stack de ML/análise, não de serviços de rede.
Conflito com a separação de responsabilidades do ecossistema.

**C) SDK Rust (github.com/modelcontextprotocol/rust-sdk)**
Descartada para v0.1. API instável — mudanças breaking entre commits.
Dependência de repositório Git sem tag de versão é risco de build.

**D) JSON-RPC 2.0 direto em Rust** ← escolhida
Implementação direta do protocolo sobre `stdin`/`stdout`.
Dependências mínimas: `serde_json`, `tokio`, `anyhow`.
Protocolo MCP é simples o suficiente para implementação manual.
Código totalmente auditável — sem camadas de abstração.

---

## Decisão

Implementar `capiba-mcp` v0.1 com JSON-RPC 2.0 direto.

**Condição de migração para SDK:**
Quando o SDK Rust oficial publicar versão estável no crates.io
(`mcp-sdk >= 1.0.0`), abrir Issue de migração.
A migração será tratada como Decisão 0002-rev1.

---

## Impacto

| Aspecto             | Impacto                                           |
| ------------------- | ------------------------------------------------- |
| Build               | Simples — `cargo build --release -p capiba-mcp`   |
| Tamanho do binário  | ~2MB (sem runtime externo)                        |
| Compatibilidade MCP | spec 2024-11-05 — tools, resources, prompts       |
| Manutenção          | Mais código próprio; mais controle                |
| Auditabilidade      | Alta — protocolo legível diretamente no `main.rs` |

---

## Registro de dissidência

Nenhuma dissidência registrada.

---

_Decisão registrada por: Silvano Neto (fundador)_
_github.com/capidata/.github/decisoes/2026/0002-capiba-mcp-sem-sdk.md_
