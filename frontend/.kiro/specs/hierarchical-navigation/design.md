# Design Document

## Overview

El diseño implementa una arquitectura de navegación jerárquica de 4 niveles que organiza el contenido de física desde conceptos generales hasta subtemas específicos. La solución utiliza una estructura de datos anidada en `topics.generated.js` y el archivo existente `thermodynamicsSubtopics.generated.js` como fuente de verdad para la organización correcta.

## Architecture

### Estructura de Datos Jerárquica

```javascript
topicsData = {
  // Nivel 1: Ramas principales
  "clasica": {
    cards: [
      // Nivel 2: Temas principales
      { tipo: "mecanica", link: "/clasica/mecanica" },
      { tipo: "termodinamica", link: "/clasica/termodinamica" }
    ]
  },
  
  // Nivel 2: Páginas de temas principales
  "mecanica": {
    cards: [
      // Nivel 3: Subtemas intermedios
      { tipo: "cinematica", link: "/clasica/mecanica/cinematica" },
      { tipo: "dinamica", link: "/clasica/mecanica/dinamica" }
    ]
  },
  
  "termodinamica": {
    cards: [
      // Nivel 3: Temas principales de termodinámica
      { tipo: "01_conceptos_fundamentales", link: "/clasica/termodinamica/01_conceptos_fundamentales" },
      { tipo: "02_magnitudes_termicas", link: "/clasica/termodinamica/02_magnitudes_termicas" }
    ]
  },
  
  // Nivel 3: Páginas de subtemas intermedios
  "01_conceptos_fundamentales": {
    cards: [
      // Nivel 4: Subtemas finales
      { tipo: "estado_y_equilibrio", link: "/clasica/termodinamica/01_conceptos_fundamentales/estado_y_equilibrio" },
      { tipo: "frontera_y_entorno", link: "/clasica/termodinamica/01_conceptos_fundamentales/frontera_y_entorno" }
    ]
  }
}
```

### Flujo de Navegación

1. **Nivel 1 → Nivel 2**: Usuario selecciona "Física Clásica" → Muestra Mecánica, Termodinámica, etc.
2. **Nivel 2 → Nivel 3**: Usuario selecciona "Termodinámica" → Muestra 01 Conceptos Fundamentales, 02 Magnitudes Térmicas, etc.
3. **Nivel 3 → Nivel 4**: Usuario selecciona "01 Conceptos Fundamentales" → Muestra Estado y Equilibrio, Frontera y Entorno, etc.
4. **Nivel 4 → Contenido**: Usuario selecciona "Estado y Equilibrio" → Muestra página final con teoría, ejercicios, calculadoras

## Components and Interfaces

### Estructura de Archivos

```
src/data/
├── topics.generated.js           # Archivo principal con estructura jerárquica
├── thermodynamicsSubtopics.generated.js  # Fuente de verdad para termodinámica
└── termodinamica/
    └── hierarchicalStructure.js  # Estructura auxiliar (opcional)
```

### Interfaz de Datos

```typescript
interface TopicCard {
  tipo: string;           // Identificador único
  titulo: string;         // Título mostrado al usuario
  descripcion: string;    // Descripción del tema
  icono: string;          // Icono a mostrar
  palette: string;        // Esquema de colores
  btn: {
    texto: string;        // Texto del botón
    clase: string;        // Clase CSS
    link: string;         // Ruta de navegación
  }
}

interface TopicLevel {
  title: string;          // Título de la página
  intro: string;          // Introducción/descripción
  cards: TopicCard[];     // Cards de este nivel
  additionalContent?: string;  // Contenido adicional opcional
}
```

### Mapeo de Niveles

| Nivel | Ejemplo de Ruta | Contenido | Tipo de Página |
|-------|----------------|-----------|----------------|
| 1 | `/` | Clásica, Moderna | Cards de ramas |
| 2 | `/clasica` | Mecánica, Termodinámica, Óptica | Cards de temas |
| 3 | `/clasica/termodinamica` | 01 Conceptos, 02 Magnitudes | Cards de subtemas |
| 4 | `/clasica/termodinamica/01_conceptos_fundamentales` | Estado y Equilibrio, Frontera | Cards finales |
| Final | `/clasica/termodinamica/01_conceptos_fundamentales/estado_y_equilibrio` | Teoría, ejercicios | Contenido real |

## Data Models

### Estructura Principal de Termodinámica

