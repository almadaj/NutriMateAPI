# NutriMateAPI

## Descrição

Este é um aplicativo de nutrição que ajuda os usuários a gerenciar suas refeições, receitas e informações nutricionais de forma simples e eficiente. O aplicativo permite que os usuários consultem receitas, visualizem detalhes nutricionais e registrem suas próprias refeições.

##Rotas e Requisições

- ✔️ POST /user
- ✔️ POST /login
- ✔️ GET /users
- ✔️ PATCH /user/:id
- ✔️ GET /user/:id
- ✔️ DELETE /user/:id

- ✔️ GET /recipes
- ✔️ POST /recipes
- ✔️ POST /recipes/:id
- ✔️ PUT /recipes/:id
- ✔️ DELETE /recipes/:id

- ✔️ GET /user/meals/:id
- ✔️ GET /meals/recipes/:id

## Migrations

Para rodar as migrations e criar as tabelas no banco de dados, use o comando:

`npx sequelize-cli db:migrate`

## Seeders

Para popular o banco de dados com dados iniciais, use o comando:

`npx sequelize-cli db:seed:all`
