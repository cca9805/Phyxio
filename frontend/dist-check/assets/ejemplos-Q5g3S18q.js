const e=`# Ejemplos: El Plano Inclinado

# Ejemplo tipo examen
## Enunciado
Un bloque de granito con una masa [[m]] de 120 kg debe ser subido a la plataforma de un camión situada a una altura [[h]] de 1.5 metros. Para ello, se utiliza una rampa metálica de longitud [[L]] de 4 metros. El coeficiente de rozamiento dinámico entre el granito y el metal es [[mu]] de 0.25. Determina el esfuerzo mínimo [[P]] que debe realizar un operario (paralelo a la rampa) para subir el bloque con velocidad constante y calcula el rendimiento energético [[eta]] del proceso.

## Datos
- Masa del bloque: [[m]] de 120 kg
- Aceleración de la gravedad: [[g]] de 9.81 m/s²
- Altura vertical: [[h]] de 1.5 m
- Longitud de la rampa: [[L]] de 4.0 m
- Coeficiente de rozamiento: [[mu]] de 0.25
- Estado: Velocidad constante (con aceleración [[a]] nula)

## Definición del sistema
El sistema está compuesto por el bloque de granito tratado como una partícula puntual y la superficie de la rampa, que se considera un sólido rígido. Definimos un sistema de ejes donde el eje X es paralelo a la rampa (positivo hacia arriba) y el eje Y es perpendicular a la misma. Las interacciones presentes son el peso [[W]], la fuerza normal [[N]], la fuerza de rozamiento [[f]] y la fuerza aplicada o potencia [[P]].

## Modelo físico
Utilizamos el Modelo Dinámico con Fricción de Coulomb. En este modelo, las fuerzas se equilibran según las leyes de Newton para un estado de equilibrio dinámico. El peso se descompone en sus componentes intrínsecas [[Wpar]] y [[Wperp]]. La fricción es directamente proporcional a la reacción normal de la superficie.

## Justificación del modelo
Elegimos este modelo porque el enunciado especifica la existencia de un coeficiente de rozamiento [[mu]] significativo y requiere el cálculo de una fuerza para mantener una velocidad constante. El modelo ideal sería insuficiente ya que subestimaría el esfuerzo real necesario en un entorno industrial metálico. La asunción de velocidad constante simplifica el balance de fuerzas al igualar la suma de fuerzas a cero.

## Resolución simbólica
1. Primero, calculamos el peso total del objeto usando la relación fundamental de la gravedad:

{{f:peso_total}}

2. Determinamos el ángulo de inclinación [[theta]] a partir de la geometría de la rampa:

{{f:relacion_h_L}}

3. Calculamos la ventaja mecánica ideal [[VM]] que ofrece esta rampa específica:

{{f:ventaja_mecanica_geometria}}

4. Determinamos el esfuerzo ideal [[P]] (sin fricción) que serviría de referencia:

{{f:ley_plano_ideal}}

5. Descomponemos el peso [[W]] en sus componentes paralela y normal:

{{f:descomposicion_paralela}}

{{f:normal_plano}}

6. Calculamos la fuerza de rozamiento [[f]] que se opone al movimiento:

{{f:fuerza_rozamiento}}

7. Planteamos el equilibrio dinámico para hallar el esfuerzo real final.

8. Finalmente, calculamos el rendimiento [[eta]] de la máquina:

{{f:rendimiento_plano}}

### Análisis de parámetros adicionales

Para completar el estudio dinámico y energético, verificamos otros parámetros nucleares:

- **Aceleración ideal y real**: Si el bloque se deslizara libremente, su aceleración ideal sería:
{{f:aceleracion_galileo}}
En este caso, la aceleración neta considerando el esfuerzo es:
{{f:aceleracion_rampa}}
- **Condición de equilibrio**: Verificamos que el bloque no deslice por sí solo mediante la condición crítica:
{{f:condicion_deslizamiento_critico}}
- **Balance energético**: Comprobamos que el trabajo realizado por [[P]] coincide con el balance de energía total:
{{f:balance_energia_rampa}}

## Sustitución numérica
- Ángulo: [[theta]] de arcsin(1.5 / 4) ≈ 22.02°
- Peso: [[W]] de 120 * 9.81 → 1177.2 N
- Componente paralela: [[Wpar]] de 1177.2 * sin(22.02°) → 441.45 N
- Componente normal: [[N]] de 1177.2 * cos(22.02°) → 1091.3 N
- Rozamiento: [[f]] de 0.25 * 1091.3 → 272.8 N
- Esfuerzo total: [[P]] de 441.45 + 272.8 → 714.25 N
- Rendimiento: [[eta]] de (1177.2 * 1.5) / (714.25 * 4) → 1765.8 / 2857 → 0.618

## Validación dimensional
La ecuación del esfuerzo [[P]] suma dos términos de fuerza, lo que resulta en Newtons, correcto. El rendimiento [[eta]] es el cociente de dos trabajos (Julios / Julios), resultando en una magnitud adimensional, lo cual es físicamente consistente con la definición de eficiencia.

## Interpretación física
El operario necesita aplicar 714.25 Newtons. Sin la rampa, debería haber levantado 1177.2 Newtons verticales, por lo que la ventaja mecánica real es de aproximadamente 1.65. El rendimiento del 61.8% indica que casi el 40% de la energía del operario se pierde en calor debido a la fricción entre el granito y el metal.

---

# Ejemplo de aplicación real
## Contexto
Imagina el diseño de una rampa de acceso para sillas de ruedas en un hospital público. La normativa exige que el esfuerzo realizado por una persona media no supere el 10% de su peso total para garantizar la autonomía. Si el conjunto de la silla y el usuario pesa [[W]] de 1000 N, y queremos salvar un escalón de [[h]] de 0.5 metros, debemos decidir la longitud [[L]] de la rampa. Consideramos un coeficiente de rodadura/rozamiento muy bajo de [[mu]] de 0.02.

## Estimación física
Para realizar la estimación cuantitativa de este diseño industrial, establecemos la condición de ventaja mecánica

{{f:ventaja_mecanica_geometria}}
 
1. Objetivo de fuerza: [[P]] menor o igual a 0.1 * [[W]] (es decir, 100 N).
2. Usando la relación de esfuerzo en rampa con poca fricción: [[P]] es aproximadamente igual a [[W]] * ([[h]] / [[L]]) + [[mu]] * [[W]].
3. Realizamos el cálculo para hallar la longitud mínima [[L]]:
   100 → 1000 * (0.5 / L) + 0.02 * 1000
   100 → 500 / L + 20
   80 → 500 / L
   L → 500 / 80 → 6.25 metros.

## Interpretación
Debido a la restricción de esfuerzo, la rampa debe tener al menos 6.25 metros de largo. Esto demuestra que para una misma altura [[h]], aumentar la longitud [[L]] es la forma más efectiva de reducir el esfuerzo [[P]], aunque esto implique un mayor recorrido para el usuario. El rozamiento, aunque bajo ([[mu]] de 0.02), añade un requerimiento base de 20 N que no puede ser eliminado por la geometría del plano.

### Registro de fórmulas de ejemplos

Cálculo de componentes:
{{f:descomposicion_paralela}}

{{f:normal_plano}}

Leyes de equilibrio y rendimiento:
{{f:ley_plano_ideal}}

{{f:rendimiento_plano}}
`;export{e as default};
