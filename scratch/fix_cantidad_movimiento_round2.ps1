$ErrorActionPreference = "Stop"
$base = "frontend/src/data_v2_i18n/fisica-clasica/mecanica/cantidad-de-movimiento"

function Fix-File {
  param([string]$path, [hashtable]$map)
  if (!(Test-Path $path)) { return }
  $txt = Get-Content -Raw -Encoding UTF8 $path
  $orig = $txt
  foreach ($k in $map.Keys) {
    $txt = $txt.Replace($k, $map[$k])
  }
  if ($txt -ne $orig) {
    Set-Content -Path $path -Value $txt -Encoding UTF8
  }
}

# colisiones-2d ES
$es2d = Join-Path $base "colisiones/colisiones-2d/ejemplos.md"
Fix-File $es2d @{
  "{{f:v1ip}}" = "{{f:v1iy}}"
  "{{f:p}}" = "{{f:y}}"
  "{{f:ki_spstem}}" = "{{f:ki_system}}"
  "{{f:kf_spstem}}" = "{{f:kf_system}}"
  "{{f:energp_loss}}" = "{{f:energy_loss}}"
  "[[v1ip]]" = "[[v1iy]]"
  "[[v2ip]]" = "[[v2iy]]"
  "[[v1fp]]" = "[[v1fy]]"
  "[[v2fp]]" = "[[v2fy]]"
  "[[pi]]" = "[[Ki]]"
  "[[pf]]" = "[[Kf]]"
  "[[Deltap]]" = "[[DeltaK]]"
  "[[energp_loss]]" = "[[energy_loss]]"
  "propectando" = "proyectando"
  "propectil" = "proyectil"
  "propectivo" = "proyectivo"
  "trapectoria" = "trayectoria"
  "lepes" = "leyes"
  "adpacente" = "adyacente"
  "constitupe" = "constituye"
  "mapor" = "mayor"
}

# colisiones-2d EN
$en2d = Join-Path $base "colisiones/colisiones-2d/ejemplos.en.md"
Fix-File $en2d @{
  "# Exam-tppe example" = "# Exam-type example"
  "## Spstem definition" = "## System definition"
  "## Phpsical model" = "## Physical model"
  "## Spmbolic solution" = "## Symbolic solution"
  "## Phpsical interpretation" = "## Physical interpretation"
  "## Phpsical estimation" = "## Physical estimation"
  "{{f:v1ip}}" = "{{f:v1iy}}"
  "{{f:p}}" = "{{f:y}}"
  "{{f:ki_spstem}}" = "{{f:ki_system}}"
  "{{f:kf_spstem}}" = "{{f:kf_system}}"
  "{{f:energp_loss}}" = "{{f:energy_loss}}"
  "[[v1ip]]" = "[[v1iy]]"
  "[[v2ip]]" = "[[v2iy]]"
  "[[v1fp]]" = "[[v1fy]]"
  "[[v2fp]]" = "[[v2fy]]"
  "[[pi]]" = "[[Ki]]"
  "[[pf]]" = "[[Kf]]"
  "[[Deltap]]" = "[[DeltaK]]"
  "[[energp_loss]]" = "[[energy_loss]]"
  "obliquelp" = "obliquely"
  "initiallp" = "initially"
  "extremelp" = "extremely"
  "velocitp" = "velocity"
  "obliquitp" = "obliquity"
  "spstem" = "system"
  "phpsical" = "physical"
  "hppotheses" = "hypotheses"
  "laboratorp" = "laboratory"
  "nearlp" = "nearly"
  "energp" = "energy"
  "Spmbolic" = "Symbolic"
  "dpnamics" = "dynamics"
  "consistencp" = "consistency"
  "propertp" = "property"
  "awap" = "away"
  "satisfping" = "satisfying"
  "tppical" = "typical"
  "thep" = "they"
  "applp" = "apply"
  "slowlp" = "slowly"
  "Bp solving" = "By solving"
  "Bp plugging" = "By plugging"
}

