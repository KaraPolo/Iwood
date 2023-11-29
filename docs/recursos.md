## 3. Principais Recursos e Funcionalidades

- Cadastro de Usuários e Prestadores de serviços;
- Resultados rápidos de pesquisa e filtragem de serviços, com base em critérios como preço, avaliação do prestador de serviço, e disponibilidade;
- Agendamento de serviços através do aplicativo, selecionando datas e horários disponíveis;
- Reservas e confirmações: envio de notificações aos prestadores de serviço sobre novas reservas e confirmação de agendamento;
- Métodos de pagamento: Oferece opções de pagamento seguro aos usuários, como cartão de débito ou de crédito, PayPal ou PicPay;
- Avaliações e Classificações: o aplicativo oferece um recurso de avaliação e classificação ao prestador de serviço, após a conclusão do serviço;
- Mantém registro de todos os serviços contratados, incluindo detalhes das transações anteriores;
- Oferece um programa de recompensas aos clientes, para incentivar a fidelidade;
- Oferece suporte ao cliente, sobre problemas, perguntas ou reclamações;

## 3.1 Requisitos Funcionais

  **RF.001 - O sistema deve permitir o registro de novos usuários.**  
_RN.001 -_ Para registrar novos usuários será necessários os seguintes dados: Campos obrigatórios: Nome, E-mail, CPF, Telefone e Endereço de e-mail.
  O endereço de email deve ser válido e único no sistema.  
  A senha de login deve conter 8 caracteres, contendo letras maiúsculas, minúsculas, números, e pelo menos um caracter especial.
  O usuário deve concordar com o termo de condições do aplicativo.  


  **RF.002 - O sistema deve permitir que prestadores de serviço criem seus perfis.**  
  _RN.002-_ Para registrar novos prestadores de serviço, será necessários os seguintes dados: Campos obrigatórios: Nome, E-mail, CPF, Telefone e Endereço de e-mail.  
  As informações de contato, e-mail, devem ser válidas e atualizadas.  
  Os prestadores de serviço devem fornecer informações sobre suas habilidades, experiências e disponibilidade.  
  Os prestadores de serviço devem fornecer uma foto de perfil clara.   


  **RF.003 - O sistema deve permitir que os usuários pesquisem serviços específicos.**  
  _RN.003-_ Para pesquisa de serviços específicos: Os resultados das pesquisas devem ser baseados na proximidade do prestador de serviços em relação à localização do usuário.  
  Os resultados das pesquisas dos usuários devem ser relevantes;  
  Os resultados da pesquisa devem ser apresentados de forma clara e organizada, com informações detalhadas sobre o prestador de serviço.  
  Os usuários poderão visualizar os detalhes do serviço e do prestador de serviço, antes de realizar o agendamento.  


  **RF.004 - O sistema deve permitir que os usuários agendem serviços diretamente através do aplicativo.**  
  _RN.004 -_ Para o agendamento do serviço- Os usuários não devem agendar serviços para datas e horários que estejam além da disponibilidade do prestador de serviços selecionado.  
  Os usuários devem receber confirmações de agendamento por e-mail ou notificações do próprio aplicativo.  


  **RF.005 -  O sistema deve permitir que os usuários avaliem e classifiquem os prestadores de serviços após a conclusão de um serviço. Essas avaliações e classificações são parte fundamental do perfil de um prestador, e têm um impacto significativo em sua reputação e sucesso no aplicativo.**  
  _RN.005 -_ Para Avaliações e Classificações- As avaliações devem ser autênticas e relacionadas ao serviço real prestado.  
  Avaliações fraudulentas ou não relacionadas aos serviços prestados serão removidas do sistema.  
  A classificação será indicada com: ⭐⭐⭐⭐.  


  **RF.006 - O sistema deve oferecer um programa de recompensas para incentivar a fidelidade do cliente e recompensar os usuários que utilizam regularmente os serviços disponíveis no aplicativo, e também para os prestadores de serviço que tem um histórico com vários serviços contratados. O programa oferecerá vários benefícios e vantagens.**  
  _RN.006 -_ Para implementação do Programa de Recompensas:- As informações sobre o Programa de Recompensas devem ser claras e acessíveis.  
  A acumulação de pontos de recompensa pelos clientes e prestadores de serviço deve ser transparente, e os mesmos devem ser informados de como os pontos são calculados.  
  Os pontos de recompensa não devem expirar rapidamente, permitindo que tenham tempo suficiente para acumulá-los e resgatá-los.  
  O sistema deve garantir a integridade do programa de recompensas, evitando fraudes, manipulações ou abusos.  


## 3.2 Requisitos Não Funcionais  

**RNF.001 - Desempenho:** O aplicativo deve apresentar uma interface responsiva, e com carregamento de informações rápidas.  
**RNF.002 - Segurança:** Deve ser implementada uma robusta segurança de dados para a proteção dos dados pessoais e transações financeiras dos usuários.  
**RNF.003 - Escalabilidade:** O aplicativo deve ser escalável para lidar com a quantidade de número de usuários e prestadores de serviço.  
**RNF.004 - Disponibilidade:** O aplicativo deve estar disponível 24 horas por dia, 7 dias por semana, e incluir um tempo de inatividade para futuras manutenções.  
**RNF.005 - Compatibilidade:** O aplicativo deve ser compatível com diversos dispositivos e sistemas operacionais.  
**RNF.006 - Usabilidade:** A interface do aplicativo deve ser intuitiva e de fácil utilização, para atender a um público variado.  
**RNF.007 - Privacidade:** Deve ser implementado um Termo de Condição e Política de Privacidade, baseado nas regulamentações de proteção de dados.  
**RNF.008 - Backup e Recuperação:** Deve ser implementado um sistema de Backup e Recuperação de Conta do usuário, evitando a perda de informações importantes, ou até mesmo o perfil do usuário.  
**RNF.009 - Integrações:** Deve ser possível integrar o aplicativo com sistemas de pagamento de terceiros, como PayPal e Picpay. E também com cartões de débito e crédito.   
Para implementação de integrações de métodos de pagamento:- O aplicativo deve ser capaz de lidar com diferentes métodos de pagamento, como cartões de crédito, cartões de débito ou contas PayPal, conforme aplicável.  

- Em caso de problemas ou disputas relacionadas a transações de pagamento, o sistema deve fornecer um mecanismo de suporte e resolução de problemas eficaz para os usuários.  
