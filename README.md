# ForgeDevApps

Site institucional da ForgeDevApps — **React + TypeScript + Vite + Tailwind CSS 4**.

Produção: https://forgedevapps.com

## Rodando com Docker (recomendado)

```bash
# Produção local (build otimizado + Nginx) -> http://localhost:8080
docker compose up -d --build web

# Desenvolvimento com hot reload -> http://localhost:5173
docker compose --profile dev up dev

# Parar
docker compose down
```

## Rodando sem Docker

Requer Node.js >= 20.

```bash
npm install
npm run dev      # http://localhost:5173
npm run lint
npm run build    # gera dist/
```

## CI/CD (GitHub Actions -> Hostinger)

Workflow em `.github/workflows/deploy.yml`:

- **Pull request para `main`**: lint + build + teste da imagem Docker.
- **Push na `main`**: o mesmo e, se passar, envia `dist/` por FTP para a Hostinger.

Secrets necessários em *Settings → Secrets and variables → Actions*:

| Secret         | Valor                                   |
| -------------- | --------------------------------------- |
| `FTP_SERVER`   | IP do FTP (hPanel → Arquivos → Contas FTP) |
| `FTP_USERNAME` | `u984004423.forgedevapps.com` (usuário do **site** forgedevapps.com) |
| `FTP_PASSWORD` | Senha do FTP                            |

Opcional: variável `FTP_SERVER_DIR` (padrão `./`, que já é a `public_html` do site).

> Se a senha do FTP for trocada no hPanel, atualize o secret `FTP_PASSWORD`.
> O deploy só sobrescreve/remove arquivos que ele mesmo enviou — pastas como `bateuafomeapp/` não são tocadas.

## Onde editar

- Contatos (WhatsApp, e-mail, Instagram): `src/config/contact.ts`
- Projetos do portfólio: `src/components/Portfolio.tsx` (imagens em `public/`)
- Formulário: `src/components/Contact.tsx` (envio via FormSubmit para o e-mail em `contact.ts`)