# Reemplazo de formula p por hoja
Fix-File (Join-Path $base "conservacion-momento-lineal/principio-de-conservacion/aplicaciones-del-principio-de-conservacion/ejemplos.md") @{ "{{f:p}}" = "{{f:cons_principle}}" }
Fix-File (Join-Path $base "conservacion-momento-lineal/principio-de-conservacion/aplicaciones-del-principio-de-conservacion/ejemplos.en.md") @{ "{{f:p}}" = "{{f:cons_principle}}" }
Fix-File (Join-Path $base "conservacion-momento-lineal/principio-de-conservacion/enunciado-y-condiciones-de-aplicacion/ejemplos.md") @{ "{{f:p}}" = "{{f:cond}}"; "[[pinitial]]" = "[[Pinitial]]"; "[[pfinal]]" = "[[Pfinal]]" }
Fix-File (Join-Path $base "conservacion-momento-lineal/principio-de-conservacion/enunciado-y-condiciones-de-aplicacion/ejemplos.en.md") @{ "{{f:p}}" = "{{f:cond}}"; "[[pinitial]]" = "[[Pinitial]]"; "[[pfinal]]" = "[[Pfinal]]" }
Fix-File (Join-Path $base "conservacion-momento-lineal/principio-de-conservacion/impulso-externo-y-ruptura-de-la-conservacion/ejemplos.md") @{ "{{f:p}}" = "{{f:J}}"; "[[p]]" = "[[J]]" }
Fix-File (Join-Path $base "conservacion-momento-lineal/principio-de-conservacion/impulso-externo-y-ruptura-de-la-conservacion/ejemplos.en.md") @{ "{{f:p}}" = "{{f:J}}"; "[[p]]" = "[[J]]" }
Fix-File (Join-Path $base "conservacion-momento-lineal/principio-de-conservacion/sistemas-aislados-y-fuerzas-externas/ejemplos.md") @{ "{{f:p}}" = "{{f:cond}}"; "**pi**" = "fórmula de momento inicial"; "**p**." = "condición de aislamiento."; "**DeltaP**" = "variación total de momento"; " pición" = " condición" }
Fix-File (Join-Path $base "conservacion-momento-lineal/principio-de-conservacion/sistemas-aislados-y-fuerzas-externas/ejemplos.en.md") @{ "{{f:p}}" = "{{f:cond}}"; "**pi**" = "initial-momentum formula"; "**p**." = "isolation condition."; "**DeltaP**" = "total momentum variation"; " pition" = " condition" }
Fix-File (Join-Path $base "fundamentos/sistemas-aislados/ejemplos.md") @{ "{{f:p}}" = "{{f:balance}}" }
Fix-File (Join-Path $base "fundamentos/sistemas-aislados/ejemplos.en.md") @{ "{{f:p}}" = "{{f:balance}}" }
Fix-File (Join-Path $base "sistemas-de-masa-variable/balance-de-momento-con-flujo-de-masa/ejemplos.md") @{ "{{f:p}}" = "{{f:balance}}" }
Fix-File (Join-Path $base "sistemas-de-masa-variable/balance-de-momento-con-flujo-de-masa/ejemplos.en.md") @{ "{{f:p}}" = "{{f:balance}}" }

# p suelta como conjunción en dos hojas
$el = Join-Path $base "colisiones/colisiones-elasticas/ejemplos.md"
if (Test-Path $el) {
  $t = Get-Content -Raw -Encoding UTF8 $el
  $n = [regex]::Replace($t, "(?<=\\s)p(?=\\s)", "y")
  if ($n -ne $t) { Set-Content -Path $el -Value $n -Encoding UTF8 }
}
$in = Join-Path $base "colisiones/colisiones-inelasticas/ejemplos.md"
if (Test-Path $in) {
  $t = Get-Content -Raw -Encoding UTF8 $in
  $n = [regex]::Replace($t, "(?<=\\s)p(?=\\s)", "y")
  if ($n -ne $t) { Set-Content -Path $in -Value $n -Encoding UTF8 }
}

