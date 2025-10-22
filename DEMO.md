# 🎯 Demo - Simulador de Frete Fortimed

## Cenários de Uso

### 📌 Cenário 1: Calcular Frete Sedex para São Paulo

```
1. Abrir http://localhost:3000
2. Selecionar: Sedex
3. Selecionar Região: Região Sudeste
4. Selecionar Cidade: São Paulo
5. Peso: 5.5 kg
6. Valor da Mercadoria: R$ 150.00

RESULTADO:
✅ Transportadora: Sedex
✅ Região: Região Sudeste
✅ Peso: 5.5 kg
✅ Valor: R$ 150.00
✅ Frete: R$ 12.00 (máximo entre mínimo de R$ 12.00 ou 5.5 × 1.00)
✅ VALOR TOTAL: R$ 162.00
```

### 📌 Cenário 2: Calcular Frete PAC para Porto Alegre

```
1. Abrir http://localhost:3000
2. Selecionar: PAC
3. Selecionar Região: Região Sul
4. Selecionar Cidade: Porto Alegre
5. Peso: 10 kg
6. Valor da Mercadoria: R$ 250.00

RESULTADO:
✅ Transportadora: PAC
✅ Região: Região Sul
✅ Peso: 10 kg
✅ Valor: R$ 250.00
✅ Frete: R$ 10.00 (máximo entre mínimo de R$ 10.00 ou 10 × 0.80 = 8.00)
✅ VALOR TOTAL: R$ 260.00
```

### 📌 Cenário 3: Calcular Frete Jadlog para Manaus (região cara)

```
1. Abrir http://localhost:3000
2. Selecionar: Jadlog
3. Selecionar Região: Região Norte
4. Selecionar Cidade: Manaus
5. Peso: 2 kg
6. Valor da Mercadoria: R$ 100.00

RESULTADO:
✅ Transportadora: Jadlog
✅ Região: Região Norte
✅ Peso: 2 kg
✅ Valor: R$ 100.00
✅ Frete: R$ 22.00 (máximo entre mínimo de R$ 22.00 ou 2 × 1.60 = 3.20)
✅ VALOR TOTAL: R$ 122.00
```

---

## 🔢 Cálculos de Exemplo

### Exemplo 1: Peso pequeno (usa mínimo)
```
Transportadora: Sedex
Região: Sudeste
Peso: 5 kg
Valor: R$ 100

Cálculo do Frete:
- Mínimo: R$ 12.00
- Por kg: 5 × 1.00 = R$ 5.00
- Resultado: MAX(12.00, 5.00) = R$ 12.00 ✅

Valor Total: R$ 100.00 + R$ 12.00 = R$ 112.00
```

### Exemplo 2: Peso grande (usa proporção)
```
Transportadora: Sedex
Região: Sudeste
Peso: 50 kg
Valor: R$ 500

Cálculo do Frete:
- Mínimo: R$ 12.00
- Por kg: 50 × 1.00 = R$ 50.00
- Resultado: MAX(12.00, 50.00) = R$ 50.00 ✅

Valor Total: R$ 500.00 + R$ 50.00 = R$ 550.00
```

### Exemplo 3: Regiões diferentes, mesmo peso
```
Peso: 10 kg
Valor: R$ 200

SEDEX:
- Sudeste: MIN 12 + 10×1.00 = R$ 12 ➜ Total: R$ 212
- Nordeste: MIN 18 + 10×1.40 = R$ 18 ➜ Total: R$ 218
- Norte: MIN 25 + 10×1.80 = R$ 25 ➜ Total: R$ 225

PAC:
- Sudeste: MIN 8 + 10×0.70 = R$ 10 ➜ Total: R$ 210
- Nordeste: MIN 12 + 10×0.95 = R$ 12 ➜ Total: R$ 212
- Norte: MIN 18 + 10×1.30 = R$ 18 ➜ Total: R$ 218

JADLOG:
- Sudeste: MIN 10 + 10×0.85 = R$ 10 ➜ Total: R$ 210
- Nordeste: MIN 16 + 10×1.25 = R$ 16 ➜ Total: R$ 216
- Norte: MIN 22 + 10×1.60 = R$ 22 ➜ Total: R$ 222
```

---

## 📊 Tabelas de Referência Exibidas

Na página, o usuário verá uma seção com as tabelas de cada transportadora:

### SEDEX
```
REGIÃO SUL
- Mínimo: R$ 15,00 | Por kg: R$ 1,20

REGIÃO SUDESTE
- Mínimo: R$ 12,00 | Por kg: R$ 1,00

REGIÃO NORDESTE
- Mínimo: R$ 18,00 | Por kg: R$ 1,40

REGIÃO NORTE
- Mínimo: R$ 25,00 | Por kg: R$ 1,80

REGIÃO CENTRO-OESTE
- Mínimo: R$ 20,00 | Por kg: R$ 1,50
```

### PAC
```
REGIÃO SUL
- Mínimo: R$ 10,00 | Por kg: R$ 0,80

REGIÃO SUDESTE
- Mínimo: R$ 8,00 | Por kg: R$ 0,70

REGIÃO NORDESTE
- Mínimo: R$ 12,00 | Por kg: R$ 0,95

REGIÃO NORTE
- Mínimo: R$ 18,00 | Por kg: R$ 1,30

REGIÃO CENTRO-OESTE
- Mínimo: R$ 15,00 | Por kg: R$ 1,10
```

