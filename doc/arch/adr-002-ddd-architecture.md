
# Utilização do Domain Driven Design

## Status

Aceito

## Context

Como o node não reforça o uso de uma arquitetura especifica, podíamos escolher entre: DDD, MVC, Hexagonal e etc.

## Decision

Acabamos por seguir como o DDD, que faz uma separação em módulos baseados nos domínios. Onde cada módulo possuí pelo menos um service, um controller e um data transfer object.

## Consequences

Torna o sistema mais fácil de ser expandido, poís os módulos podem ser substituídos, as responsabilidades ficam segregadas por classes seguindo o Solid.
