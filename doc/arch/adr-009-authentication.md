# Autenticação

## Status

Aceito

## Context

Para certo recursos do backend precisamos garantir que o usuário que esteja acessando seja ele mesmo, para fazer isso precisamos autentica-lo.

## Decision

Utilização de email e senha para autenticar e retornar o usuário e um token JWT valido, que será verificado nas requisições para evitar a necessidade de um login para cada solicitação.

## Consequences

Garantia que o user que fez a requisição é valido. Assim dando a segurança de dados da API e do banco de dados.
