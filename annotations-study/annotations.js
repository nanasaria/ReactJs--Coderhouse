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

Ciclo de Vida de Componentes

Um componente passa por três fases-chave:

1. Montagem: Componente é criado e inserido no DOM. Nesse
momento podem ser executadas as configurações iniciais, como
a obtenção de dados de APIs ou a configuração de estados e
props.

2. Atualização: Ocorre sempre que o componente sofre mudanças, 
seja por uma atualização de seus props ou estados. Nessa
fase, o componente é re-renderizado para refletir as
mudanças.

3. Desmontagem: É a fase final do clico de vida de um
componente, quando ele é removido do DOM. 

Children e Props

A propriedade children permite projetar ou transcluir um ou 
mais componentes dentro de outro, facilitando a criação de
estruturas de componentes mais complexas e reutilizáveis.
Propriedade usada para adicionar um conteúdo sem que o 
elemento pai o conheça.

1. Uso de Children 
No componente App, o componente Layout recebe conteúdo entre
suas tags e o conteúdo é projetado dentro do componente filho 
através da propriedade children.

2. Injeção automática
O React injeta automaticamente o conteúdo passado entre as tags
de um componente nas props do componente filho.

3. Versatilidade de Children
A propriedade children pode manipular um único elemento ou 
um array de elementos, dependendo da quantidade de conteúdo 
que é passada para o componente.

HOOKS

useRef
O hook useRef permite criar referências mutáveis, ou seja,
objetos que mantêm seu valor ao longo dos renderizados
de um componente sem provocar re-renderizações. 

O uso é útil ao trabalhar com bibliotecas de terceiros que 
exigem manipulação direta do DOM ou quando é necessário
manter um valor persistente, como um contador de renderizações
ou uma referência a um temporizador, sem causar efeitos 
colaterais indesejados.

useEffect
O hook useEffect é utilizado para lidar com efeitos colaterais
e sincronizar nossos componentes com sistemas externos de 
maneira eficiente.
Rodamos efeitos sempre que houver alteração em um estado.
Passamos uma referência para o useEffect, para toda
vez que o estado de algo mudar, aplicar o efeito.
O useEffect remonta o componente toda vez que é chamado.

useEffect(() => {}, [])

O 2° parâmetro da função é chamado de array de dependência.
Há 3 cenários:
- Array vazio: Executa 1 única vez.
- Se não passar o array de dependência, executa toda vez que
o componente for renderizado.
- Variável para executar toda vez que o estado mudar.

Podemos gerar um loop infinito, uma boa prática é sempre passar
uma dependência.

useState
O hook useState permite adicionar e gerenciar o estado de
componentes funcionais. Recebe como argumento o valor inicial 
do estado e retorna um array com dois elementos: O estado
atual e uma função para atualizá-lo.
As atualizações do estado são assíncronas e o React agrupa
múltiplas mudanças de estado em uma única atualização para
otimizar o desempenho.

Geração de Listas com o Método Map
O método map aceita uma função de callback como argumento,
que é executada uma vez para cada elemento do array, 
retornando um novo array com os resultados da
aplicação da função a cada um dos elementos originais.

const App = () => {
    const items = ["Maçã", "Banana", "Cereja"]
    
    return (
        <ul>
        {items.map((item, index) => (
            li key={index}>{item}</li>
        ))}
        </ul>
    )
}

Nesse exemplo, o map itera sobre o array items, gerando
um novo array de elementos <li> que são renderizados 
dentro da lista <ul>. Cada elemento possui uma key que 
ajuda a identificar cada elemento.

A Key é essencial quando se rederizam listas no React.
Ela permite que o React identifique e acompanhe cada
elemento durante mudanças de estado ou atualizações.
Se os elementos do array têm um identificados único,
o ideal é utilizá-lo como key.

