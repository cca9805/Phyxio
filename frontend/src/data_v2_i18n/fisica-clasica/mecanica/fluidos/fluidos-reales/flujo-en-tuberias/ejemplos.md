# Ejemplo tipo examen

## Enunciado
En una planta de procesamiento de alimentos, se requiere bombear agua potable a través de una tubería de acero inoxidable de L  igual a  500text{ m} de longitud y un diámetro interno de D  igual a  0.15text{ m}. El caudal volumétrico [[Q]] necesario es de 0.04text{ m}^3text{/s}. El factor de fricción [[f]] se ha estimado en 0.018 mediante el diagrama de Moody. Calcula la caída de presión [[dp]] que experimentará el fluido debido únicamente al rozamiento viscoso a lo largo de todo el trayecto. Considera la densidad del agua como [[rho]]  igual a  1000text{ kg/m}^3.

## Datos
- Longitud de la tubería: [[L]]  igual a  500text{ m}
- Diámetro interno: [[D]]  igual a  0.15text{ m}
- Caudal volumétrico: [[Q]]  igual a  0.04text{ m}^3text{/s}
- Factor de fricción: [[f]]  igual a  0.018
- Densidad del fluido: [[rho]]  igual a  1000text{ kg/m}^3

## Definición del sistema
El sistema se define como un tramo recto de tubería horizontal de sección circular constante. El fluido es agua, tratada como un fluido incompresible y Newtoniano. El sistema opera en régimen estacionario, lo que significa que el caudal [[Q]] no varía con el tiempo. El entorno es la planta industrial, y nos enfocamos exclusivamente en las pérdidas por fricción primaria (pérdidas mayores), ignorando codos o válvulas en esta etapa del cálculo. Consideramos que el flujo está totalmente desarrollado y que no hay transferencia de calor significativa con el exterior.

## Modelo físico
Utilizaremos el modelo de **Flujo en Tuberías** basado en la **Ecuación de Darcy-Weisbach**. Este modelo establece que la caída de presión [[dp]] es directamente proporcional a la longitud [[L]], al factor de fricción [[f]] y a la energía cinética por unidad de volumen ([[rho]] v^2 / 2), e inversamente proporcional al diámetro [[D]]. También emplearemos la relación cinemática entre caudal y velocidad media [[v]] mediante el área de la sección transversal [[A]]. La ecuación central es

{{f:dp_tubo}}

.

## Justificación del modelo
Se justifica el uso de Darcy-Weisbach porque es la ecuación fundamental para el cálculo de pérdidas de carga en conductos cerrados bajo presión. Al ser un fluido incompresible y un tramo de longitud considerable (L/D > 3000), las pérdidas por fricción dominan el balance de energía. El factor [[f]] ya incluye los efectos del número de Reynolds y la rugosidad relativa del acero inoxidable. No es necesario recurrir a modelos de flujo compresible ya que el agua es un líquido.

## Resolución simbólica
1.  **Cálculo del área [[A]]**:
    
    A  igual a  frac{pi D^2}{4} 
    
2.  **Cálculo de la velocidad media [[v]]**:
    
    v  igual a  frac{Q}{A}  igual a  frac{4Q}{pi D^2} 
    
3.  **Cálculo de la caída de presión [[dp]]**:
    {{f:dp_tubo}}
    
    Delta p  igual a  f frac{L}{D} frac{[[rho]] v^2}{2} 
    

## Sustitución numérica
1.  **Área**:
    A  igual a  pi cdot (0.15/2)^2 approx 0.01767text{ m}^2
2.  **Velocidad**:
    v  igual a  0.04 / 0.01767 approx 2.26text{ m/s}
3.  **Caída de presión**:
    Delta p  igual a  0.018 cdot (500 / 0.15) cdot (1000 cdot 2.26^2 / 2)
    Delta p  igual a  0.018 cdot 3333.3 cdot 2553.8 approx 153,228text{ Pa}
    Delta p approx 1.53text{ bar}

## Validación dimensional
- [f]  igual a  1 (Adimensional)
- [L/D]  igual a  L/L  igual a  1 (Adimensional)
- [[[rho]] v^2 / 2]  igual a  (M L^{-3}) (L T^{-1})^2  igual a  M L^{-1} T^{-2} (Pascal)
La ecuación es dimensionalmente consistente con una presión en el SI.

## Interpretación física
El resultado de 1.53text{ bar} **significa** que el fluido pierde una cantidad considerable de su energía mecánica inicial en forma de calor residual debido al roce con las paredes. Esto **indica** que si queremos mantener el caudal de 0.04text{ m}^3text{/s}, la bomba en el origen debe suministrar una presión de salida que supere en al menos 1.53text{ bar} la presión requerida en el destino.

---

# Ejemplo de aplicación real

## Contexto
En el diseño de un sistema de extinción de incendios para un edificio, se debe asegurar que el agua llegue al hidrante más alejado con una presión mínima de 2text{ bar}. La tubería tiene 100text{ m} de longitud y el rozamiento genera una caída de presión que debe compensarse para garantizar la seguridad de los ocupantes.

## Estimación física
Si el hidrante requiere un caudal [[Q]] de 0.02text{ m}^3text{/s} y usamos una tubería de 10text{ cm} de diámetro (f approx 0.02), la velocidad será de unos 2.5text{ m/s}. La caída de presión estimada será:

Delta p  igual a  0.02 cdot frac{100}{0.1} cdot frac{1000 cdot 2.5^2}{2}  igual a  62,500text{ Pa}  igual a  0.625text{ bar}

Este **orden de magnitud** nos indica que la fricción consume casi un tercio de la presión requerida en el hidrante. Además, si consideramos la rugosidad de una tubería vieja, este valor podría aumentar significativamente.

## Interpretación
Este cálculo **significa** que la presión en la base del edificio debe ser de al menos 2.625text{ bar} (más la altura hidrostática). Si el sistema no se dimensiona considerando este [[dp]], el chorro de agua no tendrá la fuerza suficiente para alcanzar el fuego, comprometiendo la seguridad del edificio. Este análisis nos **indica** la necesidad crítica de balances hidráulicos precisos en ingeniería civil y la importancia de los factores de seguridad.
