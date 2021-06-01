# Conexão com o banco de dados

## Status

Aceito

## Context

Agora que escolhemos um banco precisamos escolher qual biblioteca escolheremos para conectar com o banco de dados (ORM). No node existem dentre as bibliotecas ORM :

- TypeOrm
- MikroOrm
- Sequelize
- Prisma

## Decision

Utilizar o Prisma para a conexão com o banco poís ele possui uma implementação mais segura de erros que seus concorrentes. Além de uma separação do código das models do resto da aplicação.

## Consequences

Com esta decisão podemos começar a implementação sem se preocupar tanto com o código sql em si poís o prisma faz essa abstração assim diminuindo o numero de erros humanos e a tipagem estrita dos objetos.

Uma maior segurança a sql injection entre outros ataques.
