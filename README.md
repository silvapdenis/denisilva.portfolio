# Denis Silva — Portfolio

Site estático em [Astro](https://astro.build) + função serverless da Vercel para o formulário de contato.

## Rodar localmente

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # gera ./dist
```

O formulário chama `/api/contact`, que só existe na Vercel. Para testá-lo localmente use `npx vercel dev`.

## Editar conteúdo

- Textos traduzidos (serviços, experiências, títulos, formulário): `src/i18n/pt.ts` e `src/i18n/en.ts`. Mantenha a mesma estrutura nos dois arquivos.
- Dados iguais nos dois idiomas (contatos, redes sociais, clientes, anos de experiência): `src/data/site.ts`.
- A foto fica em `public/img/denis.png`.

## Variantes de hero

O site usa o hero **Aurora** (padrão definido em `src/components/Page.astro`). As outras versões ficam guardadas em `src/components/heroes/` (e `Hero.astro`, a versão com foto) e podem ser vistas em `/preview/photo`, `/preview/code`, `/preview/aurora` e `/preview/type`. A barra para alternar entre elas fica escondida; para mostrá-la, abra qualquer preview com `?bar` no endereço (ex.: `/preview/code/?bar`). Para trocar o hero do site, altere o valor padrão de `hero` em `Page.astro`.

## Idiomas

- Português (padrão): `/`
- Inglês: `/en/`

O botão PT/EN no menu troca de idioma. Para adicionar outro idioma, crie `src/i18n/xx.ts`, registre em `src/i18n/index.ts` e adicione `src/pages/xx/index.astro`.

## Deploy na Vercel

1. Suba esta pasta para um repositório no GitHub.
2. Na Vercel: **Add New → Project**, importe o repositório (framework detectado: Astro).
3. Em **Settings → Environment Variables**, crie:

| Variável | Valor |
|---|---|
| `RESEND_API_KEY` | chave criada em https://resend.com/api-keys |
| `CONTACT_TO` | e-mail que recebe as mensagens |
| `CONTACT_FROM` | (opcional) remetente, ex.: `Portfolio <contato@seudominio.com>`. Sem isso usa `onboarding@resend.dev`, que só entrega para o e-mail dono da conta Resend. |

4. Faça **Redeploy** depois de criar as variáveis.
