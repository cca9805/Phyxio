# Modelos fisicos: Descomposicion vectorial

## Modelo ideal

El modelo ideal del leaf parte de una idea operativa: una fuerza conocida se proyecta sobre ejes declarados para separar efectos causales por direccion. No intenta capturar toda la complejidad del contacto real, sino ofrecer un marco fiable para decisiones de primer orden.

Supuestos base:

- Cuerpo tratado como punto material en la escala del problema.
- Geometria local estable durante el intervalo analizado.
- Campo gravitatorio uniforme [[g]] en problemas terrestres.
- Ejes ortogonales correctamente declarados.

Bajo estos supuestos, descomponer [[Fm]] en [[Fx]] y [[Fy]], o [[W]] en [[Ppar]] y [[Pperp]], produce una lectura fisica robusta del sistema.

## Hipotesis

1. Hipotesis geometrica: [[theta]] esta medido desde el eje declarado en el enunciado.
2. Hipotesis de contacto: la reaccion [[N]] representa bien la carga perpendicular efectiva.
3. Hipotesis de friccion: [[muk]] puede aproximarse como constante local cuando se usa [[fk]].
4. Hipotesis de coherencia: las componentes no superan en modulo al vector original.

Si alguna hipotesis falla, el modelo no debe descartarse de inmediato; primero debe marcarse como base y luego extenderse.

## Dominio de validez cuantitativo

El modelo funciona con buena precision cuando se cumplen criterios observables y cuantitativos:

- Error relativo de reconstruccion de modulo menor al 2%.
- Diferencia entre prediccion de componente y medicion menor al 10% en regimen estable.
- Variacion efectiva de [[muk]] acotada en una banda corta durante la ventana de analisis.
- Cambios de [[theta]] dentro del tramo evaluado lo bastante pequenos como para considerar ejes fijos.

Ejemplos de criterio cuantitativo aplicado:

- En descomposicion cartesiana, la reconstruccion desde [[Fx]] y [[Fy]] debe permanecer cercana a [[Fm]] dentro de tolerancia instrumental.
- En plano inclinado, el balance entre [[Ppar]] y friccion estimada debe predecir correctamente el signo de [[a]] en pruebas repetidas.

Cuando estos criterios dejan de cumplirse de forma sistematica, ya no es razonable insistir con el modelo base como unico marco.

## Senales de fallo del modelo

- Residuales persistentes tras verificar algebra, unidades y convencion angular.
- Alta sensibilidad: pequenas variaciones de [[theta]] producen saltos no explicables por el modelo.
- Comportamiento de [[fk]] incompatible con una sola [[muk]] efectiva.
- Regimen mixto con transiciones no capturadas por un analisis por tramos simples.

Estas senales indican necesidad de escalado de modelo, no un error menor de calculo.

## Modelo extendido o alternativo

Si el sistema exige mayor fidelidad, se agrega complejidad de forma escalonada:

1) Mantener proyeccion vectorial como capa de interpretacion base.
2) Introducir ley de friccion dependiente de condicion superficial, velocidad o temperatura.
3) Incluir dinamica acoplada cuando hay oscilaciones o deformaciones relevantes.

Transicion explicita a modelo alternativo:

- Cambiar al modelo extendido cuando, tras validar setup, el error de prediccion permanezca por encima de la tolerancia operativa durante varios ensayos consecutivos.
- No cambiar por intuicion, sino por evidencia repetida de fallo del modelo base.

## Comparacion operativa

| Aspecto | Modelo base por componentes | Modelo extendido |
|---|---|---|
| Objetivo | Diagnostico rapido y lectura causal | Prediccion fina en regimen exigente |
| Datos requeridos | Bajos | Medios/altos |
| Complejidad | Moderada | Alta |
| Tiempo de aplicacion | Corto | Mayor |
| Mejor uso | Diseno preliminar y control de campo | Validacion final y casos limite |

La estrategia recomendada es jerarquica: empezar con el modelo base, validar, y escalar solo cuando la evidencia cuantitativa lo justifique.
