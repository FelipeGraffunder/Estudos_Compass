# API 45 Minutos
Uma API CRUD simples feita usando os recursos da AWS.

## DynamoDB Table:
![DynamoDB Table](https://github.com/FelipeGraffunder/Estudos_Compass/blob/main/API_45Min/TableDynamo.jpg?raw=true)

## Lambda Functiom
![](https://github.com/FelipeGraffunder/Estudos_Compass/blob/main/API_45Min/LambdaFunction.jpg?raw=true)
Codigo:
``` JavaScript

const AWS = require("aws-sdk");

const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json"
  };

  try {
    switch (event.routeKey) {
      case "DELETE /items/{id}":
        await dynamo
          .delete({
            TableName: "http-crud-tutorial-items",
            Key: {
              id: event.pathParameters.id
            }
          })
          .promise();
        body = `Deleted item ${event.pathParameters.id}`;
        break;
      case "GET /items/{id}":
        body = await dynamo
          .get({
            TableName: "http-crud-tutorial-items",
            Key: {
              id: event.pathParameters.id
            }
          })
          .promise();
        break;
      case "GET /items":
        body = await dynamo.scan({ TableName: "http-crud-tutorial-items" }).promise();
        break;
      case "PUT /items":
        let requestJSON = JSON.parse(event.body);
        await dynamo
          .put({
            TableName: "http-crud-tutorial-items",
            Item: {
              id: requestJSON.id,
              price: requestJSON.price,
              name: requestJSON.name
            }
          })
          .promise();
        body = `Put item ${requestJSON.id}`;
        break;
      default:
        throw new Error(`Unsupported route: "${event.routeKey}"`);
    }
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers
  };
};
```

## API Gateway

![Routes](https://github.com/FelipeGraffunder/Estudos_Compass/blob/main/API_45Min/ApiGateway_Routes.jpg?raw=true)

## Testes:

### Put:
![Put](https://github.com/FelipeGraffunder/Estudos_Compass/blob/main/API_45Min/Api_Put.jpg?raw=true)

### getAll
![GetAll](https://github.com/FelipeGraffunder/Estudos_Compass/blob/main/API_45Min/Api_GetAll.jpg?raw=true)

### getOne
![GetOne](https://github.com/FelipeGraffunder/Estudos_Compass/blob/main/API_45Min/Api_GetOne.jpg?raw=true)

### Delete
![Del](https://github.com/FelipeGraffunder/Estudos_Compass/blob/main/API_45Min/Api_Delete1.jpg?raw=true)