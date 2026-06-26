@echo off
chcp 65001 >nul
:: Procesa el ZIP más reciente descargado para el leaf especificado
:: Uso: process_latest_zip.bat <leaf-id>

if "%~1"=="" (
    echo Uso: process_latest_zip.bat ^<leaf-id^>
    echo Ejemplo: process_latest_zip.bat segunda-ley-fuerza-masa
    exit /b 1
)

set LEAF_ID=%~1
set DOWNLOADS=%USERPROFILE%\Downloads\descargas_phyxio

:: Buscar ZIP más reciente para este leaf
for /f "delims=" %%a in ('dir /b /od "%DOWNLOADS%\*%LEAF_ID%*.zip" 2^>nul') do (
    set LATEST_ZIP=%%a
)

if not defined LATEST_ZIP (
    echo ❌ No se encontró ZIP para %LEAF_ID% en %DOWNLOADS%
    exit /b 1
)

echo 📦 ZIP encontrado: %LATEST_ZIP%
echo 🚀 Procesando...

cd /d "%~dp0\..\..\.."
python "tools\phyxio_leaf_factory\07_pipeline\process_ai_zip_response.py" ^
    --leaf-id %LEAF_ID% ^
    --zip "%DOWNLOADS%\%LATEST_ZIP%"

pause
