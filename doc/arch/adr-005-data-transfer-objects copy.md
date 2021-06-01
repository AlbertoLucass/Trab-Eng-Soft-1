# Data Transfer Objects

## Status

Aceito

## Context

Uma vez que possuímos entradas do usuário na aplicação precisamos checar para garantir a integridade dos dados, e garantir a segurança no backend.

## Decision

Com os DTOs podemos checar se os dados que recebemos são do tipo esperado e no formato correto. Caso essa verificação falhe retornamos o erro que condiz com a situação.

## Consequences

Uma maior segurança a ataques baseados na injeção de códigos, uma diminuição de erros nas inserções ao banco de dados e erros mais descritivos para o usuário.
