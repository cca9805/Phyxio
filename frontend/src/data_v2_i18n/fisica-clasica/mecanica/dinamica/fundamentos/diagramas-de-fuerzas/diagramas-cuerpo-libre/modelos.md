# Modelos físicos: Diagramas cuerpo libre

## Modelo ideal

El modelo ideal de este leaf supone mecanica clasica, sistema bien aislado y fuerzas externas identificables con agente fisico. El objetivo no es describir todos los detalles materiales, sino construir un mapa dinamico fiable para proyectar por ejes.

Supuestos base:

- El cuerpo se aproxima como particula o solido rigido segun escala.
- Las fuerzas externas relevantes son representables como [[P]], [[N]], [[T]], y rozamiento [[fs]] o [[fk]].
- La masa [[m]] es positiva y constante en el intervalo analizado.
- La gravedad [[g]] se toma uniforme.

## Hipotesis

1. Hipotesis de aislamiento: solo se incluyen fuerzas externas con agente declarado.
2. Hipotesis de ejes consistentes: cada proyeccion usa una convencion de signos fija.
3. Hipotesis de regimen: no se mezclan formulas de [[fs]] y [[fk]] sin evento de transicion.
4. Hipotesis geometrica: en plano inclinado, [[theta]] esta bien definido antes de usar [[Ppar]] y [[Pperp]].

Si alguna hipotesis falla, el diagrama sigue siendo util como base, pero requiere extension de modelo.

## Dominio de validez cuantitativo

El modelo es operativo cuando se cumplen criterios medibles:

- Coherencia de equilibrio por eje: |[[Fy]]| <= 0.05*|[[P]]| en configuraciones sin despegue.
- Regimen estatico valido si [[fs]] <= [[mu_s]]*[[N]].
- Regimen cinetico consistente si [[fk]] = [[mu_k]]*[[N]] con [[mu_k]] >= 0.
- Coherencia dinamica: |[[Fx]] - [[m]]*[[ax]]| <= tolerancia de medicion.

Criterios de transicion explicitos:

- Si demanda tangencial supera cota estatica, pasar de modelo con [[fs]] a modelo con [[fk]].
- Si [[N]] tiende a cero, revisar contacto y abandonar equilibrio vertical simple.

Referencia numerica operacional:

- Si |[[Fy]]| <= 5 N en un ensayo de banco, se considera equilibrio normal aceptable.
- Si el error relativo en [[Fx]] frente a [[m]]*[[ax]] es <= 10%, el cierre por eje se acepta para diagnostico inicial.
- Si la diferencia prediccion-medicion supera 15% en tres ensayos consecutivos, conviene cambiar de modelo.

## Señales de fallo del modelo

- Predicciones de signo en [[ax]] o [[ay]] incompatibles con observacion.
- Resultados que exigen [[N]] negativa en contacto ordinario.
- Sensibilidad extrema a pequenos cambios de [[theta]] o [[mu_s]] sin respaldo experimental.
- Necesidad de alternar continuamente entre equilibrio y deslizamiento sin criterio de evento.

## Modelo extendido o alternativo

Cuando el modelo base no alcanza, se puede extender por capas:

1) Contacto dependiente de estado superficial y velocidad.
2) Friccion no lineal con histeresis.
3) Dinamica transitoria con impactos o vibracion.
4) Deformacion del soporte para corregir distribucion de [[N]].

Transicion recomendada:

- Escalar de modelo cuando el error persistente en balances por eje supere tolerancia en varios ensayos consecutivos, aun con diagrama y unidades verificados.

## Comparación operativa

| Aspecto | Modelo base DCL | Modelo extendido |
|---|---|---|
| Objetivo | Trazabilidad de fuerzas y balances por eje | Capturar efectos no lineales y transitorios |
| Datos requeridos | Bajos a medios | Medios a altos |
| Costo computacional | Bajo | Medio o alto |
| Interpretabilidad | Muy alta | Media |
| Mejor uso | Docencia, diagnostico inicial | Validacion fina e incidentes complejos |

Estrategia recomendada: comenzar siempre con modelo base bien auditado y escalar solo cuando la evidencia lo exija.
