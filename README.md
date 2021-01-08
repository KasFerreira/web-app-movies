Para testar a aplicação basta subir o backend e o front:


1- Ir na pasta backend e : 
 - copiar o .env example para .env: ( cp .env.example .env )
 - npm install
 - adonis migration:run 
 - adonis server --dev.
ele estará rodando no localhost:3333.

2- Para o frontend em react basta entrar na pasta frontend e digitar: 
 - npm install
 - yarn start,
ele estará rodando em localhost:3000. 


A aplicação contém:
- login e cadastro: O usuario realiza cadastro e já direcionado pra página de filmes. 
As rotas são protegidas e ele só pode acessa-las se tiver autenticado. As rotas de login e cadastro só são acessiveis quando o usuário faz logout.

- Consulta a api de filmes: Dois tipos de consultas são feitas, por termo e por popularidade. A busca por termo não está completamente implementada, ele realiza a consulta mas só da pra verificar pelo console.log,quando digita na barra de pesquisa.

- Watchlist, também não está completa, consegui salvar os filmes no localstorage atribuindo uma conta e perfis diferentes, porém não consegui fazer isso no banco.


