# VANguard - Extensão de Segurança Web para Firefox

🇺🇸 Versão em Inglês: [clique aqui](./README.md)

**Autor**: Enricco Gemha

## Como executar o projeto

Navegue até a pasta `build/firefox-mv2-prod`, onde você encontrará um arquivo `manifest.json`. No Firefox, vá até a barra de pesquisa e digite `about:debugging#/runtime/this-firefox`. Lá você verá um botão `Carregar extensão temporária`, clique nele e selecione o `manifest.json` mencionado. A extensão agora está carregada e você pode acessá-la através da barra de extensões.

## Visão Geral

VANguard é uma poderosa extensão do Firefox projetada para melhorar a privacidade e segurança do usuário durante a navegação na web. Ela fornece insights em tempo real sobre atividades potencialmente prejudiciais e violações de privacidade. Ao monitorar e exibir várias atividades web, o VANguard visa capacitar os usuários com o conhecimento e as ferramentas para proteger sua presença online.

## Funcionalidades

- **Monitoramento de Domínios**: Rastreia e exibe todas as conexões com domínios de terceiros para ajudar os usuários a ver para onde seus dados podem estar indo.

- **Gerenciamento de Cookies**: Identifica e categoriza cookies injetados durante o carregamento da página, diferenciando entre cookies próprios e de terceiros, bem como cookies de sessão versus persistentes.

- **Detecção de Armazenamento Local**: Detecta e reporta o uso do armazenamento local HTML5 no dispositivo do cliente, oferecendo insights sobre a persistência de dados.

- **Proteção contra Sequestro de Navegador**: Monitora potenciais ameaças de sequestro de navegador e hooks, alertando os usuários sobre modificações não autorizadas.

- **Detecção de Fingerprint de Canvas**: Detecta o uso de técnicas de fingerprinting de Canvas usadas por sites para rastrear usuários de forma única.

- **Pontuação de Privacidade**: Implementa um sistema de pontuação que avalia o quanto uma página web respeita a privacidade do usuário com base em critérios predefinidos.

## Objetivo

Nosso objetivo é criar uma ferramenta indispensável para usuários web comuns e entusiastas de privacidade. O VANguard alerta os usuários sobre comportamentos intrusivos e potenciais ameaças à segurança, promovendo uma experiência de navegação mais segura.

## Instalação

Instruções detalhadas sobre como instalar e configurar o VANguard serão fornecidas aqui.

## Contribuindo

Recebemos contribuições da comunidade! Por favor, leia nossas diretrizes de contribuição para informações sobre como enviar pull requests, reportar bugs ou sugerir novas funcionalidades.

## Licença

Este projeto está licenciado sob a *Affero GNU Public License* - veja o arquivo LICENSE para detalhes.

## Agradecimentos

Agradecemos a Rodolfo Avelino e João Vieira, que propuseram este projeto durante o curso de Tecnologias Hacker na Instituição de Ensino Insper.
