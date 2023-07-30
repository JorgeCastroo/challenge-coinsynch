

## Start de projeto

- Instale as dependencias:

```zsh
yarn  add

```


```

## Estrutura do projeto e organização de pastas

```
|-- node_modules  # Módulos/libs instalados
|-- public  # Arquivos públicos
    |-- favicon.ico
    |-- vercel.svg
|-- src  # Código fonte
    |-- assets  # Imagens, fontes - arquivos estáticos
    |-- components  # Componentes utilizaveis em telas
    |-- pages  # Arquivos de páginas que definem rotas
        |-- _app.tsx  # Componente inicial do NextJS
        |-- _document.tsx  # Header e Document do NextJS
        |-- index.tsx  # Rota inicial da aplicação ('/')
    |-- screens  # Arquivos de telas da aplicação, renderizados pelas pages
        |-- Home  # Pasta de tela exemplo para Home
            |-- components  # Componentes exclusivos para o funcionamento dessa tela.
            |-- Home.tsx
            |-- style.ts
        |-- index.ts
    |-- services  # Arquivos de controllers e rotas de API
    |-- store  # Arquivo de configuração do redux
    |-- styles
        |-- themes  # Arquivos de temas
            |-- main.ts  # Tema principal
        |-- tokens  # Alguns tokens iniciais
            |-- colors.ts
            |-- fonts.ts
        |-- base.ts  # Configuração e estilização base do stitches
        |-- global.ts  # CSS global

  .eslintrc.json
  .gitignore
  next-env.d.ts
  next-config.js
  package.json
  README.md
  trsconfig.eslint.json
  tsconfig.json
  yarn.lock
```
