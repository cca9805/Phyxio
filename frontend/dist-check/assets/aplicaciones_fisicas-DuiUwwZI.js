const e=`# Aplicaciones fisicas

## 1. Sonido

Aparece en decibelios. Se calcula una razon de intensidades respecto a una referencia. El resultado significa cuantas veces cambia la intensidad, no una suma lineal. El error peligroso es creer que \`60 dB\` es el doble de \`30 dB\`.

## 2. Quimica fisica y pH

Aparece al medir acidez mediante \`pH\`. Se calcula una escala negativa de concentracion de iones \`H+\`. El resultado significa factor de concentracion. El error peligroso es olvidar que bajar una unidad de pH multiplica por \`10\` la concentracion.

## 3. Ondas y espectros

Aparece al representar frecuencias y longitudes de onda que cubren muchos rangos. Se calcula comparacion por ordenes de magnitud. El resultado permite ver regiones completas sin aplastar datos. El error peligroso es leer separaciones logaritmicas como diferencias lineales.

## 4. Campos y leyes de potencia

Aparece en graficas log-log de intensidad, campo o flujo frente a distancia. Se calcula el exponente de escala. El resultado significa como cambia la magnitud al multiplicar distancia. El error peligroso es tomar logaritmos sin restar fondos experimentales.

## 5. Datos experimentales

Aparece cuando las medidas van desde valores muy pequenos a muy grandes. Se calcula una representacion estable para comparar patrones. El resultado ayuda a detectar leyes de escala. El error peligroso es ocultar incertidumbres relativas o ceros incompatibles con logaritmos.
`;export{e as default};
