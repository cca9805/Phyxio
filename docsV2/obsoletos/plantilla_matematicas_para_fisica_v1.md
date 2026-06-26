# Plantilla v1 - Matematicas para fisica

Esta plantilla define como deben construirse los leafs de `frontend/src/data_v2_i18n/matematicas`.

Estos leafs no explican fenomenos fisicos. Explican herramientas matematicas que despues se usan para calcular, modelar, estimar e interpretar problemas de fisica. Por tanto, no deben forzarse a la plantilla fisica v5.

## Principio rector

Cada leaf debe responder tres preguntas:

1. Que herramienta matematica es.
2. Cuando conviene usarla en fisica.
3. Como se aplica sin perder unidades, signo, escala ni significado.

El objetivo final no es que el alumno "sepa hacer cuentas", sino que pueda reconocer que operacion matematica necesita un problema fisico, justificar por que, ejecutarla con control y leer el significado del resultado.

## Estructura de tabs en el frontend

La experiencia de un leaf matematico debe organizarse en estos tabs, en este orden:

1. **Teoria**: explica la herramienta, su significado y su dominio de uso.
2. **Procedimiento**: ensena como decidir y ejecutar la operacion paso a paso.
3. **Errores**: muestra fallos matematicos que producen interpretaciones fisicas falsas.
4. **Ejemplos**: desarrolla casos guiados con traduccion entre situacion fisica y operacion matematica.
5. **Aplicaciones**: conecta la herramienta con temas concretos de fisica.
6. **Practica**: propone ejercicios graduados para reconocer, aplicar, elegir, interpretar y corregir.

Los leafs matematicos no deben mostrar tabs vacios heredados de fisica. `Modelo y validez` solo debe aparecer si existe contenido real de modelizacion matematica. `Graficas` solo debe aparecer si el leaf declara y aporta representaciones graficas reales.

## Estructura oficial de un leaf matematico

Cada leaf matematico debe contener estos archivos:

```text
meta.yaml
teoria.md
procedimiento.md
errores.md
ejemplos.md
aplicaciones_fisicas.md
practica.md

teoria.en.md
procedimiento.en.md
errores.en.md
ejemplos.en.md
aplicaciones_fisicas.en.md
practica.en.md
```

Esta estructura es bilingue por defecto porque el resto del proyecto es bilingue. Si en una fase inicial se genera solo castellano, el leaf debe considerarse incompleto hasta crear los `.en.md`.

No son obligatorios `magnitudes.yaml`, `formulas.yaml` ni `interpretacion.yaml` en el sentido usado por los leafs de fisica. Si el frontend exige archivos con esos nombres, deben tratarse como adaptadores tecnicos o semanticos, no como nucleo didactico.

Archivos heredados como `modelos.md` o `historia.md` no forman parte del contrato matematico. Si existen durante la migracion, no deben contener contenido canonico duplicado: el contenido canonico vive en los archivos anteriores.

## Contrato de validacion

Un leaf matematico se valida contra:

1. `docsV2/mapa_matematicas_para_fisica_v1.yaml`
2. esta plantilla
3. la estructura real del directorio en `frontend/src/data_v2_i18n/matematicas`

El validador especifico debe comprobar:

- archivos obligatorios
- `meta.yaml` coherente con el mapa
- ausencia de mojibake
- ausencia de placeholders
- secciones obligatorias por archivo
- ejemplos con contexto fisico
- aplicaciones fisicas numeradas y concretas
- practica graduada
- procedimiento no generico, con decisiones antes de calcular
- ejemplos con traduccion matematica, calculo y lectura fisica del resultado
- aplicaciones que indiquen donde aparece, que calcula, que significa y que error seria peligroso
- practica con cinco niveles y enunciados accionables
- no exigir `formulas.yaml`, `magnitudes.yaml` ni `interpretacion.yaml`

## meta.yaml

Campos recomendados:

