const a=`\uFEFF# Modelos físicos: Aplicaciones fisicas

## Modelo ideal

El modelo ideal de este leaf representa un movil con velocidad relativa [[v_rel]] en un marco rotatorio de velocidad angular [[omega]]. La salida primaria es [[a_cor]], y de forma derivada se usan [[F_cor]] y [[y]] para lectura aplicada.

El objetivo del modelo ideal es ofrecer prediccion rapida y trazable para decisiones de primer nivel, no capturar todos los efectos secundarios del sistema real.

## Hipótesis

1. [[omega]] puede tratarse como aproximadamente constante en la ventana de analisis.
2. [[v_rel]] es representativa del tramo considerado.
3. [[alpha]] resume bien la geometria local del movimiento.
4. La desviacion lateral buscada se evalua en horizonte [[t]] donde la aproximacion de segundo orden es aceptable.

Si estas hipotesis no se cumplen, la salida puede perder capacidad predictiva aun cuando el calculo formal sea correcto.

## Dominio de validez cuantitativo

Criterios operativos utiles para este leaf:

- Coherencia de escala: [[y]] estimada debe compararse con tolerancia funcional del problema.
- Ventana de aproximacion: usar modelo simple cuando variacion relativa de [[v_rel]] en el tramo sea menor a 10%.
- Estabilidad geometrica: usarlo cuando [[alpha]] no oscile mas de 15 grados durante [[t]].

Para el paso de aceleracion a fuerza equivalente, la lectura con [[F_cor]] es robusta cuando [[m]] es bien conocida y no hay cambios bruscos de masa efectiva.

## Señales de fallo del modelo

- Diferencia repetida mayor al 10% entre desvio observado y [[y]] estimada.
- Oscilaciones de orientacion que invalidan el uso de [[alpha]] media.
- Regimen no estacionario donde [[omega]] cambia de forma apreciable dentro de [[t]].
- Efectos externos dominantes (viento lateral fuerte, control activo agresivo) que superan la contribucion Coriolis.

## Modelo extendido o alternativo

Cuando el modelo ideal falla, conviene incluir variacion temporal de variables, acoples con fuerzas externas y dinamica completa de guiado.

Transicion explicita: cuando la discrepancia entre prediccion y observacion supera de forma repetida el 10%, o cuando [[y]] estimada cruza tolerancia critica, se recomienda cambiar del modelo ideal al modelo extendido.

Este cambio no niega el modelo base; indica que el problema entro en un regimen donde la aproximacion minima ya no alcanza.

## Comparación operativa

| Aspecto | Modelo ideal | Modelo extendido |
|---|---|---|
| Entradas | [[omega]], [[v_rel]], [[alpha]], [[t]] | + variaciones temporales y fuerzas externas |
| Salidas | [[a_cor]], [[y]], [[F_cor]] | trayectorias y correcciones acopladas |
| Complejidad | baja | media/alta |
| Tiempo de analisis | corto | mayor |
| Uso recomendado | estimacion inicial | validacion fina y control avanzado |

Estrategia recomendada: usar primero el ideal para detectar relevancia, luego escalar solo si los indicadores lo exigen.\r
`;export{a as default};
