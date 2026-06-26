const a=`# Modelos físicos: centro de masas en cuerpos extendidos

## Modelo ideal

El modelo ideal trata el cuerpo como una distribución continua, rígida y con masa total finita. No se enumeran partículas individuales: se define un elemento [[dm]] y se integra sobre la longitud, el área o el volumen ocupados por el cuerpo. Esta idealización es adecuada para varillas, láminas y sólidos donde la escala microscópica no modifica la posición global del centro de masas.

## Hipótesis

- El cuerpo no se deforma durante el intervalo analizado.
- La densidad elegida representa la distribución real con suficiente precisión.
- El dominio de integración coincide con la geometría física del cuerpo.
- La masa total [[M]] es positiva y finita.
- El origen y los ejes se mantienen fijos durante todo el cálculo.

## Dominio de validez cuantitativo

El modelo funciona bien si las variaciones de densidad no modeladas producen cambios menores del 5 % en [[M]] o en [[xcm]]. En una varilla de longitud [[L]], el resultado debe cumplir 0 <= [[xcm]] <= [[L]] si el origen está en un extremo. Para láminas y sólidos compactos, la escala de [[R_cm]] debe ser comparable al tamaño geométrico del cuerpo, no a la masa ni al volumen.

## Señales de fallo del modelo

Se detecta fallo si el centro de masas queda fuera del rango geométrico esperado sin que haya huecos o geometría compuesta que lo justifique. También falla si el cálculo usa [[lambda]] uniforme cuando el enunciado da una densidad variable, si se confunde [[I_x]] con [[xcm]], o si la unidad final no es longitud. Una discrepancia experimental superior al 5-10 % suele indicar densidad mal modelada o deformación ignorada.

## Modelo extendido o alternativo

Cuando conviene cambiar a un modelo alternativo es cuando el cuerpo se deforma, la densidad cambia con el tiempo, el material es compuesto o la geometría no puede representarse con un único dominio simple. En esos casos se pasa a integración por piezas, densidad variable, coordenadas adaptadas a la simetría o incluso a un modelo elástico si la forma cambia bajo carga.

## Comparación operativa

| Situación | Modelo adecuado | Criterio práctico |
|---|---|---|
| Varilla uniforme | Densidad lineal constante | Usar masa_longitud y simetría |
| Varilla no uniforme | Integral con [[lambda]] variable | Integrar [[M]] e [[I_x]] |
| Lámina homogénea | Densidad superficial constante | Usar masa_area y centroides |
| Sólido homogéneo | Densidad volumétrica constante | Usar masa_volumen y simetría |
| Cuerpo compuesto | Suma por regiones | Ponderar cada pieza por su masa |

El modelo más simple se acepta solo si conserva el sesgo físico de la distribución. Si el resultado no se desplaza hacia la zona más masiva, el modelo elegido debe revisarse antes de seguir calculando.
`;export{a as default};
