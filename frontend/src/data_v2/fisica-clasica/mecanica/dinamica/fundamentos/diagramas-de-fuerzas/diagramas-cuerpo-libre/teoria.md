# Diagramas De Cuerpo Libre (DCL)

## Idea clave
Un DCL es la representacion del cuerpo aislado con todas y solo las fuerzas externas que actuan sobre el. Es el puente obligatorio entre el problema fisico y las ecuaciones de Newton.

## 1- Que es un DCL y para que sirve realmente
El DCL no es un dibujo artistico ni opcional. Sirve para:
- definir el sistema analizado,
- fijar fuerzas externas,
- evitar ambiguedades de signo y direccion,
- construir ecuaciones por ejes.

Sin DCL, la dinamica suele convertirse en sustitucion sin criterio.

## 2- Paso cero: elegir el sistema
Antes de dibujar, decide que analizas:
- un solo cuerpo,
- o un conjunto de cuerpos como sistema equivalente.

Esta eleccion cambia las fuerzas internas que se anulan y las externas que permanecen.

## 3- Aislamiento correcto del cuerpo
Aislar significa separar mentalmente el cuerpo del entorno y sustituir cada interaccion por su fuerza equivalente.

Solo aparecen fuerzas sobre el sistema elegido. No aparecen fuerzas que el sistema ejerce sobre el exterior.

## 4- Contenido minimo de un DCL correcto
Debe incluir:
- punto o esquema del cuerpo,
- vectores de fuerzas con origen claro,
- etiquetas (\(\vec P\), \(\vec N\), \(\vec T\), \(\vec f\), etc.),
- ejes elegidos.

Debe excluir:
- trayectorias,
- velocidades si no aportan al planteo de fuerzas,
- fuerzas ficticias en marcos inerciales.

## 5- Paso de DCL a ecuaciones
Con ejes definidos:

$$
\sum \vec F = m\vec a
$$

Se proyecta:

$$
\sum F_x = ma_x,\quad \sum F_y = ma_y
$$

El DCL evita mezclar componentes de fuerzas con fuerzas nuevas.

## 6- Criterios de eleccion de ejes
Elige ejes que simplifiquen:
- eje paralelo al movimiento esperado,
- eje paralelo/perpendicular al plano inclinado,
- eje alineado con tension en cuerdas.

Buena eleccion de ejes reduce errores y cuenta de ecuaciones.

## 7- Verificacion de consistencia antes de resolver
Checklist rapido:
1. Todas las fuerzas tienen agente
2. Hay alguna fuerza duplicada
3. Falta alguna interaccion de contacto o campo
4. Los sentidos son fisicamente coherentes
5. El numero de ecuaciones alcanza para las incognitas

Si una respuesta falla, corrige DCL antes de operar algebraicamente.

## 8- Ejemplo guiado
Bloque arrastrado en superficie horizontal con rozamiento.

DCL contiene:
- \(P=mg\) hacia abajo,
- \(N\) hacia arriba,
- fuerza aplicada \(F\) hacia la derecha,
- rozamiento \(f\) hacia la izquierda.

Ecuaciones:

$$
\sum F_y = N-mg=0
$$

$$
\sum F_x = F-f = ma
$$

Desde aqui ya puedes resolver aceleracion, normal o coeficientes segun datos.

## 9- Errores tipicos de DCL
- Dibujar accion y reaccion en el mismo cuerpo.
- Usar normal vertical en cualquier geometria.
- Omitir rozamiento cuando hay contacto rugoso.
- Incluir "fuerza de avance" sin agente real.
- Resolver sin haber fijado ejes.

## 10- Sintesis final
El DCL es la pieza estructural de toda resolucion en dinamica. Un DCL correcto convierte un problema complejo en ecuaciones claras. Un DCL incorrecto hace que incluso una formula correcta de un resultado falso.