```yaml
id: producto-escalar
titulo:
  es: Producto escalar
  en: Dot product
type: math_leaf
area: matematicas
bloque: vectores-matematicos
ruta_relativa: matematicas/vectores-matematicos/producto-escalar
orden: 643200
niveles:
  es: [ESO, BACHILLERATO, UNIVERSIDAD]
  en: [Secondary, Upper Secondary, University]
icon: "."
descripcion: Herramienta matematica para medir alineacion entre vectores.
description_en: Mathematical tool for measuring alignment between vectors.
dificultad: 2
tiempo_estimado_min: 35
prerequisitos:
  - matematicas/vectores-matematicos/operaciones-con-vectores
objetivo_operativo:
  es: Usar el producto escalar para calcular componentes, trabajo y angulos.
  en: Use the dot product to compute components, work, and angles.
aparece_en_fisica:
  - trabajo-y-energia
  - campos
  - vectores
  - proyecciones
tipo_herramienta: operacion_vectorial
```

## teoria.md

Debe explicar la herramienta de forma conceptual, no como receta.

Estructura obligatoria:

```md
# Titulo

## Que es

## Por que aparece en fisica

## Idea visual o geometrica

## Lenguaje simbolico minimo

## Que significa el resultado

## Cuando no debes usarlo

## Resumen operativo
```

Reglas:

- No empezar con formulas.
- Usar primero una imagen mental: alineacion, area, pendiente, acumulacion, escala, crecimiento, direccion.
- Explicar el significado de los simbolos como objetos matematicos.
- Conectar siempre con al menos tres situaciones fisicas.
- No cerrar con una lista de formulas: cerrar con criterio de uso.
- No usar texto de plantilla: cada leaf debe tener redaccion especifica para su herramienta matematica.

## procedimiento.md

Debe ensenar como aplicar la herramienta paso a paso.

Estructura obligatoria:

```md
# Procedimiento

## Antes de calcular

## Paso 1: identifica el objeto matematico

## Paso 2: elige la operacion

## Paso 3: conserva unidades y signos

## Paso 4: calcula

## Paso 5: interpreta el resultado

## Checklist de autocontrol
```

El procedimiento debe decir que mirar antes de operar. Por ejemplo:

- En integrales: que se acumula y respecto a que variable.
- En derivadas: que magnitud cambia y respecto a que.
- En trigonometria: que triangulo, angulo y componente se estan usando.
- En logaritmos: que razon, escala o crecimiento relativo se esta midiendo.
- En vectores: si se necesita modulo, componente, direccion, proyeccion o giro.

Reglas:

- No puede limitarse a una receta algebraica.
- Debe explicar como reconocer si la herramienta es la adecuada.
- Debe conservar unidades, signos, dominio y significado fisico.
- Debe cerrar con un checklist que el alumno pueda usar antes de entregar un resultado.

## errores.md

Debe atacar errores matematicos que rompen la fisica.

Estructura recomendada:

```md
# Errores frecuentes

## Error 1: elegir la operacion equivocada

## Error 2: perder el significado de la variable

## Error 3: ignorar unidades

## Error 4: confundir signo con modulo

## Error 5: aplicar una regla fuera de dominio

## Regla rapida de deteccion
```

Cada error debe incluir:

- por que parece razonable
- por que falla
- como detectarlo
- como corregirlo
- mini-ejemplo fisico

No se admiten errores genericos del tipo "no estudiar" o "confundirse al calcular". Los errores deben ser matematicamente precisos y fisicamente relevantes.

## ejemplos.md

Debe contener ejemplos matematicos con contexto fisico.

Estructura recomendada:

```md
# Ejemplo guiado

## Situacion fisica

## Traduccion matematica

## Calculo paso a paso

## Lectura del resultado

## Error comun evitado

# Ejemplo inverso

## Resultado dado

## Que pregunta fisica permite responder
```

El ejemplo inverso es importante: el alumno debe aprender no solo a calcular, sino a reconocer que significa un resultado matematico.

Reglas:

- El ejemplo guiado debe contener al menos una situacion fisica concreta.
- La traduccion matematica debe separar datos, objeto matematico y operacion.
- El calculo debe estar desarrollado, no solo indicar el resultado.
- La lectura del resultado debe explicar unidades, signo, escala o sentido fisico.
- El ejemplo inverso debe partir de un resultado matematico y reconstruir que pregunta fisica permite responder.

## aplicaciones_fisicas.md

Debe mapear la herramienta con temas de fisica.

Estructura recomendada:

```md
# Aplicaciones fisicas

## 1. Tema de fisica

## 2. Tema de fisica

## 3. Tema de fisica

## 4. Tema de fisica

## 5. Tema de fisica
```

