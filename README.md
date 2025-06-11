# React.js - Coderhouse

Este repositório contém projetos e estudos desenvolvidos durante o curso de React.js da Coderhouse.

## Projetos

### E-commerce

O projeto principal é uma aplicação de e-commerce desenvolvida com React e Firebase, localizada na pasta `coderhouse-e-commerce`.

#### Tecnologias Utilizadas

- **Frontend**:
  - React 19
  - React Router 6
  - Material UI 7 (com ícones)
  - Vite 6 como bundler

- **Backend/Banco de Dados**:
  - Firebase Authentication
  - Firestore Database

#### Estrutura do Projeto

```
coderhouse-e-commerce/
├── src/
│   ├── assets/               # Imagens e ícones
│   ├── components/           # Componentes reutilizáveis
│   │   ├── Buttons/          # Botões customizados
│   │   ├── Cart/             # Componente do carrinho
│   │   ├── Footer/           # Rodapé da aplicação
│   │   ├── ItemDetailContainer/ # Detalhes do produto
│   │   ├── ItemListContainer/   # Listagem de produtos
│   │   ├── NavBar/           # Barra de navegação
│   │   ├── PurchaseDetailContainer/ # Detalhes da compra
│   │   └── PurchaseListContainer/   # Listagem de compras
│   ├── config/               # Configurações do Firebase
│   ├── context/              # Contextos React
│   │   ├── CartContext/      # Contexto do carrinho
│   │   └── LoginContext/     # Contexto de autenticação
│   ├── pages/                # Páginas principais
│   │   ├── Home/             # Página inicial
│   │   ├── Login/            # Página de login
│   │   ├── NotFound/         # Página 404
│   │   └── Register/         # Página de registro
│   ├── services/             # Serviços e APIs
│   │   ├── auth/             # Serviços de autenticação
│   │   ├── products/         # Serviços de produtos
│   │   ├── purchase/         # Serviços de compras
│   │   └── users/            # Serviços de usuários
│   └── utils/                # Utilitários
│       ├── privateRoute.jsx  # Rota protegida
│       └── publicRoute.jsx   # Rota pública
```

#### Funcionalidades Detalhadas

**1. Sistema de Autenticação**
- Login com email e senha
- Registro de novos usuários
- Proteção de rotas (públicas e privadas)
- Persistência de sessão

**2. Gerenciamento de Produtos**
- Listagem de produtos com dados do Firestore
- Filtragem por categorias
- Visualização detalhada de cada produto
- Controle de estoque

**3. Carrinho de Compras**
- Adição de produtos ao carrinho
- Ajuste de quantidades
- Remoção de itens
- Cálculo automático do total
- Finalização de compra

**4. Histórico de Compras**
- Registro de compras realizadas
- Visualização do histórico de pedidos
- Detalhes de cada compra

**5. Contextos para Gerenciamento de Estado**
- CartContext: gerencia o estado do carrinho
- LoginContext: gerencia o estado de autenticação

**6. Integração com Firebase**
- Authentication para autenticação de usuários
- Firestore para armazenamento de produtos e compras
- Atualização de estoque em tempo real

#### Fluxo de Compra

1. Usuário faz login ou se registra
2. Navega pelo catálogo de produtos
3. Adiciona itens ao carrinho
4. Ajusta quantidades se necessário
5. Finaliza a compra
6. O sistema:
   - Registra a compra no Firestore
   - Atualiza o estoque dos produtos
   - Redireciona para a página de detalhes da compra

#### Rotas da Aplicação

- `/` - Login
- `/register` - Registro
- `/home` - Página inicial
- `/colection/:category?` - Listagem de produtos (com filtro opcional)
- `/item/:id` - Detalhes do produto
- `/cart` - Carrinho de compras
- `/purchase` - Histórico de compras
- `/purchase/:id` - Detalhes de uma compra específica

#### Como Executar

```bash
# Navegar até a pasta do projeto
cd coderhouse-e-commerce

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Construir para produção
npm run build
```

## Estudos

O repositório também contém anotações e estudos sobre conceitos de React.js na pasta `annotations-study`.

Para mais detalhes sobre os conceitos estudados, consulte o [README de anotações](./annotations-study/README.md).