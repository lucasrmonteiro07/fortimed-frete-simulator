const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Dados de tabelas de frete das transportadoras
// Apenas Expresso São Miguel com dados reais
const freteDatabase = {
  transportadoras: [
    {
      id: 5,
      nome: "Expresso São Miguel",
      ativa: true,
      regioes: [
        {
          regiao: "São Paulo",
          cidades: [
            "SP1 - (EI/JEL/FO/ET) - 70,82 | 1,152",
            "SP2 - (FI/FEM/FO/FP/EQ/FB/ER/ES) - 69,92 | 1,139",
            "SP3 - (FX/FJ) - 74,26 | 1,204",
            "SP4 - (EI/FR) - 70,82 | 1,152"
          ],
          zonas: [
            { zona: "SP1", minimo: 70.82, porKg: 1.152 },
            { zona: "SP2", minimo: 69.92, porKg: 1.139 },
            { zona: "SP3", minimo: 74.26, porKg: 1.204 },
            { zona: "SP4", minimo: 70.82, porKg: 1.152 }
          ],
          tabela: { minimo: 70.82, porKg: 1.152 }
        },
        {
          regiao: "Paraná",
          cidades: [
            "PR1 - (PI/XXQ/IE/VRG/CG/EI/AW) - 43,99 | 0,746",
            "PR2 - (TI/U/FA/BM/EB/DA/O) - 52,91 | 0,881",
            "PR3 - (CC/AS/EX/BX/AZ/DR) - 59,78 | 0,985",
            "PR4 - (EI/DZ/DO/CQ/DS/ED) - 45,55 | 0,774",
            "PR5 - (DD/FG/FK/CY/EN/CR) - 58,53 | 0,965",
            "PR6 - (FV/DU/FW/D/BF/DY/DJ/DM/EC) - 51,83 | 0,866"
          ],
          zonas: [
            { zona: "PR1", minimo: 43.99, porKg: 0.746 },
            { zona: "PR2", minimo: 52.91, porKg: 0.881 },
            { zona: "PR3", minimo: 59.78, porKg: 0.985 },
            { zona: "PR4", minimo: 45.55, porKg: 0.774 },
            { zona: "PR5", minimo: 58.53, porKg: 0.965 },
            { zona: "PR6", minimo: 51.83, porKg: 0.866 }
          ],
          tabela: { minimo: 43.99, porKg: 0.746 }
        },
        {
          regiao: "Santa Catarina",
          cidades: [
            "SC1 - (BI/GH/IBU/DQ/N/BR/DT/EW/BU/BZ/BA) - 39,07 | 0,671",
            "SC2 - (AR/CH/AG/V/AH/DK/FN/Y/DN/AU/L) - 37,26 | 0,643",
            "SC3 - (FI/DE/DI/FM/EP/D/BO/BW/CJ/EL) - 42,75 | 0,727",
            "SC4 - (EE/CD/BT/EY/BY/CA) - 42,04 | 0,717",
            "SC5 - (CS/DH/EZ) - 48,38 | 0,812",
            "SC6 - (EU/DF/DG/GE/DC/FE/GF) - 34,87 | 0,608"
          ],
          zonas: [
            { zona: "SC1", minimo: 39.07, porKg: 0.671 },
            { zona: "SC2", minimo: 37.26, porKg: 0.643 },
            { zona: "SC3", minimo: 42.75, porKg: 0.727 },
            { zona: "SC4", minimo: 42.04, porKg: 0.717 },
            { zona: "SC5", minimo: 48.38, porKg: 0.812 },
            { zona: "SC6", minimo: 34.87, porKg: 0.608 }
          ],
          tabela: { minimo: 34.87, porKg: 0.608 }
        },
        {
          regiao: "Rio Grande do Sul",
          cidades: [
            "RS1 - (A/B/AT/CX/FL/CZ/CU/GP) - 26,44 | 0,481",
            "RS2 - (BS/FHS/EH/DX/IA/FX/ED) - 25,22 | 0,463",
            "RS3 - (C/CF/AE/D/EBK/J/BP/AU/BV/CW/IA/X/GC/GD) - 30,25 | 0,538",
            "RS4 - (AA/AB/AC/BH/W/IK/ZG/A/K/M/AO) - 35,80 | 0,621",
            "RS5 - (AD/CK/CL/AM/AN/FD) - 29,64 | 0,529",
            "RS6 - (AQ/BB/BC/BD/BE/BG/AY/BJ) - 41,84 | 0,712",
            "RS7 - (AI/AJ/BQ) - 34,13 | 0,598",
            "RS8 - (DL/CN/BM/FS/AP) - 30,82 | 0,546"
          ],
          zonas: [
            { zona: "RS1", minimo: 26.44, porKg: 0.481 },
            { zona: "RS2", minimo: 25.22, porKg: 0.463 },
            { zona: "RS3", minimo: 30.25, porKg: 0.538 },
            { zona: "RS4", minimo: 35.80, porKg: 0.621 },
            { zona: "RS5", minimo: 29.64, porKg: 0.529 },
            { zona: "RS6", minimo: 41.84, porKg: 0.712 },
            { zona: "RS7", minimo: 34.13, porKg: 0.598 },
            { zona: "RS8", minimo: 30.82, porKg: 0.546 }
          ],
          tabela: { minimo: 25.22, porKg: 0.463 }
        }
      ]
    }
  ]
};

