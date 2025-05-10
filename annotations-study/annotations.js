/*
React Js é uma lib desenvolvida pela Meta para a construção de interfaces (UI).

Componentes no React
Um componente no React é uma parte da interface que desempenha uma função específica, como um botão.
Os componentes podem ser aninhados, criando hierarquias.

Vantagens do React
Permite escrever código declarativo.
O Virtual DOM otimiza a atualização da interface ao alterar apenas os elementos necessários.

Código Declarativo vs Código Imperativo
React utiliza uma abordagem declarativa.

O código imperativo é um estilo de programação em que são detalhados todos os passos necessários
para alcançar um resultado específico. Foca em como as operações são realizadas.

O código declarativo não se especifica como executar os passos necessários.

Vantagens do Código Declarativo no React

- Maior legibilidade e manutenção do código.
- Separação de lógica e apresentação.
- Reutilização e modularidade.
- Otimização automática de atualizações.

O que é Virtual DOM?
O Virtual DOM é uma representação virtual em memória do DOM real. As mudanças são aplicadas na cópia 
virtual do DOM ao invés do DOM real.
Quando ocorre uma mudança na aplicação, o React atualiza primeiro o Virtual DOM. Em seguida, compara
essa nova versão do Virtual DOM com a versão anterior em um processo chamado de RECONCILIAÇÃO. 

Processo de Reconciliação
O processo de reconciliação compara o Virtual DOM com sua versão anterior e determina a maneira mais
eficiente de atualizar o DOM real. O React analisa as diferenças e aplica apenas as mudanças 
necessárias que poderiam afetar o desempenho da aplicação.

Vantagens do Virtual DOM e Reconciliação
- Otimização de Atualizações.
- Maior desempenho.
- Fluxo de dados Controlado.

Fundamentos do Javascript Moderno

Sugar Syntax: Simplificando o Código

Sintaxe adicional para simplificar leitura e desenvolvimento.

let i = 0;
i = i + 1; -> Valor de i se torna 1

Usando sugar syntax:
i++ -> ao invés de i = 1 + 1

Polyfills e Retrocompatibilidade

Retrocompatibilidade 
É a capacidade de uma aplicação web funcionar corretamente em versões mais antigas de navegadores ou dispositivos.

Polyfills
Um pollyfill emula a funcionalidade de recursos modernos que os navegadores antigos não suportam. É como um
tradutor que adapta o código para um novo formato que o navegador entenda.

Transpilling
Refere-se a conversão de código JavaScript moderno (ES6+) para versões mais antigas da linguagem que
sejam compatíveis com navegadores que não suportam as funcionalidades mais recentes.

Vantagens da Recarga Instantânea
Vite oferece recarga instantânea, ou seja, quando um arquivo é editado, o Vite atualiza apenas o módulo
modificado.

Compilação para Produção
O Vite usa o Rollup, otimizando os módulos e reduzindo o tamanho final do bundle.
A sua integração com o Babel garante que o código seja transpilado corretamento.

Componentes e sua Gestão

Design Modular
É uma abordagem que permite separar a interface do usuário em partes independentes, cada uma com sua própria
lógica e estilo.

Vantagens de utilizar componentes:

- Reutilização de código.
- Separação de responsabilidades.
- Facilidade de testes.
- Desempenho otimizado.

Classificação dos componentes
Em react há duas classificações: Componentes de Apresentação e Componentes Containers.

Componentes de Apresentação
Também conhecidos como Stateless Components, se concentram em como apresentar as coisas. Componentes 
responsáveis por exibir os dados e têm pouca ou nenhuma lógica associada à manipulação de estado. Se
concentram no aspecto visual e não gerenciam dados diretamente.

Características:
- Responsabilidade Visual: Cuidam da apresentação e do layout.
- Sem Dependências de Dados: Recebem informações via props.
- Reutilização.
- Sem Estado ou com Estado Mínimo: Se possuem estado, é para controlar aspectos visuais. 

Componentes Containers
Também chamados de Stateful Components, são responsáveis por gerenciar o estado da aplicação e a lógica
de negócios. Eles encapsulam e fornecem as propriedades necessárias para o funcionamento dos mesmos.

Características dos Componentes Containers:
- Gestão de Dados: Controlam os fluxos de dados.
- Encapsulam a lógica: Contêm a lógica e transmitem essa lógica aos componentes de apresentação.
- Comunicação entre componentes: Gerenciam como os componentes filhos interagem entre si e com
a fonte de dados.

*/
