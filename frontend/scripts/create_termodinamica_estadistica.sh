$Base = "termodinamica-estadistica"

$paths = @(
    "$Base/fundamentos-estadisticos/microestados_y_macroestados",
    "$Base/fundamentos-estadisticos/ensambles_estadisticos",
    "$Base/fundamentos-estadisticos/distribuciones_de_boltzmann_y_gibbs",
    "$Base/fundamentos-estadisticos/funcion_de_particion",
    "$Base/fundamentos-estadisticos/teorema_de_equiparticion",

    "$Base/propiedades-termodinamicas/calculo_de_propiedades_termodinamicas",

    "$Base/estadisticas-cuanticas/estadisticas_cuanticas",
    "$Base/estadisticas-cuanticas/gas_ideal_cuantico",
    "$Base/estadisticas-cuanticas/gas_de_fermi",
    "$Base/estadisticas-cuanticas/condensacion_bose_einstein",

    "$Base/materia-condensada/fonones_modelo_debye",
    "$Base/materia-condensada/modelo_de_ising",
    "$Base/materia-condensada/transiciones_de_fase",

    "$Base/metodos-computacionales/simulaciones_monte_carlo",
    "$Base/metodos-computacionales/analisis_de_sistemas_complejos",
    "$Base/metodos-computacionales/aplicaciones_de_la_estadistica_cuantica"
)

foreach ($path in $paths) {
    New-Item -ItemType Directory -Path $path -Force | Out-Null
}

Write-Host "Estructura de termodinámica estadística creada correctamente."
