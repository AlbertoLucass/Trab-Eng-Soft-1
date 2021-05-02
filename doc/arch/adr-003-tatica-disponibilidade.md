# Disponibilidade

## Status

Aceito

## Context

O não funcionamento de inserção de dados por operação atômica no banco de dados pode debilitar todo o sistema.

## Decision

Gerar um  *rollback* para o estado anterior à tentativa de inserção.

## Consequences

Evita falhas no armazenamento de dados.
