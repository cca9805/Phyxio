# Script para agregar metadatos a archivos teoria.jsx que no los tengan
# Uso: .\scripts\addMetadata.ps1

# Mapeo de temas y subtemas a metadatos
$metadataMap = @{
    # Cinemática
    "cinematica/mruv" = @{
        titulo = "MRUV - Movimiento Rectilíneo Uniformemente Variado"
        descripcion = "Movimiento en línea recta con aceleración constante"
        categoria = "mecanica"
        tema = "cinematica"
        subtema = "mruv"
        icono = "mruv"
        palette = "azure"
    }
    "cinematica/mcu" = @{
        titulo = "MCU - Movimiento Circular Uniforme"
        descripcion = "Movimiento circular con velocidad angular constante"
        categoria = "mecanica"
        tema = "cinematica"
        subtema = "mcu"
        icono = "mcu"
        palette = "chartreuse"
    }
    "cinematica/mcua" = @{
        titulo = "MCUA - Movimiento Circular Uniformemente Acelerado"
        descripcion = "Movimiento circular con aceleración angular constante"
        categoria = "mecanica"
        tema = "cinematica"
        subtema = "mcua"
        icono = "mcua"
        palette = "coral"
    }
    "cinematica/mas" = @{
        titulo = "MAS - Movimiento Armónico Simple"
        descripcion = "Movimiento oscilatorio periódico con fuerza restauradora"
        categoria = "mecanica"
        tema = "cinematica"
        subtema = "mas"
        icono = "mas"
        palette = "rose"
    }
    "cinematica/mp" = @{
        titulo = "MP - Movimiento Parabólico"
        descripcion = "Movimiento en dos dimensiones bajo gravedad constante"
        categoria = "mecanica"
        tema = "cinematica"
        subtema = "mp"
        icono = "mp"
        palette = "mint"
    }
    "cinematica/mr" = @{
        titulo = "MR - Movimiento Relativo"
        descripcion = "Análisis del movimiento desde diferentes sistemas de referencia"
        categoria = "mecanica"
        tema = "cinematica"
        subtema = "mr"
        icono = "mr"
        palette = "green"
    }
    
    # Dinámica
    "dinamica/trabajoenergia" = @{
        titulo = "Trabajo y Energía"
        descripcion = "Teoremas de trabajo-energía y conservación de la energía"
        categoria = "mecanica"
        tema = "dinamica"
        subtema = "trabajoenergia"
        icono = "trabajoenergia"
        palette = "fuchsia"
    }
    "dinamica/movimpulso" = @{
        titulo = "Impulso y Momento"
        descripcion = "Conservación del momento lineal y colisiones"
        categoria = "mecanica"
        tema = "dinamica"
        subtema = "movimpulso"
        icono = "movimpulso"
        palette = "sand"
    }
    "dinamica/movcircular" = @{
        titulo = "Movimiento Circular"
        descripcion = "Dinámica del movimiento circular y fuerza centrípeta"
        categoria = "mecanica"
        tema = "dinamica"
        subtema = "movcircular"
        icono = "movcircular"
        palette = "lime"
    }
    "dinamica/rotacion" = @{
        titulo = "Rotación y Torque"
        descripcion = "Dinámica rotacional, momento de inercia y torque"
        categoria = "mecanica"
        tema = "dinamica"
        subtema = "rotacion"
        icono = "rotacion"
        palette = "sapphire"
    }
    "dinamica/gravitacion" = @{
        titulo = "Gravitación Universal"
        descripcion = "Ley de gravitación universal y movimiento planetario"
        categoria = "mecanica"
        tema = "dinamica"
        subtema = "gravitacion"
        icono = "gravitacion"
        palette = "navy"
    }
    "dinamica/equilibrio" = @{
        titulo = "Equilibrio Dinámico"
        descripcion = "Condiciones de equilibrio y análisis de fuerzas"
        categoria = "mecanica"
        tema = "dinamica"
        subtema = "equilibrio"
        icono = "equilibrio"
        palette = "violet"
    }
    "dinamica/friccion" = @{
        titulo = "Fricción"
        descripcion = "Fuerzas de fricción estática y cinética"
        categoria = "mecanica"
        tema = "dinamica"
        subtema = "friccion"
        icono = "friccion"
        palette = "crimson"
    }
    "dinamica/oscilaciones" = @{
        titulo = "Oscilaciones y Resortes"
        descripcion = "Sistemas oscilatorios, resortes y péndulos"
        categoria = "mecanica"
        tema = "dinamica"
        subtema = "oscilaciones"
        icono = "oscilaciones"
        palette = "emerald"
    }
    "dinamica/masaspoleas" = @{
        titulo = "Sistemas de Masas y Poleas"
        descripcion = "Análisis de sistemas con poleas, cuerdas y masas"
        categoria = "mecanica"
        tema = "dinamica"
        subtema = "masaspoleas"
        icono = "masaspoleas"
        palette = "teal"
    }
    "dinamica/maquinas" = @{
        titulo = "Máquinas Simples"
        descripcion = "Palancas, poleas, planos inclinados y ventaja mecánica"
        categoria = "mecanica"
        tema = "dinamica"
        subtema = "maquinas"
        icono = "maquinas"
        palette = "amber"
    }
    
    # Estática
    "estatica/aplicaciones" = @{
        titulo = "Aplicaciones de Estática"
        descripcion = "Problemas prácticos de equilibrio estático"
        categoria = "mecanica"
        tema = "estatica"
        subtema = "aplicaciones"
        icono = "aplicaciones"
        palette = "bronze"
    }
    "estatica/apoyos" = @{
        titulo = "Apoyos y Reacciones"
        descripcion = "Tipos de apoyos y cálculo de reacciones"
        categoria = "mecanica"
        tema = "estatica"
        subtema = "apoyos"
        icono = "apoyos"
        palette = "plum"
    }
    "estatica/centro" = @{
        titulo = "Centro de Masa y Centroide"
        descripcion = "Cálculo de centros de masa y centroides"
        categoria = "mecanica"
        tema = "estatica"
        subtema = "centro"
        icono = "centro"
        palette = "lima"
    }
    "estatica/diagramas" = @{
        titulo = "Diagramas de Cuerpo Libre"
        descripcion = "Construcción y análisis de diagramas de fuerzas"
        categoria = "mecanica"
        tema = "estatica"
        subtema = "diagramas"
        icono = "diagramas"
        palette = "royal"
    }
    "estatica/estabilidad" = @{
        titulo = "Estabilidad de Estructuras"
        descripcion = "Análisis de estabilidad y condiciones de equilibrio"
        categoria = "mecanica"
        tema = "estatica"
        subtema = "estabilidad"
        icono = "estabilidad"
        palette = "jade"
    }
    "estatica/estructuras" = @{
        titulo = "Análisis de Estructuras"
        descripcion = "Armaduras, marcos y análisis estructural"
        categoria = "mecanica"
        tema = "estatica"
        subtema = "estructuras"
        icono = "estructuras"
        palette = "indigo"
    }
    "estatica/friccionest" = @{
        titulo = "Fricción en Estática"
        descripcion = "Fricción estática y problemas de equilibrio"
        categoria = "mecanica"
        tema = "estatica"
        subtema = "friccionest"
        icono = "friccionest"
        palette = "magenta"
    }
    "estatica/momentos" = @{
        titulo = "Momentos y Torques"
        descripcion = "Cálculo de momentos y equilibrio rotacional"
        categoria = "mecanica"
        tema = "estatica"
        subtema = "momentos"
        icono = "momentos"
        palette = "amber"
    }
    "estatica/vectores" = @{
        titulo = "Análisis Vectorial"
        descripcion = "Operaciones vectoriales aplicadas a la estática"
        categoria = "mecanica"
        tema = "estatica"
        subtema = "vectores"
        icono = "vectores"
        palette = "cobalt"
    }
    
    # Electromagnetismo - Electricidad
    "electromagnetismo/electricidad/campos-electricos" = @{
        titulo = "Campos Eléctricos"
        descripcion = "Campo eléctrico, líneas de campo y principio de superposición"
        categoria = "electromagnetismo"
        tema = "electricidad"
        subtema = "campos-electricos"
        icono = "campos-electricos"
        palette = "blue"
    }
    "electromagnetismo/electricidad/carga-fuerza" = @{
        titulo = "Carga y Fuerza Eléctrica"
        descripcion = "Ley de Coulomb, carga eléctrica y fuerzas electrostáticas"
        categoria = "electromagnetismo"
        tema = "electricidad"
        subtema = "carga-fuerza"
        icono = "carga-fuerza"
        palette = "cyan"
    }
    "electromagnetismo/electricidad/corriente-ohm" = @{
        titulo = "Corriente Eléctrica y Ley de Ohm"
        descripcion = "Corriente, resistencia, conductividad y ley de Ohm"
        categoria = "electromagnetismo"
        tema = "electricidad"
        subtema = "corriente-ohm"
        icono = "corriente-ohm"
        palette = "yellow"
    }
    "electromagnetismo/electricidad/potencial" = @{
        titulo = "Potencial Eléctrico"
        descripcion = "Potencial eléctrico, diferencia de potencial y energía"
        categoria = "electromagnetismo"
        tema = "electricidad"
        subtema = "potencial"
        icono = "potencial"
        palette = "green"
    }
    "electromagnetismo/electricidad/capacidad" = @{
        titulo = "Capacidad y Condensadores"
        descripcion = "Capacitancia, condensadores y almacenamiento de energía"
        categoria = "electromagnetismo"
        tema = "electricidad"
        subtema = "capacidad"
        icono = "capacidad"
        palette = "purple"
    }
}

