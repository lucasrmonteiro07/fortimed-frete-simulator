# 📊 Estrutura do Projeto - Simulador de Frete Fortimed

```
fortimed-frete-simulator/
│
├── 📄 Arquivos Principais
│   ├── app.js                      ⚙️  Servidor Node.js/Express + Banco de dados
│   ├── index.html                  🎨 Interface do simulador
│   ├── simulator.js                ⚡ Lógica JavaScript do frontend
│   ├── styles.css                  🎭 Estilos e design responsivo
│   └── package.json                📦 Dependências do projeto
│
├── 📚 Documentação
│   ├── README.md                   📖 Documentação completa
│   ├── COMECE_AQUI.md              🚀 Guia rápido para iniciar
│   ├── IMPORTAR_DADOS_PDF.md       📋 Como importar dados do PDF
│   └── ESTRUTURA_PROJETO.md        📊 Este arquivo
│
├── 💾 Dados e Exemplos
│   └── EXEMPLOS_DADOS.js           📋 Exemplos prontos de transportadoras
│
├── 🚀 Scripts de Execução
│   ├── start.sh                    🐧 Script para Linux/Mac
│   └── start.bat                   🪟 Script para Windows
│
├── ⚙️  Configuração
│   ├── vercel.json                 ☁️  Configuração para deploy no Vercel
│   └── .gitignore                  🔐 Arquivos ignorados pelo Git
│
└── 📂 Pastas (quando criadas)
    └── node_modules/               📦 Dependências instaladas
```

## 🎯 Fluxo de Funcionamento

```
┌─────────────────────────────────────────────────────────┐
│                    SIMULADOR DE FRETE                    │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  1. FRONTEND (index.html + simulator.js)               │
│     └─ Interface de seleção:                            │
│        ├─ Transportadora                                │
│        ├─ Região                                        │
│        ├─ Cidade                                        │
│        ├─ Peso (kg)                                     │
│        └─ Valor (R$)                                    │
│                                                          │
│  2. REQUISIÇÃO AJAX (fetch)                             │
│     └─ POST /api/calcular-frete                         │
│                                                          │
│  3. BACKEND (app.js)                                    │
│     └─ Processa dados:                                  │
│        ├─ Valida entrada                                │
│        ├─ Busca tabela de frete                         │
│        ├─ Calcula: MAX(mínimo, peso × valor/kg)        │
│        └─ Retorna resultado JSON                        │
│                                                          │
│  4. RESPOSTA (JSON)                                     │
│     └─ Exibe resultado:                                 │
│        ├─ Transportadora                                │
│        ├─ Valor do Frete                                │
│        ├─ Valor Total                                   │
│        └─ Tabela de referência                          │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## 📋 Banco de Dados em Memória

O arquivo `app.js` contém estrutura:

```javascript
const freteDatabase = {
  transportadoras: [
    {
      id: 1,
      nome: "Sedex",
      ativa: true,
      regioes: [
        {
          regiao: "Região Sudeste",
          cidades: ["São Paulo", "Rio de Janeiro", ...],
          tabela: {
            minimo: 12.00,
            porKg: 1.00
          }
        }
      ]
    }
  ]
}
```

## 🔌 Endpoints da API

```
GET  /api/transportadoras
     └─ Retorna lista de transportadoras

GET  /api/transportadoras/:id/regioes
     └─ Retorna regiões de uma transportadora

GET  /api/transportadoras/:id/regioes/:regiao/cidades
     └─ Retorna cidades de uma região

POST /api/calcular-frete
     └─ Calcula o valor do frete
        Request: { transportadoraId, regiao, peso, valor }
        Response: { sucesso, transportadora, freteCalculado, valorTotal }
