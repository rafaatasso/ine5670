// Declaração de variáveis 
#define LED 11
#define fotosensor A0
#define pushbutton 10
int leituraFotosensor;
int leituraBotao;

// Configs. das placa e parâmetros
void setup() {
  // Config. a Baund Rate de comunicação para usar o monitor
  Serial.begin(9600);
  // Config. a porta fotosensor como de entrada
  pinMode (fotosensor, INPUT);
  // Config. o botao como de entrada
  pinMode (pushbutton, INPUT);
  // Config. a LED como de saída
  pinMode (LED, OUTPUT);
}

void verifica_ambiente() {
  leituraFotosensor = analogRead(fotosensor);
  Serial.print("Leitura: ");
  Serial.println(leituraFotosensor);
}

void verifica_botao() {
  leituraBotao = digitalRead(pushbutton);
  // Serial.println(leituraBotao);
}

void pisca_led() {
  digitalWrite(LED, HIGH);
  delay (1000);
  digitalWrite(LED, LOW);
  delay (1000);
  digitalWrite(LED, HIGH);
}

void desliga_led() {
  digitalWrite(LED, LOW);
}

void liga_led() {
  digitalWrite(LED, HIGH);
}


// Parte do código que vai ficar repetindo
void loop() {
  verifica_ambiente();
  verifica_botao();
  
  // Caso esteja noite/escuro, o LED pisca
  if (leituraFotosensor > 100 and leituraBotao == 1) {
  pisca_led();
    // Mas se o botão for pressionado, o LED desliga
    verifica_botao();
    if (leituraBotao == 0) {
      desliga_led(); 
    }
  }
  // Caso esteja dia/claro, o LED fica desligado
  else if (leituraFotosensor < 100) {  
    desliga_led();
    verifica_botao();
    // Mas se o botão for pressionado, o LED liga
    if (leituraBotao == 0) {
      liga_led();
    }
  }
  
  delay(100);

}
