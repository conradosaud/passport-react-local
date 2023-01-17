# Introdução
Este é um projeto de testes e aprendizado sobre como usar o
[Passport](https://www.passportjs.org/) em conjunto com o [Express](https://expressjs.com/).

O Passport é uma biblioteca em JavaScript que permite realizar a autenticação de usuários de forma segura,
enquanto o Express permite o uso de um servidor que recebe requisições e devolve respostas.

## Client
O diretório [client](https://github.com/conradosaud/passport-react-local/client) é o responsável pela interface web, feita
em __React__ usando códigos e interfaces simples.
O intuito é apenas ter uma interface que se possa cadastrar, logar e visualizar usuários que estão logados.

## Backend
O diretório [backend](https://github.com/conradosaud/passport-react-local/backend) estão os arquivos do servidor onde está
configurado a autenticação de usuários e as rotas básicas para comunicação com o React.

A conexão com o banco de dados é feita em _MySQL_ usando a biblioteca [mysql2](https://www.npmjs.com/package/mysql2).

## Database
O arquivo [database.sql](https://github.com/conradosaud/passport-react-local/backend) contém o banco de dados que pode ser
usado para testar o sistema. Ele contém informações básicas de id, nome, email, senha e a data de criação do usuário.

# Como usar
Primeiramente, instale todos os pacotes de dependência:
`npm install`
Esse comando deve ser usado tanto no diretório _client_ quanto no _backend_, pois ambos são projetos separados com suas 
próprias bibliotecas.

Para iniciar os projetos, use o comando `npm start` para iniciar o projeto React do diretório _client_
e `npm run start` para iniciar o servidor Express do diretório _backend_.

Antes de usar a interface ainda é necessário configurar o acesso ao banco de dados que está no diretório _backend_.
Acesse o arquivo [database.js](https://github.com/conradosaud/passport-react-local/backend/database.js) e altere as 
credenciais de acesso ao banco de dados que você for usar. Feito isso, tudo está pronto para iniciar.

Na interface web crie um usuário no formulário _Register_ e em seguida teste fazer o login dele no formulário _Login_.
No _console_ é possível ver a resposta da requisição para saber se deu certo ou não.
O botão _submit_ deve revelar uma mensagem mostrando o nome do usuário logado.

# Bibliotecas
São usadas várias bibliotecas para fazer a autenticação funcionar de forma correta e minimamente segura.

No React não há nada além do [axios](https://axios-http.com/docs/intro) para realizar as requisições ao servidor.

As bibliotecas que foram usadas no servidor, foram:
- [Express](https://expressjs.com/) - Para criar o servidor
- [Passport](https://www.passportjs.org/) - Para o sistema de autenticação
- [Passport Local](https://www.passportjs.org/packages/passport-local/) - Estratégia de autenticação usando username (ou e-mail) e senha.
Existem outras formas de autenticar um usuário, esta é apenas uma delas e necessita desas biblioteca para isso.
- [Express Session](https://www.npmjs.com/package/express-session) -  Usado para manter a sessão do usuário salva no servidor.
- [Cookie Parser](https://expressjs.com/en/resources/middleware/cookie-parser.html) - Usado para manter a sessão do usuário salva
nos cookies do navegador. É usado em conjunto com o Express Session.
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs) - Usado para criptografar as senhas dos usuários.
- [Body-parser](https://www.npmjs.com/package/body-parser) - Usado para facilitar a leitura do body das requisições.

------------

O código desse projeto foi montado baseado no vídeo do [Nathaniel Woodbury](https://www.youtube.com/watch?v=IUw_TgRhTBE).
O repositório original é este [aqui](https://github.com/woodburydev/passport-local-video). Este meu repositório tem algumas
pequenas alterações pessoais.


