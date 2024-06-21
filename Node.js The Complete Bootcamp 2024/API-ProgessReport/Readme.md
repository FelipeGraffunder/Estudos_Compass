# Projeto de API

## Instalação e configuração:

Instale as dependências necessárias:
``` bash
npm install
```

crie o arquivo config.env e consigure as variaveis de ambiente:

| Nome | Descrição | Defaut |
| ------------------- | ------------------- | ------------------- |
| NODE_ENV | Define o ambiente (produção ou desenvolvimento) | development |
| PORT | Porta para o servidor | 3000 |
| DATABASE | Conection string do banco de dados ||
| DATABASE_PASSWORD | Senha do usuario para acesso ao banco ||

A aplicação usa o [MongoDB](https://www.mongodb.com/) em servidor usando o [Atlas](https://www.mongodb.com/atlas).

## Iniciar Aplicação

Para executar a API, use o seguinte comando:

```bash
npm start
```

Este comando inicia o servidor com o nodemon, que reiniciará automaticamente o servidor sempre que houver alterações nos arquivos do projeto.

## Endpoints

| Request | Route | Resultado |
| ------------------- | ------------------- | ------------------- |
| POST | api/cidade | Cria uma cidade |
| POST | api/cliente | Cria um cliente |
| GET | /api/cidade/nome/:nome | Retorna a cidade pelo nome |
| GET | /api/cidade/estado/:estado | Retorna todas as cidades pelo estado |
| GET | /api/cliente/nome/:nome | Retorna o cliente pelo nome |
| GET | /api/cliente/:id | Retorna o cliente pelo ID |
| DELETE | /api/cliente/:id | Remove um cliente pelo ID |
| PATCH | /api/cliente/:id | Altera o nome de um cliente pelo ID |

## Autor
* [Felipe Graffunder](https://github.com/FelipeGraffunder/)
