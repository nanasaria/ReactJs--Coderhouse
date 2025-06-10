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
- [HTTP e Requisições](#http-e-requisições)
  - [Componentes de uma Requisição HTTP](#componentes-de-uma-requisição-http)
  - [Tipos de Parâmetros](#tipos-de-parâmetros)
- [APIs e Fetch](#apis-e-fetch)
- [Navegação e Roteamento](#navegação-e-roteamento)
  - [Benefícios de Navegação](#benefícios-de-navegação)
  - [Rotas Dinâmicas](#rotas-dinâmicas)
- [Eventos no React](#eventos-no-react)
  - [Tipos de Eventos](#tipos-de-eventos)
  - [Uso de Eventos do DOM no React](#uso-de-eventos-do-dom-no-react)
  - [Integração de Event Listeners](#integração-de-event-listeners)
- [Context API](#context-api)
  - [Criação e Uso de Contextos](#criação-e-uso-de-contextos)
  - [Implementação do Provider](#implementação-do-provider)
  - [Contextos Dinâmicos e Custom Provider](#contextos-dinâmicos-e-custom-provider)
  - [Otimização de Contexto](#otimização-de-contexto)
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

## HTTP e Requisições

HTTP é o protocolo de comunicação fundamental para a web, permitindo a transferência de dados entre cliente e servidor.

### Componentes de uma Requisição HTTP

- **URL (Uniform Resource Locator)**: Define o endereço do recurso solicitado.
- **Verbo ou Método**: Ação que o cliente deseja realizar (GET, POST, PUT, DELETE, etc).
- **Headers (cabeçalhos)**: Incluem informações adicionais sobre a requisição, como tipo de conteúdo ou dados de autenticação.
- **Parâmetros**: Fornecem detalhes adicionais sobre a solicitação, seja através de URL ou no corpo.

### Tipos de Parâmetros

- **Query Params**: Adicionados ao final da URL após um ponto de interrogação `?`, usados para enviar dados opcionais ao servidor. Estrutura: `key=value`, separados por `&` se houver mais de um.
- **Path Parameters**: Integrados diretamente na rota da URL, comuns ao acessar um recurso específico. Exemplo: `https://www.exemplo.com/usuarios/123`

## APIs e Fetch

Uma API (Interface de Programação de Aplicações) é um conjunto de definições e protocolos que permitem a comunicação entre diferentes aplicações. As APIs facilitam que uma aplicação acesse funções ou dados específicos de outra sem a necessidade de conhecer sua implementação interna, promovendo uma integração eficiente e estruturada.

## Navegação e Roteamento

### Benefícios de Navegação

1. **Gestão do Histórico de Navegação**: Permite ao usuário controlar as ações de avançar e retroceder, gerenciando o percurso dentro do app.
2. **Acesso Otimizado a Seções Chave**: Estruturando corretamente as rotas, os crawlers e navegadores podem entender a arquitetura da aplicação, melhorando o acesso e a visibilidade das diferentes seções, essencial para SEO.
3. **Escalabilidade da Aplicação**: Uma boa organização do sistema de rotas facilita a adição de novas funcionalidades sem comprometer a estrutura.

A navegação no React geralmente é gerenciada com o uso de bibliotecas como `react-router-dom` que permite definir rotas que conectam componentes específicos a segmentos de URL.

### Rotas Dinâmicas

Permitem exibir diferentes conteúdos com base nos parâmetros da URL. Exemplo:

```jsx
<BrowserRouter>
  <NavBar />
  <Routes>
    <Route path="/item/:id" element={<ItemDetail />} />
  </Routes>
</BrowserRouter>
```

Dentro do componente que recebe o parâmetro:

```jsx
import { useParams } from "react-router-dom"

const ItemDetail = () => {
  // Esse hook obtém o valor do parâmetro
  const { id } = useParams()

  return(
    <>
      <h1>Detalhe do Item: {id}</h1>
    </>
  )  
}
```

## Eventos no React

Os eventos no React são essenciais para gerenciar a interação do usuário com a interface, permitindo que as aplicações respondam de forma dinâmica a diferentes ações.

### Tipos de Eventos

- **Manuais**: Requerem uma interação direta do usuário, como clicar em um botão ou inserir texto em um campo. São disparados por ações explícitas do usuário.
- **Automáticos**: São acionados sem intervenção direta do usuário, como quando uma página detecta que passou um tempo sem atividade e exibe um alerta.

### Uso de Eventos do DOM no React

O React permite trabalhar com eventos do DOM de forma simples utilizando eventos como `onClick` e `onChange`. Exemplo:

```jsx
return (
  <button onClick={() => alert("Button clicked!")}> Click me</button>
)
```

### Integração de Event Listeners

É fundamental utilizar event listeners dentro de hooks para garantir que sejam registrados e desregistrados corretamente:

```jsx
useEffect(() => {
  const handleResize = () => console.log('Window resized');
  window.addEventListener('resize', handleResize);

  // Função de limpeza
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
```

## Context API

A Context API permite compartilhar dados globalmente entre componentes sem a necessidade de passar props manualmente através de múltiplos níveis.

### Criação e Uso de Contextos

```jsx
import { createContext } from "react"
const ThemeContext = createContext()
export default ThemeContext;
```

No componente App.js, criamos um provider:

```jsx
<ThemeContext.Provider value={{isDarkMode, setIsDarkMode}}>
  <ComponenteB />
</ThemeContext.Provider>
```

Para usar o contexto em um componente:

```jsx
const ComponenteB = () => {
  // Aqui pegamos os estados do contexto
  const {isDarkMode, setIsDarkMode} = useContext(ThemeContext)

  return (
    <div>
      <p>Dark Mode is {isDarkMode ? "On" : "Off"} </p>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        Toggle Dark Mode
      </button>
    </div>
  )  
}
```

### Implementação do Provider

Um Context Provider atua como um "envoltório" ao redor dos componentes aos quais queremos fornecer acesso a determinados dados. O Provider é responsável por "prover" os dados aos componentes ao seu redor.

**Vantagens**:
- Elimina a necessidade de passar props manualmente através de múltiplos níveis de componentes.
- Estrutura mais clara e organizada.
- Escalabilidade.

### Contextos Dinâmicos e Custom Provider

Um Custom Provider é uma versão personalizada do Context Provider que não só fornece dados estáticos, mas também permite gerenciar estados dinâmicos e funções para modificar esses dados em tempo de execução.

**Como criar e implementar**:
1. Criar o contexto utilizando o `createContext()`
2. Implementar um componente que envolve o Provider do contexto e adicionar os estados e funções necessárias:

```jsx
const CacheProvider = ({ children }) => { 
  const [cache, setCache] = useState([]); 
  
  const addToCache = (item) => { 
    if (!cache.some((obj) => obj.id === item.id)) { 
      setCache([...cache, item]); 
    } else { 
      console.log("Erro: Item já adicionado no cache"); 
    } 
  }; 
  
  const isInCache = (id) => cache.some((obj) => obj.id === id); 
  const cacheSize = cache.length; 
  
  return ( 
    <CacheContext.Provider value={{ cache, addToCache, isInCache, cacheSize }}>
      {children} 
    </CacheContext.Provider> 
  ); 
};
```

**Uso do Custom Provider**:

```jsx
const App = () => { 
  return ( 
    <CacheProvider> 
      <ComponentA /> 
      <ComponentB /> 
    </CacheProvider> 
  ); 
};
```

### Otimização de Contexto

O uso do Context API pode causar problemas de desempenho se não for gerenciado corretamente.

**Uso do React.memo**:
React.memo é um Higher-Order Component (HOC) que memoriza a saída de um componente, evitando renderizações desnecessárias se suas props não mudarem.

```jsx
const ListItem = React.memo(({ item }) => {
  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
    </div>
  );
});
```

## Vite: Ferramenta de Build

Vite é uma ferramenta moderna de build e desenvolvimento frontend que proporciona:

- Recarga instantânea de módulos durante o desenvolvimento.
- Compilação otimizada para produção utilizando o Rollup.
- Transpilação do código via Babel para compatibilidade.

## Design Modular com Componentes

A arquitetura modular baseada em componentes permite dividir a interface em blocos independentes, cada um com suas responsabilidades visuais e lógicas. Isso facilita manutenção, teste, evolução do código e reaproveitamento em diferentes partes da aplicação.