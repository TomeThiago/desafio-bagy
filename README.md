# Desafio Bagy

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Nodejs](https://img.shields.io/badge/node.js-v16.13.0-green)
![Npm](https://img.shields.io/badge/npm-v8.1.0-blue)

#### _Repositório do desafio da empresa bagy que tem como objetivo criar uma API usando GraphQL, Node.js e SQLite._

## Tecnologias
* [Node.js](https://nodejs.org/) - Ambiente de desenvolvimento para construir a aplicação usando a linguagem de programação Javascript.
* [Npm](https://www.npmjs.com/) - Gerenciador de pacotes e automação de build.
* [Prisma](https://www.prisma.io/) - ORM para integração com os bancos de dados.
* [Docker](https://www.prisma.io/) - Docker é um conjunto de plataforma como produtos de serviço que usam virtualização no nível do sistema operacional para entregar software em pacotes chamados contêineres.

## Banco de Dados
* 	[SQLite](https://www.sqlite.org/index.html) - Banco de dados usado na aplicação.

## Recursos

- Cadastro de clientes.
- Cadastro de produtos.
- Cadastro de pedidos.
- Envio de email para os clientes.
- Controle de estoque.

## Instalação

> :warning: **A aplicação tem como recomendação a utilização do docker, mas se for desejado a aplicação pode ser executado por fora do docker.**

clone o repositório para ter o projeto em sua máquina.
```bash
git clone https://github.com/TomeThiago/desafio-bagy.git
cd desafio-bagy
```

### Docker

gere uma imagem com:
```bash
docker build -t bagy .
```

execute a imagem com:
```bash
docker run --name=bagy -d -p 4000:4000 bagy
```

Para acessar a aplicação é só acessar em um navegador de sua escolha o endereço:
```sh
localhost:4000
```

### Por fora do docker

Instale as dependências necessárias para execução do projeto com:
```sh
npm install
```

Crie o banco de dados da aplicação:
```sh
npx prisma migrate dev --name create_table
```

Execute a aplicação:
```sh
npm start
```

Para acessar a aplicação é só acessar em um navegador de sua escolha o endereço:
```sh
localhost:4000
```

## Testes

### Cliente

* Consulta de Clientes

```bash
    query GetClients($clientesId: Int) {
      clientes(id: $clientesId) {
        id
        nome
        cpf
        data_nascimento
        email
        bairro
        cidade
      }
    }
```

* Cadastro de Cliente

```bash
    mutation SaveClient {
      saveClient(
        input: {
          nome: "John Doe"
          data_nascimento: "1985-01-01"
          cpf: "000.000.000-00"
          email: "johndoe@test.com"
          cep: "00000-000"
          rua: "Rua 1"
          numero: 111
          bairro: "Bairro 1"
          cidade: "Cidade 1"
          estado: "SP"
          pais: "Brasil"
        }
      ) {
        id
        nome
        data_nascimento
        cpf
        email
        cep
        rua
        numero
        bairro
        cidade
        estado
        pais
      }
    }
```
### Produto

* Consulta de Produtos

```bash
    query GetProduct($produtosId: Int) {
      produtos(id: $produtosId) {
        id
        nome
        descricao
        imagem
        preco
        peso
        quantidade
      }
    }
```

* Cadastro de Produto
```bash
    mutation SaveProduct{
      saveProduct (
        input: {
          nome: "Produto 1"
          descricao: "Descrição do produto"
          imagem: "imagem.jpg"
          preco: 9.99
          peso: 0.876
          quantidade: 10
        }
      ) {
        id
        nome
        descricao
        quantidade
        preco
        peso
      }
    }
```
### Pedido
* Consulta de Pedidos
```bash
    query GetOrders($ordersId: Int) {
      orders(id: $ordersId) {
        id
        parcelas
        total
        status
        itens {
          id
          pedido_id
          produto_id
          preco
        }
      }
    }
```
* Cadastro de Pedido 
```bash
    mutation SaveOrder{
      saveOrder (
        input: {
          cliente_id: 1
          data_criacao: "2021-11-29"
          parcelas: 1
          status: "Pendente"
          itens: [
            {
              produto_id: 1,
              preco: 9.99
              quantidade: 1
            },
          ]
        }
      ) {
        id
        cliente_id
        parcelas
        total
        status
        itens {
          produto_id
          quantidade
          preco
          total
        }
      }
    }
```
## License

MIT