```

## 🎨 Interface do Usuário

```
┌────────────────────────────────────────────────────┐
│         SIMULADOR DE FRETE - FORTIMED              │
├────────────────────────────────────────────────────┤
│                                                    │
│  Transportadora: [Selecione] ▼                     │
│  Região:        [Selecione] ▼                      │
│  Cidade:        [Selecione] ▼                      │
│  Peso (kg):     [________]                         │
│  Valor (R$):    [________]                         │
│                                                    │
│             [CALCULAR FRETE]                       │
│                                                    │
│  ┌─ RESULTADO DO CÁLCULO ─────────────────────┐  │
│  │ Transportadora: Sedex                       │  │
│  │ Região:         Região Sudeste              │  │
│  │ Peso:           5.5 kg                      │  │
│  │ Valor:          R$ 150,00                   │  │
│  │ Frete:          R$ 12,00                    │  │
│  │ ┌─────────────────────────────────────────┐ │  │
│  │ │ VALOR TOTAL:    R$ 162,00              │ │  │
│  │ └─────────────────────────────────────────┘ │  │
│  └──────────────────────────────────────────────┘  │
│                                                    │
│  TABELAS DE REFERÊNCIA                             │
│  ┌──────────┬──────────┬────────────────────┐     │
│  │ Sedex    │ PAC      │ Jadlog             │     │
│  ├──────────┼──────────┼────────────────────┤     │
│  │ Sul      │ Sul      │ Sul                │     │
│  │ Min: 15  │ Min: 10  │ Min: 13            │     │
│  │ /kg: 1.2 │ /kg: 0.8 │ /kg: 1.1           │     │
│  └──────────┴──────────┴────────────────────┘     │
│                                                    │
└────────────────────────────────────────────────────┘
```

## 🚀 Como Começar

1. **Instalar**: `npm install`
2. **Executar**: `npm start`
3. **Acessar**: http://localhost:3000
4. **Testar**: Selecione transportadora e calcule frete
5. **Adicionar dados**: Edite `app.js` com seus dados

## 📊 Fórmula de Cálculo

```
Frete = MAX(valor_minimo, peso_kg × valor_por_kg)
Valor Total = Valor Mercadoria + Frete

Exemplo:
- Peso: 5 kg
- Valor mínimo: 15,00
- Valor por kg: 1,20
- Cálculo: MAX(15,00, 5 × 1,20) = MAX(15,00, 6,00) = 15,00
```

## 📱 Responsividade

```
DESKTOP              TABLET               MOBILE
┌──────────────┐    ┌──────────┐         ┌────────┐
│              │    │          │         │        │
│  Form 50%    │    │  Form    │         │ Form   │
│              │    │ 100% col │         │ 100%   │
│  Info 50%    │    │          │         │        │
│              │    │  Info    │         │ Info   │
│              │    │ 100% col │         │ 100%   │
└──────────────┘    └──────────┘         └────────┘
```

## 🔄 Ciclo de Vida da Aplicação

```
1. INICIALIZAÇÃO
   └─ Carregar transportadoras do banco
   └─ Popular dropdown de transportadoras
   └─ Carregar tabelas de referência

2. SELEÇÃO DO USUÁRIO
   └─ Seleciona transportadora
   └─ Carrega regiões via API
   └─ Seleciona região
   └─ Carrega cidades via API
   └─ Seleciona cidade (opcional)

3. ENTRADA DE DADOS
   └─ Insere peso
   └─ Insere valor

4. CÁLCULO
   └─ Submete formulário
   └─ Valida dados no backend
   └─ Consulta tabela de frete
   └─ Realiza cálculo

5. EXIBIÇÃO DE RESULTADO
   └─ Mostra valor do frete
   └─ Mostra valor total
   └─ Permite nova simulação
```

## 💾 Dados em Produção

Para usar em produção:

1. **Opção 1**: Banco de Dados
   - Migrar dados de `app.js` para banco SQL
   - API consulta banco em vez de memória

2. **Opção 2**: Arquivo JSON
   - Criar `transportadoras.json`
   - API carrega arquivo na inicialização

3. **Opção 3**: API Externa
   - Integrar com sistema de transportadoras
   - Consultar tabelas em tempo real

---

**Versão**: 1.0.0  
**Última atualização**: 2025  
**Documentação completa**: Veja `README.md`
