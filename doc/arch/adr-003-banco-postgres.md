# Banco de dados Postgres

## Status

Aceito

## Context

Entre os bancos de dados disponíveis temos os SQL e No-SQL.

Os SQL são mais indicados para relacionamentos e possuem como os mais famosos:

- Postgres
- Mysql
- MariaDB

Já os No-SQL são vantajosos com um grande número de documentos e suas implementações mais conhecidas são:

- MongoDB
- Firebase
- DynamoDB

## Decision

Como possuímos muitos relacionamentos entre os nossos modelos acabamos por escolher o SQL. Dentre o SQL selecionamos o Postgres devido a seu melhor desempenho com id's UUID.

## Consequences

Uma implementação que combina mais com o uso que teremos e um desempenho melhor em query utilizando os id's.
