// ============================================================
// EXEMPLOS DE DADOS PARA ADICIONAR NO app.js
// ============================================================
// 
// Copie e cole estes exemplos dentro de "transportadoras: [" 
// no arquivo app.js, mantendo o mesmo padrão
//
// ============================================================

// EXEMPLO 1: Transportadora com 2 regiões
{
  id: 4,
  nome: "Translog Express",
  ativa: true,
  regioes: [
    {
      regiao: "Região Sudeste",
      cidades: ["São Paulo", "Campinas", "Sorocaba", "Ribeirão Preto"],
      tabela: { minimo: 12.00, porKg: 1.00 }
    },
    {
      regiao: "Região Sul",
      cidades: ["Curitiba", "Porto Alegre", "Santa Maria"],
      tabela: { minimo: 18.00, porKg: 1.40 }
    }
  ]
}

// EXEMPLO 2: Transportadora com 5 regiões (completa)
{
  id: 5,
  nome: "Loggi",
  ativa: true,
  regioes: [
    {
      regiao: "Região Sul",
      cidades: ["Porto Alegre", "Curitiba", "Florianópolis", "Santa Maria", "Caxias do Sul"],
      tabela: { minimo: 16.00, porKg: 1.15 }
    },
    {
      regiao: "Região Sudeste",
      cidades: ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Brasília", "Campinas", "Sorocaba"],
      tabela: { minimo: 11.00, porKg: 0.90 }
    },
    {
      regiao: "Região Nordeste",
      cidades: ["Salvador", "Recife", "Fortaleza", "Natal", "João Pessoa", "Maceió"],
      tabela: { minimo: 19.00, porKg: 1.45 }
    },
    {
      regiao: "Região Norte",
      cidades: ["Manaus", "Belém", "Porto Velho", "Macapá", "Boa Vista", "Rio Branco"],
      tabela: { minimo: 26.00, porKg: 1.85 }
    },
    {
      regiao: "Região Centro-Oeste",
      cidades: ["Goiânia", "Cuiabá", "Campo Grande", "Palmas", "Brasília"],
      tabela: { minimo: 21.00, porKg: 1.55 }
    }
  ]
}

// EXEMPLO 3: Transportadora Regional (apenas Sul)
{
  id: 6,
  nome: "Transportadora Regional Sul",
  ativa: true,
  regioes: [
    {
      regiao: "Região Sul",
      cidades: ["Porto Alegre", "Canoas", "Viamão", "Alvorada", "Gravataí", "Sapucaia do Sul", 
                "Curitiba", "Pinhais", "Colombo", "Maringá", "Londrina",
                "Florianópolis", "Blumenau", "Itajaí", "Brusque"],
      tabela: { minimo: 10.00, porKg: 0.95 }
    }
  ]
}

// EXEMPLO 4: Transportadora Premium
{
  id: 7,
  nome: "Fedex Brasil",
  ativa: true,
  regioes: [
    {
      regiao: "Região Sudeste",
      cidades: ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Campinas", "Santos"],
      tabela: { minimo: 25.00, porKg: 2.00 }
    },
    {
      regiao: "Região Sul",
      cidades: ["Curitiba", "Porto Alegre"],
      tabela: { minimo: 30.00, porKg: 2.30 }
    }
  ]
}

// EXEMPLO 5: Transportadora com valores dinâmicos por faixa
// (Use este padrão para máxima flexibilidade)
{
  id: 8,
  nome: "Transportadora Flex",
  ativa: true,
  regioes: [
    {
      regiao: "Região Sudeste",
      cidades: ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Brasília", "Campinas", "Sorocaba", 
                "Ribeirão Preto", "Piracicaba", "Taubaté", "São Bernardo do Campo"],
      tabela: { minimo: 14.00, porKg: 1.05 }
    },
    {
      regiao: "Região Sul",
      cidades: ["Porto Alegre", "Curitiba", "Florianópolis", "Santa Maria", "Caxias do Sul", 
                "Novo Hamburgo", "São Leopoldo", "Canoas"],
      tabela: { minimo: 17.00, porKg: 1.30 }
    },
    {
      regiao: "Região Nordeste",
      cidades: ["Salvador", "Recife", "Fortaleza", "Natal", "João Pessoa", "Maceió", "Aracaju"],
      tabela: { minimo: 17.50, porKg: 1.35 }
    },
    {
      regiao: "Região Norte",
      cidades: ["Manaus", "Belém", "Porto Velho", "Macapá"],
      tabela: { minimo: 23.00, porKg: 1.70 }
    },
    {
      regiao: "Região Centro-Oeste",
      cidades: ["Goiânia", "Cuiabá", "Campo Grande", "Palmas"],
      tabela: { minimo: 19.00, porKg: 1.40 }
    }
  ]
}

// ============================================================
// INSTRUÇÕES DE USO
// ============================================================
//
// 1. Escolha um exemplo acima
// 2. Abra o arquivo app.js
// 3. Localize: const freteDatabase = { transportadoras: [
// 4. Procure a última transportadora no array
// 5. Adicione uma vírgula após a } da última transportadora
// 6. Cole o exemplo escolhido
// 7. Incremente o ID para um número único
// 8. Salve o arquivo
// 9. Reinicie o servidor com Ctrl+C e npm start
// 10. Teste no navegador!
//
// ============================================================
// DICAS IMPORTANTES
// ============================================================
//
// ✓ Use sempre ID único (1, 2, 3, 4, 5, ...)
// ✓ Valores em decimal (15.50, não 15,50)
// ✓ Nomes de cidades sem caracteres especiais quando possível
// ✓ Use true/false para ativa (sem aspas)
// ✓ Lembre-se das vírgulas entre objetos
// ✓ Teste cada transportadora para validar dados
//
// ============================================================
// ESTRUTURA BÁSICA
// ============================================================
//
// {
//   id: [NÚMERO ÚNICO],
//   nome: "[NOME DA TRANSPORTADORA]",
//   ativa: true,  // ou false para desativar
//   regioes: [
//     {
//       regiao: "[NOME DA REGIÃO]",
//       cidades: ["[CIDADE 1]", "[CIDADE 2]", ...],
//       tabela: { 
//         minimo: [VALOR MÍNIMO],    // Ex: 15.00
//         porKg: [VALOR POR KG]      // Ex: 1.20
//       }
//     }
//     // Adicione mais regiões aqui se necessário
//   ]
// }
//
// ============================================================
