// Variáveis globais
let transportadoraAtual = null;
let regiaoAtual = null;

// Elementos do DOM
const transportadoraSelect = document.getElementById('transportadora');
const regiaoSelect = document.getElementById('regiao');
const cidadeSelect = document.getElementById('cidade');
const pesoInput = document.getElementById('peso');
const valorInput = document.getElementById('valor');
const freteForm = document.getElementById('freteForm');
const resultadoDiv = document.getElementById('resultado');
const erroDiv = document.getElementById('erro');
const tabelasContainer = document.getElementById('tabelasContainer');

// Inicializar ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    carregarTransportadoras();
    freteForm.addEventListener('submit', calcularFrete);
});

// Carregar transportadoras
async function carregarTransportadoras() {
    try {
        const response = await fetch('/api/transportadoras');
        const transportadoras = await response.json();
        
        transportadoraSelect.innerHTML = '';
        transportadoras.forEach(t => {
            if (t.ativa) {
                const option = document.createElement('option');
                option.value = t.id;
                option.textContent = t.nome;
                transportadoraSelect.appendChild(option);
            }
        });

        // Adicionar listener ANTES de pré-selecionar
        transportadoraSelect.addEventListener('change', carregarRegioes);

        // Pré-selecionar Expresso São Miguel (ID 5)
        const saoMiguelOption = Array.from(transportadoraSelect.options).find(opt => opt.value === '5');
        if (saoMiguelOption) {
            transportadoraSelect.value = '5';
            // Disparar o evento change para carregar regiões automaticamente
            const event = new Event('change', { bubbles: true });
            transportadoraSelect.dispatchEvent(event);
        }
        
        // Carregar tabelas de referência
        carregarTabelasReferencia(transportadoras);
    } catch (error) {
        mostrarErro('Erro ao carregar transportadoras');
        console.error(error);
    }
}

// Carregar regiões
async function carregarRegioes() {
    const transportadoraId = transportadoraSelect.value;
    
    if (!transportadoraId) {
        regiaoSelect.disabled = true;
        regiaoSelect.innerHTML = '<option value="">Selecione uma região</option>';
        cidadeSelect.disabled = true;
        cidadeSelect.innerHTML = '<option value="">Selecione uma cidade</option>';
        return;
    }

    try {
        const response = await fetch(`/api/transportadoras/${transportadoraId}/regioes`);
        const regioes = await response.json();
        
        regiaoSelect.disabled = false;
        regiaoSelect.innerHTML = '<option value="">Selecione uma região</option>';
        
        regioes.forEach(r => {
            const option = document.createElement('option');
            option.value = r.regiao;
            option.textContent = r.regiao;
            regiaoSelect.appendChild(option);
        });

        // Adicionar listener ANTES de pré-selecionar
        regiaoSelect.addEventListener('change', carregarCidades);

        // Pré-selecionar a primeira região (São Paulo)
        if (regioes.length > 0) {
            regiaoSelect.value = regioes[0].regiao;
            const event = new Event('change', { bubbles: true });
            regiaoSelect.dispatchEvent(event);
        }
    } catch (error) {
        mostrarErro('Erro ao carregar regiões');
        console.error(error);
    }
}

// Carregar cidades
async function carregarCidades() {
    const transportadoraId = transportadoraSelect.value;
    const regiao = regiaoSelect.value;
    
    if (!transportadoraId || !regiao) {
        cidadeSelect.disabled = true;
        cidadeSelect.innerHTML = '<option value="">Selecione uma cidade</option>';
        return;
    }

    try {
        const response = await fetch(`/api/transportadoras/${transportadoraId}/regioes/${encodeURIComponent(regiao)}/cidades`);
        const cidades = await response.json();
        
        cidadeSelect.disabled = false;
        cidadeSelect.innerHTML = '<option value="">Selecione uma cidade</option>';
        
        cidades.forEach(cidade => {
            const option = document.createElement('option');
            option.value = cidade;
            option.textContent = cidade;
            cidadeSelect.appendChild(option);
        });
    } catch (error) {
        mostrarErro('Erro ao carregar cidades');
        console.error(error);
    }
}