function Add-MetadataToFile {
    param(
        [string]$FilePath,
        [hashtable]$Metadata
    )
    
    # Leer el contenido del archivo
    $content = Get-Content $FilePath -Raw
    
    # Verificar si ya tiene metadatos
    if ($content -match "export const metadata") {
        Write-Host "✓ $FilePath ya tiene metadatos" -ForegroundColor Green
        return
    }
    
    # Crear el bloque de metadatos
    $metadataBlock = @"
// Metadatos del tema
export const metadata = {
  titulo: "$($Metadata.titulo)",
  descripcion: "$($Metadata.descripcion)",
  categoria: "$($Metadata.categoria)",
  tema: "$($Metadata.tema)",
  subtema: "$($Metadata.subtema)",
  icono: "$($Metadata.icono)",
  palette: "$($Metadata.palette)"
};

"@
    
    # Buscar el patrón de importaciones y agregar metadatos después
    $pattern = "(import.*?from.*?;)\s*\n\s*const"
    if ($content -match $pattern) {
        $replacement = "$1`n`n$metadataBlock`nconst"
        $newContent = $content -replace $pattern, $replacement
        
        # Escribir el archivo actualizado
        Set-Content -Path $FilePath -Value $newContent -Encoding UTF8
        Write-Host "✓ Metadatos agregados a $FilePath" -ForegroundColor Cyan
    } else {
        Write-Host "⚠ No se pudo procesar $FilePath - patrón no encontrado" -ForegroundColor Yellow
    }
}

# Procesar archivos
Write-Host "🔄 Agregando metadatos a archivos teoria.jsx..." -ForegroundColor Blue

foreach ($key in $metadataMap.Keys) {
    $filePath = "src/data/$key/teoria.jsx"
    if (Test-Path $filePath) {
        Add-MetadataToFile -FilePath $filePath -Metadata $metadataMap[$key]
    } else {
        Write-Host "⚠ Archivo no encontrado: $filePath" -ForegroundColor Yellow
    }
}

Write-Host "✅ Proceso completado" -ForegroundColor Green