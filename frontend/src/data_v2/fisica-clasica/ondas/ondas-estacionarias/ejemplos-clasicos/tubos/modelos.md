# Tubos - Modelo y Validez

## Idea clave
El modelo de tubos resonantes es fiable cuando las condiciones de frontera y la longitud efectiva estan bien definidas.

## 1- Modelo operativo del subtema
Se modela una columna de aire unidimensional con reflexion en extremos, en regimen lineal.

Ecuaciones base:
- $$v=\lambda_n f_n$$
- $$f_n=\frac{nv}{2L}\quad (\text{abierto-abierto})$$
- $$f_n=\frac{(2n-1)v}{4L}\quad (\text{abierto-cerrado})$$

## 2- Suposiciones explicitas
- Seccion del tubo aproximadamente uniforme.
- Perturbaciones pequenas (linealidad).
- Medio homogeneo en primera aproximacion.
- Perdidas acusticas moderadas.

## 3- Cuando SI aplica
- Problemas didacticos de tubos de viento ideales.
- Estimaciones de resonancia en conductos simples.
- Analisis modal basico con fronteras claras.

## 4- Cuando NO aplica
- Tubos con cambios fuertes de seccion o geometria compleja.
- Regimen con amortiguamiento dominante.
- Situaciones donde la correccion de borde es critica y no esta incluida.
- Excitaciones no estacionarias alejadas del modelo armonico.

## 5- Formulas conceptuales de lectura (no calculadora directa)
- Extremo abierto: $$p'\approx 0$$ (nodo de presion).
- Extremo cerrado: $$u\approx 0$$ (nodo de velocidad de particula).

Son condiciones de contorno fisicas para seleccionar modos permitidos, no ecuaciones de despeje directo en la calculadora basica.

## 6- Checklist de validez antes de cerrar un problema
1. Confirmar tipo de frontera (abierto-abierto u abierto-cerrado).
2. Verificar unidades SI y longitud efectiva.
3. Revisar que \(n\) sea entero positivo.
4. Comprobar en `Graficas` la coherencia modal.

## 7- Cierre
Si el modelo de frontera es correcto, la prediccion modal es robusta. Si el modelo de frontera es incorrecto, todo el resultado queda invalidado.
