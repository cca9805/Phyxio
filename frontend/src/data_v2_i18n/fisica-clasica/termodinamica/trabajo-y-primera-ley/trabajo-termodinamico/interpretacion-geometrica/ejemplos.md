# Ejemplo tipo examen


## Enunciado

Un gas ideal realiza un ciclo rectangular en el diagrama p-V con los cuatro estados: A(1×10⁻³ m³, 1×10⁵ Pa), B(3×10⁻³ m³, 1×10⁵ Pa), C(3×10⁻³ m³, 3×10⁵ Pa) y D(1×10⁻³ m³, 3×10⁵ Pa). El ciclo se recorre en el orden A→B→C→D→A. Calcular el trabajo neto [[trabajo_neto_del_ciclo]] y determinar si el ciclo actúa como motor o refrigerador.

## Datos

- A: V = 1×10⁻³ m³, p = 1×10⁵ Pa
- B: V = 3×10⁻³ m³, p = 1×10⁵ Pa
- C: V = 3×10⁻³ m³, p = 3×10⁵ Pa
- D: V = 1×10⁻³ m³, p = 3×10⁵ Pa

## Definición del sistema

El sistema es el gas ideal dentro del cilindro. Se usa la convención física: [[trabajo_termodinamico]] > 0 para expansión.

## Modelo físico

Ciclo rectangular en el diagrama p-V formado por dos isobáricos y dos isocóricos. El trabajo de cada proceso es el área bajo esa parte de la curva. El trabajo neto es la suma algebraica de los cuatro procesos, que equivale al área del rectángulo encerrado por el ciclo.

El modelo físico considera magnitudes fundamentales del sistema como [[presion]], [[trabajo_neto_del_ciclo]], [[trabajo_termodinamico]].

## Justificación del modelo

El ciclo rectangular es el caso más simple de representación en el diagrama p-V porque está formado exclusivamente por procesos isobáricos e isocóricos. En los tramos isobáricos, la [[presion]] permanece constante y el área bajo la curva es un rectángulo exacto con base ΔV y altura p; en los tramos isocóricos, ΔV es nulo y el trabajo es estrictamente cero. Esta estructura permite calcular el área total sin ninguna integración analítica: basta con identificar el rectángulo en el diagrama y multiplicar sus lados. El modelo es válido porque el gas opera en condiciones de baja presión y la aproximación cuasi-estática se justifica por la lentitud relativa del proceso respecto al tiempo de relajación del gas.

## Resolución simbólica

El área encerrada por el ciclo rectangular es (p_alta − p_baja) × (V_alta − V_baja). El sentido A→B→C→D→A se analiza: A→B es expansión isobárica (derecha), B→C es isocórica (arriba), C→D es compresión isobárica (izquierda), D→A es isocórica (abajo). Recorrido en sentido horario → [[trabajo_neto_del_ciclo]] > 0 → motor.

{{f:trabajo_area_pV}}

{{f:trabajo_ciclo}}

## Sustitución numérica

Proceso A→B (isobárico, expansión): [[trabajo_termodinamico]]_AB = 1×10⁵ × (3−1)×10⁻³ = 200 J.

Proceso B→C (isocórico): [[trabajo_termodinamico]]_BC = 0.

Proceso C→D (isobárico, compresión): [[trabajo_termodinamico]]_CD = 3×10⁵ × (1−3)×10⁻³ = −600 J.

Proceso D→A (isocórico): [[trabajo_termodinamico]]_DA = 0.

[[trabajo_neto_del_ciclo]] = 200 + 0 + (−600) + 0 = −400 J.

Verificación por área del rectángulo: (3×10⁵ − 1×10⁵) × (3×10⁻³ − 1×10⁻³) = 2×10⁵ × 2×10⁻³ = 400 J. El signo es negativo porque el recorrido A→B→C→D→A es en realidad antihorario (la expansión ocurre a baja presión y la compresión a alta presión), por tanto [[trabajo_neto_del_ciclo]] = −400 J → refrigerador.

## Validación dimensional

La dimensión del [[trabajo_termodinamico]] se verifica a partir de las dimensiones de [[presion]] y [[volumen]]:

