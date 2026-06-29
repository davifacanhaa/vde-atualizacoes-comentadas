# VDE Atualizações Comentadas — Página de vendas

Landing page de alta conversão para a assinatura **VDE Atualizações Comentadas**: atualizações mensais para concursos (legislação, jurisprudência e súmulas/informativos), com planos mensal e anual.

## Stack

Página estática autocontida — um único `index.html` com CSS e JS embutidos (fonte Poppins via Google Fonts, ícones lucide). Sem build.

## Rodar localmente

```bash
python3 -m http.server 4173
# abra http://localhost:4173
```

## Estrutura

- `index.html` — a página completa
- `logo-vde.png`, `olho-vde.png` — logo e símbolo da marca
- `material/` — amostras de páginas do material (PDF rasterizado)

## Deploy

Publicado na Vercel (deploy estático).
