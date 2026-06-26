# Modelos fisicos: Identificacion de fuerzas

## Modelo ideal

El modelo base del leaf asume mecanica clasica con agentes fisicos identificables y contacto seco en primera aproximacion. Su objetivo es separar fuerzas reales de fuerzas inventadas y construir un diagrama de cuerpo libre coherente.

Supuestos operativos:

- El cuerpo se modela como punto material en la escala del problema.
- La gravedad [[g]] se considera uniforme en la zona de analisis.
- El contacto se representa con [[N]] y [[f]], y en reposo con [[f_s]].
- El estado [[system_contact]] indica si las fuerzas de contacto pueden existir.

## Hipotesis

1. Hipotesis de agente: toda fuerza debe tener agente fisico trazable.
2. Hipotesis de contacto: si [[system_contact]] = 0, no existen [[N]] ni [[f]].
3. Hipotesis de friccion estatica: [[f_s]] se ajusta hasta un maximo dado por [[mu_s]] y [[N]].
4. Hipotesis de consistencia: signos y sentidos en el diagrama siguen la convencion de ejes declarada.

Si se viola alguna hipotesis, el modelo pierde capacidad explicativa aunque las cuentas sean correctas.

## Dominio de validez cuantitativo

El modelo funciona con buena calidad cuando se cumplen criterios verificables:

- Diferencia entre fuerza aplicada y respuesta estatica dentro del margen esperado del contacto.
- Coeficiente [[mu_s]] aproximadamente estable en el intervalo de analisis.
- Estado de contacto [[system_contact]] estable durante el tramo de decision.
- Error entre prediccion de umbral y observacion dentro de tolerancia operativa.

Condiciones cuantitativas de referencia para control rapido:

- Regimen estatico aceptable si [[F_ap]] <= [[f_s]] max.
- Margen operativo minimo recomendado: ([[f_s]] max - [[F_ap]]) >= 5 N.
- Variacion relativa de umbral entre ensayos: |umbral_1 - umbral_2|/umbral_1 <= 0.10.
- Coherencia de contacto: si [[system_contact]] = 0 entonces [[N]] = 0 y [[f]] = 0.

Ejemplos de criterio cuantitativo explicito:

- En problemas de reposo, si [[F_ap]] permanece por debajo del limite de [[f_s]] de manera sostenida, el regimen estatico es consistente.
- Si el umbral observado se desplaza de forma repetida respecto a lo estimado con [[mu_s]] y [[N]], el modelo base necesita extension.

## Senales de fallo del modelo

- Aparecen "fuerzas" sin agente en los diagramas.
- Se predice reposo y se observa deslizamiento sistematico.
- Cambios pequenos de humedad o superficie producen saltos no explicables con [[mu_s]] constante.
- Hay alternancia rapida de contacto y perdida de apoyo que el modelo simple no captura.

## Modelo extendido o alternativo

Cuando las senales de fallo persisten, conviene ampliar el modelo por capas:

1) Mantener identificacion por agente como base.
2) Introducir dependencia de friccion con estado superficial o velocidad.
3) Agregar dinamica de contacto intermitente cuando [[system_contact]] cambia en el tiempo.

Transicion explicita de modelo:

- Cambiar a modelo alternativo cuando, tras verificar setup y unidades, la discrepancia prediccion-observacion se mantenga por encima de la tolerancia en varios ensayos consecutivos.

## Comparacion operativa

| Aspecto | Modelo base | Modelo extendido |
|---|---|---|
| Objetivo | Identificar fuerzas reales y umbrales | Capturar no linealidades de contacto |
| Datos requeridos | Bajos | Medios/altos |
| Complejidad | Moderada | Alta |
| Tiempo de uso | Corto | Mayor |
| Mejor uso | Diagnostico inicial y docencia | Casos limite y validacion fina |

La estrategia recomendada es jerarquica: primero modelo base bien trazado; luego escalado si la evidencia lo exige.
