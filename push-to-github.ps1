# push-to-github.ps1
# Ejecutar desde la raíz del proyecto: C:\Users\USER\Desktop\Phyxio

$repoUrl = "https://github.com/cca9805/Phyxio.git"
$branchName = "main"

Write-Host "Comprobando archivos grandes (>100 MB)..." -ForegroundColor Cyan
$bigFiles = Get-ChildItem -Recurse -File -ErrorAction SilentlyContinue | Where-Object { $_.Length -gt 100MB }
if ($bigFiles) {
  Write-Host "Se encontraron archivos grandes. No se recomienda push directo. Lista (top 10):" -ForegroundColor Yellow
  $bigFiles | Sort-Object Length -Descending | Select-Object FullName,@{Name='SizeMB';Expression={"{0:N1}" -f ($_.Length/1MB)}} -First 10 | Format-Table -AutoSize
  Write-Host "Si deseas continuar de todos modos, edita el script para omitir este check." -ForegroundColor Red
  exit 1
}

# Crear .gitignore si no existe
$gitignorePath = ".gitignore"
if (-not (Test-Path $gitignorePath)) {
  Write-Host "Creando .gitignore básico..." -ForegroundColor Cyan
  @"
# Node / frontend
node_modules/
dist/
build/
.vite/
.env
.env.local
npm-debug.log
yarn-error.log
.DS_Store

# VSCode
.vscode/

# OS
Thumbs.db
desktop.ini

# Logs
logs/
*.log
"@ | Out-File -Encoding utf8 $gitignorePath
} else {
  Write-Host ".gitignore ya existe; no se modifica." -ForegroundColor Green
}

# Backups puntuales de archivos de teoría (si existen)
$filesToBackup = @(
  "frontend/src/data_v2/fisica-clasica/mecanica/cantidad-de-movimiento/momento-angular/definicion-momento-angular/teoria.md",
  "frontend/src/data_v2/fisica-clasica/mecanica/cantidad-de-movimiento/momento-angular/conservacion-momento-angular/teoria.md",
  "frontend/src/data_v2/fisica-clasica/mecanica/cantidad-de-movimiento/momento-angular/precesion/teoria.md"
)
foreach ($f in $filesToBackup) {
  if (Test-Path $f) {
    Copy-Item $f "$f.bak" -Force
    Write-Host "Backup creado:" $f".bak" -ForegroundColor Green
  }
}

# Inicializar git si hace falta
if (-not (Test-Path ".git")) {
  Write-Host "Inicializando repositorio git..." -ForegroundColor Cyan
  git init
} else {
  Write-Host "Repositorio git ya inicializado." -ForegroundColor Green
}

# Añadir todos los cambios y commitear si hay cambios
$status = git status --porcelain
if (-not $status) {
  Write-Host "No hay cambios a commitear." -ForegroundColor Yellow
} else {
  Write-Host "Añadiendo archivos y creando commit..." -ForegroundColor Cyan
  git add .
  git commit -m "Initial import of Phyxio project"
}

# Forzar rama principal (crea o renombra)
git branch -M $branchName

# Configurar remote origin
$remoteExists = git remote | Select-String -Pattern "^origin$" -Quiet
if ($remoteExists) {
  Write-Host "Remote 'origin' ya existe. Actualizando URL a $repoUrl" -ForegroundColor Cyan
  git remote set-url origin $repoUrl
} else {
  Write-Host "Añadiendo remote origin -> $repoUrl" -ForegroundColor Cyan
  git remote add origin $repoUrl
}

# Push al remoto
Write-Host "Empujando a origin/$branchName..." -ForegroundColor Cyan
try {
  git push -u origin $branchName
  if ($LASTEXITCODE -ne 0) {
    throw "git push devolvió código $LASTEXITCODE"
  }
} catch {
  Write-Host "Error al empujar: $_" -ForegroundColor Red
  Write-Host "Si usas HTTPS y falla la autenticación, genera un PAT y úsalo cuando git lo solicite, o configura SSH." -ForegroundColor Yellow
  exit 1
}

# Mostrar último commit corto
$commitId = git rev-parse --short HEAD
Write-Host "Push completado. Último commit:" $commitId -ForegroundColor Green
Write-Host "Verifica el repositorio remoto en: $repoUrl" -ForegroundColor Cyan