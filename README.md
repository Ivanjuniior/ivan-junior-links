# Ivan Junior — Links

Página pessoal de links para Instagram, portfólio e divulgação de conquistas.

## Estrutura

- `site/index.html` — página principal (HTML, CSS e JavaScript sem dependências)
- `site/favicon.svg` — ícone do site
- `site/_headers` — cabeçalhos básicos de segurança para Cloudflare Pages

## Publicar no Cloudflare Pages com GitHub

1. Conecte o repositório `ivan-junior-links` em **Workers & Pages → Create application → Pages → Connect to Git**.
2. Configure o projeto:
   - **Project name:** `ivan-junior-links`
   - **Production branch:** `main`
   - **Framework preset:** `None`
   - **Build command:** `exit 0`
   - **Build output directory:** `site`
3. Clique em **Save and Deploy**.

A cada `git push` para `main`, o Cloudflare fará uma nova publicação automaticamente.

## Domínio próprio

Sugestão de endereço: `links.ivanjr.eti.br`. Depois da primeira publicação, abra **Custom domains → Set up a domain** no projeto Cloudflare Pages e siga a configuração DNS indicada.

## Personalização

Edite `site/index.html`. A página destaca o 2º lugar internacional no MRC, na Grécia, e reúne outras conquistas em robótica. Não utiliza rastreadores, bibliotecas externas ou processo de build. A foto de perfil é carregada do avatar público do GitHub.
