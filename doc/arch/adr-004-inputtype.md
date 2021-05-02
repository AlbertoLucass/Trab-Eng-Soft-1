
# Filtros de *Input*

## Status

Aceito

## Context

*Inputs* gerados de forma incorreta podem ocasionar em um mal funcionamento do projeto imnpedindo, inclusive, inserção no banco de dados.

## Decision

Utilizar tipagem em front end para primeiro filtro de entradas.
Utilizar tratamentos de exceções para evitar erros de dados.

## Consequences

Com esta decisão a inserção de dados ficou definida e direta, impedindo erros e inconsistências, por parte do usuário do sistema.
