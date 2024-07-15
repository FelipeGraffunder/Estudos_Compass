# Serverless Espresso

Esse workshop consiste na criação de 3 aplicativos para o funcionamento de uma cafeteria sendo eles:
- O app para os clientes (App de pedidos)
- O app para o display da loja (App que mostra um qr code para compras)
- O app de gerenciamento da loja (App para gerenciamento dos pedidos e entregas)

### Funcionamento:
O cliente escaneia o QRcode do display e faz o pedido pelo app
O pedido aparece no app de gerenciamento e a loja prepara e e deixa o pedido pronto .
Quando o pedido fica pronto o cliente é notificado.


## Order State Machine:

![](https://github.com/FelipeGraffunder/Estudos_Compass/blob/main/ServerlessEspresso/OrderStateMachine.jpg?raw=true)

## Order Manager State Machine:
![](https://github.com/FelipeGraffunder/Estudos_Compass/blob/main/ServerlessEspresso/OrderManagerStateMachine.jpg?raw=true)

## Event Rules:
### LogAll:
![LogAll](https://github.com/FelipeGraffunder/Estudos_Compass/blob/main/ServerlessEspresso/Rule-LogAll.jpg?raw=true)

### NewOrder
![NewOrder](https://github.com/FelipeGraffunder/Estudos_Compass/blob/main/ServerlessEspresso/Rule-NewOrder.jpg?raw=true)

### WaitCompletion:
![WaitCompletion](https://github.com/FelipeGraffunder/Estudos_Compass/blob/main/ServerlessEspresso/Rule-WaitCompletion.jpg?raw=true)

### WorkflowStarted:
![WorkflowStarted](https://github.com/FelipeGraffunder/Estudos_Compass/blob/main/ServerlessEspresso/Rule-WorkflowStarted.jpg?raw=true)

## Frontend:

### Display:
![Display](https://github.com/FelipeGraffunder/Estudos_Compass/blob/main/ServerlessEspresso/Front_Display.jpg?raw=true)

### App Gerente
![App Gerente](https://github.com/FelipeGraffunder/Estudos_Compass/blob/main/ServerlessEspresso/Front_Gerente.jpg?raw=true)

### Cliente Menu
![Cliente Menu](https://raw.githubusercontent.com/FelipeGraffunder/Estudos_Compass/main/ServerlessEspresso/Front_MenuCliente.jfif)

### Cliente Notificação
![Cliente Notificacao](https://raw.githubusercontent.com/FelipeGraffunder/Estudos_Compass/main/ServerlessEspresso/Front_NotificacaoCliente.jfif)

