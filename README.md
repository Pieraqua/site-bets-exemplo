# site-bets-exemplo

Frontend de um site de bets feito como exercício.

![imagem da pagina de bets](betspage.png)

## Abordagem

Primeiro foram mapeados os elementos da página em componentes reutilizáveis. O resultado desse mapeamento se encontra na [pasta docs.](/docs/)

A página foi dividida em Overlay, que se repete nas páginas de 'Jogos' e 'Esportes', e App, que seriam essas próprias páginas. O Overlay é renderizado ao redor do App de modo fixo.

Para este exemplo foi criada apenas a página 'Esportes', encontrada no caminho '/sports'.

Os componentes que foram desenvolvidos como template foram escolhidos por critério de: 
- Quantas vezes aparecem componentes iguais ou muito similares;
- Complexidade do componente.

A página de Sports é composta por uma navbar horizontal no topo, um display de jogos em 'destaque' e vários displays customizáveis (Popular, Ao Vivo e Próximos) que seguem o mesmo formato de um grid de cartões. Os compoentes escolhidos como template foram os cartões de partida e os displays customizáveis, que aparecem diversas vezes na página.

## TODO

- Overlay do site/portal
    - ~~Navbar horizontal~~
    - ~~Navbar vertical~~
    - ~~Footnote~~
- Aplicação (/sport)
    - ~~Layout~~
    - ~~Navbar do app~~
        - ~~Layout e icones com resizing correto~~
        - Dropdown
    - ~~Página principal~~
        - ~~Abas da página principal~~
        - ~~Display de jogos futuros~~
            - ~~Cards~~
        - ~~Display de jogos~~
            - ~~Abas do display~~
                - Dragscroll?
            - ~~Cartões de jogos~~ 
            - ~~Cartão de jogo principal~~
    - Scaling correto por limiares

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
