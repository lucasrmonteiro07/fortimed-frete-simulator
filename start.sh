#!/bin/bash

# Script para iniciar o Simulador de Frete Fortimed

echo "🚀 Iniciando Simulador de Frete Fortimed..."
echo ""

# Verificar se node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependências..."
    npm install
    echo ""
fi

# Iniciar servidor
echo "✅ Servidor iniciando..."
echo "🌐 Acesse: http://localhost:3000"
echo ""
echo "⏹️  Pressione Ctrl+C para parar"
echo ""

npm start
