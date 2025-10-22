📋 COMO EXTRAIR DADOS DO PDF DA FORTIMED
═══════════════════════════════════════════════════════════════════════════

## 📂 ARQUIVO PDF ENCONTRADO
```
docs/88126_48053960000146-FORTIMED DISTRIBUIDORA DE MATERIAL MEDICO E MEDICAMENTOS LTDA (1).pdf
```

---

## ⚡ OPÇÃO 1: EXTRAÇÃO MANUAL (Mais rápido)

### Passo 1: Abrir PDF
1. Vá até a pasta: `docs`
2. Duplo clique no arquivo PDF
3. Abre no Adobe Reader, Chrome ou navegador padrão

### Passo 2: Procurar Tabelas de Frete
- Procure por seções como:
  - "Tabela de Frete"
  - "Tarifas"
  - "Valores de Frete"
  - "Regiões"
  - "Cidades Atendidas"

### Passo 3: Identificar Informações
Para cada REGIÃO, procure:
- ✅ Nome da região (ex: "Sudeste")
- ✅ Cidades incluídas (ex: São Paulo, Rio de Janeiro)
- ✅ Valor MÍNIMO de frete (ex: R$ 50.00)
- ✅ Valor POR KG (ex: R$ 2.50/kg)

### Passo 4: Montar JSON
Crie um objeto com os dados:

```javascript
{
  id: 4,
  nome: "FORTIMED",
  ativa: true,
  regioes: [
    {
      regiao: "Região Nome Aqui",
      cidades: ["Cidade 1", "Cidade 2", "Cidade 3"],
      tabela: {
        minimo: 50.00,      // Valor mínimo
        porKg: 2.50         // Valor por kg
      }
    },
    // Adicione mais regiões aqui
  ]
}
```

### Passo 5: Copiar para app.js
1. Abra: `app.js`
2. Procure: `transportadoras: [`
3. Procure: `id: 4, nome: "FORTIMED"`
4. Substitua os dados do array `regioes`
5. Salve o arquivo
6. Reinicie: `npm start`

---

## 🖥️ OPÇÃO 2: FERRAMENTA ONLINE (Se PDF protegido)

### Usar iLovePDF
1. Acesse: https://www.ilovepdf.com/extract-pdf
2. Upload do PDF
3. Clique "Extrair" ou "Extract"
4. Download dos dados
5. Copie as tabelas
6. Cole em EXEMPLOS_DADOS.js

### Usar CloudConvert
1. Acesse: https://cloudconvert.com
2. Upload: PDF
3. Converter para: CSV ou XLSX
4. Download
5. Abra no Excel
6. Copie os dados

---

## 📊 FORMATO ESPERADO

### Exemplo Completo:
```javascript
{
  id: 4,
  nome: "FORTIMED",
  ativa: true,
  regioes: [
    {
      regiao: "Região Sul",
      cidades: ["Porto Alegre", "Curitiba", "Florianópolis", "Blumenau"],
      tabela: { minimo: 20.00, porKg: 1.50 }
    },
    {
      regiao: "Região Sudeste",
      cidades: ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Campinas"],
      tabela: { minimo: 15.00, porKg: 1.10 }
    },
    {
      regiao: "Região Nordeste",
      cidades: ["Salvador", "Recife", "Fortaleza", "Natal"],
      tabela: { minimo: 22.00, porKg: 1.60 }
    },
    {
      regiao: "Região Norte",
      cidades: ["Manaus", "Belém", "Porto Velho", "Macapá"],
      tabela: { minimo: 30.00, porKg: 2.00 }
    },
    {
      regiao: "Região Centro-Oeste",
      cidades: ["Goiânia", "Cuiabá", "Campo Grande", "Brasília"],
      tabela: { minimo: 25.00, porKg: 1.70 }
    }
  ]
}
```

---

## 🔍 CAMPOS OBRIGATÓRIOS

| Campo | Tipo | Exemplo |
|-------|------|---------|
| `id` | número | 4 |
| `nome` | texto | "FORTIMED" |
| `ativa` | booleano | true |
| `regioes` | array | [...] |
| `regiao` | texto | "Região Sudeste" |
| `cidades` | array | ["São Paulo", "Rio de Janeiro"] |
| `minimo` | número decimal | 15.00 |
| `porKg` | número decimal | 1.10 |

---

## ⚠️ CUIDADOS IMPORTANTES

