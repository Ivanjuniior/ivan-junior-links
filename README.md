# Ivan Junior — Portfólio

Site pessoal e portfólio profissional de Ivan Junior, desenvolvido em HTML, CSS e JavaScript puros, sem dependências externas ou etapa de build.

## Publicação — GitHub Pages

- Repositório: https://github.com/Ivanjuniior/ivan-junior-links
- Branch: `main`
- Pasta de publicação: `/ (root)`
- Domínio personalizado: `ivanjr.eti.br`

O arquivo `CNAME` na raiz informa o domínio personalizado ao GitHub Pages.

## DNS do domínio

No provedor DNS de `ivanjr.eti.br`, configure os registros para GitHub Pages conforme a documentação oficial:

- A @ → `185.199.108.153`
- A @ → `185.199.109.153`
- A @ → `185.199.110.153`
- A @ → `185.199.111.153`
- AAAA @ → `2606:50c0:8000::153`
- AAAA @ → `2606:50c0:8001::153`
- AAAA @ → `2606:50c0:8002::153`
- AAAA @ → `2606:50c0:8003::153`

Remova registros conflitantes para o domínio raiz. Depois, em **Settings → Pages**, confirme **Deploy from a branch → main → /(root)** e o domínio personalizado `ivanjr.eti.br`. Ative **Enforce HTTPS** quando o certificado estiver disponível.

## Estrutura

- `index.html` — site completo e responsivo.
- `favicon.svg` — ícone do site.
- `CNAME` — domínio personalizado do GitHub Pages.
- `site/` — cópia de compatibilidade para publicação no Cloudflare Pages.

## Conteúdo

Perfil profissional, experiência em redes e telecomunicações, formação, competências técnicas, projetos de robótica/IoT e conquistas em competições. O site não inclui rastreadores nem bibliotecas externas.