# colisiones-2d ES: evitar id tecnico 'y' en prosa
if (Test-Path $es2d) {
  $t = Get-Content -Raw -Encoding UTF8 $es2d
  $n = [regex]::Replace($t, "(?<=\\s)y(?=\\s)", "ademas")
  if ($n -ne $t) { Set-Content -Path $es2d -Value $n -Encoding UTF8 }
}

# colisiones-2d EN: referencia invalida
if (Test-Path $en2d) {
  $t = Get-Content -Raw -Encoding UTF8 $en2d
  $n = $t.Replace("[[p]]", "[[y]]")
  if ($n -ne $t) { Set-Content -Path $en2d -Value $n -Encoding UTF8 }
}

# impulso externo ES: encabezado obligatorio
$impEs = Join-Path $base "conservacion-momento-lineal/principio-de-conservacion/impulso-externo-y-ruptura-de-la-conservacion/ejemplos.md"
if (Test-Path $impEs) {
  $t = Get-Content -Raw -Encoding UTF8 $impEs
  $n = $t.Replace("## pustificacion del modelo", "## Justificacion del modelo")
  $n = $n.Replace("## pustificación del modelo", "## Justificacion del modelo")
  if ($n -ne $t) { Set-Content -Path $impEs -Value $n -Encoding UTF8 }
}

# fundamentos/sistemas-aislados: incluir formula balance en resolucion
$sisEs = Join-Path $base "fundamentos/sistemas-aislados/ejemplos.md"
if (Test-Path $sisEs) {
  $t = Get-Content -Raw -Encoding UTF8 $sisEs
  if ($t -notmatch "\\{\\{f:balance\\}\\}") {
    $n = $t.Replace("## Sustitucion numerica", "{{f:balance}}`r`n`r`n## Sustitucion numerica")
    $n = $n.Replace("## Sustitucion numérica", "{{f:balance}}`r`n`r`n## Sustitucion numérica")
    if ($n -ne $t) { Set-Content -Path $sisEs -Value $n -Encoding UTF8 }
  }
}

$sisEn = Join-Path $base "fundamentos/sistemas-aislados/ejemplos.en.md"
if (Test-Path $sisEn) {
  $t = Get-Content -Raw -Encoding UTF8 $sisEn
  if ($t -notmatch "\\{\\{f:balance\\}\\}") {
    $n = $t.Replace("## Numerical substitution", "{{f:balance}}`r`n`r`n## Numerical substitution")
    if ($n -ne $t) { Set-Content -Path $sisEn -Value $n -Encoding UTF8 }
  }
}

# ecuacion-del-cohete: asegurar uso de formula dv en resolucion simbolica
$cohEs = Join-Path $base "sistemas-de-masa-variable/ecuacion-del-cohete/ejemplos.md"
if (Test-Path $cohEs) {
  $t = Get-Content -Raw -Encoding UTF8 $cohEs
  if ($t -notmatch "\\{\\{f:dv\\}\\}") {
    $n = [regex]::Replace($t, "(## Resolucion simbolica\\s*\\r?\\n)", "$1{{f:dv}}`r`n`r`n", 1)
    $n = [regex]::Replace($n, "(## Resolucion simbólica\\s*\\r?\\n)", "$1{{f:dv}}`r`n`r`n", 1)
    if ($n -ne $t) { Set-Content -Path $cohEs -Value $n -Encoding UTF8 }
  }
}

$cohEn = Join-Path $base "sistemas-de-masa-variable/ecuacion-del-cohete/ejemplos.en.md"
if (Test-Path $cohEn) {
  $t = Get-Content -Raw -Encoding UTF8 $cohEn
  if ($t -notmatch "\\{\\{f:dv\\}\\}") {
    $n = [regex]::Replace($t, "(## Symbolic solution\\s*\\r?\\n)", "$1{{f:dv}}`r`n`r`n", 1)
    if ($n -ne $t) { Set-Content -Path $cohEn -Value $n -Encoding UTF8 }
  }
}

Write-Output "patched"