```javascript
// Nivel 2: Página principal de Termodinámica
"termodinamica": {
  "title": "Termodinámica",
  "intro": "Estudio de las relaciones entre calor, trabajo, temperatura y energía",
  "cards": [
    {
      "tipo": "01_conceptos_fundamentales",
      "titulo": "01 Conceptos Fundamentales",
      "descripcion": "Fundamentos básicos de la termodinámica",
      "icono": "termodinamicaIcon",
      "palette": "orange",
      "btn": {
        "texto": "Explorar",
        "clase": "01_conceptos_fundamentales-btn",
        "link": "/clasica/termodinamica/01_conceptos_fundamentales"
      }
    }
    // ... 12 temas más
  ]
}
```

### Estructura de Subtemas (Nivel 3)

```javascript
// Nivel 3: Página de 01 Conceptos Fundamentales
"01_conceptos_fundamentales": {
  "title": "01 Conceptos Fundamentales",
  "intro": "Fundamentos básicos de la termodinámica",
  "cards": [
    {
      "tipo": "estado_y_equilibrio",
      "titulo": "Estado y Equilibrio Termodinámico",
      "descripcion": "Conceptos de estado termodinámico y equilibrio",
      "icono": "termodinamicaIcon",
      "palette": "blue",
      "isTheoryOnly": true,
      "btn": {
        "texto": "Explorar",
        "clase": "estado_y_equilibrio-btn",
        "link": "/clasica/termodinamica/01_conceptos_fundamentales/estado_y_equilibrio"
      }
    }
    // ... más subtemas
  ]
}
```

## Error Handling

### Validación de Estructura

1. **Verificación de Niveles**: Validar que cada nivel contenga solo los elementos correspondientes
2. **Validación de Enlaces**: Asegurar que todos los links apunten a rutas válidas
3. **Consistencia de Datos**: Verificar que la estructura sea consistente entre archivos
4. **Manejo de Errores de Navegación**: Redirigir a página de error si la ruta no existe

### Casos de Error

- **Ruta Inexistente**: Mostrar página 404 con navegación de regreso
- **Estructura Malformada**: Log de errores y fallback a estructura básica
- **Datos Faltantes**: Mostrar placeholder con mensaje informativo

## Testing Strategy

### Pruebas de Estructura

1. **Validación de Jerarquía**: Verificar que cada nivel contenga solo elementos del nivel correcto
2. **Pruebas de Navegación**: Validar que todos los enlaces funcionen correctamente
3. **Consistencia de Datos**: Comparar estructura generada con fuente de verdad
4. **Pruebas de Regresión**: Asegurar que cambios no rompan navegación existente

### Casos de Prueba

```javascript
// Ejemplo de prueba de estructura
describe('Hierarchical Navigation', () => {
  test('Termodinamica level 2 should contain only 13 main topics', () => {
    expect(topicsData.termodinamica.cards).toHaveLength(13);
    expect(topicsData.termodinamica.cards[0].tipo).toBe('01_conceptos_fundamentales');
  });
  
  test('01_conceptos_fundamentales level 3 should contain subtopics', () => {
    expect(topicsData['01_conceptos_fundamentales'].cards.length).toBeGreaterThan(0);
    expect(topicsData['01_conceptos_fundamentales'].cards[0].link).toContain('01_conceptos_fundamentales');
  });
});
```

## Implementation Approach

### Fase 1: Reestructuración de Datos
1. Analizar estructura actual en `topics.generated.js`
2. Extraer datos correctos de `thermodynamicsSubtopics.generated.js`
3. Crear estructura jerárquica limpia

### Fase 2: Implementación de Niveles
1. Crear sección principal de termodinámica (Nivel 2) con solo 13 temas
2. Crear secciones individuales para cada tema principal (Nivel 3)
3. Mantener subtemas finales (Nivel 4) en sus secciones correspondientes

### Fase 3: Validación y Pruebas
1. Verificar navegación completa de 4 niveles
2. Validar consistencia con estructura de Mecánica
3. Probar todos los enlaces y rutas

### Consideraciones Técnicas

- **Fuente de Verdad**: `thermodynamicsSubtopics.generated.js` contiene la estructura correcta
- **Compatibilidad**: Mantener compatibilidad con sistema de rutas existente
- **Performance**: Estructura optimizada para carga rápida de cada nivel
- **Mantenibilidad**: Código claro y bien documentado para futuras modificaciones