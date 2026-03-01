# --- ssh-setup.ps1 ---------------------------------------------------
# Crea una clave ed25519, la añade al agente y configura el remote SSH.

$repoPath = "C:\Users\USER\Desktop\Phyxio"
$sshDir   = "$env:USERPROFILE\.ssh"
# ensure directory exists
if (-not (Test-Path $sshDir)) {
    New-Item -ItemType Directory -Path $sshDir | Out-Null
}
$keyfile  = Join-Path $sshDir "id_ed25519"
$pubfile  = "$keyfile.pub"

# 1. genera clave si no existe
if (-not (Test-Path $keyfile)) {
    Write-Host "Generando clave SSH ed25519..."
    if (-not (Get-Command ssh-keygen -ErrorAction SilentlyContinue)) {
        Write-Host "ERROR: ssh-keygen no está disponible en el sistema. Instala OpenSSH o Git for Windows." -ForegroundColor Red
        exit 1
    }
    # ejecutar y capturar salida
    $out = & ssh-keygen -t ed25519 -C "cca9805@github" -f $keyfile -N "" 2>&1
    Write-Host $out
    if (-not (Test-Path $pubfile)) {
        Write-Host "ERROR: no se creó el archivo público ($pubfile). ssh-keygen salida:" -ForegroundColor Red
        Write-Host $out
        exit 1
    }
} else {
    Write-Host "La clave ya existe: $keyfile"
}

# 2. iniciar agente y cargar la clave
Write-Host "Arrancando agente SSH y cargando clave..."
try {
    Start-Service ssh-agent -ErrorAction Stop
} catch {
    Write-Warning "No se pudo iniciar el servicio ssh-agent. Intentaré arrancarlo como proceso..."
    try {
        Start-Process ssh-agent -NoNewWindow -ErrorAction Stop
    } catch {
        Write-Warning "No se pudo arrancar ssh-agent; ssh-add podría fallar."
    }
}

try {
    ssh-add $keyfile -ErrorAction Stop
} catch {
    Write-Warning "ssh-add devolvió un error o no pudo conectarse al agente. Continuaré de todos modos."
}

# 3. copiar la pública al portapapeles
Write-Host "Copiando clave pública al portapapeles..."
$pubKey = ""
if (Test-Path $pubfile) { $pubKey = Get-Content $pubfile -Raw }
if ($pubKey) {
    if (Get-Command Set-Clipboard -ErrorAction SilentlyContinue) {
        $pubKey | Set-Clipboard
        Write-Host "Clave pública copiada al portapapeles via Set-Clipboard."
    } else {
        try {
            $pubKey | clip
            Write-Host "Clave pública copiada al portapapeles via clip.exe."
        } catch {
            Write-Warning "No se pudo copiar automáticamente; muestra la clave abajo para que la copies manualmente."
            Write-Host ""
            Write-Host $pubKey
            Write-Host ""
        }
    }
} else {
    Write-Warning "No se encontró el archivo '$pubfile' para copiar."
}
Write-Host "Ahora pégala en GitHub:"
Write-Host "  Settings → SSH and GPG keys → New SSH key → pega y guarda" -ForegroundColor Yellow

# Espera a que la añadas:
Write-Host "Pulsa Enter cuando hayas añadido la clave al perfil de GitHub."
Read-Host

# 4. cambiar remote del repo local
Set-Location $repoPath
git remote set-url origin git@github.com:cca9805/Phyxio.git
Write-Host "Remote origen ajustado a SSH (git@github.com:cca9805/Phyxio.git)."

# 5. prueba de conexión
Write-Host "Probando conexión SSH a GitHub..."
ssh -T git@github.com

Write-Host "Listo. Ahora puedes usar git push sin teclear usuario/contraseña."
# --------------------------------------------------------------------