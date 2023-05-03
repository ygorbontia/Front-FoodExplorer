
## Sobre
Projeto final da Rocketseat, se trata de uma aplicação de um menu interativo para restaurantes, contando com uma versão mobile e desktop, além disso, possui dois acessos diferentes: *user* e *admin*.

O cadastro de novos usuários pode ser realizado a qualquer momento ao utilizar a tela de cadastro, enquanto que para cadastrar um novo admin é preciso entrar em contato com o desenvolvedor para que o mesmo seja realizado de forma manual, impedindo que demais usuários possam se cadastrar como administradores e editar os pratos existentes.

## Tecnologias
- React.js
- Styled-components
- Javascript
- Axios

## Funcionalidades
O **user** pode visualizar todos os pratos cadastrados no sistema, e ao clicar em visualizar um prato, ele será direcionado para uma tela mostrando detalhadamente as informações do prato selecionado.

O **admin** pode realizar algumas funções dentro da aplicação, como visualizar os pratos, editá-los, excluí-los e criar um novo prato.

## Utilizando a aplicação
1. Clonar a aplicação
	 `git clone https://github.com/ygorbontia/Front-FoodExplorer.git`
	 
2. Instalar as dependências
	`npm install`

3. Iniciar a aplicação
	`npm run dev`

4. Abra a aplicação utilizando o servidor **http://localhost:5173**

##### OBSERVAÇÃO!
O método de autenticação pode demorar para carregar pois o servidor está hospedado online, mas caso queira clonar o back-end e utilizar ambos na sua máquina, acesse o link abaixo e siga o passo-a-passo a seguir:
1. Acesse o link: https://github.com/ygorbontia/Back-FoodExplorer
3. Siga o README.md do back-end
4. Altere o arquivo /src/services/api.js do front-end passando a baseURL como "http://localhost:3000" (Caso tenha alterado a PORT do back-end, substitua o '3000' pela nova PORT)
5. Execute o `npm run dev` na pasta do back-end **e** na pasta do front-end

## Acessos
**User**

*E-mail:* user@email.com

*Senha:* 123

**Admin**

*E-mail:* admin@email.com

*Senha:* 123