// Calcular frete
async function calcularFrete(e) {
    e.preventDefault();
    
    const transportadoraId = transportadoraSelect.value;
    const regiao = regiaoSelect.value;
    const peso = parseFloat(pesoInput.value);
    const valor = parseFloat(valorInput.value);

    if (!transportadoraId || !regiao || !peso || !valor) {
        mostrarErro('Por favor, preencha todos os campos obrigatórios');
        return;
    }

    if (peso <= 0 || valor <= 0) {
        mostrarErro('Peso e valor devem ser maiores que zero');
        return;
    }

    try {
        const response = await fetch('/api/calcular-frete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                transportadoraId: parseInt(transportadoraId),
                regiao: regiao,
                peso: peso,
                valor: valor
            })
        });

        if (!response.ok) {
            throw new Error('Erro ao calcular frete');
        }

        const resultado = await response.json();
        
        if (resultado.sucesso) {
            mostrarResultado(resultado);
            limparErro();
        } else {
            mostrarErro(resultado.erro || 'Erro ao calcular frete');
        }
    } catch (error) {
        mostrarErro('Erro ao processar cálculo');
        console.error(error);
    }
}

// Mostrar resultado
function mostrarResultado(dados) {
    document.getElementById('resultTransportadora').textContent = dados.transportadora;
    document.getElementById('resultRegiao').textContent = dados.regiao;
    document.getElementById('resultCidade').textContent = cidadeSelect.value || 'Não informada';
    document.getElementById('resultPeso').textContent = `${dados.peso} kg`;
    document.getElementById('resultValor').textContent = `R$ ${dados.valor.toFixed(2).replace('.', ',')}`;
    document.getElementById('resultFrete').textContent = `R$ ${dados.freteCalculado.toFixed(2).replace('.', ',')}`;
    document.getElementById('resultTotal').textContent = `R$ ${dados.valorTotal.toFixed(2).replace('.', ',')}`;
    
    resultadoDiv.style.display = 'block';
    erroDiv.style.display = 'none';
    
    // Scroll para resultado
    resultadoDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Limpar resultado
function limparResultado() {
    resultadoDiv.style.display = 'none';
    freteForm.reset();
    regiaoSelect.disabled = true;
    cidadeSelect.disabled = true;
}

// Mostrar erro
function mostrarErro(mensagem) {
    erroDiv.textContent = mensagem;
    erroDiv.style.display = 'block';
    resultadoDiv.style.display = 'none';
}

// Limpar erro
function limparErro() {
    erroDiv.style.display = 'none';
}

// Carregar tabelas de referência
async function carregarTabelasReferencia(transportadoras) {
    tabelasContainer.innerHTML = '';
    
    for (const t of transportadoras) {
        if (!t.ativa) continue;
        
        try {
            const response = await fetch(`/api/transportadoras/${t.id}/regioes`);
            const regioes = await response.json();
            
            const tabela = document.createElement('div');
            tabela.className = 'tabela-transportadora';
            
            let html = `<h4>${t.nome}</h4><div class="tabela-regioes">`;
            
            regioes.forEach(r => {
                const { minimo, porKg } = r.tabela;
                const cidadesTexto = r.cidades.slice(0, 3).join(', ');
                const totalCidades = r.cidades.length;
                const maisText = totalCidades > 3 ? ` +${totalCidades - 3}` : '';
                
                html += `
                    <div class="regiao-item">
                        <div class="regiao-nome">📍 ${r.regiao}</div>
                        <div class="regiao-tabela">
                            <span>💰 <strong>Mín: R$ ${minimo.toFixed(2).replace('.', ',')}</strong></span>
                            <span>⚖️ <strong>/kg: R$ ${porKg.toFixed(2).replace('.', ',')}</strong></span>
                        </div>
                        <div style="font-size: 0.8rem; color: #9ca3af; margin-top: 6px;">
                            🏙️ ${cidadesTexto}${maisText}
                        </div>
                    </div>
                `;
            });
            
            html += '</div>';
            tabela.innerHTML = html;
            tabelasContainer.appendChild(tabela);
        } catch (error) {
            console.error(`Erro ao carregar tabelas para ${t.nome}:`, error);
        }
    }
}

// Máscaras de entrada (formatação em tempo real)
pesoInput.addEventListener('input', function() {
    if (this.value && !isNaN(this.value)) {
        const valor = parseFloat(this.value);
        if (valor < 0) this.value = '';
    }
});

valorInput.addEventListener('input', function() {
    if (this.value && !isNaN(this.value)) {
        const valor = parseFloat(this.value);
        if (valor < 0) this.value = '';
    }
});
