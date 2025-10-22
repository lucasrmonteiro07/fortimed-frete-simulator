# 🚀 Guia de Deploy no Vercel

## ✅ Estrutura Configurada

O projeto foi reconfigurado para funcionar corretamente no Vercel com a seguinte estrutura:

```
fortimed-frete-simulator/
├── api/
│   └── index.js          # API serverless (functions)
├── index.html            # Frontend estático
├── simulator.js          # Lógica do frontend
├── styles.css            # Estilos
├── vercel.json           # Configuração Vercel
├── package.json          # Dependências
└── ...
```

## 🔧 Configuração Vercel.json

```json
{
  "version": 2,
  "builds": [
    {
      "src": "api/index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "api/index.js"
    },
    {
      "src": "/(.*)",
      "dest": "index.html"
    }
  ]
}
```

## 📋 O que foi feito

1. ✅ Criou arquivo `api/index.js` com a API como função serverless
2. ✅ Atualizado `vercel.json` com rotas corretas
3. ✅ Arquivo `index.html` serve como fallback para rotas estáticas
4. ✅ API endpoints funcionam em `/api/...`

## 🚀 Próximos Passos no Vercel

### 1. Reconnectar ou Redeploy

1. Acesse https://vercel.com/dashboard
2. Selecione seu projeto `fortimed-frete-simulator`
3. Clique em **Redeploy** ou **Deploy**

### 2. Verificar Deployment

Após fazer o redeploy:

1. Aguarde a conclusão (geralmente 2-5 minutos)
2. Você verá "✅ Production" quando concluir
3. Clique em "Visit" para testar

### 3. Testar a Aplicação

Na URL do Vercel:
- [ ] Home carrega sem erros
- [ ] Expresso São Miguel aparece pré-selecionada
- [ ] Região (São Paulo) carrega automaticamente
- [ ] Cidades populam corretamente
- [ ] Cálculo de frete funciona
- [ ] Tabelas de referência aparecem

## 🌐 URLs Esperadas

- **Home:** `https://seu-projeto.vercel.app/`
- **API Transportadoras:** `https://seu-projeto.vercel.app/api/transportadoras`
- **API Regiões:** `https://seu-projeto.vercel.app/api/transportadoras/5/regioes`
- **API Calcular:** `https://seu-projeto.vercel.app/api/calcular-frete` (POST)

## 🔍 Troubleshooting

### Erro: "Cannot GET /"
- ✅ Resolvido: Agora index.html é servido automaticamente

### Erro: "Cannot POST /api/calcular-frete"
- Verifique se `api/index.js` existe
- Verifique se vercel.json está correto
- Faça um redeploy

### API não responde
- Verifique os logs no Vercel Dashboard
- Clique em "Deployments" → "View Build Logs"
- Procure por erros em vermelho

### CORS errors
Se a API recusa requisições, adicione CORS:

```javascript
const cors = require('cors');
app.use(cors());
```

E instale: `npm install cors`

## 📦 Dependências

Verifique se todas estão no `package.json`:

```json
{
  "dependencies": {
    "express": "^4.18.2",
    "body-parser": "^1.20.2"
  },
  "engines": {
    "node": "18.x"
  }
}
```

## 🔄 Workflow de Deploy

```
1. Fazer alterações localmente
   ↓
2. Testar em http://localhost:3000
   ↓
3. Git commit e push
   ↓
4. Vercel auto-detecta e faz deploy
   ↓
5. Teste em produção
```

## 📝 Dicas Importantes

- **Auto-deploy:** Vercel faz deploy automático quando você faz push no GitHub
- **Environment variables:** Se precisar de variáveis, configure em Vercel → Settings → Environment Variables
- **Preview:** Cada push cria uma preview URL automática
- **Production:** Apenas a branch padrão (master/main) vai para produção

## 🆘 Contactar Suporte Vercel

Se os problemas persistirem:

1. Vá para https://vercel.com/support
2. Ou abra um issue no GitHub do seu projeto
3. Ou consulte a documentação: https://vercel.com/docs

---

**Última atualização:** 22 de outubro de 2025
**Estrutura:** Serverless (API) + Static (Frontend)
**Repositório:** https://github.com/lucasrmonteiro07/fortimed-frete-simulator
