# Tono Y Timbre - Modelo y Validez

## Idea clave
El modelo armonico es potente para describir tono y timbre, pero su validez depende de la naturaleza de la fuente y del regimen de señal.

## 1- Modelo operativo del subtema
Se representa la señal sonora como suma de componentes frecuenciales con amplitud y fase:

$$
s(t)=\sum_{n=1}^{N}A_n\sin(2\pi f_n t+\phi_n)
$$

Para sistema armonico ideal:

$$
f_n=nf_1
$$

## 2- Suposiciones explicitas
- Señal aproximadamente periodica en ventana analizada.
- Linealidad suficiente para superposicion espectral.
- Ruido y no linealidad no dominantes en primera aproximacion.

## 3- Cuando SI aplica
- Analisis de instrumentos tonales estables.
- Estudio de timbre por distribucion armonica.
- Comparacion de alturas en contexto musical y tecnico.

## 4- Cuando NO aplica
- Señales impulsivas o altamente transitorias sin periodicidad clara.
- Fuentes con inarmonicidad fuerte no modelada.
- Casos dominados por ruido ancho de banda sin componente tonal definida.

## 5- Formulas conceptuales (no calculadora directa)
- Modelo espectral completo con fase:

$$
s(t)=\sum_nA_n\sin(2\pi f_n t+\phi_n)
$$

- Envolvente ADSR simplificada por tramos.

Estas formulaciones requieren datos de serie temporal o parametros por tramo, fuera del despeje escalar basico.

## 6- Checklist de validez antes de cerrar
1. Confirmar si la señal es tonal y casi periodica.
2. Verificar si aplica serie armonica ideal.
3. Diferenciar analisis de tono y analisis de timbre.
4. Contrastar con `Graficas` para validar espectro y envolvente.

## 7- Cierre
El modelo vale cuando describe la señal real con suficiente fidelidad para la decision que necesitas tomar.
