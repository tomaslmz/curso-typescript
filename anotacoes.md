# Anotações feitas durante o curso de TypeScript

## Tipagem Dinâmica

-   O tipo da variável é decidido de acordo com o valor recebido;
-   O tipo dessa variável pode ser alterado livremente durante o código.

## Tipagem Estática

- O tipo da variável é explicitamente declarado;
- O tipo da variável não pode ser mudado;
- É necessário respeitar o tipo da variável que foi definido.

## Linguagens estáticas

-   Linguagens estáticas possuem compiladores que sempre verificam por possíveis erros no código.

## Compiladores

-   O compilador de cada linguagem possui suas particularidades;
    -   O TypeScript utiliza o TypeScript Compiler.

## O que é o TypeScript?

-   É uma linguagem desenvolvida com base no JavaScript;
-   Adiciona algumas funcionalidades e tipagem estática ao JavaScript;
-   Todo código em TypeScript é convertido para o seu equivalente em JavaScript pelo TypeScript Compiler;
    -   Ou seja, podemos usá-lo no back-end e front-end;
    -   A necessidade de haver alguma conversão é por os navegadores não entenderem TypeScript.

## Por que usar o TypeScript?

-   Por ser uma linguagem com tipagem estática, ele consegue previnir situações onde a variável precisa ser de um tipo específico;
-   Podemos utilizar funcionalidades modernas do JavaScript (import/export);
-   O TypeScript Compiler irá compilar para um código que funcione em navegadores mais antigos.

## Visão geral das vantagens e desvantagens

### Vantagens

-   Recursos avançados do JavaScript;
-   Prevenção de erros de tipagem;
-   Mais fácil identificar bugs;
-   Código mais legível;
-   Extremamente popular.

### Desvantagens

-   Escrevemos mais código;
-   Há uma curva de aprendizado;
-   Requer uma compilação para JavaScript.

### Primeiro passo para poder executar o TypeScript

-   É necessário executar o seguinte comando:

```
npm install -g typescript
```

### Como compilar o código para JavaScript?

-   Para isso, é necessário executar apenas esse comando

```
tsc [arquivo]
```

### Como configurar o compilador?

- Para o começo da configuração, é necessário executar um comando no terminal que irá criar o arquivo de configuração do TypeScript

```
tsc --init
```

- Após isso, você tem o arquivo para poder configurar como quiser

### Como compilar um arquivo para o ES6 sem o tsconfig?

```
tsc [arquivo] -t ES6
```