- [[presion]]: `[M L⁻¹ T⁻²]` (pascales)
- [[volumen]]: `[L³]` (metros cúbicos)
- Producto p·ΔV: `[M L⁻¹ T⁻²]·[L³]` = `[M L² T⁻²]` (julios)

El resultado `[M L² T⁻²]` corresponde a la dimensión de la energía, coherente con el hecho de que [[trabajo_termodinamico]] es una transferencia de energía mecánica. Para el trabajo neto [[trabajo_neto_del_ciclo]], la dimensión es idéntica al ser también un trabajo. La verificación confirma que el área del rectángulo expresada en Pa·m³ da directamente julios, sin necesidad de factores de conversión adicionales.

## Interpretación física

El ciclo es antihorario: la expansión ocurre a baja presión (A→B, trabajo positivo pequeño de 200 J) y la compresión ocurre a alta presión (C→D, trabajo negativo grande de 600 J). El área del ciclo en el diagrama p-V cuantifica visualmente esta asimetría: la trayectoria superior (C→D) tiene más área que la inferior (A→B), dejando un déficit neto de 400 J que el sistema debe recibir del exterior. Este balance energético es la firma geométrica de una máquina que consume trabajo para mover calor contra el gradiente de temperatura: exactamente el principio de funcionamiento de un refrigerador o bomba de calor. La lectura visual del sentido antihorario en el diagrama p-V es suficiente para diagnosticar el tipo de máquina sin ningún cálculo adicional.

El resultado también confirma la dependencia de la trayectoria del [[trabajo_termodinamico]]: si los cuatro estados A, B, C, D son fijos, pero el ciclo se recorre en sentido horario (A→D→C→B→A en lugar de A→B→C→D→A), el módulo del trabajo neto es el mismo (400 J) pero el signo se invierte, y el sistema pasaría a ser un motor en lugar de un refrigerador. El área encerrada es idéntica; solo cambia el sentido de recorrido. Esta observación conecta directamente la geometría del diagrama con la física de las máquinas térmicas.

---

# Ejemplo de aplicación real


## Contexto

El diagnóstico de motores de combustión interna mediante el indicador de presión en el cilindro (técnica P-V) es una aplicación directa de la interpretación geométrica. Un sensor de presión y un encoder de posición del cigüeñal miden simultáneamente p y V durante cada ciclo del motor. El software integrador calcula el área encerrada por el ciclo en el diagrama p-V, que es el trabajo neto por cilindro por ciclo.

## Estimación física

Un motor de gasolina de 4 cilindros a 3000 rpm con trabajo neto de 300 J por cilindro por ciclo funciona a 25 ciclos por segundo; con 4 cilindros activos eso suma 30 000 W, equivalentes a 30 kW de potencia. Si el diagrama p-V muestra que el área del ciclo se ha reducido a 250 J por cilindro (por envejecimiento, pérdida de compresión o ajuste deficiente del encendido), la potencia cae a 25 kW. El diagnóstico por indicador p-V permite identificar exactamente en qué fase del ciclo se pierde el área (y por tanto el trabajo) sin desmontar el motor. La reducción porcentual del área del ciclo en el diagrama p-V es directamente proporcional a la pérdida de potencia, lo que convierte la lectura geométrica en una estimación cuantitativa inmediata de la degradación del motor.

## Interpretación

La interpretación geométrica del diagrama p-V convierte la lectura del área en una herramienta de diagnóstico cuantitativo. La reducción del área del ciclo indica pérdida de trabajo neto; la deformación de la forma del ciclo indica anomalías en procesos específicos (mala combustión, fuga de gases, retardo en el encendido). Esta aplicación ilustra que el diagrama p-V no es solo una herramienta teórica sino un instrumento de medida y diagnóstico en ingeniería. Identificar visualmente qué parte del ciclo ha perdido área permite al ingeniero inferir la causa física del problema: si la zona de expansión es más estrecha, hay pérdida de compresión; si la zona de combustión es asimétrica, hay retardo en el encendido. Esta lectura causal del diagrama p-V es la aplicación más directa del principio de que el área bajo la curva es exactamente el [[trabajo_termodinamico]].