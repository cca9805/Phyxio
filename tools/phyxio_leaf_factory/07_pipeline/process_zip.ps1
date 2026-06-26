# Procesa el ZIP descargado para el leaf especificado
# Uso: .\process_zip.ps1 <leaf-id>

param(
    [Parameter(Mandatory=$true)]
    [string]$LeafId
)

$Downloads = "$env:USERPROFILE\Downloads"

# Buscar cualquier ZIP en Downloads que contenga el leaf-id
$ZipFiles = Get-ChildItem -Path $Downloads -Filter "*$LeafId*.zip" | Sort-Object LastWriteTime -Descending

if ($ZipFiles.Count -eq 0) {
    Write-Host "❌ No se encontró ZIP para $LeafId en $Downloads" -ForegroundColor Red
    exit 1
}

$LatestZip = $ZipFiles[0]
Write-Host "📦 ZIP encontrado: $($LatestZip.Name)" -ForegroundColor Green
Write-Host "🚀 Procesando..."

# Cambiar al directorio raíz del proyecto
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ProjectRoot = Resolve-Path "$ScriptDir\..\..\.."
Set-Location $ProjectRoot

# Ejecutar el procesador de ZIP
python "tools\phyxio_leaf_factory\07_pipeline\process_ai_zip_response.py" `
    --leaf-id $LeafId `
    --zip $LatestZip.FullName

Write-Host "Proceso completado. Presiona Enter para salir..."
$null = Read-Host
