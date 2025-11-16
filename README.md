# Entrega Final — Bootcamp 2

Este repositório apresenta a Entrega Final do Bootcamp II, na qual uma extensão do Chrome desenvolvida previamente foi transformada em um Progressive Web App (PWA) completo. Além disso, o projeto inclui a implementação de uma API em Node.js, containerização com Docker, testes automatizados e um pipeline estruturado de Integração Contínua e Entrega Contínua (CI/CD) utilizando GitHub Actions.

O PWA foi construído seguindo os padrões atuais da Web, oferecendo uma experiência semelhante à de um aplicativo nativo. Para isso, foram incorporados elementos essenciais, como o arquivo manifest.webmanifest, responsável por configurar o nome, o ícone e o comportamento do aplicativo quando instalado, além de um service worker que permite funcionalidades offline e otimizações de cache. A aplicação também foi preparada para atender aos requisitos do Lighthouse, garantindo bom desempenho, acessibilidade e usabilidade.

A camada de backend foi desenvolvida com Express.js, oferecendo um endpoint simples que possibilita testar a comunicação entre o front-end e a API. Esse componente faz parte da arquitetura mínima necessária para validar a integração entre os serviços e demonstrar o funcionamento completo da proposta do projeto.

Ambos os serviços — PWA e API — foram containerizados individualmente e executados em conjunto por meio do Docker Compose, o que facilita a reprodução do ambiente em qualquer máquina. Com apenas um comando, o usuário é capaz de subir toda a aplicação de forma consistente, simplificando o processo de desenvolvimento e avaliação.

O projeto também inclui testes end-to-end utilizando Playwright, responsáveis por validar o fluxo básico da aplicação, garantindo que o PWA carregue corretamente e se comunique com a API. Esses testes podem ser executados tanto localmente quanto automaticamente dentro da pipeline de CI/CD.

O fluxo de automação foi configurado com dois arquivos principais do GitHub Actions:

   O ci.yml, responsável por instalar dependências, realizar builds, executar testes e gerar artefatos;
   O deploy.yml, responsável por publicar o PWA automaticamente no GitHub Pages.

Dessa forma, o aplicativo é disponibilizado de forma pública, com suporte a HTTPS e pronto para ser instalado como um app em dispositivos compatíveis.

Concluindo, o projeto cumpre integralmente os requisitos da entrega: desenvolvimento de um PWA funcional, integração com API, uso de containers, execução de testes automáticos, publicação via CI/CD e documentação clara do processo. Trata-se de um trabalho acadêmico que demonstra, de forma prática, o ciclo completo de desenvolvimento e entrega moderna de aplicações Web.
