Déjame revisar el contexto completo de esos 4 nodos en el mapa.

Tengo lo que necesito. Déjame verificar los otros 3 nodos faltantes también.



Ya tengo el patrón completo. La respuesta es clara:

## Sí, tienen sentido — y deben crearse

Los 4 nodos "faltantes" son **bloques de tipo `bridge`**, no bloques con contenido propio. El patrón se repite en los cuatro:

| Nodo faltante | Tipo | Función |
|---|---|---|
| `cinematica/rotacion` | `block` (sin `descripcion`, sin `niveles`) | Agrupa **bridges** que apuntan a `mecanica/rotacion/fundamentos/*` |
| `dinamica/dinamica-rotacional` | `block` (sin `descripcion`) | Agrupa **bridges** que apuntan a `mecanica/rotacion/dinamica/*` |
| `trabajo-y-energia/energia-de-rotacion` | `block` | Agrupa **bridges** que apuntan a `mecanica/rotacion/energia/*` |
| `cantidad-de-movimiento/momento-angular` | `block` | Agrupa **bridges** que apuntan a `mecanica/rotacion/momento-angular/*` |

### Lógica del diseño

El mapa tiene un **nodo canónico de rotación** en `mecanica/rotacion/` con todos los leaves reales. Estos 4 bloques son **puntos de entrada contextuales** dentro de `cinematica/`, `dinamica/`, etc. — actúan como portales que muestran los contenidos de rotación en el contexto pedagógico adecuado, sin duplicar el contenido.

**Los 4 bloques SÍ necesitan carpeta** porque el router/indexador usa `ruta_relativa` para resolverlos. ¿Los creo ahora?