# React Js - Coderhouse

## Sumário

- [React Js: Visão Geral](#react-js-visão-geral)
- [Componentes no React](#componentes-no-react)
  - [Vantagens de Usar Componentes](#vantagens-de-usar-componentes)
- [Código Declarativo vs. Código Imperativo](#código-declarativo-vs-código-imperativo)
  - [Benefícios da Abordagem Declarativa no React](#benefícios-da-abordagem-declarativa-no-react)
- [Virtual DOM e Processo de Reconciliação](#virtual-dom-e-processo-de-reconciliação)
  - [Vantagens](#vantagens)
- [Fundamentos do JavaScript Moderno](#fundamentos-do-javascript-moderno)
  - [Sugar Syntax](#sugar-syntax)
  - [Polyfills e Retrocompatibilidade](#polyfills-e-retrocompatibilidade)
  - [Transpilling](#transpilling)
- [Vite: Ferramenta de Build](#vite-ferramenta-de-build)
- [Design Modular com Componentes](#design-modular-com-componentes)

## React Js: Visão Geral

React Js é uma biblioteca JavaScript desenvolvida pela Meta, voltada para a construção de interfaces de usuário (UI) de forma eficiente e modular. Seu diferencial está na capacidade de estruturar a interface em pequenos blocos reutilizáveis chamados componentes.

## Componentes no React

Componentes são as unidades básicas e reutilizáveis que compõem a interface de uma aplicação React. Eles podem ser combinados em hierarquias para formar telas completas e são classificados em dois tipos principais:

- Componentes de Apresentação (Stateless)
- Componentes Containers (Stateful)

### Vantagens de Usar Componentes

A utilização de componentes traz benefícios importantes para o desenvolvimento, como:

- Reutilização de código.
- Separação de responsabilidades.
- Facilidade de testes.
- Desempenho otimizado.

## Código Declarativo vs. Código Imperativo

A construção de interfaces no React segue a abordagem declarativa. Diferente do código imperativo, que descreve como as coisas devem acontecer passo a passo, o código declarativo descreve o que deve acontecer, permitindo que o framework se encarregue dos detalhes de implementação.

### Benefícios da Abordagem Declarativa no React

Entre as vantagens do uso de código declarativo estão:

- Melhor legibilidade e manutenção.
- Separação clara entre lógica e apresentação.
- Reutilização de código e modularidade.
- Atualizações otimizadas automaticamente.

## Virtual DOM e Processo de Reconciliação

O Virtual DOM é uma representação virtual do DOM real mantida na memória. Quando há alterações na aplicação, o React atualiza essa versão virtual, e em seguida compara com a anterior através do processo de reconciliação, aplicando somente as mudanças necessárias ao DOM real.

### Vantagens

O uso do Virtual DOM e do processo de reconciliação oferece:

- Atualizações otimizadas.
- Melhor desempenho.
- Fluxo de dados controlado e previsível.

## Fundamentos do JavaScript Moderno

Esta seção reúne conceitos e práticas modernas no desenvolvimento com JavaScript.

### Sugar Syntax

Refere-se a recursos de sintaxe que tornam o código mais conciso e fácil de entender, como operadores de incremento ou spread operators.

### Polyfills e Retrocompatibilidade

- **Retrocompatibilidade**: Garante que aplicações funcionem corretamente em navegadores antigos.
- **Polyfills**: Implementações que simulam funcionalidades modernas em ambientes que ainda não as suportam.

### Transpilling

Processo de conversão de código JavaScript moderno (ES6+) para versões anteriores, visando compatibilidade com navegadores que não suportam recursos mais recentes.

## Vite: Ferramenta de Build

Vite é uma ferramenta moderna de build e desenvolvimento frontend que proporciona:

- Recarga instantânea de módulos durante o desenvolvimento.
- Compilação otimizada para produção utilizando o Rollup.
- Transpilação do código via Babel para compatibilidade.

## Design Modular com Componentes

A arquitetura modular baseada em componentes permite dividir a interface em blocos independentes, cada um com suas responsabilidades visuais e lógicas. Isso facilita manutenção, teste, evolução do código e reaproveitamento em diferentes partes da aplicação.