// Rota para obter regiões e cidades
app.get('/api/transportadoras', (req, res) => {
  const transportadoras = freteDatabase.transportadoras.map(t => ({
    id: t.id,
    nome: t.nome,
    ativa: t.ativa
  }));
  res.json(transportadoras);
});

// Rota para obter regiões de uma transportadora
app.get('/api/transportadoras/:id/regioes', (req, res) => {
  const transportadora = freteDatabase.transportadoras.find(t => t.id === parseInt(req.params.id));
  if (!transportadora) {
    return res.status(404).json({ erro: 'Transportadora não encontrada' });
  }
  res.json(transportadora.regioes);
});

// Rota para obter cidades de uma região
app.get('/api/transportadoras/:id/regioes/:regiao/cidades', (req, res) => {
  const transportadora = freteDatabase.transportadoras.find(t => t.id === parseInt(req.params.id));
  if (!transportadora) {
    return res.status(404).json({ erro: 'Transportadora não encontrada' });
  }
  
  const regiao = transportadora.regioes.find(r => r.regiao === decodeURIComponent(req.params.regiao));
  if (!regiao) {
    return res.status(404).json({ erro: 'Região não encontrada' });
  }
  
  res.json(regiao.cidades);
});

// Rota para calcular frete
app.post('/api/calcular-frete', (req, res) => {
  const { transportadoraId, regiao, peso, valor } = req.body;

  if (!transportadoraId || !regiao || !peso || peso <= 0 || !valor || valor <= 0) {
    return res.status(400).json({ erro: 'Dados inválidos' });
  }

  const transportadora = freteDatabase.transportadoras.find(t => t.id === parseInt(transportadoraId));
  if (!transportadora) {
    return res.status(404).json({ erro: 'Transportadora não encontrada' });
  }

  const regiaoDados = transportadora.regioes.find(r => r.regiao === regiao);
  if (!regiaoDados) {
    return res.status(404).json({ erro: 'Região não encontrada' });
  }

  const { minimo, porKg } = regiaoDados.tabela;
  const freteCalculado = Math.max(minimo, peso * porKg);

  res.json({
    sucesso: true,
    transportadora: transportadora.nome,
    regiao: regiao,
    peso: peso,
    valor: valor,
    freteCalculado: parseFloat(freteCalculado.toFixed(2)),
    valorTotal: parseFloat((valor + freteCalculado).toFixed(2))
  });
});

// Exportar para Vercel
module.exports = app;

// Local development
const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Simulador de Frete Fortimed rodando em http://localhost:${PORT}`);
  });
}
