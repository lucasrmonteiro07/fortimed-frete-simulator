# Simulador de Frete - Fortimed

Aplicação web para simular e calcular valores de frete baseado em tabelas de transportadoras, regiões e peso da mercadoria.

## 🚀 Funcionalidades

- ✅ Seleção de transportadora
- ✅ Seleção de região/cidade
- ✅ Entrada de peso e valor da mercadoria
- ✅ Cálculo automático de frete
- ✅ Exibição de valor total (mercadoria + frete)
- ✅ Tabelas de referência com valores mínimos e por kg
- ✅ Interface responsiva e intuitiva
- ✅ Suporte a múltiplas transportadoras

## 📋 Requisitos

- Node.js >= 12.0
- npm ou yarn

## 🔧 Instalação

1. Instale as dependências:
```bash
npm install
```

## ▶️ Executar

Para iniciar o servidor:
```bash
npm start
```

Ou em modo desenvolvimento:
```bash
npm run dev
```

A aplicação estará disponível em: **http://localhost:3000**

## 📐 Estrutura de Arquivos

```
fortimed-frete-simulator/
├── app.js              # Servidor Node.js/Express
├── index.html          # Interface HTML
├── simulator.js        # Lógica JavaScript frontend
├── styles.css          # Estilos CSS
├── package.json        # Dependências do projeto
└── README.md           # Este arquivo
```

## 🔌 API Endpoints

### Obter Transportadoras
```
GET /api/transportadoras
```
Retorna lista de transportadoras ativas

### Obter Regiões
```
GET /api/transportadoras/:id/regioes
```
Retorna regiões disponíveis para uma transportadora

### Obter Cidades
```
GET /api/transportadoras/:id/regioes/:regiao/cidades
```
Retorna cidades de uma região específica

### Calcular Frete
```
POST /api/calcular-frete
```

**Body:**
```json
{
  "transportadoraId": 1,
  "regiao": "Região Sudeste",
  "peso": 5.5,
  "valor": 150.00
}
```

**Response:**
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

## 📊 Transportadoras Disponíveis

1. **Sedex** - Frete expresso
2. **PAC** - Frete econômico
3. **Jadlog** - Frete intermediário

## 🌍 Regiões Suportadas

- Região Sul
- Região Sudeste
- Região Nordeste
- Região Norte
- Região Centro-Oeste

## 💡 Como Adicionar Novas Transportadoras

Edite o arquivo `app.js` e adicione novas entradas no array `freteDatabase.transportadoras`:

```javascript
{
  id: 4,
  nome: "Sua Transportadora",
  ativa: true,
  regioes: [
    { 
      regiao: "Região Sul", 
      cidades: ["Porto Alegre", "Curitiba", ...],
      tabela: { minimo: 15.00, porKg: 1.20 } 
    },
    // ... mais regiões
  ]
}
```

## 💡 Como Adicionar Novas Cidades

Localize a transportadora e região desejadas no arquivo `app.js` e adicione cidades ao array `cidades`:

```javascript
cidades: ["Porto Alegre", "Curitiba", "Florianópolis", "Sua Nova Cidade"]
```

## 📈 Fórmula de Cálculo

```
Frete = MAX(valor_mínimo, peso * valor_por_kg)
Valor Total = Valor da Mercadoria + Frete
```

## 🎨 Customização

### Cores
Edite as variáveis CSS em `styles.css`:

```css
:root {
    --primary-color: #1e40af;
    --secondary-color: #64748b;
    /* ... outras cores */
}
```

### Transportadoras e Valores
Edite o banco de dados em `app.js`, seção `freteDatabase`

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona em:
- Desktops
- Tablets
- Smartphones

## 🔐 Notas de Segurança

- Validação de entrada no frontend e backend
- Prevenção de valores negativos
- Sanitização de parâmetros de URL

## 📄 Licença

ISC

## 👤 Autor

Fortimed

## 🚀 Próximas Melhorias

- [ ] Integração com banco de dados
- [ ] Autenticação de usuários
- [ ] Histórico de cálculos
- [ ] Exportação de resultado em PDF
- [ ] Integração com sistemas de pagamento
- [ ] API para integração com e-commerce
- [ ] Importação de tabelas via upload de arquivo

---

Para dúvidas ou contribuições, entre em contato.
