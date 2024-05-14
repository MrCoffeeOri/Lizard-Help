# LEIA ANTES DE CLONAR O PROJETO
## Tecnologias usadas:
- Typescript: https://www.typescriptlang.org/pt/docs/
- React JS: https://pt-br.react.dev/
- React Router: https://reactrouter.com/en/main
- Vite: https://vitejs.dev/
- Git: https://git-scm.com/doc

## Comandos para executar na sua máquina na pasta do projeto (escreva eles na ordem em que aparece)
- **npm i** (instala todas as dependências do projeto)
Depois de executar o comando **npm i** para instalar as dependências, você vai ver que ele criou na sua pasta root uma pasta ***node_modules*** onde todas as sua dependências estarão.
- **npm run dev** ou **npm run build** (colocar depois do 'run' 'dev' para executar o desenvolvimento -recomendo usar essa para desenvolver-, ou 'build' para "contruir" o projeto no seu PC -ele controi uma pasta 'build' não recomendo usar essa para desenvolver-)
Depois de executar o comando **npm run dev** você vai ver o seguinte no seu terminal:
![alt text](https://i.ibb.co/dLZcrTD/Sem-t-tulo.png)
a rota http://localhost:5173/ é um server local de desenvolvimento, onde, mostrará o seu projeto (todas as interfaces, por exemplo). Nele, para cada modificação de algum arquivo no seu projeto, ele reiniciará o server e aplicara todas eles em *real time*.
## Estrutura do projeto
-node_modules (suas dependências estão aqui)
-public (pasta de assets que serão usados, imagens, svgs, etc)
-src (pasta dos código a serem desenvolvidos)
--- components (pasta dos componentes a serem reutilizados do nosso projeto)
--- css (pasta dos arquivos css das páginas)
------modules (pasta dos arquivos css dos componentes em *modules*, exemplo: nome.module.css)
--- helpers (pasta dos arquivos auxiliares que facilitam certas ações)
--- pages (pasta dos arquivos .tsx das páginas)
--- main.tsx (arquivo que renderiza nosso projeto e inicializa as rotas)
--- vite-env.d.ts (arquivo de configuração do react com vite)
-.env (arquivo para setar as variaveis de ambiente sensíveis, você precisa criar ele na sua máquina)
-.gitignore (arquivo para o git ignorar certos pastas e/ou arquivos)
-.index.html (arquivo root para incializar o react e renderizar o html)
-.package.json (arquivo para os atributos do projeto)
-.package-lock.json (arquivo de detalhamento do projeto)
-README (este arquivo)
-.tsconfig.json (configurações do typescript)
-.tsconfig.node.json (configurações do typescript)
-vite.config.ts (configurações do vitejs)
