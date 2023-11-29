## 4. Diagrama de Caso de Uso
![Diagrama de Caso de Uso](https://i.ibb.co/RSTrQvZ/Diagrama-de-casos-de-usos-IWood-1.jpg)
Link do Diagrama de Caso de Uso:
https://drive.google.com/file/d/1E7OHgORj63XJFvxWMPzSG-NpbBqsXuoN/view?usp=sharing

## 4.1 Descrição de Caso de Uso

## 4.1.1 Buscar por Serviço / Prestador de Serviço
O caso de uso **"Buscar por Serviço / Prestador de Serviço"** é uma funcionalidade comum em várias aplicações e sistemas, principalmente em plataformas de busca de serviços, marketplaces online e aplicativos de agendamento. Este caso de uso tem o objetivo de permitir que os usuários encontrem serviços específicos ou prestadores de serviços que atendam às suas necessidades ou preferências.  
- **Nome do Caso de Uso:** Buscar por Serviço / Prestador de Serviço  
- **Ator Principal:** Usuário  
- **Stakeholders e Interesses:**  
  - **Usuário:** Quer encontrar um serviço ou prestador de serviço específico com base em critérios como tipo de serviço, localização, preço, avaliações, disponibilidade, etc.  
  - **Prestadores de Serviço:** Desejam ser encontrados pelos usuários com base em suas ofertas de serviços e características.  

- **Pré-condições:**  
  - O usuário não necessariamente deve estar registrado ou logado na plataforma, para acessar a Busca por Serviço / Prestador de Serviço, podendo realizar essa ação sem ter feito o login;
  - A plataforma deve ter uma base de dados de serviços e prestadores de serviço cadastrados.

- **Fluxo Básico:**  
  - O usuário acessa a página de busca na plataforma.  
  - O usuário fornece critérios de busca, como palavras-chave relacionadas ao serviço desejado, localização, faixa de preço, datas de disponibilidade, etc.  
  - A plataforma processa os critérios de busca e exibe uma lista de resultados relevantes, que podem incluir serviços ou prestadores de serviço que correspondam aos critérios informados.  
  - O usuário examina os resultados e pode refinar a busca, se necessário.  
  - O usuário seleciona um serviço ou prestador de serviço da lista de resultados para visualizar mais detalhes.  
  - A plataforma exibe informações detalhadas sobre o serviço ou prestador de serviço, como descrição, avaliações, preços, horários de disponibilidade, informações de contato, entre outros.  
  - O usuário decide se deseja agendar o serviço, entrar em contato com o prestador de serviço ou realizar outra ação relevante com base nas informações fornecidas.  

- **Pós-condições:**
  - O usuário pode ter adicionado um serviço ao carrinho, entrado em contato com um prestador de serviço ou realizado outra ação com base nos resultados da busca.  
  - O usuário pode salvar ou favoritar serviços ou prestadores de serviço para referência futura.  
  - O prestador de serviço pode receber pedidos ou contatos dos usuários interessados com base na busca.  

- **Fluxos Alternativos e Exceções:**
  - Se nenhum resultado corresponde aos critérios de busca do usuário, a plataforma deve informá-lo e oferecer sugestões alternativas ou permitir que ele ajuste os critérios de busca.  
  - Se a plataforma encontrar muitos resultados correspondentes, pode oferecer opções de filtro ou classificação para ajudar o usuário a refinar sua escolha.  
  - Se um usuário não registrado tentar realizar uma busca, a plataforma pode exigir que ele se registre ou faça login antes de continuar.  
  - Em caso de problemas técnicos ou erros, a plataforma deve fornecer mensagens de erro adequadas e orientar o usuário sobre como proceder.  

## 4.1.2 Adicionar Prestador de Serviço aos Favoritos
O caso de uso **"Adicionar Prestador de Serviço aos Favoritos"** é uma funcionalidade comum em muitas aplicações e sistemas que permitem aos usuários salvar ou marcar prestadores de serviços que eles consideram interessantes, confiáveis ou desejam acompanhar de perto.  
- **Nome do Caso de Uso:** Adicionar Prestador de Serviço aos Favoritos  
- **Ator Principal:** Usuário  
- **Stakeholders e Interesses:**  
  - **Usuário:** Deseja salvar um prestador de serviço específico em uma lista de favoritos para acesso rápido ou acompanhamento futuro.
  - **Prestador de Serviço:** Pode se beneficiar do aumento da visibilidade e preferência dos usuários que o marcaram como favorito.
  
- **Pré-condições:**
- O usuário deve estar registrado e logado na plataforma, para conseguir adicionar um Prestador de Serviço aos favoritos.
- O prestador de serviço deve estar listado na plataforma.

- **Fluxo Básico:**  
- O usuário acessa a página do perfil do prestador de serviço que deseja adicionar aos favoritos.
- Na página do perfil do prestador de serviço, o usuário encontra uma opção ou botão claramente identificado para "Adicionar aos Favoritos".
- O usuário clica nessa opção.
- O sistema registra a ação do usuário e adiciona o prestador de serviço à lista de favoritos do usuário.
- O sistema confirma a ação, exibindo uma mensagem ou ícone que indica que o prestador de serviço foi adicionado com sucesso aos favoritos.

- **Pós-condições:**  
  - O prestador de serviço é adicionado à lista de favoritos do usuário.
  - O usuário pode acessar facilmente a lista de favoritos em sua conta para revisitar o perfil do prestador de serviço quando desejar.
  - O prestador de serviço receberá notificações ou métricas sobre o número de usuários que o adicionaram aos favoritos.
  
  - **Fluxos Alternativos e Exceções:**  
  - Se o prestador de serviço já estiver na lista de favoritos do usuário, o sistema enviará uma mensagem informando que o prestador já está na lista de favoritos, evitando duplicatas.
  - Se o usuário tentar adicionar um prestador de serviço aos favoritos sem estar logado, o sistema irá direcioná-lo para a página de login ou registro.
  - Em caso de problemas técnicos ou erros durante o processo de adição aos favoritos, o sistema irá fornecer mensagens de erro adequadas e orientar o usuário sobre como proceder.
