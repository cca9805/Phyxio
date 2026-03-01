/**
 * Configuración centralizada de rutas de iconos
 * 
 * Este es el ÚNICO archivo que necesitas modificar cuando:
 * - Cambias la ubicación de un icono
 * - Agregas un nuevo icono
 * - Reorganizas la estructura de carpetas de assets
 * 
 * Formato: 'clave': 'ruta/relativa/desde/assets/'
 */

export const ICON_PATHS = {
  // ============================================
  // FÍSICA GENERAL
  // ============================================
  'clasica': 'index/fisica_clasica.png',
  'moderna': 'index/fisica_moderna.png',
  
  // ============================================
  // MECÁNICA
  // ============================================
  'mecanica': 'mecanica/mecanica.png',
  'cinematica': 'mecanica/cinematica/cinematica.png',
  'dinamica': 'mecanica/dinamica/dinamica.png',
  'estatica': 'mecanica/estatica/estatica.png',
  
  // Cinemática - Subtemas
  'mru': 'mecanica/cinematica/mru.png',
  'mruv': 'mecanica/cinematica/mruv.png',
  'mcu': 'mecanica/cinematica/mcu.png',
  'mcua': 'mecanica/cinematica/mcua.png',
  'mas': 'mecanica/cinematica/mas.png',
  'mp': 'mecanica/cinematica/mp.png',
  'mr': 'mecanica/cinematica/mr.png',
  
  // Dinámica - Subtemas
  'newton': 'mecanica/dinamica/leyes_newton.png',
  'trabajoenergia': 'mecanica/dinamica/trabajoEnergia.png',
  'movimpulso': 'mecanica/dinamica/movimiento.png',
  'movcircular': 'mecanica/dinamica/movcircular.png',
  'rotacion': 'mecanica/dinamica/rotacion.png',
  'gravitacion': 'mecanica/dinamica/gravitacion.png',
  'equilibrio': 'mecanica/dinamica/equilibrio.png',
  'friccion': 'mecanica/dinamica/friccion.png',
  'masaspoleas': 'mecanica/dinamica/masas_poleas.png',
  'maquinas': 'mecanica/dinamica/maquinas.png',
  'oscilaciones': 'mecanica/dinamica/oscilaciones.png',
  
  // Estática - Subtemas
  'aplicaciones': 'mecanica/estatica/aplicaciones.png',
  'apoyos': 'mecanica/estatica/apoyos_reacciones.png',
  'centro': 'mecanica/estatica/centro_masa.png',
  'diagramas': 'mecanica/estatica/diagramas.png',
  'estabilidad': 'mecanica/estatica/estabilidad.png',
  'estructuras': 'mecanica/estatica/estructuras.png',
  'friccionest': 'mecanica/estatica/friccionest.png',
  'momentos': 'mecanica/estatica/momentos.png',
  'vectores': 'mecanica/estatica/vectores.png',
  
  // ============================================
  // ELECTROMAGNETISMO
  // ============================================
  'electromagnetismo': 'electromagnetismo/electromagnetismo.png',
  'electricidad': 'electromagnetismo/electricidad/electricidad.png',
  'magnetismo': 'electromagnetismo/magnetismo/magnetismo.png',
  'maxwell': 'electromagnetismo/maxwell/maxwell.png',
  'ondas': 'electromagnetismo/ondas/ondas-electromagneticas.png',
  'electronica': 'electromagnetismo/electronica/electronica.png',
  
  // Electricidad - Subtemas
  'campos-electricos': 'electromagnetismo/electricidad/camposelectricos.png',
  'carga-fuerza': 'electromagnetismo/electricidad/cargaelectrica.png',
  'circuitos': 'electromagnetismo/electricidad/circuitos.png',
  'corriente-ohm': 'electromagnetismo/electricidad/corriente.png',
  'potencial': 'electromagnetismo/electricidad/potencialelectrico.png',
  'capacidad': 'electromagnetismo/electricidad/capacidadelectrica.png',
  
  // Circuitos - Subtemas
  'circuitos-ca': 'electromagnetismo/electricidad/circuitos/circuitosac.png',
  'circuitos-cc': 'electromagnetismo/electricidad/circuitos/circuitoscc.png',
  'transitorios': 'electromagnetismo/electricidad/circuitos/transitorios.png',
  
  // Magnetismo - Subtemas
  'campos-fuerza': 'electromagnetismo/magnetismo/campos.png',
  'fuentes-campo': 'electromagnetismo/magnetismo/fuentescampo.png',
  'induccion': 'electromagnetismo/magnetismo/induccion.png',
  
  // Electrónica - Subtemas
  'dispositivos-fotonicos': 'electromagnetismo/electronica/dispositivos_fotonicos.png',
  'dispositivos-semiconductores': 'electromagnetismo/electronica/semiconductores.png',
  'familias-logicas': 'electromagnetismo/electronica/familias.png',
  
  // ============================================
  // TERMODINÁMICA
  // ============================================
  'termodinamica': 'm_termodinamica.png',
  
  // Nivel 1: Conceptos Fundamentales
  '01_conceptos_fundamentales': 'termodinamica/01_conceptos.png',
  'estado_y_equilibrio': 'termodinamica/01_estado.png',
  'frontera_y_entorno': 'termodinamica/01_frontera.png',
  'introduccion_a_la_termodinamica': 'termodinamica/01_introduccion.png',
  'propiedades_termicas': 'termodinamica/01_propiedades.png',
  'sistemas_termodinamicos': 'termodinamica/01_sistemas.png',
  
  // Nivel 2: Magnitudes Térmicas
  '02_magnitudes_termicas': 'termodinamica/02_magnitudes.png',
  'temperatura': 'termodinamica/02_temperatura.png',
  'calor': 'termodinamica/02_calor.png',
  'trabajo_termodinamico': 'termodinamica/02_trabajo.png',
  'presion': 'termodinamica/02_presion.png',
  
  // Nivel 3: Principios de la Termodinámica
  '03_principios_de_la_termodinamica': 'termodinamica/03_principios.png',
  'ley_cero_de_la_termodinamica': 'termodinamica/03_cero.png',
  'primera_ley_de_la_termodinamica': 'termodinamica/03_primera.png',
  'segunda_ley_de_la_termodinamica': 'termodinamica/03_segunda.png',
  'tercera_ley_de_la_termodinamica': 'termodinamica/03_tercera.png',
  'formulaciones_equivalentes': 'termodinamica/03_formulacion.png',
  
  // Nivel 4: Modelos Moleculares y Gases
  '04_modelos_moleculares_y_gases': 'termodinamica/04_modelos.png',
  'gases_ideales': 'termodinamica/04_ideales.png',
  'gases_reales': 'termodinamica/04_reales.png',
  'teoria_cinetica_de_los_gases': 'termodinamica/04_teoria.png',
  'ecuaciones_de_estado': 'termodinamica/04_ecuaciones.png',
  
  // Nivel 5: Entropía
  '05_entropia': 'termodinamica/05_entropia.png',
  'medicion_y_calculo_de_la_entropia': 'termodinamica/05_entropia.png',
  'interpretacion_estadistica': 'termodinamica/05_estadistica.png',
  'entropia_en_procesos_reales': 'termodinamica/05_reales.png',
  'entropia_y_segunda_ley': 'termodinamica/05_segunda.png',
  'entropia_de_mezcla': 'termodinamica/05_mezcla.png',
  
  // Nivel 6: Procesos Termodinámicos
  '06_procesos_termodinamicos': 'termodinamica/06_procesos.png',
  'proceso_isobarico': 'termodinamica/06_isobarico.png',
  'proceso_isocorico': 'termodinamica/06_isocorico.png',
  'proceso_isotermico': 'termodinamica/06_isotermico.png',
  'proceso_adiabatico': 'termodinamica/06_adiabatico.png',
  'proceso_politropico': 'termodinamica/06_politropico.png',
  
  // Nivel 7: Potenciales Termodinámicos
  '07_potenciales_termodinamicos': 'termodinamica/07_potenciales.png',
  'energia_interna': 'termodinamica/07_energia_interna.png',
  'entalpia': 'termodinamica/07_entalpia.png',
  'energia_libre_gibbs': 'termodinamica/07_gibbs.png',
  'energia_libre_helmholtz': 'termodinamica/07_helmholtz.png',
  'relaciones_maxwell': 'termodinamica/07_maxwell.png',
  'criterios_equilibrio': 'termodinamica/07_criterios.png',
  
  // Nivel 8: Máquinas Térmicas y Refrigeración
  '08_maquinas_termicas_y_refrigeracion': 'termodinamica/08_termicas.png',
  'ciclo_de_carnot': 'termodinamica/08_carnot.png',
  'maquinas_termicas': 'termodinamica/08_maquinas.png',
  'refrigeracion_y_bombas_de_calor': 'termodinamica/08_refrigeracion.png',
  
  // Nivel 9: Ciclos Termodinámicos
  '09_ciclos_termodinamicos': 'termodinamica/09_ciclos.png',
  'ciclo_otto': 'termodinamica/09_otto.png',
  'ciclo_diesel': 'termodinamica/09_diesel.png',
  'ciclo_brayton': 'termodinamica/09_brayton.png',
  'ciclo_rankine': 'termodinamica/09_rankine.png',
  'ciclo_stirling': 'termodinamica/09_stirling.png',
  'ciclo_ericsson': 'termodinamica/09_ericsson.png',
  
  // Nivel 10: Ciclos Combinados
  '10_ciclos_combinados': 'termodinamica/10_cicloscom.png',
  'ciclo_de_brayton_rankine': 'termodinamica/10_brayton_rankine.png',
  'cogeneracion': 'termodinamica/10_cogeneracion.png',
  'ciclo_de_rankine_con_turbina_de_gas': 'termodinamica/10_rankine_gas.png',
  
  // Nivel 11: Transferencia de Calor
  '11_transferencia_de_calor': 'termodinamica/11_transferencia.png',
  'conceptos_basicos': 'termodinamica/11_conceptos.png',
  'conduccion': 'termodinamica/11_conduccion.png',
  'conveccion': 'termodinamica/11_conveccion.png',
  'radiacion': 'termodinamica/11_radiacion.png',
  'aislamiento_termico': 'termodinamica/11_aislamiento.png',
  'resistencia_termica_equivalente': 'termodinamica/11_resistencia.png',
  'intercambiadores_de_calor': 'termodinamica/11_intercambio.png',
  
  // Nivel 12: Aplicaciones Prácticas
  '12_aplicaciones_practicas': 'termodinamica/12_aplicaciones_practicas.png',
  'bombas_termicas_domesticas': 'termodinamica/12_bombas.png',
  'centrales_electricas': 'termodinamica/12_centrales_electricas.png',
  'ciclos_de_potencia': 'termodinamica/12_ciclos_potencia.png',
  'ciclos_de_refrigeracion': 'termodinamica/12_ciclos_refrigeracion.png',
  'motores_de_combustion_interna': 'termodinamica/12_motores.png',
  'sistemas_de_climatizacion': 'termodinamica/12_sistemas_refrigeracion.png',
  
  // Nivel 13: Termodinámica Estadística
  '13_termodinamica_estadistica': 'termodinamica/13_estadisticater.png',
  'microestados_y_macroestados': 'termodinamica/13_microestados.png',
  'distribuciones_de_boltzmann_y_gibbs': 'termodinamica/13_distribuciones.png',
  'funcion_de_particion': 'termodinamica/13_particion.png',
  'ensambles_estadisticos': 'termodinamica/13_ensambles.png',
  'estadisticas_cuanticas': 'termodinamica/13_cuanticas.png',
  'teorema_de_equiparticion': 'termodinamica/13_equiparticion.png',
  'gas_ideal_cuantico': 'termodinamica/13_gasideal.png',
  'condensacion_bose_einstein': 'termodinamica/13_bose_einstein.png',
  'gas_de_fermi': 'termodinamica/13_fermi.png',
  'fonones_modelo_debye': 'termodinamica/13_fonones.png',
  'transiciones_de_fase': 'termodinamica/13_transiciones.png',
  'modelo_de_ising': 'termodinamica/13_ising.png',
  'calculo_de_propiedades_termodinamicas': 'termodinamica/13_estadistica.png',
  'simulaciones_monte_carlo': 'termodinamica/13_estadistica.png',
  'aplicaciones_de_la_estadistica_cuantica': 'termodinamica/13_cuanticas.png',
  'analisis_de_sistemas_complejos': 'termodinamica/13_sis_complejos.png',
  
  // ============================================
  // MECÁNICA DE FLUIDOS
  // ============================================
  'mecanica_de_fluidos': 'fluidos.png',
  'estatica_de_fluidos': 'fluidos.png',
  'dinamica_de_fluidos': 'fluidos.png',
  'flujo_en_tuberias': 'fluidos.png',
  'presion': 'fluidos.png',
  'manometria': 'fluidos.png',
  'flotabilidad_y_estabilidad': 'fluidos.png',
  'ecuacion_de_bernoulli': 'fluidos.png',
  'ecuacion_de_continuidad': 'fluidos.png',
  'vorticidad_y_circulacion': 'fluidos.png',
  'numero_de_reynolds': 'fluidos.png',
  'flujo_laminar_y_turbulento': 'fluidos.png',
  'perdidas_de_carga': 'fluidos.png',
  'bombas_y_turbinas': 'fluidos.png',
  'redes_de_tuberias': 'fluidos.png',

  
  // ============================================
  // ÓPTICA
  // ============================================
  'optica': 'optica.png',
  
  // Óptica - Temas principales
  'optica_geometrica': 'optica.png',
  'optica_fisica': 'optica.png',
  'fotometria': 'optica.png',
  
  // Óptica Geométrica - Subtemas
  'reflexion_y_espejos': 'optica.png',
  'refraccion_y_lentes': 'optica.png',
  'instrumentos_opticos': 'optica.png',
  'aberraciones_opticas': 'optica.png',
  
  // Óptica Física - Subtemas
  'interferencia': 'optica.png',
  'difraccion': 'optica.png',
  'polarizacion': 'optica.png',
  'dispersion': 'optica.png',
  
  // Fotometría - Subtemas
  'flujo_luminoso': 'optica.png',
  'intensidad_luminosa': 'optica.png',
  'iluminacion': 'optica.png',
  
  // ============================================
  // ACÚSTICA
  // ============================================
  'acustica': 'acustica/acustica.png',
  
  // Acústica - Subtemas
  'ondas_sonoras': 'acustica/acustica.png',
  'propiedades_sonido': 'acustica/acustica.png',
  'fenomenos_acusticos': 'acustica/acustica.png',
  'resonancia': 'acustica/acustica.png',
  'efecto_doppler': 'acustica/acustica.png',
  'acustica_arquitectonica': 'acustica/acustica.png',
  
  // ============================================
  // OTRAS ÁREAS (pendientes de organizar)
  // ============================================
  'hidrostatica': 'm_hidrostatica.png',
};

/**
 * Obtiene la ruta completa de un icono desde assets
 * @param {string} key - Clave del icono
 * @returns {string} - Ruta relativa desde assets/

export function getIconPath(key) {
  return ICON_PATHS[key] || 'default-icon.png';
}
 */
export function getIconPath(key) {
  const rel = ICON_PATHS[key] || "default-icon.png";
  return `/assets/icons/${rel}`;
}

/**
 * Genera un import statement para un icono
 * @param {string} key - Clave del icono
 * @param {string} varName - Nombre de la variable
 * @returns {string} - Statement de import
 */
export function generateIconImport(key, varName) {
  const path = getIconPath(key);
  return `import ${varName} from "../assets/${path}";`;
}
