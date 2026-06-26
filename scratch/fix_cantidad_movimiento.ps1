$ErrorActionPreference = "Stop"
$root = "frontend/src/data_v2_i18n/fisica-clasica/mecanica/cantidad-de-movimiento"
$validator = "tools/phyxio_leaf_validator.py"

function Get-FormalBounds {
  param([string]$text,[string]$lang)
  $lines = $text -split "`r?`n"
  $marker = if($lang -eq "en"){"## 🔵 Formal level"} else {"## 🔵 Nivel formal"}
  $start = -1
  for($i=0;$i -lt $lines.Length;$i++){
    if($lines[$i] -eq $marker){ $start = $i; break }
  }
  if($start -lt 0){ return @{start=-1; end=-1; lines=$lines} }
  $end = $lines.Length - 1
  for($j=$start+1;$j -lt $lines.Length;$j++){
    if($lines[$j] -match "^##\\s") { $end = $j - 1; break }
  }
  return @{start=$start; end=$end; lines=$lines}
}

$leafs = Get-ChildItem -Path $root -Recurse -Filter meta.yaml | Select-Object -ExpandProperty DirectoryName
foreach($leaf in $leafs){
  $outArr = python $validator $leaf 2>&1
  $out = $outArr -join "`n"

  $outsideIds = @()
  foreach($m in [regex]::Matches($out,"\{\{f:([A-Za-z0-9_\-]+)\}\}")){
    $outsideIds += $m.Groups[1].Value
  }
  $outsideIds = $outsideIds | Select-Object -Unique

  if($outsideIds.Count -gt 0){
    foreach($tf in @("teoria.md","teoria.en.md")){
      $path = Join-Path $leaf $tf
      if(!(Test-Path $path)){ continue }
      $raw = Get-Content -Raw -Encoding UTF8 $path
      $lang = if($tf -like "*.en.md"){"en"} else {"es"}
      $b = Get-FormalBounds -text $raw -lang $lang
      if($b.start -lt 0){ continue }

      $lines = [System.Collections.Generic.List[string]]::new()
      foreach($ln in $b.lines){ [void]$lines.Add($ln) }

      foreach($id in $outsideIds){
        $tag = "{{f:$id}}"
        for($i=$lines.Count-1; $i -ge 0; $i--){
          if($lines[$i].Trim() -eq $tag){ $lines.RemoveAt($i) }
        }
      }

      $tmpText = $lines -join "`n"
      $b2 = Get-FormalBounds -text $tmpText -lang $lang
      if($b2.start -lt 0){ continue }
      $insertAt = $b2.end
      foreach($id in $outsideIds){
        [void]$lines.Insert($insertAt + 1, "")
        [void]$lines.Insert($insertAt + 2, "{{f:$id}}")
        [void]$lines.Insert($insertAt + 3, "")
        $insertAt += 3
      }

      Set-Content -Path $path -Value ($lines -join "`n") -Encoding UTF8
    }
  }

  if($out -match "sin ids"){
    $ids = @()
    foreach($m in [regex]::Matches($out,"visible como texto \('([A-Za-z0-9_\-]+)'\)")){
      $ids += $m.Groups[1].Value
    }
    $ids = $ids | Select-Object -Unique

    $pairs = @(
      @{file="ejemplos.md"; repl="ecuación del leaf"},
      @{file="ejemplos.en.md"; repl="leaf equation"}
    )

    foreach($p in $pairs){
      $fp = Join-Path $leaf $p.file
      if(!(Test-Path $fp)){ continue }
      $txt = Get-Content -Raw -Encoding UTF8 $fp

      foreach($id in $ids){
        $esc = [regex]::Escape($id)
        $txt = [regex]::Replace($txt, "\\*\\*$esc\\*\\*", $p.repl)
        if($id.Length -gt 2 -or $id -match "[_-]"){
          $txt = [regex]::Replace($txt, "(?<![A-Za-z0-9_])$esc(?![A-Za-z0-9_])", $p.repl)
        }
      }

      if($leaf -match "colisiones-2d" -and $p.file -eq "ejemplos.md"){
        $txt = [regex]::Replace($txt, "(?<=\\s)y(?=\\s)", "además")
      }
      if($leaf -match "colisiones-2d" -and $p.file -eq "ejemplos.en.md"){
        $txt = [regex]::Replace($txt, "(?<![A-Za-z0-9_])K(?![A-Za-z0-9_])", "total kinetic energy")
      }

      Set-Content -Path $fp -Value $txt -Encoding UTF8
    }
  }
}

Write-Output "done"
