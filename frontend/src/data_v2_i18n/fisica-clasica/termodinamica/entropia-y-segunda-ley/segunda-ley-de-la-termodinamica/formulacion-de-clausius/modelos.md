# Modelos físicos para la Formulación de Clausius

## Modelo ideal

El modelo ideal para el enunciado de Clausius es el sistema de **dos focos térmicos infinitos** en contacto térmico a traves de una interfaz conductora. En este modelo:

- Los focos caliente ([[T_A]]) y frio ([[T_B]]) mantienen temperaturas constantes e inmutables, independientemente de la cantidad de calor [[Q]] transferida.
- El flujo de calor es **puramente conductivo**, gobernado por la ley de Fourier con conductividad térmica constante.
- No existe **acumulacion de calor** en la interfaz: todo el calor que entra por un lado sale por el otro instantaneamente.
- El proceso es **cuasi-estatico reversible**, con diferencias de temperatura infinitesimales que permiten la reversibilidad teorica.

Este modelo idealiza la situación física real donde los focos tienen capacidad calorifica infinita y las transferencias son perfectamente reversibles. Es útil para establecer limites teoricos y comprender la direccion fundamental del flujo térmico sin las complicaciones de los procesos reales irreversibles.

## Hipótesis

1. **Temperaturas uniformes y constantes**: Cada foco térmico posee temperatura homogenea espacialmente y constante temporalmente. Esto requiere capacidad calorifica infinita o reservorios energeticamente inagotables.

2. **Contacto térmico ideal**: La interfaz entre focos permite transferencia térmica perfecta sin resistencia de contacto ni perdidas al ambiente exterior.

3. **Proceso estacionario**: El flujo de calor alcanza rápidamente un regimen estacionario donde la tasa de transferencia es constante.

4. **Ausencia de trabajo externo**: El flujo espontaneo ocurre sin intervención mecánica; solo la diferencia de temperaturas [[DeltaT]] impulsa la transferencia.

5. **Equilibrio térmico local**: Aunque hay flujo neto, cada punto de los focos internamente esta en equilibrio térmico local con temperatura bien definida.

## Dominio de validez cuantitativo

El modelo de focos infinitos es válido cuando se cumple:

[[Q]] / ([[C_A]] · [[T_A]]) << 0.01 y [[Q]] / ([[C_B]] · [[T_B]]) << 0.01

Donde [[C_A]] y [[C_B]] son las capacidades calorificas de los focos. Esto significa que el calor transferido debe ser menos del 1% del contenido energético térmico de cada foco para que sus temperaturas permanezcan esencialmente constantes.

Para un proceso concreto con diferencia de temperaturas [[DeltaT]] de 50 K y duracion t de 100 s, el modelo es válido si:

- Conductividad térmica k > 0.1 W/(m·K) (materiales no aislantes)
- Dimension caracteristica L < 0.1 m (transferencias rápidas)
- Número de Biot Bi < 0.1 (resistencia interna << resistencia superficial)

## Señales de fallo del modelo

El modelo de focos infinitos deja de ser aplicable cuando se observan estas señales:

- **Cambio apreciable de temperatura**: Si [[T_A]] desciende más de un 5% o [[T_B]] asciende más de un 5% durante el proceso, los focos no son infinitos.

- **Acumulacion de calor en la interfaz**: Si la temperatura de la superficie de contacto difiere significativamente de las temperaturas internas de los focos, existe resistencia térmica de contacto no considerada.

- **Flujo no estacionario**: Oscilaciones temporales en la tasa de flujo calorifico indican procesos transitorios que no siguen el regimen estacionario asumido.

- **Transferencia radiativa dominante**: Si la temperatura es alta (> 500 K) y los cuerpos estan separados, la radiacion puede superar la conduccion, invalidando el modelo conductivo puro.

- **Efectos de no equilibrio**: En gradientes extremos (> 10^6 K/m), el concepto de temperatura local pierde validez y se requieren descripciones de no equilibrio térmico.

## Modelo extendido o alternativo

El **modelo de focos finitos con capacidad calorifica finita** extiende el modelo ideal hacia situaciones más realistas:

- Los focos [[C_A]] y [[C_B]] tienen capacidades calorificas finitas, por lo que sus temperaturas evolucionan segun [[T]](t) = [[T_0]] ± [[Q]](t) / [[C]].
- El flujo calorifico es transitorio: [[Q]](t) = [[C_A]] · d[[T_A]]/dt = -[[C_B]] · d[[T_B]]/dt.
- El proceso continua hasta alcanzar equilibrio térmico: [[T_A]](∞) = [[T_B]](∞) = ([[C_A]]·[[T_A0]] + [[C_B]]·[[T_B0]]) / ([[C_A]] + [[C_B]]).

Diferencias concretas respecto al modelo ideal:
- El gradiente [[DeltaT]] disminuye temporalmente, reduciendo la tasa de transferencia.
- El tiempo para alcanzar equilibrio es finito y calculable: τ ~ [[L]]^2 / α (difusividad térmica).
- El análisis requiere ecuaciones diferenciales en lugar de algebraicas.

Transicion explicita: Se recomienda abandonar el modelo ideal y adoptar el extendido cuando [[Q]]_transferido > 0.05 · [[C]]_min · [[T]]_promedio.

## Comparacion operativa

| Aspecto | Modelo ideal (focos infinitos) | Modelo extendido (focos finitos) |
|---------|----------------------------------|----------------------------------|
| **Temperaturas** | Constantes [[T_A]], [[T_B]] | Evolucionan [[T_A]](t), [[T_B]](t) |
| **Ecuaciones** | Algebraicas simples | Diferenciales acopladas |
| **Complejidad** | Baja | Media |
| **Precision** | Limite teorico | Prediccion realista |
| **Tiempo de calculo** | Instantaneo | Requiere integración temporal |
| **Aplicaciones** | Limites teoricos, eficiencias maximas | Disenos reales, simulaciones dinamicas |
| **Validez** | Transferencias pequeñas, focos masivos | Transferencias significativas, sistemas pequeños |

Ventajas del modelo ideal:
- Simplicidad matemática que permite calculos rápidos
- Establece limites absolutos irreprochables (Carnot, Clausius)
- Facil interpretacion física sin complicaciones transitorias

Limites del modelo ideal:
- No predice evolucion temporal real
- No captura acumulacion térmica ni saturacion
- Inaplicable a sistemas con capacidades térmicas comparables al calor transferido

Ventajas del modelo extendido:
- Predice comportamiento temporal cuantitativo
- Captura equilibrio térmico final real
- Aplicable a sistemas de cualquier escala

Limites del modelo extendido:
- Requiere conocer capacidades calorificas exactas
- Más complejo computacionalmente
- Puede necesitar metodos numericos para casos no lineales

Magnitudes auxiliares del modelo extendido: [[C]], [[C_A]], [[C_B]], [[L]], [[P_termica]], [[T_0]], [[T_A0]], [[T_B0]], [[T_C]], [[T_K]], [[T_max]] y [[U]].
