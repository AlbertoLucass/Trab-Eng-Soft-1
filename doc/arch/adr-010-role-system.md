# Role System

## Status

Aceito

## Context

Na nossa aplicação precisamos checar se o usuário possui a permissão necessária para acessar o recurso requisitado.

## Decision

Utilizar um sistema de role separado em:

- Patient
- Doctor
- Admin

Onde cada rota possui um array com as permissões necessárias para ser habilitado.

## Consequences

Com essa verificação garantimos que quem fez a ação tem essa permissão, caso não tenha um erro unauthorized será retornado.
