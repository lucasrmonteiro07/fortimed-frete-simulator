@echo off
REM Script para iniciar o Simulador de Frete Fortimed no Windows

echo.
echo ==========================================
echo   SIMULADOR DE FRETE FORTIMED
echo ==========================================
echo.

REM Verificar se node_modules existe
if not exist "node_modules" (
    echo Instalando dependencias...
    call npm install
    echo.
)

REM Iniciar servidor
echo Iniciando servidor...
echo.
echo Acesse em seu navegador: http://localhost:3000
echo.
echo Pressione Ctrl+C para parar o servidor
echo.

call npm start

pause
