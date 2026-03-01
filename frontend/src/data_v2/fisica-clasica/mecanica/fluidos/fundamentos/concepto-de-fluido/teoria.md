# Concepto De Fluido

## Idea clave
Un fluido es una sustancia que no puede mantener una forma fija cuando recibe un esfuerzo tangencial: fluye y se deforma de manera continua.

## Recorrido de aprendizaje (de principio a fin)
- Identificar variables fisicas relevantes y supuestos del modelo.
- Seleccionar ecuaciones con coherencia dimensional.
- Resolver de forma trazable y verificar resultado.
- Interpretar el resultado en contexto fisico e ingenieril.

## Variables y parametros
- tau (Pa): esfuerzo cortante, fuerza tangencial por unidad de area.
- mu (Pa*s): viscosidad dinamica, resistencia interna del fluido a deformarse por cizalla.
- du/dy (1/s): gradiente de velocidad entre capas del fluido.
- Re: numero reynolds
- $\rho$: densidad
- v: velocidad
- D: diametro

## Ecuaciones fundamentales
$$
\tau=\mu\frac{du}{dy}
$$

$$
Re=\frac{\rho v D}{\mu}
$$

## Desarrollo didactico
- Objetivo central del tema: entender que "fluido" no significa solo liquido. Tambien incluye gases.
- Diferencia con un solido: un solido puede resistir cierto esfuerzo cortante sin fluir; un fluido no, por pequeno que sea el esfuerzo cortante aplicado durante tiempo suficiente.
- En reposo, en un fluido ideal solo aparece presion normal. Cuando hay movimiento relativo entre capas, aparece esfuerzo cortante.
- Ese esfuerzo cortante se modela con:
$$
\tau=\mu\frac{du}{dy}
$$
  donde tau mide el esfuerzo tangencial, mu mide la viscosidad dinamica y du/dy mide como cambia la velocidad entre capas vecinas.
- Si mu es grande, el fluido "se opone" mas al deslizamiento interno; si mu es pequena, fluye con mas facilidad.
- Ordenes de magnitud utiles para no perderse:
  - Aire (20 C): mu ~ 1.8e-5 Pa*s
  - Agua (20 C): mu ~ 1.0e-3 Pa*s
  - Aceites comunes: mu ~ 5e-2 a 1 Pa*s (segun tipo y temperatura)
- Con esto se ve que mu no suele ser un entero. En muchos problemas es decimal pequeno y puede escribirse en notacion cientifica.
- El numero de Reynolds resume la competencia entre inercia y viscosidad:
$$
Re=\frac{\rho v D}{\mu}
$$
  y ayuda a decidir si el flujo es laminar o turbulento.
- Todo el tema se apoya en una idea de modelado: tratar el fluido como medio continuo. Eso permite usar campos de velocidad, presion y densidad en cada punto.
- La validacion final siempre debe incluir unidades, orden de magnitud y coherencia fisica.

## Como leer los parametros del grafico de Phyxio
- mu_1 (Pa*s): viscosidad del fluido 1 (curva azul).
- mu_2 (Pa*s): viscosidad del fluido 2 (curva verde).
- (du/dy)_max (1/s): maximo gradiente de velocidad que se barre en el eje horizontal.
- muestra (0 a 1): selecciona un punto del barrido para lectura instantanea.
- Interpretacion directa: para un mismo du/dy, el fluido con mu mayor produce un tau mayor.

## Metodo de resolucion paso a paso
1. Define datos, incognitas y sistema de unidades.
2. Elige la ecuacion adecuada al regimen y geometria.
3. Sustituye, despeja y simplifica con criterio fisico.
4. Comprueba resultado con un caso limite o referencia conocida.

## Errores frecuentes
- Mezclar unidades o constantes sin conversion.
- Aplicar ecuaciones fuera de su dominio.
- Ignorar signo fisico de la magnitud calculada.
- No verificar la consistencia del resultado final.

## Conexion con otros temas
- Conecta con dinamica, energia y fenomenos de transporte.
- Se integra con termodinamica y ondas mecanicas.
- Tiene aplicacion directa en ingenieria de procesos y diseno de sistemas.

## Que es calculable y que no (en Phyxio)
- Calculable: relaciones incluidas en formulas.yaml de este Tema.
- Fuera de alcance basico: modelado CFD avanzado y derivaciones tensoriales completas.


