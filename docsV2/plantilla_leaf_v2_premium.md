# Plantilla Premium de Subtema V2 (Phyxio)

## Objetivo
Unificar en todo el proyecto un estándar de calidad didáctica y técnica que combine:
- **Profundidad didáctica** del nodo de gravitación.
- **Nivel técnico e interacción gráfica** del nodo de péndulos.

---

## 1) Estructura mínima obligatoria por subtema
Cada subtema debe incluir archivos personalizados (no plantillas genéricas repetidas):

- `meta.yaml`
- `teoria.md`
- `formulas.yaml`
- `magnitudes.yaml`
- `aplicaciones.md`
- `ejemplos.md`
- `errores.md`
- `historia.md`
- `modelos.md`

Regla: cada archivo debe corresponder al subtema concreto del tema.

---

## 2) Estructura de `teoria.md` (estándar recomendado)

- `# Título del subtema`
- `## Idea clave`
- `## 1- Qué estudia este subtema y por qué es fundamental`
- `## 2- Qué significa físicamente (modelo mental correcto)`
- `## 3- Magnitudes y parámetros (definición + unidades SI)`
- `## 4- Fórmulas esenciales y lectura física`
- `## 5- Condiciones de validez y límites del modelo`
- `## 6- Método de resolución paso a paso`
- `## 7- Preguntas lógicas del alumno (FAQ corta)`
- `## 8- Ejemplo guiado completo`
- `## 9- Aplicaciones reales`
- `## 10- Síntesis final`

Reglas:
- Fórmulas siempre entre bloques:

```tex
$$
...\text{fórmula}...
$$
```

- No dejar símbolos sin leyenda (cada variable definida).
- Explicar **qué**, **cómo**, **por qué** y **cuándo no** funciona el modelo.

---

## 3) Estándar de `formulas.yaml`
- Incluir fórmulas principales, despejes útiles y fórmulas auxiliares de otros temas si intervienen.
- Agrupar por propósito (principal, despejes, apoyo, validación).
- Si una fórmula no es calculable en la calculadora (integrales, ecuaciones implícitas), marcar el motivo.

---

## 4) Estándar de `magnitudes.yaml`
- Debe incluir todas las variables de `formulas.yaml`.
- Cada magnitud con nombre, símbolo, unidad SI y descripción física breve.
- Evitar duplicados y símbolos ambiguos.

---

## 5) Estándar gráfico (SVG y Coord)
### SVG (nivel péndulos)
- Estructura moderna con columna derecha (fórmulas, parámetros, lectura rápida).
- Modo `Seguir calculadora` y modo `Experimentar`.
- Controles de simulación cuando proceda: `Play`, `Pause`, `Reset`.
- Variable visualmente vinculada a la fórmula (color coherente por magnitud).
- Mostrar fórmula aplicada con valores numéricos actuales.

### Coord
- Cards de métricas superiores coherentes con variables del tema.
- Curvas/series que respondan a los parámetros de calculadora.
- Leyendas y ejes legibles con unidades.

---

## 6) Criterio de calidad final
Un subtema está completo cuando:
1. La teoría permite estudiar el tema de principio a fin sin salir de Phyxio.
2. Las fórmulas y magnitudes cubren resolución real de problemas.
3. Los gráficos muestran el fenómeno, no solo una ilustración estática.
4. El contenido es específico del subtema y no una plantilla genérica reciclada.

