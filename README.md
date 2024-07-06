# Trainify

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Execução](#execução)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/en/)

## Instalação

Siga os passos abaixo para clonar o repositório e instalar as dependências do projeto:

1. Clone o repositório:

   ```sh
   git clone https://github.com/joao-marco-jf/trainify.git
   cd trainify
   ```

2. Instale as dependências:

   ```sh
   npm install
   ```

## Execução

Para iniciar a aplicação Expo, siga os passos abaixo:

1. Execute o servidor de desenvolvimento do Expo:

   ```sh
   npm start web
   ```

2. Escaneie o código QR exibido no terminal ou na página do navegador com o aplicativo Expo Go (disponível na App Store e Google Play) para visualizar a aplicação no seu dispositivo móvel.

## Estrutura do Projeto

Aqui está uma breve descrição da estrutura de diretórios do projeto:

```
.
├── .tamagui           # Arquivos de configuração do Tamagui
├── app                # Arquivos principais da aplicação
├── assets             # Imagens, fontes, etc.
├── components         # Componentes reutilizáveis
├── constants          # Constantes utilizadas na aplicação
├── scripts            # Scripts auxiliares
├── .gitignore         # Arquivo para ignorar arquivos no Git
├── README.md          # Documentação do projeto
├── app.config.ts      # Configuração do app Expo
├── babel.config.js    # Configuração do Babel
├── package-lock.json  # Dependências do projeto (gerado automaticamente)
├── package.json       # Dependências e scripts do projeto
├── tamagui-web.css    # Estilos específicos para Tamagui
├── tamagui.config.ts  # Configuração do Tamagui
└── tsconfig.json      # Configuração do TypeScript
```

## Contribuição

Se você deseja contribuir com este projeto, por favor siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma nova branch (`git checkout -b feature/nova-funcionalidade`).
3. Faça suas alterações e commit (`git commit -am 'Adiciona nova funcionalidade'`).
4. Envie para a branch (`git push origin feature/nova-funcionalidade`).
5. Crie um novo Pull Request.
