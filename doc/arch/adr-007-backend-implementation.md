# Implementação Backend

## Status

Aceito

## Context

Para a implementação do backend no node temos entre outras bibliotecas rest:

- Express
- Koa
- Fastify
- Adonis
- Nest

## Decision

Escolhermos por seguir com o Nest pois ele possui uma implementação em typescript por default, uma documentação organizada e extensa, boa compatibilidade com as bibliotecas escolhidas em decisões previas e uma facilidade de extender sua implementação com pacotes adicionais próprios.

## Consequences

Com o nest escolhidos podemos facilmente implementar o DDD, devido a sua gerência de dependências por injeção e módulos centralizadores.

Além de uma boa velocidade, utilizando o express por debaixo dos panos.