Cada aplicacion debe incluir:

- donde aparece
- que se calcula
- que significa el resultado
- que error matematico seria peligroso

No basta con nombrar temas de fisica. Cada aplicacion debe funcionar como una guia de transferencia: "esta herramienta aparece aqui porque permite calcular o decidir esto".

Ejemplo para producto escalar:

- trabajo mecanico: componente de fuerza en la direccion del desplazamiento
- flujo electrico: componente del campo normal a la superficie
- proyeccion: componente de un vector sobre un eje
- angulo entre vectores: alineacion entre dos direcciones
- potencia: fuerza alineada con velocidad

## practica.md

Debe proponer ejercicios graduados, no solo problemas finales.

Estructura recomendada:

```md
# Practica

## Nivel 1: reconocimiento

## Nivel 2: aplicacion directa

## Nivel 3: eleccion de herramienta

## Nivel 4: interpretacion fisica

## Nivel 5: error intencionado
```

La practica debe incluir ejercicios donde el alumno tenga que elegir la herramienta, no solo ejecutarla.

Cada nivel debe incluir tareas accionables. El nivel 5 debe presentar un error intencionado y pedir localizarlo, explicarlo y corregirlo.

## Orden didactico global

El bloque de matematicas para fisica debe estudiarse en este orden:

1. Algebra para fisica
2. Funciones y graficas
3. Trigonometria y geometria
4. Vectores matematicos
5. Derivadas en fisica
6. Integrales en fisica
7. Extensiones avanzadas

## Plan por bloque

### Algebra para fisica

Objetivo: que el alumno pueda transformar expresiones sin destruir significado fisico.

Leafs base:

- despeje-de-formulas
- notacion-cientifica-y-prefijos
- orden-de-magnitud
- proporcionalidad-y-escala

Leafs recomendados:

- analisis-dimensional
- cifras-significativas-e-incertidumbre
- sistemas-de-ecuaciones-para-fisica
- logaritmos-y-exponenciales

### Funciones y graficas

Objetivo: que el alumno lea una relacion antes de calcular.

Leafs base:

- lectura-de-graficas
- pendiente-y-area
- tipos-de-funciones-comunes

Leafs recomendados:

- ajuste-lineal-y-linealizacion
- escalas-logaritmicas
- maximos-minimos-y-puntos-criticos

### Trigonometria y geometria

Objetivo: que el alumno traduzca direcciones, angulos y componentes.

Leafs base:

- angulos-y-direcciones
- funciones-trigonometricas
- proyecciones-y-componentes

Leafs recomendados:

- triangulos-y-relaciones-geometricas
- radianes-y-movimiento-angular
- coordenadas-polares-basicas

### Vectores matematicos

Objetivo: que el alumno distinga suma vectorial, proyeccion, alineacion y giro.

Leafs base:

- operaciones-con-vectores
- producto-escalar
- producto-vectorial

Leafs recomendados:

- vectores-unitarios-y-bases
- cambio-de-base-y-componentes
- campos-vectoriales-basicos

### Derivadas en fisica

Objetivo: que el alumno interprete derivar como medir cambio local.

Leafs base:

- derivada-como-tasa-de-cambio
- derivadas-de-funciones-comunes
- interpretacion-fisica

Leafs recomendados:

- regla-de-la-cadena-en-fisica
- derivadas-parciales-basicas
- maximos-minimos-y-estabilidad
- ecuaciones-diferenciales-basicas

### Integrales en fisica

Objetivo: que el alumno interprete integrar como acumular contribuciones.

Leafs base:

- integral-como-acumulacion
- area-bajo-la-curva
- integrales-en-problemas-de-fisica

Leafs recomendados:

- cambio-de-variable-en-integrales
- integrales-de-linea-basicas
- integrales-de-superficie-basicas
- distribuciones-continuas

## Criterio de calidad

Un leaf matematico esta bien construido si el alumno puede responder:

1. Que operacion necesito.
2. Por que esa y no otra.
3. Que representa cada variable.
4. Que unidades conserva el resultado.
5. Que signo o direccion tiene sentido.
6. Que error seria fisicamente peligroso.
7. En que temas de fisica aparece.

Si el leaf solo enseña a sustituir en formulas, no cumple el objetivo de matematicas para fisica.