const App = () => {
  const users = [
    { "id": 1, name: 'João' },
    { "id": 2, name: 'Ana' },
    { "id": 3, name: 'Carlos' },
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

Criação de Componentes Dinâmicos
O método map também permite a criação de componentes dinâmicos
e reutilizáveis.

const User = ({ name, status }) => (
  <li>
    <span>{name}</span>
    <small>{status}</small>
  </li>
);

const App = () => {
  const users = [
    { "id": 1, name: 'João', status: 'Online' },
    { "id": 2, name: 'Ana', status: 'Offline' },
  ];

  return (
    <ul>
      {users.map((user) => (
        <User key={user.id} name={user.name} status={user.status} />
      ))}
    </ul>
  );
};

É criado um componente User que recebe parâmetros como props,
e é reutilizado dentro do map para gerar cada elemento da
lista.

Paradigmas de Informação

Modelo Cliente-Servidor
Dois atores participam: Cliente e servidor e os dois se 
comunicam. O Cliente faz requisições e o servidor
entrega respostas.

Vantagem do modelo Cliente-Servidor
Oferece total controle ao Cliente sobre quando iniciar as
solicitações, permitindo uma comunicação clara e previsível.

Desvantagem do modelo Cliente-Servidor
Depende do Cliente para iniciar a comunicação.

Modelo Push
Esse modelo inverte a lógica Cliente-Servidor. Nesse modelo, o 
Servidor é quem inicia a comunicação.

Funcionamento do Modelo Push
No Modelo Push, o Servidor inicia a comunicação. O Cliente 
se inscreve em um serviço e o Servidor envia informações de
forma proativa, sem esperar uma solicitação prévia do 
Cliente. Este modelo é ideal para notificações e alertas, 
mantendo os usuários informados em tempo real, como em 
aplicativos de mensagens ou notificações móveis.

Vantagens
Mantém os usuários engajados ao enviar atualizações de
forma proativa.

Desvantagens
Consome mais recursos. Requer manutenção constante.

Modelo Polling
O Cliente assume um papel ativo ao consultar periodicamente
o Servidor para verificar se há novos dados ou atualizações.

Funcionamento do Modelo Polling
O Cliente envia solicitações periódicas ao Servidor para 
verificar se há novas atualizações. O Servidor responde 
com os dados disponíveis ou indica que não há mudanças. 

Vantagens
Fácil de configurar. Não exige conexão constante com o Servidor.
Permite que o Cliente controle a frequência das solicitações.

Desvantagens
Pode ser ineficiente devido a solicitações repetitivas.
Desperdiça recursos e largura de banda.

HTTP
Protocolo de comunicação.

Componentes de uma Requisição HTTP:
URL (Uniform Resource Locator): Define o endereço do recurso solicitado.
Verbo ou Método: Ação que o cliente deseja realizar (GET, POST, PUT, DELETE, etc).
Headers (cabeçalhos): Incluem informações adicionais sobre 
a requisição, como o tipo de conteúdo aceito ou dados de 
autenticação.
Parâmetros: Fornecem detalhes adicionais sobre a solicitação, 
seja através de URL (query params) ou no corpo (body params).

Query Params
Esses parâmetros são adicionados ao final da URL após um 
ponto de interrogação ? e são usados para enviar dados 
opcionais ao servidor.

Estrutura: key=value, separados por & se houver mais de um.

Path Parameters (Parâmetros de Rota):
São integrados diretamente na rota da URL e são mais comuns
ao acessar um recurso específico.

Uso prático: Acessar os detalhes de um usuário específico 
por meio de seu ID.

Exemplo:
arduino https://www.exemplo.com/usuarios/123


APIs e Fetch
Uma API, ou Interface de Programação de Aplicações, é um 
conjunto de definições e protocolos que permitem a 
comunicação entre diferentes aplicações. As APIs facilitam 
que uma aplicação acesse funções ou dados específicos de 
outra sem a necessidade de conhecer sua implementação 
interna, promovendo uma integração eficiente e estruturada.

Navegação e roteamento
Benefícios de navegação:
1. Gestão do Histórico de Navegação: Permite ao usuário 
controlar as ações de avançar e retroceder, gerenciando o
percurso dentro do app.

2. Acesso Otimizado a Seções Chave: Estruturando corretamente
as rotas, os crawlers e navegadores podem entender a 
arquitetura da aplicação, melhorando o acesso e a visibilidade
das diferentes seções, o que é essencial para SEO.

3. Escalabilidade da Aplicação: Uma boa organização do sistema de
rotas facilita a adição de novas funcionalidades sem comprometer
a estrutura.

A navegação no REACT geralmente é gerenciada com o uso de
bibliotecas como react-router-dom que permite definir rotas
que conectam componentes específicos a segmentos de URL.

Rota dinâmica
Permite exibir diferentes conteúdos com base nos parâmetros
da URL.

O Trecho de código de Exemplo:
<BrowserRouter>
  <NavBar />
    <Routes>
      <Route path="/item/:id" element={<ItemDetail />} />
    </Routes>
</BrowserRouter>

Dentro do componente que será a página que recebe o parâmetro,
importamos o useParams. Ex.:

import { useParams } from "react-router-dom"

const ItemDetail = () => {

  ** Esse hook obtém o valor do parâmetro **
  const { id } = useParams()

  return(
    <>
      <h1>Detalhe do Item: {id}</h1>
    </>
  )  
}

Componentes
Conceitos fundamentais sobre eventos

Os eventos no React são essenciais para gerenciar a 
interação do usuário com a interface, permitindo que 
as aplicações respondam de forma dinâmica a diferentes
ações.

Tipos de eventos
Manuais: Requer uma interação direta do usuário, como clicar
em um botão, inserir texto em um campo, etc. Esses eventos 
são disparados por ações explícitas do usuário e são
comuns na maioria das aplicações interativas.

Automáticos: São acionados sem intervenção direta do usuário,
como quando uma página detecta que passou um tempo sem 
atividade e exibe um alerta.

Uso de eventos do DOM no React
O React permite permite trabalhar com eventos do DOM de forma
simples utilizando eventos como onClick e onChange. Esses 
eventos são gerenciados utilizando um modelo semelhante ao
DOM padrão.

Exemplo de onClick:

return (
  <button onClick={() => alert("Button clicked!")}> Click me</button>
)

Integração de Event Listeners em Componentes React
É fundamental utilizar event listeners dentro de hooks.
Isso garante que os listeners sejam registrados e 
desregistrados corretamente quando o componente é 
montado e desmontado.

useEffect(() => {
  const handleResize = () => console.log('Window resized');
  window.addEventListener('resize', handleResize);

  // Função de limpeza
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);


Criação e Uso de Contextos

Context API - Compartilhar dados globalmente entre componentes

Importação:
import { createContext } from "react"
const ThemeContext = createContext()
export default ThemeContext;

Esse ThemeContext virou um contexto.
Em App.js temos que criar um provider.
Então, importamos o contexto no App.js.

Para criar um provider:
retornamos o provider do contexto.
Todo e qualquer componente que estiver contido no provider
pode compartilhar os dados.
O provider tem uma prop chamada value que são os valores
disponíveis dentro do provider (Geralmente estados).

<ThemeContext.Provider value={{isDarkMode, setIsDarkMode}}>
<ComponenteB />
</ThemeContext.Provider>

Isso faz com que o componenteB possa acessar os estados
isDarkMode e setIsDarkMode.
Para usar o contexto temos que importar o hook UseContext e
o próprio contexto.

const ComponenteB = () => {

  Aqui pegamos os estados do contexto e usamos o Hook que
  recebe como argumento o contexto.
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

Implementação do Provider
Um Context Provider atua como um "envoltório" ao redor dos
componentes aos quais queremos fornecer acesso a determinados
dados.
Cada contexto criado possui um componente Provider incorporado.
O Provider é responsável por "prover" os dados aos componentes
ao seu redor.

O Context Provider é crucial para gerenciar estados
compartilhados em aplicações, especialmente quando os 
dados precisam ser acessíveis a partir de múltiplos
componentes distribuídos em diferentes partes da
aplicação.

Vantagens:
- Elimina a necessidade de passar props manualmente através
de múltiplos níveis de componentes.
- Estrutura mais clara e organizada.
- Escalabilidade.

Contextos Dinâmicos

Custom Provider
É uma versão personalizada do Context Provider que não só 
fornece dados estáticos, mas também permite gerenciar 
estados dinâmicos e funções para modificar esses dados
em tempo de execução.

Os contextos dinâmicos são aqueles que podem ser modificados
durante a execução da aplicação, geralmente através do uso
de estados gerenciados com hooks como useState ou 
useReducer.

Um Custom Provider é basicamente um componente que envolve 
o Context Provider e adiciona lógica condicional, como a 
gestão de estados e funções que modificam esses estados.

Como criar e implementar?
1° Passo: Criar o contexto utilizando o createContext()
2° Passo: Para implementar, criamos um componente que
envolve o Provider do contexto e adicionamos os estados
e funções necessárias para gerenciar o comportamento
do contexto.

jsx const CacheProvider = ({ children }) => { 
  const [cache, setCache] = useState([]); // Funções para gerenciar o cache 
  const addToCache = (item) => { 
    if (!cache.some((obj) => obj.id === item.id)) { 
    setCache([...cache, item]); 
    } else { 
     console.log("Erro: Item já adicionado no cache"); 
    } 
  }; 
  
  const isInCache = (id) => cache.some((obj) => obj.id === id); 
  const cacheSize = cache.length; return ( 
    <CacheContext.Provider value={{ cache, addToCache, isInCache, cacheSize }}>
     {children} </CacheContext.Provider> 
     ); 
    };

Nesse exemplo, CacheProvider gerencia um estado cache que 
armazena uma lista. Tambéminclui funções e essas funções 
são fornecidas através do value do Provider.

Uso do Custom Provider
Para usar o Custom Provider, basta envolver os componentes
que precisam acessar os dados e funções.

jsx const App = () => { 
  return ( 
    <CacheProvider> 
      <ComponentA /> 
      <ComponentB /> 
    </CacheProvider> 
  ); 
};

Vantagens dos Custom Providers
- Gestão de Estados Dinâmicos.
- Encapsulamento de Lógica.
- Reutilização e Manutenção.

Otimização de Contexto
O uso do Context API pode causar problemas de desempenho
se não for gerenciado corretamente.

Uso do React.memo
React.memo é um Higher-Order Component (HOC) que memoriza
a saída de um componente, evitando renderizações desnecessárias
se suas props não mudarem.  React.memo melhora o desempenho 
e a eficiência na gestão dos recursos.


Exemplo:

const ListItem = React.memo(({ item }) => {
  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
    </div>
  );
});

Neste exemplo, ListItem só será renderizado se suas props
mudarem.

Divisão do Contexto
Dividir o contexto em partes menores e mais específicas reduz
o impacto das atualizações desnecessárias nos componentes
que não precisam de certos dados.

Exemplo:
const UserContext = createContext();
const ThemeContext = createContext();

Ao dividir os contextos, os componentes são atualizados 
apenas quando os dados que utilizam mudam, melhorando a 
eficiência e evitando renderizações supérfluas.

Evitar Mudanças Frequentes no Contexto
Para otimizar o desempenho, é importante minimizar as 
atualizações de estado dentro do contexto.

Seleção e Memoização de Dados
Use useMemo e useCallback para memorizar valores e funções
que não mudam com frequência. Essas técnicas ajudam a
reduzir renderizações custosas ao evitar o recálculo de
dados desnecessários. Por exemplo, useMemo só recalcula um 
valor quando suas dependências mudam, o que otimiza o 
desempenho e melhora a experiência do usuário.

Exemplo:
const memoizedValue = useMemo(() => 
  computeExpensiveValue(a, b), [a, b]);

Este exemplo mostra como useMemo otimiza o desempenho ao 
recalcular memoizedValue apenas quando a ou b mudam.

Firebase
Firebase é uma plataforma de serviços na nuvem desenvolvida 
pelo Google, projetada para simplificar o desenvolvimento 
de aplicativos ao fornecer uma gama completa de ferramentas 
e serviços de back-end.

Benefícios:
- Simplificação do back-end.
- Facilidade de uso.
- Plano gratuito.
- Escalabilidade.
- Sem necessidade de manutenção.

Principais arquiteturas disponíveis:
- Serverless: O Firebase adota uma arquitetura serverless, 
o que significa que não é necessário gerenciar servidores 
dedicados. Todo o processamento é realizado na nuvem, e os 
desenvolvedores pagam apenas pelos recursos que utilizam.

- BaaS (Back-end as a Service): O Firebase se posiciona 
como um BaaS, fornecendo serviços de back-end prontos para 
uso, como bancos de dados em tempo real, Firestore para 
armazenamento não relacional, hospedagem, funções na nuvem 
e serviços de notificação. 

- Microsserviços: O Firebase permite criar aplicativos 
utilizando microsserviços, onde diferentes partes do 
aplicativo estão desacopladas e se comunicam entre si 
por meio de APIs.
*/
