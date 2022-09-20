# Atividade 1 - Desenvolvimento de Aplicativo
Este atividade consiste na criação de um aplicativo para que os alunos de uma universidade tenham acesso às opções de moradia estudantil. O aplicativo pode ser implementado usando o React Native (portanto, multiplataforma) ou, caso já tenha algum conhecimento prévio de programação mobile, pode ser criado um aplicativo nativo para iOS ou Android ou usado outro framework multiplataforma. 

## Descrição do Trabalho
Suponha que a sua universidade cedeu diversos terrenos na vizinhança do campus para que empresas construíssem prédios para moradia estudantil, sendo que o contrato com as empresas prevê que 30% dos alojamentos sejam cedidos gratuitamente para bolsistas selecionados pela universidade, enquanto os demais 70% são alugados pela empresa.

A Empresa Júnior do seu curso, da qual você faz parte, foi contratada pela universidade para criar um aplicativo para divulgar as diversas opções de moradia estudantil existentes no campus. O aplicativo deve possuir as seguintes telas:

* uma tela de abertura (splash screen);
* uma tela com a lista de todas as opções de moradia estudantil (no mínimo 5);
* uma tela que mostra os dados detalhados de uma moradia, selecionada na tela anterior;
* uma tela com as moradias selecionadas pelo estudante para visitar antes de escolher uma delas para morar.

Na tela com a lista de moradias deve ser mostrado, além do seu nome, uma imagem (logomarca, ícone ou foto da fachada do prédio). 

Na tela com os detalhes da moradia devem ser exibidos:

* nome da moradia;
* quantidade de alojamentos;
* endereço;
* mapa de localização;
* valor do aluguel;
* tipo de moradia: masculina, feminina ou mista;
* tipo de alojamento: individual ou compartilhado por 2 ou mais pessoas;
* mobiliário e equipamentos disponíveis no alojamento; 
* tipo de banheiro: privativo ou compartilhado;
* área do alojamento (em m2);
* uma ou mais fotos dos alojamentos;
* descrição das áreas comuns  (cozinha, área de lazer, lavanderia, etc.);
* pelo menos um vídeo mostrando as áreas comuns;
* telefone de contato (por voz ou WhatsApp);
* e-mail para contato;
* outras informações, como regras de convívio, horário de acesso de visitantes, se são permitidos pets, etc.

Esta tela deve ser criada de forma a ser populada com os dados da moradia selecionada pelo estudante (ou seja, não crie várias telas separadas, uma para cada local). As mídias utilizadas podem ser obtidas realizando buscas na Web.

Os dados usados pelo app podem ficar armazenados localmente ou em um servidor remoto, em formato JSON ou XML. Em hipótese alguma os dados devem estar hard-coded no código-fonte do aplicativo! Adote a estratégia que lhe parecer mais adequada para permitir a atualização dos dados e ao mesmo tempo evitar acessos à rede desnecessários (e consequentemente poupar uso da rede de dados e consumo de bateria). 

As informações de contato exibidas na tela com os detalhes da moradia - como telefone e e-mail - devem ser clicáveis de forma a acessar facilmente outros aplicativos de comunicação. O aplicativo deve ainda permitir que o usuário visualize a localização da moradia no Google Maps. Os vídeos podem ser exibidos no próprio aplicativo ou em aplicativos externos, como YouTube, Vimeo, etc.

O usuário do app deve ser capaz de escolher as moradias que pretende visitar, marcando-as no aplicativo. Essas informações devem ficar armazenadas localmente, de forma que o usuário tenha acesso fácil a essas atrações sempre que utilizar o aplicativo (veja aqui um exemplo de código que mostra como armazenar dados localmente). O usuário deve ter fácil acesso a elas na lista de moradias selecionadas.
