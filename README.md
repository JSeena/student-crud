# Trabalho Prático: Desenvolvimento de um CRUD de Alunos Responsivo

## Objetivo do projeto
Desenvolver um sistema de CRUD (Create, Read, Update, Delete) para a gestão 
de alunos utilizando as tecnologias Angular, Bootstrap, Angular Material e JSON Server, 
com uma interface responsiva adequada para dispositivos móveis.

## Requisitos do projeto
Nesse projeto, foram utilizados: 
- Node.js, `Instalado no site oficial`
- Angular CLI `npm install -g @angular/cli`
- Json-server `npm install -g json-server`

## Iniciando o Banco de Dados

Com tudo instalado, rode o comando `npx json-server --watch db.json` para carregar o banco de dados.
Ele será executado no endereço `http://localhost:3000.`

## Iniciando o Servidor

Em um novo terminal, rode o comando `ng serve` para abrir o servidor local e navegue para `http://localhost:4200/`. 
A aplicação será atualizada automaticamente caso tenha alguma alteração.


## Conteúdo do projeto

Setup do Projeto e Interfce de usuário: Feito utilizando Angular, Angular Material e Bootstrap para estilização e responsividae (UI).

Componentes da Aplicação: Criados em formas de modais para uma visualização mais limpa, sem uma troca de janelas a todo tempo.

Serviços (Services): Empregados para comunicar o front-end com o banco de dados (json-server).

Roteamento (Routing): Rotas da aplicação configuradas para navegar entre a lista de alunos, formulário de 
adição/edição e exclusão.

Interações CRUD: Todas são possíveis e funcionais, contendo também validadores.

Banco de Dados Simulado: Utilização do json-server para simular uma API RESTful com um banco de dados JSON.



## Funcionalidades do Projeto:

- Listagem de Alunos;
- Informações sobre o CRUD;
- Adição, visualização, edição e exclusão de alunos;
- Pesquisa de alunos por nome;


# Vídeo demonstrativo do projeto:
O vídeo se encontra no link a seguir -> https://youtu.be/4jkyadG5sW4 <-

