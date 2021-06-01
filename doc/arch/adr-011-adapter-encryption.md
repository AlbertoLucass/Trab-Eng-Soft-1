# Utilização de adapter

## Status

Aceito

## Context

Uma boa pratica de segurança do banco de dados, é fazer a criptografia das senhas dos usuários quando salvar no banco.

## Decision

Utilizar um adapter para a implementação de uma biblioteca de encriptação de strings, onde a biblioteca escolhida foi o bcrypt.

## Consequences

O padrão adapter facilita a troca dessa implementação no futuro, poís é apenas necessário trocar a implementação no adapter.
