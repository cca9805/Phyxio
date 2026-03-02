# Modelos y alcance

## Modelo usado
- Resorte ideal en regimen lineal de Hooke.
- Deformacion medida desde longitud natural ($x=0$).
- Ausencia de histeresis y perdidas por calor en el modelo base.

## Que cubre
- Energia almacenada en deformacion elastica.
- Variaciones de energia entre dos estados.
- Relacion con trabajo del resorte.

## Que no cubre
- Elasticidad no lineal y plasticidad.
- Amortiguamiento real y disipacion viscosa detallada.
- Sistemas multiresorte complejos avanzados.
# Modelos y alcance: Energía potencial elástica

## Formulación básica (Hooke)

Para un resorte lineal unidimensional la energía potencial elástica se modela como:

$$U_e(x)=\tfrac{1}{2}k x^2$$

donde $k$ es la constante elástica (N/m) y $x$ la deformación respecto a la longitud natural. El trabajo realizado por la fuerza del resorte entre dos posiciones es:

$$W_{res}=-\Delta U_e = -\tfrac{1}{2}k(x_f^2-x_i^2)$$

En sistemas rotacionales con constante torsional $\kappa$ y desplazamiento angular $\theta$:

$$U_{rot}=\tfrac{1}{2}\kappa\theta^2, \quad W=-\tfrac{1}{2}\kappa(\theta_f^2-\theta_i^2)$$

## Hipótesis operacionales

1. **Regimen lineal**: La relación fuerza-deformación es lineal ($F=-kx$) dentro del rango elástico.
2. **Pequeñas deformaciones**: No hay cambios geométricos que introduzcan no linealidad (p. ej. grandes rotaciones).
3. **Material elástico perfecto**: Sin histeresis ni pérdidas internas en el modelo ideal.
4. **Elementos discretos**: Para sistemas con múltiples resortes se suman energías si están en paralelo/serie con las reglas apropiadas.

## Alcances y limitaciones

- Válido para resortes metálicos, muelles helicoidales en rango elástico.
- No cubre comportamiento plástico (fluencia) ni fatiga a largo plazo.
- Para materiales compuestos o sistemas con amortiguamiento significativo, incluir términos viscoelásticos (Modelo Kelvin-Voigt, Maxwell).

## Criterios prácticos de uso

| Caso | Modelo recomendado | Observaciones |
|---|---|---|
| Resorte simple | Hooke $U=\tfrac12 k x^2$ | Medir $k$ experimentalmente |
| Viga elástica | Energía por deformación por integración de tensiones | Requiere FEA para geometrías complejas |
| Resorte con amortiguamiento | Añadir término disipativo $F_d=c\dot x$ | Energía histórica disipativa debe modelarse separadamente |
| Grandes deformaciones | Modelos no lineales (p.ej. Neo-Hookeano) | Uso en cauchos y polímeros |

## Estrategia de resolución

1. Identificar el elemento elástico y su constante ($k$ o $\kappa$).  
2. Evaluar si el régimen es lineal; si no, seleccionar modelo no lineal.  
3. Calcular $U_e$ en estados inicial y final, y el trabajo asociado.  
4. Para sistemas acoplados, construir energía total sumando términos elásticos y disipativos apropiados.
