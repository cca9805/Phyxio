const e=`# Ejemplo tipo examen

## Enunciado

Una barra de acero inoxidable de sección circular con diámetro 25 mm está unida a una barra de aluminio 6061 de sección cuadrada con lado 30 mm. Una onda longitudinal se propaga por el acero e incide perpendicularmente en la interfaz. Determinar la impedancia mecánica de cada barra, el coeficiente de reflexión en amplitud y la fracción de potencia transmitida al aluminio.

Datos del acero inoxidable: densidad 7900 kg/m³, velocidad longitudinal 5790 m/s.
Datos del aluminio 6061: densidad 2700 kg/m³, velocidad longitudinal 6320 m/s.

## Datos

- [[rho]] (acero) = 7900 kg/m³
- [[c_s]] (acero) = 5790 m/s
- Diámetro acero: 25 mm (0.025 m)
- [[A_sec]] (acero) = π·(0.025/2)² = 4.91 × 10⁻⁴ m²
- [[rho]] (aluminio) = 2700 kg/m³
- [[c_s]] (aluminio) = 6320 m/s
- Lado aluminio: 30 mm (0.030 m)
- [[A_sec]] (aluminio) = (0.030)² = 9.00 × 10⁻⁴ m²

## Definición del sistema

El sistema es una interfaz plana entre dos barras de materiales y secciones distintas. La onda incide desde el acero (medio 1) hacia el aluminio (medio 2). Se asume incidencia normal y ondas planas (longitud de onda mucho mayor que los diámetros de las barras).

## Modelo físico

Se aplica el modelo de impedancia mecánica para ondas planas con la fórmula fundamental [[Z_mec]] = [[rho]] · [[c_s]] · [[A_sec]], seguido de los coeficientes de reflexión [[R_Z]] y transmisión [[T_Z]] en amplitud de velocidad. La potencia transmitida se calcula como fracción de la potencia incidente.

## Justificación del modelo

El modelo es válido porque las dimensiones transversales (25 mm y 30 mm) son mucho menores que la longitud de onda típica a frecuencias de ingeniería. A 100 kHz, la longitud de onda en el acero es de unos 58 mm, muy superior a los 25 mm de diámetro, por lo que la hipótesis de onda plana se cumple con margen. El modelo dejaría de valer si la frecuencia superara aproximadamente 50 kHz para la barra más gruesa, donde aparecerían modos guiados.

## Resolución simbólica

Impedancia mecánica de cada medio:

{{f:impedancia_mecanica}}

Para el medio 1 (acero): [[Z_mec]]₁ = [[rho]]₁ · [[c_s]]₁ · [[A_sec]]₁

Para el medio 2 (aluminio): [[Z_mec]]₂ = [[rho]]₂ · [[c_s]]₂ · [[A_sec]]₂

Coeficiente de reflexión:

{{f:coeficiente_reflexion_impedancia}}

Coeficiente de transmisión:

{{f:coeficiente_transmision_impedancia}}

Fracción de potencia transmitida: η = (Z₁/Z₂) · [[T_Z]]² = 1 - [[R_Z]]²

## Sustitución numérica

Para [[Z_mec]]₁ (acero), multiplicar 7900 kg/m³ por 5790 m/s por 4.91 × 10⁻⁴ m². Esto da aproximadamente 22 460 kg/s. Por tanto [[Z_mec]]₁ ≈ 22 460 kg/s.

Para [[Z_mec]]₂ (aluminio), multiplicar 2700 kg/m³ por 6320 m/s por 9.00 × 10⁻⁴ m². Esto da aproximadamente 15 340 kg/s. Por tanto [[Z_mec]]₂ ≈ 15 340 kg/s.

Para [[R_Z]], la diferencia (15340 - 22460) entre la suma (15340 + 22460) da aproximadamente -0.188. Por tanto [[R_Z]] ≈ -0.188.

Para [[T_Z]], el doble de Z₂ (30680) entre la suma (37800) da aproximadamente 0.812. Verificación de consistencia: 1 + (-0.188) = 0.812 ✓. Por tanto [[T_Z]] ≈ 0.812.

Fracción de potencia transmitida: 1 - (-0.188)² = 1 - 0.035 ≈ 0.965. Por tanto se transmite el 96.5% de la potencia incidente.

## Validación dimensional

La impedancia mecánica resulta del producto de tres magnitudes con dimensiones independientes. El desglose dimensional confirma la coherencia del resultado:

- [[Z_mec]]: densidad por velocidad por área da \`[M L⁻³] · [L T⁻¹] · [L²] = [M T⁻¹]\` que corresponde a kg/s ✓
- [[R_Z]]: cociente de dos impedancias da \`[M T⁻¹] / [M T⁻¹] = [1]\` adimensional, como se espera de un coeficiente de reflexión ✓
- [[T_Z]]: misma estructura dimensional que [[R_Z]], también adimensional \`[M T⁻¹] / [M T⁻¹] = [1]\` ✓

Todos los resultados numéricos tienen las unidades esperadas y los valores caen dentro de los rangos físicamente razonables para sólidos de ingeniería.

## Interpretación física

El signo negativo de [[R_Z]] indica que el aluminio tiene menor impedancia mecánica que el acero, a pesar de tener mayor sección y mayor velocidad. Esto ocurre porque la densidad del aluminio es mucho menor y domina el producto. La onda reflejada sufre inversión de fase: la velocidad de partícula reflejada tiene signo opuesto a la incidente en el instante de la reflexión.

La fracción de potencia transmitida del 96.5% es muy alta para una unión entre materiales tan diferentes. Esto se debe a que el aumento de sección del aluminio compensa parcialmente su menor impedancia específica (ρ·c). Si ambas barras tuvieran la misma sección, la reflexión sería mucho mayor: R ≈ (17064-45741)/(17064+45741) ≈ -0.46, y solo se transmitiría el 79% de la potencia.

Este resultado tiene implicaciones prácticas en diseño: eligiendo la sección adecuada del segundo material se puede adaptar la impedancia y minimizar las pérdidas por reflexión en la unión, sin necesidad de capas intermedias de acoplamiento.

# Ejemplo de aplicación real

## Contexto

En la fabricación de sensores ultrasónicos piezoeléctricos, el cristal piezoeléctrico (PZT-4) debe transmitir vibraciones a la pieza metálica inspeccionada (acero). La impedancia específica del PZT-4 es aproximadamente 34 MRayl y la del acero es 46 MRayl. Se diseña una capa de adaptación intermedia (matching layer) para maximizar la transmisión a una frecuencia central de 5 MHz.

## Estimación física

La impedancia ideal de la capa de adaptación debe ser la media geométrica de las impedancias de ambos medios. La raíz cuadrada del producto 34 × 46 da aproximadamente 39.5 MRayl (trabajando con impedancias específicas). Para convertir a impedancia mecánica total [[Z_mec]], se multiplica por la sección activa del transductor. Un disco piezoeléctrico de 10 mm de diámetro tiene [[A_sec]] de unos 78.5 mm², lo que da una impedancia mecánica del cristal de aproximadamente 34 × 10⁶ × 78.5 × 10⁻⁶ ≈ 2670 kg/s.

Sin capa de adaptación, calculando [[R_Z]] como la diferencia (46 menos 34) entre la suma (46 más 34), se obtiene un coeficiente de reflexión de aproximadamente 0.15. La potencia reflejada resulta ser el cuadrado de ese valor, es decir, un 2.3% de pérdida.

Con la capa ideal de un cuarto de longitud de onda a 5 MHz, la reflexión se anula teóricamente y la transmisión alcanza el 100%. El espesor requerido es un cuarto de la longitud de onda en la capa. Para un material con [[c_s]] de unos 4000 m/s a 5 MHz, la longitud de onda es 0.8 mm y el espesor necesario resulta ser 0.2 mm.

En la práctica, el aluminio epoxi (mezcla de resina con polvo de aluminio) tiene una impedancia cercana al valor ideal de 39.5 MRayl y se utiliza frecuentemente como matching layer en transductores de ensayos no destructivos. La mejora en sensibilidad al usar esta capa optimizada es del orden de 6 dB respecto al transductor sin adaptación.

## Interpretación

El diseño de la capa de adaptación demuestra que la impedancia mecánica no es solo un concepto teórico sino una herramienta de diseño directa. Controlando [[rho]], [[c_s]] y el espesor de una capa intermedia se puede lograr transmisión casi perfecta entre materiales muy distintos. Sin este principio, los transductores ultrasónicos perderían una fracción significativa de energía en la interfaz cristal-pieza, reduciendo la sensibilidad del sistema de inspección.
`;export{e as default};
