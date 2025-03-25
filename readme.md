# API REST - Typescript + Node + MongoDB

## 🎯 Objetivo

Estudar a construção de uma API REST utilizando Typescript no ambiente do Node.js para a criação de CRUD com persistência no MongoDB Atlas para cadastro de equipamentos de TI.

## 📌Sobre o Projeto

A API permite cadastrar algumas informações de hardware e software de uma estação de trabalho, muito útil na Governança de TI para fazer controle de inventário.

## 🏗Arquitetura

+ **Back-End:** Node 
+ **Linguagem:** Typescript
+ **Banco de Dados:** MongoDB Atlas 
+ **Frameworks:** Express + Mongoose

**Estrutura da API:**

**src/**


│


├── **config/**


│   └── database.ts           # Conexão com o MongoDB


│


├── **controllers/**


│   └── equipmentController.ts  # Lógica de controle das rotas


│


├── **models/**


│   └── equipment.ts          # Definição do modelo de dados


│


├── **repositories/**


│   └── equipmentRepository.ts # Repositório que interage com o MongoDB


│


├── **routers/**


│   └── equipmentRouter.ts    # Definição das rotas


│


├── **app.ts**                    # Configuração da aplicação Express


└── **server.ts**                 # Inicialização do servidor


**Fluxo de Responsabilidades:**

O fluxo de responsabilidades no projeto segue uma arquitetura em camadas. 

**1.** config/database.ts - Configuração e Conexão com o Banco de Dados
Responsabilidade: Este arquivo tem a única responsabilidade de estabelecer a conexão com o banco de dados MongoDB.

O que ele faz: Quando o servidor é iniciado, a função connectToDatabase() é chamada. Ela tenta conectar ao banco de dados usando o URL fornecido na variável de ambiente CONNECTIONURL. Caso a conexão falhe, o sistema loga o erro e encerra a aplicação (com process.exit(1)).

Fluxo: O banco de dados é configurado para ser acessado pelas camadas superiores.

**2.** models/equipment.ts - Definição do Modelo (Schema) do MongoDB
Responsabilidade: Este arquivo define o "esquema" de como os dados dos equipamentos serão armazenados no MongoDB.

O que ele faz: Aqui, você usa o Mongoose para criar um modelo baseado em um Schema, que define os tipos de dados e as validações para o equipamento (como store, collaborator, equipment, etc.). O Mongoose automaticamente mapeia esse modelo para uma coleção no MongoDB.

Fluxo: O modelo Equipment é usado para criar, ler, atualizar e deletar documentos na coleção do banco de dados MongoDB.

**3.** repositories/equipmentRepository.ts - Acessos ao Banco de Dados (CRUD)
Responsabilidade: Este arquivo é responsável por encapsular as operações de banco de dados (CRUD - Create, Read, Update, Delete).

O que ele faz: O repositório é onde as interações reais com o banco de dados MongoDB ocorrem. Ele usa o modelo Equipment para executar operações como salvar um novo equipamento, buscar equipamentos, atualizar dados ou deletar um equipamento.

Fluxo: O controller chama as funções do repositório, que se comunicam diretamente com o banco de dados.

**4.** controllers/equipmentController.ts - Lógica de Controle e Regras de Negócio
Responsabilidade: O controller é responsável por controlar o fluxo das requisições HTTP. Ele faz a intermediação entre o cliente (usuário ou front-end) e o repositório (onde os dados são manipulados).

O que ele faz: As funções do controller recebem a requisição, extraem dados (como parâmetros da URL ou o corpo da requisição), chamam as funções apropriadas do repositório e, em seguida, retornam uma resposta para o cliente (como JSON ou status HTTP).

Fluxo: O controller recebe as requisições, interage com o repositório para buscar ou modificar os dados e retorna a resposta.

**5.** routers/equipmentRouter.ts: Define as rotas da API, vinculando-as aos métodos do controller.

**6.** app.ts: Configura o servidor Express, incluindo middleware, rotas e tratamento de erros.

**7.** server.ts: Inicializa o servidor e a aplicação.


**Pré-Requisitos:**

+ **Node.js** (versão 14 ou superior)

+ **MongoDB** (MongoDB Atlas - https://www.mongodb.com/)


## 📚 Bibliotecas Utilizadas

**1. express**
Função: O Express é um framework para Node.js que facilita a criação de servidores web e APIs RESTful. Ele fornece uma série de ferramentas e recursos para gerenciamento de rotas, middlewares, e sessões, tornando a construção de aplicações mais simples e rápida.

**2. helmet**
Função: Helmet é um middleware para Express que ajuda a proteger a aplicação contra algumas vulnerabilidades de segurança, configurando cabeçalhos HTTP de segurança, como Content-Security-Policy, X-Content-Type-Options, entre outros.

**3. cors**
Função: O CORS (Cross-Origin Resource Sharing) é um middleware que permite ou restringe solicitações de recursos entre diferentes domínios. Ele é essencial para permitir que seu servidor aceite requisições de outros domínios, como em APIs públicas.

**4. dotenv**
Função: A biblioteca dotenv carrega variáveis de ambiente de um arquivo .env para dentro do ambiente do Node.js. Isso é útil para armazenar dados sensíveis (como credenciais) e configurações sem expô-los diretamente no código-fonte.

**5. morgan**
Função: O Morgan é um middleware de logging para Express. Ele registra informações sobre as requisições feitas à sua aplicação, como o método HTTP, o status da resposta, o tempo de resposta, entre outros detalhes. Isso é útil para auditoria e depuração.

**6. express-async-errors**
Função: O express-async-errors é uma biblioteca que permite o tratamento de erros assíncronos no Express sem precisar de try/catch em todas as rotas. Ele melhora a experiência de lidar com funções assíncronas, permitindo que os erros sejam capturados de forma mais fácil.

**7. typescript**
Função: TypeScript é um superset do JavaScript que adiciona tipagem estática ao código. Ele permite detectar erros de tipo durante o desenvolvimento, o que facilita a manutenção e evolução do código, principalmente em projetos maiores.

**8. ts-node**
Função: O ts-node é uma ferramenta que permite rodar arquivos TypeScript diretamente, sem precisar compilar para JavaScript primeiro. Ele torna o processo de desenvolvimento mais rápido e conveniente ao permitir a execução de código TypeScript diretamente no Node.js.

**9. @types/express**
Função: Esses tipos fornecem a tipagem necessária para o Express quando você está utilizando TypeScript, permitindo que o editor e o compilador verifiquem tipos e forneçam autocompletar e documentação integrada.

**10. @types/cors**
Função: Fornece as definições de tipo para a biblioteca cors em TypeScript. Isso ajuda a garantir que a integração com a biblioteca esteja tipada corretamente.

**11. @types/helmet**
Função: Fornece as definições de tipo para a biblioteca helmet em TypeScript, garantindo uma integração mais segura e precisa ao utilizar a biblioteca em um projeto TypeScript.

**12. @types/dotenv**
Função: Fornece as definições de tipo para a biblioteca dotenv em TypeScript. Isso ajuda a garantir a tipagem correta ao carregar variáveis de ambiente.

**13. @types/morgan**
Função: Fornece as definições de tipo para a biblioteca morgan em TypeScript. Isso ajuda a garantir que o logging de requisições seja tipado corretamente.

**14. npx tsc --init**
Função: O comando npx tsc --init inicializa um novo projeto TypeScript criando um arquivo tsconfig.json. Esse arquivo contém as configurações do compilador TypeScript, permitindo definir opções como a versão ECMAScript, diretórios de entrada/saída, opções de módulo, entre outras.


## 🚀 Como Executar o Projeto

**1.** Clone o repositório:
    git clone https://github.com/luizlopesbr/API_Rest_Inventory.git

**2.** Acesse a pasta do projeto:
    cd API_Rest_Inventory

**3.** Instale as dependências:
    npm install

**4.** Configure o arquivo .env:

Crie um arquivo .env na raiz do projeto e adicione a variável de ambiente com a URL de conexão com o 
MongoDB Atlas:

    CONNECTIONURL=mongodb+srv://<usuario>:<senha>@cluster0.mongodb.net/equipmentsDB

PORT=3000


    
**Executando o Projeto**
Com tudo configurado, você pode iniciar o servidor com o seguinte comando:
    npm run dev

O servidor será iniciado e a API estará disponível em http://localhost:3000.


## ⛳ ENDPOINTS DA API:

A API fornece os seguintes endpoints para gerenciamento dos equipamentos:

**1.** Criar Equipamento (**POST**)
URL: /equipments

Método: POST

Descrição: Cria um novo equipamento no banco de dados.

Corpo da requisição:
{
	"_id": "67e2bb12fa7a614a6a5a9e3b",
	"patrimony": 12345,
	"store": "Loja A",
	"collaborator": "João Silva",
	"equipment": "Desktop",
	"equipmentmark": "Dell",
	"equipmentmodelo": "OptiPlex 7070",
	"equipmentserial": "ABC123456789",
	"equipmenthostname": "PC-Joao",
	"operatingsystem": "Windows 10 Pro",
	"oskey": "XXXXX-XXXXX-XXXXX-XXXXX-XXXXX",
	"officepackagetype": "Microsoft Office 365",
	"officekey": "YYYYY-YYYYY-YYYYY-YYYYY-YYYYY",
	"antivirus": "Kaspersky",
	"antiviruskey": "Z12345X6789Y12345",
	"monitorpatrimony": 67890,
	"monitormark": "LG",
	"monitormodelo": "24MK600M-B",
	"monitorserial": "MON123456789",
	"energyprotectionpatrimony": 11223,
	"energyprotectiontype": "Nobreak",
	"energyprotectionmodelo": "SMS Power 1200VA",
	"energyprotectionserial": "NB123456789",
	"energyprotectionpower": "1200VA",
	"processor": "Intel Core i7-10700",
	"memorysize": "16GB",
	"memorytype": "DDR4",
	"hdsize": "1TB",
	"hdtype": "HDD",
	"nfnumber": 98765,
	"nfdata": "2025-03-25",
	"obs": "Equipamento em ótimo estado, foi instalado recentemente",
	"__v": 0
}



**2.** Obter Equipamento por ID (**GET**)
URL: /equipments/:id

Exemplo de Id: 67e2bb12fa7a614a6a5a9e3b

Método: GET

Descrição: Obtém um equipamento específico pelo seu ID.

Resposta:
{
	"_id": "67e2bb12fa7a614a6a5a9e3b",
	"patrimony": 12345,
	"store": "Loja A",
	"collaborator": "João Silva",
	"equipment": "Desktop",
	"equipmentmark": "Dell",
	"equipmentmodelo": "OptiPlex 7070",
	"equipmentserial": "ABC123456789",
	"equipmenthostname": "PC-Joao",
	"operatingsystem": "Windows 10 Pro",
	"oskey": "XXXXX-XXXXX-XXXXX-XXXXX-XXXXX",
	"officepackagetype": "Microsoft Office 365",
	"officekey": "YYYYY-YYYYY-YYYYY-YYYYY-YYYYY",
	"antivirus": "Kaspersky",
	"antiviruskey": "Z12345X6789Y12345",
	"monitorpatrimony": 67890,
	"monitormark": "LG",
	"monitormodelo": "24MK600M-B",
	"monitorserial": "MON123456789",
	"energyprotectionpatrimony": 11223,
	"energyprotectiontype": "Nobreak",
	"energyprotectionmodelo": "SMS Power 1200VA",
	"energyprotectionserial": "NB123456789",
	"energyprotectionpower": "1200VA",
	"processor": "Intel Core i7-10700",
	"memorysize": "16GB",
	"memorytype": "DDR4",
	"hdsize": "1TB",
	"hdtype": "HDD",
	"nfnumber": 98765,
	"nfdata": "2025-03-25",
	"obs": "Equipamento em ótimo estado, foi instalado recentemente",
	"__v": 0
}


**3.** Atualizar Equipamento (**PATCH**)
URL: /equipments/:id

Método: PATCH

Descrição: Atualiza os campos desejados de um equipamento existente.

Corpo da requisição:
{
  "chave": "valor",
  "chave": "valor"
}

**4.** Deletar Equipamento (**DELETE**)
URL: /equipments/:id

Método: DELETE

Descrição: Deleta o registro de um equipamento existente.
