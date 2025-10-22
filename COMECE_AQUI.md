# 🚀 COMECE AQUI - Guia Rápido

## ⚡ Iniciar em 3 passos

### 1️⃣ Instalar dependências
```bash
npm install
```

### 2️⃣ Iniciar servidor
```bash
npm start
```

### 3️⃣ Acessar aplicação
Abra no navegador: **http://localhost:3000**

---

## 📝 O que você precisa fazer

### Adicionar suas transportadoras
1. Abra o arquivo `app.js`
2. Procure por `const freteDatabase = {`
3. Adicione suas transportadoras dentro de `transportadoras: [`

**Exemplo:**
```javascript
{
  id: 4,
  nome: "Sua Transportadora",
  ativa: true,
  regioes: [
    {
      regiao: "Região Sul",
      cidades: ["Porto Alegre", "Curitiba"],
      tabela: { minimo: 15.00, porKg: 1.20 }
    }
  ]
}
```

### Consultar arquivo de ajuda
Abra `IMPORTAR_DADOS_PDF.md` para instruções detalhadas de como importar dados do PDF

---

## 🎯 Funcionalidades

✅ Selecionar transportadora  
✅ Selecionar região/cidade  
✅ Informar peso e valor  
✅ Calcular frete automaticamente  
✅ Ver valor total (mercadoria + frete)  
✅ Visualizar tabelas de referência  

---

## 🌐 Deploy no Vercel

1. Suba o projeto para GitHub
2. Conecte seu repositório no Vercel
3. Deploy automático!

---

## 📚 Arquivos Principais

| Arquivo | Função |
|---------|--------|
| `app.js` | Servidor e banco de dados |
| `index.html` | Interface do simulador |
| `simulator.js` | Lógica JavaScript |
| `styles.css` | Estilos CSS |
| `README.md` | Documentação completa |
| `IMPORTAR_DADOS_PDF.md` | Como importar dados |

---

## 💡 Dicas

- Os valores de frete são calculados como: `MAX(mínimo, peso × valor_por_kg)`
- Use valores decimais (ex: 15.50, não 15,50)
- Teste cada transportadora para validar os dados
- A interface é responsiva em desktop, tablet e celular

---

**Pronto para começar? Execute `npm install` e `npm start`!** 🎉
