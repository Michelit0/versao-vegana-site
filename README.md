# Site oficial Versão Vegana

Site público separado do sistema operacional do restaurante.

## Arquitetura

- Astro para páginas estáticas, SEO e rotas reais.
- React somente no simulador de pré-orçamento.
- `/sistema` continua apontando para o projeto interno existente por rewrite da Vercel.
- O catálogo público e os valores estimados ficam em `src/content/siteContent.ts`.

## Comandos

```bash
npm install
npm run dev
npm run typecheck
npm run build
npm run preview
```

## Rotas

- `/`
- `/cardapio`
- `/eventos`
- `/orcamento`
- `/cerrado`
- `/sobre`
- `/privacidade`
- `/sistema`

## Imagens e marca

Os logotipos são materiais oficiais da Versão Vegana.

Fotografias de apoio:

- Mesa vegetal: Jia (Unsplash) - https://unsplash.com/photos/a-wooden-table-topped-with-plates-of-food-VW0bzb90oMA
- Bolo de cenoura: Bahar Haghshenas (Unsplash) - https://unsplash.com/photos/a-piece-of-carrot-cake-on-a-plate-with-a-fork-b9L-TJ8cmnM

As imagens do cardápio são identificadas como ilustrativas e devem ser substituídas por fotografias reais dos produtos quando disponíveis.
