# Atividade 2 - Sistemas Embarcados
## Descrição da Atividade
Nessa atividade prática você deve criar uma aplicação de sistema embarcado usando Arduino, ESP8266 ou qualquer outra placa semelhante. 

A aplicação a ser desenvolvida é de livre escolha sua, devendo ser respeitados os seguintes critérios mínimos:

* Deve ser feita a leitura de pelo menos um sensor (ex.: de temperatura, umidade, ultrassom, etc.);
* Os dados lidos pelo sensor devem ser exibidos no monitor serial;
* Deve ser acionado algum atuador (ex.: um servo motor, válvula, relé, etc.);
* Deve ser criada uma lógica de programação para fazer com que os dados lidos pelo sensor determinem quando o atuador será acionado. A ação executada deve preferencialmente simular uma situação do mundo real (por exemplo, ligar uma lâmpada quando a luminosidade estiver baixa, abrir uma válvula quando a umidade cair abaixo de um determinado valor, etc).

Além disso, você deve permitir que a lógica da aplicação seja modificada de uma das seguintes maneiras:

* Leitura de um arquivo de configuração, que será baixado pela rede quando a aplicação for iniciada. Esse arquivo deve conter um ou mais parâmetros que alterem o funcionamento do circuito (por exemplo, a leitura do sensor a partir da qual o atuador é acionado). O arquivo de configuração deve ser obtido por meio de uma requisição HTTP enviada via rede Ethernet ou Wi-Fi (use seu celular como roteador ou a sua rede doméstica, pois não será possível autenticar na eduroam). Veja aqui um exemplo que mostra como conectar o ESP8266 à rede rede Wi-Fi e enviar requisições HTTP (obs.: caso esteja usando uma placa sem interface de rede ou esteja usando o simulador Tinkercad, não será possível implementar esta funcionalidade).
* Adição ao circuito de um componente para entrada de comandos (ex.: um botão ou potenciômetro) que altere a lógica de funcionamento do circuito (por exemplo, modifique o valor da leitura do sensor a partir do qual o atuador é acionado).
Antes de montar o circuito, verifique sempre o esquema de montagem dos componentes. Alguns deles podem exigir o uso de resistores, capacitores, etc. O circuito.io poderá ajudar em alguns casos, pois ele já adiciona esses componentes auxiliares ao circuito.

Atenção: não toque nos componentes com a placa ligada à alimentação! Sempre desconecte-a da fonte de alimentação ou do cabo USB antes de alterar o circuito.

Consulte os exemplos disponíveis na IDE do Arduino para ver como utilizar os componentes a partir do código. Veja no menu File -> Examples alguns exemplos de código. Há também muitos exemplos interessantes na Internet. 

Se tiver dificuldades para programar em C/C++, consulte o material de referência disponibilizado no Moodle. 

Caso não possua os componentes necessários para construir o circuito, sugerimos usar o [Autodesk Tinkercad](https://www.tinkercad.com/dashboard?type=circuits&collection=designs) para montar o circuito, editar o código do programa e simular a execução. Basta se registrar e seguir as instruções no site para montar o circuito e rodar a simulação.
