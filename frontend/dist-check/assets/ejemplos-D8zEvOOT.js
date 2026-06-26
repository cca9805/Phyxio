const e=`# Ejemplo tipo examen

## Enunciado

Un ingeniero de telecomunicaciones necesita verificar la relación entre las constantes del vacío y la velocidad de la luz, y a partir de ahí calcular los parámetros de onda de una señal de WiFi de 2.4 GHz. Usando [[mu0]] = 4π×10⁻⁷ H/m y [[epsilon0]] = 8.854×10⁻¹² F/m, obtener: (a) la velocidad de propagación [[c]], (b) la frecuencia angular [[omega]], (c) el número de onda [[k]], y (d) la longitud de onda [[lambda]] en el vacío.

## Datos

- [[mu0]] = 4π×10⁻⁷ H/m ≈ 1.2566×10⁻⁶ H/m (permeabilidad magnética del vacío)
- [[epsilon0]] = 8.854×10⁻¹² F/m (permitividad eléctrica del vacío)
- f = 2.4×10⁹ Hz (frecuencia de la señal WiFi estándar 802.11g/n)
- Incógnitas: [[c]], [[omega]], [[k]], [[lambda]]

## Definición del sistema

El sistema es una onda plana monocromática en el vacío. Los campos [[E]] y [[B]] son perpendiculares entre sí y a la dirección de propagación. La onda se propaga en línea recta desde el punto de emisión. Se aplica el modelo de vacío sin cargas ni corrientes libres.

## Modelo físico

Las magnitudes [[c]], [[omega]] y [[k]] están ligadas por las relaciones de dispersión que emergen directamente de la ecuación de onda electromagnética. La velocidad de propagación [[c]] es fija para el vacío y surge del producto [[mu0]]·[[epsilon0]]. La relación entre [[omega]] y [[k]] es la relación de dispersión lineal del vacío.

## Justificación del modelo

El modelo de onda plana en el vacío es válido para señales WiFi porque la distancia de operación (unos metros) es muy superior a la [[lambda]] de la señal, y el aire tiene propiedades eléctricas y magnéticas tan próximas al vacío que la corrección es inferior al 0.1%. El modelo fallaría en un conductor o en un dieléctrico con pérdidas, donde habría que incluir la parte imaginaria de [[k]].

## Resolución simbólica

Para el apartado (a), la velocidad de propagación surge del producto de [[mu0]] y [[epsilon0]]:

{{f:velocidad_luz}}

Para el apartado (b), la frecuencia angular se obtiene multiplicando la frecuencia ordinaria por 2π: [[omega]] = 2π·f.

Para el apartado (c), el número de onda [[k]] se despeja de la relación de dispersión dividiendo [[omega]] entre [[c]]: [[k]] = [[omega]]/[[c]].

Para el apartado (d), la longitud de onda [[lambda]] es el cociente entre 2π y [[k]]: [[lambda]] = 2π/[[k]].

Una vez obtenidos [[c]], [[omega]] y [[k]], la solución particular de onda plana queda completamente determinada por:

{{f:solucion_onda_plana_E}}

## Sustitución numérica

**Apartado (a) — velocidad de propagación:**

Multiplicando [[mu0]] por [[epsilon0]] resulta 1.2566×10⁻⁶ multiplicado por 8.854×10⁻¹², que da aproximadamente 1.1127×10⁻¹⁷ s²/m². La raíz cuadrada de ese producto es aproximadamente 1.0549×10⁻⁸ s/m. El inverso de ese valor da [[c]] ≈ 2.998×10⁸ m/s.

**Apartado (b) — frecuencia angular:**

Multiplicando 2π por 2.4×10⁹ Hz da [[omega]] ≈ 1.508×10¹⁰ rad/s.

**Apartado (c) — número de onda:**

Dividiendo [[omega]] ≈ 1.508×10¹⁰ rad/s entre [[c]] ≈ 2.998×10⁸ m/s da [[k]] ≈ 50.3 rad/m.

**Apartado (d) — longitud de onda:**

Dividiendo 2π entre [[k]] ≈ 50.3 rad/m da [[lambda]] ≈ 0.125 m ≈ 12.5 cm.

## Validación dimensional

La fórmula de [[c]] combina unidades de [[mu0]] (henrios por metro) y [[epsilon0]] (faradios por metro). Expresando la dimensión de cada constante en unidades SI fundamentales, el producto (H/m)·(F/m) resulta ser s²/m², cuya raíz inversa es m/s ✓. El cociente de [[omega]] entre [[c]] tiene dimensiones rad/m ✓.

## Interpretación física

El resultado [[c]] ≈ 2.998×10⁸ m/s no es simplemente un número: es la predicción cuantitativa que Maxwell extrajo en 1865 de las constantes [[mu0]] y [[epsilon0]], determinadas por separado a partir de experimentos con fuerzas eléctricas y magnéticas. El hecho de que coincida con la [[c]] medida óptica o mecánicamente es la prueba de que la luz es una onda electromagnética y no una perturbación de otro tipo de medio.

Para la señal WiFi, la [[lambda]] de 12.5 cm explica directamente el diseño de las antenas: una antena tipo dipolo de media onda mide exactamente la mitad de [[lambda]], es decir, unos 6.25 cm, lo que coincide con las antenas reales de los routers domésticos. La relación de dispersión lineal [[omega]] = [[c]]·[[k]] garantiza que todas las frecuencias WiFi (2.4 GHz y 5 GHz) viajan a la misma [[c]] en el vacío, eliminando distorsión temporal de la señal durante la propagación.

La causa física de que [[c]] sea una constante universal es que [[mu0]] y [[epsilon0]] son propiedades del vacío, no de ningún medio material. Esto fue la revelación de Maxwell: la velocidad de la luz no depende de la fuente ni del observador, sino de cuánto resiste el vacío a los cambios en [[E]] y [[B]]. Esa independencia de la fuente es la semilla de la relatividad especial.

---

# Ejemplo de aplicación real

## Contexto

Los físicos del laboratorio de NIST (Instituto Nacional de Estándares y Tecnología, EE.UU.) necesitan verificar el valor de [[c]] a partir de medidas independientes de [[mu0]] y [[epsilon0]] para confirmar la coherencia del Sistema Internacional de Unidades. Disponen de medidas de la constante de estructura fina, la carga elemental y la constante de Planck, pero quieren comprobar también la ruta directa: medir fuerzas eléctricas y magnéticas, obtener [[epsilon0]] y [[mu0]], y calcular [[c]] para ver si coincide con el valor definicional de 299 792 458 m/s.

## Estimación física

La permitividad [[epsilon0]] se obtiene midiendo la fuerza entre dos placas paralelas a tensión conocida, y [[mu0]] se obtiene de la fuerza entre dos conductores paralelos de longitud conocida con corriente conocida. Los experimentos modernos determinan [[epsilon0]] con una incertidumbre relativa de orden 10⁻⁹. El producto [[mu0]]·[[epsilon0]] reproduce [[c]] con esa misma precisión relativa. Dado que [[c]] es ahora una constante definida (no medida), cualquier discrepancia se interpreta como un ajuste de las unidades de masa o corriente, no como un error en la ecuación de onda.

## Interpretación

Este ejemplo ilustra que la ecuación de onda electromagnética no es solo una herramienta de cálculo sino el fundamento metrológico del SI. El metro, el segundo y el amperio están todos conectados a través de [[c]], [[mu0]] y [[epsilon0]], y la ecuación de onda es la expresión matemática de esa conexión. Cualquier experimento que mida [[c]] está implícitamente verificando la consistencia de las ecuaciones de Maxwell con la estructura del espacio-tiempo.
`;export{e as default};
