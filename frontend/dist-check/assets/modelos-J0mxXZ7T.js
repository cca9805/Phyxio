const e=`\uFEFF# Modelos fisicos: Definicion fuerza centrifuga

## Modelo ideal

El modelo ideal describe una masa [[m]] en trayectoria circular de radio [[r]] observada desde un marco rotatorio con velocidad angular [[omega]]. En este contexto, la lectura principal es [[F_cf]] y su forma por unidad de masa [[a_cf]].

El objetivo del modelo no es capturar todo fenomeno secundario, sino ofrecer una representacion operativa robusta para analisis inicial, comparacion de escenarios y toma de decisiones rapida.

## Hipotesis

1. Eje de rotacion claramente definido.
2. Radio [[r]] aproximadamente constante en el intervalo analizado.
3. Regimen de giro suficientemente estable para representar el estado con [[omega]].
4. Efectos de deformacion, holgura y vibracion no dominan la respuesta principal.

Si cualquiera de estas hipotesis cae, el resultado puede seguir siendo numerico, pero deja de ser fiable en terminos fisicos.

## Dominio de validez cuantitativo

El modelo simple es util cuando se cumplen criterios operativos como los siguientes:

- Coherencia interna entre rutas: diferencia relativa menor a 5% entre [[F_cf]] obtenida por ruta angular y por ruta tangencial.
- Estabilidad de datos: variacion de [[omega]] menor a 10% durante la ventana de analisis.
- Geometria controlada: variacion efectiva de [[r]] menor a 5%.

Estos umbrales no son ley universal, pero funcionan como criterio tecnico para decidir si el modelo base sigue siendo suficiente.

## Senales de fallo del modelo

- Desacople repetido entre prediccion y medicion equivalente de [[F_cf]] por encima de 10%.
- Sensibilidad extrema a pequeñas variaciones de entrada sin explicacion experimental.
- Aparicion de vibracion estructural fuerte o resonancias no contempladas.
- Resultados dimensionalmente correctos pero fisicamente incompatibles con evidencia de campo.

## Modelo extendido o alternativo

Cuando el modelo ideal falla, se extiende incluyendo dinamica de vibracion, deformacion de soporte, amortiguamiento o acoplamientos no lineales.

Transicion explicita: cuando la discrepancia repetida entre prediccion y medicion supera aproximadamente 10%, o cuando aparecen senales persistentes de vibracion/holgura, conviene cambiar del modelo ideal al modelo extendido.

Este cambio no invalida el modelo base: indica que el problema entro en un regimen donde se requiere mas detalle.

## Comparacion operativa

| Aspecto | Modelo ideal | Modelo extendido |
|---|---|---|
| Datos minimos | [[m]], [[omega]], [[r]] o [[v]] | + parametros estructurales y disipativos |
| Complejidad | Baja | Media/alta |
| Uso principal | Diagnostico rapido | Validacion fina |
| Tiempo de calculo | Corto | Mayor |
| Robustez fuera de nominal | Limitada | Superior |

La estrategia recomendable es secuencial: iniciar con el modelo ideal, verificar criterios cuantitativos y escalar al modelo extendido solo cuando los indicadores lo exijan.

Como regla final de trabajo, cada corrida debe archivarse con entrada, salida y criterio de aceptacion. Esa trazabilidad convierte el modelo en una herramienta auditada y no en una cuenta aislada.

Tambien conviene registrar la variable dominante del caso. En muchos escenarios dominara [[omega]], pero en geometria cambiante puede dominar [[r]]. Esa lectura mejora decisiones de control.
`;export{e as default};
