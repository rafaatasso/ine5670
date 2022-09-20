# Atividade 3 - Backend

Você deve criar o backend para um aplicativo de aluguel de carros elétricos.

Suponha que uma empresa deseja disponibilizar carros elétricos em Floripa para serem alugados por hora através de um aplicativo. Os usuários precisam se cadastrar para poder alugar os carros elétricos. O carro é desbloqueado pelo celular do cliente, usando o aplicativo da empresa.

O backend do sistema de aluguel de carros é acessado pelos aplicativos dos clientes da empresa para liberar o acesso aos carros que estão disponíveis para aluguel. O acesso ao carro é liberado por um sistema embarcado, conectado via rede 5G, que destrava as portas do veículo para o cliente. A localização do veículo também é enviada pelo sistema embarcado para o backend a cada 30 segundos quando em movimento. 

O backend será composto por seis microservices, responsáveis pelas funcionalidades descritas a seguir:

* cadastro de clientes: mantém os dados de cada cliente, como o nome, CPF, CNH, e-mail, telefone celular e número de cartão de crédito;
* cadastro de veículos: responsável por manter o registro dos carros disponíveis para aluguel, com informações sobre o carro (placa, ano, modelo, etc.) e o valor do aluguel por hora;
* localização de veículos: registra as coordenadas (latitude e longitude) nas quais o carro se encontra em um determinado instante;
* reserva de veículo: permite que um cliente reserve um carro para uso durante um período de tempo, de 2 a 6 horas no máximo;
* (des)travamento de veículo: permite que o cliente que realizou a reserva destrave um carro, utilizando seu celular, durante o horário em que o carro foi reservado por ele, e que trave o veículo quando terminar de usá-lo;
* cobrança: efetua o bloqueio do valor do aluguel no cartão de crédito do cliente no momento da reserva, e conclui a cobrança quando o veículo for liberado pelo cliente. 

Os microservices devem ser acessados por meio de um API gateway, que deve fornecer uma interface REST para acesso aos serviços. A interação do gateway com os microservices pode empregar REST ou qualquer outra tecnologia que você considere apropriada, como serviços de mensageria (RabbitMQ, Kafka, ...), Thrift, gRPC, entre outros.

O API gateway e os microservices podem ser implementados utilizando o Node.js ou qualquer outra tecnologia que você conheça.  

Cada serviço deve ter seu banco de dados, database ou collection própria, e um microsserviço não deve acessar os dados de outro. Sempre que for necessário ler ou alterar um dado de outro serviço, deve ser enviada uma requisição a ele (Dica: use o Axios para enviar uma requisição HTTP para outro microservice). 
