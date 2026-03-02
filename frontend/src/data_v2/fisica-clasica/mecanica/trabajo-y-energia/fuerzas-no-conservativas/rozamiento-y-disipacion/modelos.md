# Modelos y alcances

## Formulación Base

La **disipación por rozamiento** se describe mediante el trabajo realizado por una fuerza de roce que convierte energía mecánica en calor. En el modelo clásico:

$$W_{\text{roce}} = -f_r \cdot d = -\mu N \cdot d$$

donde $\mu$ es el coeficiente de rozamiento (adimensional), $N$ es la fuerza normal, y $d$ es la distancia de deslizamiento. La energía disipada es:

$$E_{\text{disipada}} = \mu N d = \mu mg d \cos\theta$$

(en un plano inclinado a ángulo $\theta$, la normal es $N = mg\cos\theta$).

## Hipótesis Operacionales

1. **Proporcionalidad directa con normal**: La fuerza de roce es linealmente dependiente de la fuerza normal. Esto surge de mecanismos microscópicos de asperezas superficiales que se deforman bajo carga.

2. **Independencia del área aparente de contacto**: Paradójicamente, el trabajo disipado en recorrido $d$ es independiente del área macroscópica de contacto—dos cuerpos con áreas diferentes pero mismo material y mismo peso disipan la misma energía.

3. **Coeficiente efectivo constante**: Dentro de rangos moderados de velocidad, temperatura y presión normal, $\mu$ se comporta como constante característica del par de superficies. En realidad, $\mu$ varía lentamente con velocidad; esto se captura mediante un coeficiente efectivo promediado.

4. **Disipación irreversible**: La energía disipada se transforma enteramente en calor (vibraciones atómicas). No hay recuperación de energía mecánica útil tras el deslizamiento.

## Alcances: Dónde el Modelo es Válido

- **Sólidos secos o ligeramente lubricados**: Rozamiento Coulomb entre superficies metálicas, cerámicas, plásticos, textiles.
- **Velocidades bajas a moderadas**: $v \lesssim 10$ m/s; para $v$ muy alta, entra en régimen de arrastre viscoso donde $f_r \propto v$ o $f_r \propto v^2$.
- **Temperaturas normales**: $T < 0.5 T_{\text{fusion}}$ del material;a temperaturas cercanas a fusión, el material plastifica y $\mu$ cambia drásticamente.
- **Contacto firme continuo**: No aplica en sistemas sumergidos o en régimen hidrodinámico donde una película fluida separa las superficies.
- **Presiones normales moderadas**: $p \lesssim 10$ GPa; a presiones extremas penetra el régimen elastoplástico donde el modelo Coulomb falla.

## Límites: Señales de Ruptura del Modelo

1. **Velocidades extremas**: Cuando $v > 10$ m/s, aparece **arrastre viscoso** ($f_r \propto v$ o $f_r \propto v^2$). Ejemplo: paracaidismo—la fricción dinámica del aire domina sobre rozamiento superficial.

2. **Lubricación hidrodinámica**: Si las superficies se separan por una película fluida viscosa (aceite, agua), el rozamiento cambia a régimen **viscoso puro** ($f_r = \eta A \frac{dv}{dz}$) donde $\eta$ es viscosidad dinámica. Ejemplo: cojinetes de motores a alta rpm.

3. **Deformación plástica**: En contacto de presión muy alta o materiales blandos, comienza plastificación. El coeficiente efectivo $\mu$ crece no linealmente con $N$, violando la proporcionalidad lineal.

4. **Resonancia térmica**: En deslizamiento continuo (freno de emergencia), la **disipación térmica local** puede causar fusión micro-superficial, cambios de fase, o desgaste acelerado. El modelo $\mu$ constante pierde validez en segundos.

5. **Nanoscala y efectos cuánticos**: Bajo microscopio de fuerzas atómicas (AFM), se observan efectos de adhesión molecular y fricción a nivel de átomos individuales. El modelo macroscópico colapsa a escala nanométrica.

## Criterios Prácticos de Selección

| **Regime** | **Descripción** | **Fórmula aplicable** | **Ejemplo** |
|---|---|---|---|
| **Bajo rozamiento, baja velocidad** | Metales pulidos, hielo, teflón; $v < 1$ m/s | $f_r = \mu_s N$ (estático) o $\mu_k N$ (dinámico) | Mueble deslizándose en piso |
| **Rozamiento intermedio, velocidad moderada** | Acero-acero, caucho-asfalto; $1 < v < 5$ m/s | $f_r = \mu N$; eventualmente sumar $F_{\text{aire}} = \frac{1}{2}\rho C_d A v^2$ | Vehículo frenando desde 40 km/h |
| **Fricción mixta** | Transición entre Coulomb y viscoso; $5 < v < 10$ m/s | $f_r = \mu N + k v$ (término lineal en velocidad) | Patín sobre hielo mojado |
| **Régimen viscoso dominante** | Arrastre fluidodinámico; $v > 10$ m/s o película fluida | $f_r \approx \eta A \frac{dv}{dz}$ o $F_{\text{arrastre}} \propto v^2$ | Paracaidista; cojinete sumergido |

## Resumen: Cuándo Usar Este Modelo

Para **nivel escolar e ingenieril básico**, el modelo $f_r = \mu N$ es adecuado cuando:
- Se busca estimación energética de pérdidas (órdenes de magnitud correctos)
- Velocidades $< 10$ m/s y materiales no sumergidos
- No se requiere precisión tribológica fina (ej., desgaste acelerado, adhesión molecular)
- El tiempo de aplicación es corto ($t \lesssim$ minutos) para evitar efectos térmicos severos

Para sistemas de **alta confiabilidad** (aviones, vehículos críticos), el modelo se extiende con:  
- Tabulación empírica de $\mu(T, v, p)$ en lugar de constante
- Acoplamiento térmico (calor local → cambios $\mu$ → retroalimentación)
- Simulación tribológica con desgaste microscópico iterativo