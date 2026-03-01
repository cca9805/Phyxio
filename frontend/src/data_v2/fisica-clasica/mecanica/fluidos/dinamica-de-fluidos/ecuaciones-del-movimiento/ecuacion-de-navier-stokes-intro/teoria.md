# Ecuacion De Navier Stokes Intro

## Idea clave
Navier-Stokes integra inercia, presion y viscosidad para flujo real.

## Recorrido de aprendizaje (de principio a fin)
- Identificar variables fisicas relevantes y supuestos del modelo.
- Seleccionar ecuaciones con coherencia dimensional.
- Resolver de forma trazable y verificar resultado.
- Interpretar el resultado en contexto fisico e ingenieril.

## Variables y parametros
- Re: numero reynolds
- $\rho$: densidad
- v: velocidad
- D: diametro
- $\mu$: viscosidad dinamica

## Ecuaciones fundamentales
$$
\rho(\partial_t\vec v+\vec v\cdot\nabla\vec v)=-\nabla p+\mu\nabla^2\vec v+\rho\vec g
$$

$$
Re=\frac{\rho v D}{\mu}
$$

## Desarrollo didactico
- Objetivo central del tema: ecuacion general de movimiento de fluidos (intro).
- Se trabaja desde principios de conservacion, equilibrio o transporte, no desde memorizacion mecanica.
- Cada formula debe aplicarse dentro de su rango de validez fisica.
- La validacion final (unidades, orden de magnitud y signo) es obligatoria.

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