### JADLOG
```
REGIÃO SUL
- Mínimo: R$ 13,00 | Por kg: R$ 1,10

REGIÃO SUDESTE
- Mínimo: R$ 10,00 | Por kg: R$ 0,85

REGIÃO NORDESTE
- Mínimo: R$ 16,00 | Por kg: R$ 1,25

REGIÃO NORTE
- Mínimo: R$ 22,00 | Por kg: R$ 1,60

REGIÃO CENTRO-OESTE
- Mínimo: R$ 18,00 | Por kg: R$ 1,35
```

---

## 🎮 Testes de Validação

### ✅ Teste 1: Valores Inválidos
```
Entrada: Peso = -5, Valor = 100
Resultado: ❌ Erro: "Peso e valor devem ser maiores que zero"
```

### ✅ Teste 2: Campos Vazio
```
Entrada: Transportadora vazia
Resultado: ❌ Erro: "Por favor, preencha todos os campos obrigatórios"
```

### ✅ Teste 3: Valores Válidos
```
Entrada: Peso = 5.5, Valor = 150.00
Resultado: ✅ Cálculo realizado com sucesso
```

### ✅ Teste 4: Números Decimais
```
Entrada: Peso = 5.75 kg
Resultado: ✅ Aceito e processado corretamente
```

---

## 🌐 Endpoints da API

### GET /api/transportadoras
```
Resposta:
[
  { "id": 1, "nome": "Sedex", "ativa": true },
  { "id": 2, "nome": "PAC", "ativa": true },
  { "id": 3, "nome": "Jadlog", "ativa": true }
]
```

### GET /api/transportadoras/1/regioes
```
Resposta:
[
  {
    "regiao": "Região Sul",
    "cidades": ["Porto Alegre", "Curitiba", ...],
    "tabela": { "minimo": 15, "porKg": 1.2 }
  },
  ...
]
```

### POST /api/calcular-frete
```
Requisição:
{
  "transportadoraId": 1,
  "regiao": "Região Sudeste",
  "peso": 5.5,
  "valor": 150.00
}

Resposta:
{
  "sucesso": true,
  "transportadora": "Sedex",
  "regiao": "Região Sudeste",
  "peso": 5.5,
  "valor": 150.00,
  "freteCalculado": 12.00,
  "valorTotal": 162.00
}
```

---

## 📱 Testes em Diferentes Dispositivos

### 🖥️ Desktop (1920x1080)
```
Layout: 2 colunas
├─ Coluna 1: Formulário
└─ Coluna 2: Resultado + Tabelas
```

### 📱 Tablet (768px)
```
Layout: Ajusta para 1 coluna
├─ Formulário (100%)
├─ Resultado (100%)
└─ Tabelas (100%)
```

### 📱 Mobile (375px)
```
Layout: 1 coluna vertical
├─ Formulário (100%)
├─ Resultado (100%)
└─ Tabelas (100%)
Todos os elementos expandem verticalmente
```

---

## 🎨 Elementos Visuais

### Cores Utilizadas
```css
--primary-color: #1e40af    /* Azul escuro - Botões principais */
--secondary-color: #64748b  /* Cinza - Botões secundários */
--success-color: #059669    /* Verde - Valor do frete */
--danger-color: #dc2626     /* Vermelho - Erros */
--light-bg: #f8fafc         /* Cinza muito claro - Fundo */
--white: #ffffff            /* Branco - Cartões */
```

### Animações
```css
- Fade in ao exibir resultado (0.3s)
- Hover em botões com sombra e elevação
- Scroll suave para resultado
```

---

## 💾 Exemplo de Resposta Completa

```json
{
  "sucesso": true,
  "transportadora": "Sedex",
  "regiao": "Região Sudeste",
  "peso": 5.5,
  "valor": 150.00,
  "freteCalculado": 12.00,
  "valorTotal": 162.00
}
```

---

## 🔄 Fluxo Completo do Usuário

```
1. Usuário acessa http://localhost:3000
   ↓
2. Página carrega
   - Obtém lista de transportadoras via GET /api/transportadoras
   - Carrega tabelas de referência
   ↓
3. Usuário seleciona Sedex
   - Página obtém regiões via GET /api/transportadoras/1/regioes
   ↓
4. Usuário seleciona "Região Sudeste"
   - Página obtém cidades da região
   ↓
5. Usuário seleciona "São Paulo" (opcional)
   ↓
6. Usuário insere:
   - Peso: 5.5
   - Valor: 150.00
   ↓
7. Usuário clica "Calcular Frete"
   - Frontend valida dados
   - POST para /api/calcular-frete
   ↓
8. Backend processa:
   - Valida entrada
   - Busca tabela: Sedex → Sudeste → {min: 12, porKg: 1.00}
   - Calcula: MAX(12, 5.5 × 1.00) = 12.00
   - Retorna JSON
   ↓
9. Frontend exibe resultado:
   - Valor do Frete: R$ 12.00
   - Valor Total: R$ 162.00
   ↓
10. Usuário pode fazer nova simulação
```

---

**Pronto para testar!** Execute `npm start` e experimente! 🚀