1. ❌ Não use: R$ 15,50 ✅ Use: 15.50
2. ❌ Não use: "Região sudeste" ✅ Use: "Região Sudeste" (maiúscula)
3. ❌ Não repita IDs ✅ Use ID único (4, 5, 6...)
4. ❌ Não esqueça as vírgulas entre objetos
5. ❌ Não misture aspas simples e duplas
6. ✅ Mantenha a indentação (2 espaços)

---

## 🛠️ PASSO A PASSO DETALHADO

### 1. Abrir o PDF
```
c:\Users\monteiro\Documents\GitHub\fortimed-frete-simulator\docs\
88126_48053960000146-FORTIMED DISTRIBUIDORA...pdf
```

### 2. Procurar seção de frete (exemplo):
```
TABELA DE FRETE - FORTIMED 2025

REGIÃO SUL
Cidades: Porto Alegre, Curitiba, Florianópolis, ...
Valor mínimo: R$ 20,00
Valor por kg: R$ 1,50

REGIÃO SUDESTE
Cidades: São Paulo, Rio de Janeiro, Belo Horizonte, ...
Valor mínimo: R$ 15,00
Valor por kg: R$ 1,10
```

### 3. Converter para JSON:
```javascript
{
  regiao: "Região Sul",
  cidades: ["Porto Alegre", "Curitiba", "Florianópolis"],
  tabela: {
    minimo: 20.00,
    porKg: 1.50
  }
}
```

### 4. Editar app.js:
Localize:
```javascript
{
  id: 4,
  nome: "FORTIMED",
  ativa: true,
  regioes: [
    // SUBSTITUA POR SEUS DADOS AQUI
  ]
}
```

### 5. Salve e reinicie:
```bash
npm start
```

---

## 🔄 TEMPLATE PRONTO PARA COLAR

Se o PDF tiver essa estrutura, use este template:

```javascript
{
  id: 4,
  nome: "FORTIMED",
  ativa: true,
  regioes: [
    {
      regiao: "Região Sul",
      cidades: [],  // Copie as cidades aqui
      tabela: { minimo: 0.00, porKg: 0.00 }  // Copie os valores
    },
    {
      regiao: "Região Sudeste",
      cidades: [],
      tabela: { minimo: 0.00, porKg: 0.00 }
    },
    {
      regiao: "Região Nordeste",
      cidades: [],
      tabela: { minimo: 0.00, porKg: 0.00 }
    },
    {
      regiao: "Região Norte",
      cidades: [],
      tabela: { minimo: 0.00, porKg: 0.00 }
    },
    {
      regiao: "Região Centro-Oeste",
      cidades: [],
      tabela: { minimo: 0.00, porKg: 0.00 }
    }
  ]
}
```

---

## ✅ CHECKLIST DE VERIFICAÇÃO

Após adicionar os dados, verifique:

- [ ] Arquivo app.js foi editado
- [ ] JSON está bem formado (sem erros de sintaxe)
- [ ] ID 4 está correto
- [ ] Nome "FORTIMED" está correto
- [ ] Ativa está como `true`
- [ ] Todas as 5 regiões foram adicionadas
- [ ] Cidades estão em array com aspas duplas
- [ ] Valores estão em decimal (15.50 não 15,50)
- [ ] Vírgulas estão corretas
- [ ] Arquivo foi salvo
- [ ] Servidor foi reiniciado

---

## 🧪 COMO TESTAR

1. Execute: `npm start`
2. Abra: http://localhost:3000
3. Selecione: "FORTIMED"
4. Escolha uma região
5. Veja se aparecem as cidades corretas
6. Teste calcular um frete

---

## 📞 AJUDA

### Se der erro de JSON:
1. Use um validador: https://jsonlint.com
2. Copie seu JSON e valide
3. Corrija os erros

### Se as cidades não aparecer:
1. Verifique se `ativa: true`
2. Reinicie o servidor
3. Recarregue a página

### Se o cálculo estiver errado:
1. Verifique os valores de `minimo` e `porKg`
2. Teste com uma calculadora
3. Confirme os valores no PDF

---

## 📄 ARQUIVO FINAL

Após seguir todos os passos, seu `app.js` terá:
✅ SEDEX (ID 1)
✅ PAC (ID 2)
✅ JADLOG (ID 3)
✅ FORTIMED (ID 4) ← COM SEUS DADOS!

---

**Próximo passo**: Abra o PDF e comece a extrair os dados! 📋

Qualquer dúvida, consulte este arquivo ou IMPORTAR_DADOS_PDF.md
