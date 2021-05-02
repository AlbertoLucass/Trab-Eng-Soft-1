
# Modificabilidade

## Status

Aceito

## Context

Custos para realizar alterações no sistema podem inviabilizar manutenção e continuidade de funcionamento. Precisa estar devidamente organizado, deste modo, o sistema deve ser de fácil manutenção e alteração, diminuindo o custo para o mesmo.

## Decision

A modificabilidade foi implementada em 4 partes:

* Redução de tamanho dos módulos

    Verificar adr-005
    
* Coesão
    Aumento de coesão para que o uso da aplicação fique harmonioso e intuitivo, buscando uma melhor usabilidade
* Acoplamento
    Divisão das funções em partes com intuito de diminuir o acoplamento de arquivos
* Adiamento de tempo preso
    Foi evitado a inserção de muitas dependências na aplicação

## Consequences

Torna o sistema mais fácil de ser mantido, com usabilidade simples e direta, agiliza o processo de desenvolvimento visto que a aplicação não possuí muitas dependências
