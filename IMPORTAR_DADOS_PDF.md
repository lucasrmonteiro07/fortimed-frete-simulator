# 📋 Como Importar Dados do PDF da Transportadora

Este guia explica como integrar os dados de frete do PDF da sua transportadora no Simulador de Frete Fortimed.

## 🔍 Entendo o Formato dos Dados

O sistema utiliza a seguinte estrutura:

```javascript
{
  id: 1,
  nome: "Nome da Transportadora",
  ativa: true,
  regioes: [
    { 
      regiao: "Nome da Região",
      cidades: ["Cidade 1", "Cidade 2", "Cidade 3"],
      tabela: { 
        minimo: 15.00,      // Valor mínimo de frete
        porKg: 1.20         // Valor por quilograma
      } 
    }
  ]
}
```

## 📖 Passo a Passo

### 1️⃣ Extrair Dados do PDF

Analise o PDF da transportadora e identifique:
- **Regiões** (ex: Sul, Sudeste, Nordeste)
- **Cidades** em cada região
- **Tabela de valores** (mínimo + valor por kg)

### 2️⃣ Adicionar Transportadora em `app.js`

Abra o arquivo `app.js` e localize a seção `freteDatabase`:

```javascript
const freteDatabase = {
  transportadoras: [
    // Adicione aqui
  ]
};
```

### 3️⃣ Exemplo Prático

Se o PDF tiver dados assim:

```
TRANSPORTADORA: Exemplo Express
REGIÃO: Sudeste
CIDADES: São Paulo, Rio de Janeiro, Belo Horizonte
FRETE MÍNIMO: R$ 20.00
VALOR POR KG: R$ 1.50
```

Adicione ao código:

```javascript
{
  id: 4,
  nome: "Exemplo Express",
  ativa: true,
  regioes: [
    {
      regiao: "Região Sudeste",
      cidades: ["São Paulo", "Rio de Janeiro", "Belo Horizonte"],
      tabela: {
        minimo: 20.00,
        porKg: 1.50
      }
    }
  ]
}
```

### 4️⃣ Adicionar Mais Regiões

Para adicionar mais regiões à mesma transportadora:

```javascript
{
  id: 4,
  nome: "Exemplo Express",
  ativa: true,
  regioes: [
    {
      regiao: "Região Sudeste",
      cidades: ["São Paulo", "Rio de Janeiro", "Belo Horizonte"],
      tabela: { minimo: 20.00, porKg: 1.50 }
    },
    {
      regiao: "Região Sul",
      cidades: ["Curitiba", "Porto Alegre"],
      tabela: { minimo: 25.00, porKg: 1.80 }
    },
    {
      regiao: "Região Nordeste",
      cidades: ["Salvador", "Fortaleza"],
      tabela: { minimo: 30.00, porKg: 2.00 }
    }
  ]
}
```

## 🔄 Template Pronto

Use este template para copiar/colar:

```javascript
{
  id: [ID_ÚNICO],
  nome: "[NOME_TRANSPORTADORA]",
  ativa: true,
  regioes: [
    {
      regiao: "[NOME_REGIAO_1]",
      cidades: ["[CIDADE_1]", "[CIDADE_2]", "[CIDADE_3]"],
      tabela: { minimo: [MINIMO], porKg: [VALOR_POR_KG] }
    },
    {
      regiao: "[NOME_REGIAO_2]",
      cidades: ["[CIDADE_4]", "[CIDADE_5]"],
      tabela: { minimo: [MINIMO], porKg: [VALOR_POR_KG] }
    }
  ]
}
```

## 💾 Salvar Dados em Banco de Dados (Futuro)

Quando implementar um banco de dados, use esta estrutura de tabelas:

### Tabela: transportadoras
```sql
CREATE TABLE transportadoras (
  id INT PRIMARY KEY,
  nome VARCHAR(100),
  ativa BOOLEAN
);
```

### Tabela: regioes
```sql
CREATE TABLE regioes (
  id INT PRIMARY KEY,
  transportadora_id INT,
  nome VARCHAR(100),
  FOREIGN KEY (transportadora_id) REFERENCES transportadoras(id)
);
```

### Tabela: cidades
```sql
CREATE TABLE cidades (
  id INT PRIMARY KEY,
  regiao_id INT,
  nome VARCHAR(100),
  FOREIGN KEY (regiao_id) REFERENCES regioes(id)
);
```

### Tabela: tabelas_frete
```sql
CREATE TABLE tabelas_frete (
  id INT PRIMARY KEY,
  regiao_id INT,
  valor_minimo DECIMAL(10,2),
  valor_por_kg DECIMAL(10,2),
  FOREIGN KEY (regiao_id) REFERENCES regioes(id)
);
```

## ⚠️ Cuidados Importantes

1. **Use ID único** para cada transportadora
2. **Nomes consistentes** para regiões
3. **Valores em decimal** (ex: 15.50, não 15,50)
4. **Cidades sem caracteres especiais** quando possível
5. **Teste o cálculo** após adicionar novos dados

## 🧪 Testar os Dados

Após adicionar:

1. Inicie o servidor: `npm start`
2. Acesse: `http://localhost:3000`
3. Teste selecionando a transportadora, região e cidade
4. Verifique se os valores calculados estão corretos

## 📞 Exemplo Real Completo

Se você tem um PDF da "Transportadora ABC" com:

```
TRANSPORTADORA ABC
Tabela de Frete 2025

REGIÃO SUL:
- Porto Alegre, Curitiba, Florianópolis
- Mínimo: R$ 15,00 | Por kg: R$ 1,20

REGIÃO SUDESTE:
- São Paulo, Rio de Janeiro, Belo Horizonte
- Mínimo: R$ 12,00 | Por kg: R$ 1,00

REGIÃO NORDESTE:
- Salvador, Recife, Fortaleza
- Mínimo: R$ 18,00 | Por kg: R$ 1,40
```

Adicione isso no `app.js`:

```javascript
{
  id: 5,
  nome: "Transportadora ABC",
  ativa: true,
  regioes: [
    {
      regiao: "Região Sul",
      cidades: ["Porto Alegre", "Curitiba", "Florianópolis"],
      tabela: { minimo: 15.00, porKg: 1.20 }
    },
    {
      regiao: "Região Sudeste",
      cidades: ["São Paulo", "Rio de Janeiro", "Belo Horizonte"],
      tabela: { minimo: 12.00, porKg: 1.00 }
    },
    {
      regiao: "Região Nordeste",
      cidades: ["Salvador", "Recife", "Fortaleza"],
      tabela: { minimo: 18.00, porKg: 1.40 }
    }
  ]
}
```

Pronto! Os dados estarão disponíveis no simulador.

---

**Dúvidas?** Veja o arquivo `app.js` para mais exemplos.
