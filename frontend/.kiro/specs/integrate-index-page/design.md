# Design Document

## Overview

La integración de Index.jsx como un tema más del sistema dinámico requiere crear una entrada especial en `topicsData` para manejar la ruta raíz ("/") y modificar `DynamicPage.jsx` para reconocer y renderizar correctamente esta página principal como un tema especial.

## Architecture

### Current System Analysis

El sistema actual tiene:
- **Index.jsx**: Página independiente que renderiza la introducción y tarjetas principales
- **App.jsx**: Define rutas estáticas incluyendo "/" que apunta a Index.jsx
- **DynamicPage.jsx**: Maneja rutas dinámicas usando `topicsData` pero no maneja la ruta raíz
- **topics.generated.js**: Contiene `temasFisica` (usado por Index.jsx) y `topicsData` (usado por DynamicPage.jsx)

### Target Architecture

Después de la integración:
- **App.jsx**: La ruta "/" apuntará a DynamicPage.jsx
- **DynamicPage.jsx**: Reconocerá la ruta raíz y renderizará el contenido de inicio
- **topics.generated.js**: Tendrá una entrada especial para el tema raíz
- **Index.jsx**: Será eliminado

## Components and Interfaces

### 1. Root Topic Data Structure

Se creará una entrada especial en `topicsData` para manejar la página raíz:

```javascript
export const topicsData = {
  // Entrada especial para la página raíz
  "": {
    "title": "¿Qué es la Física?",
    "intro": "La física estudia cómo funciona el universo: el movimiento, las fuerzas, la energía, el espacio y el tiempo. Se divide en ramas como la Física Clásica y la Moderna según la época y fenómenos que trata.",
    "cards": [
      {
        "tipo": "clasica",
        "titulo": "Física Clásica", 
        "descripcion": "Mecánica, Termodinámica, Óptica, Electromagnetismo...",
        "icono": m_clasica,
        "btn": {
          "texto": "Explorar",
          "clase": "clasica",
          "link": "/clasica"
        }
      },
      {
        "tipo": "moderna",
        "titulo": "Física Moderna",
        "descripcion": "Relatividad, Cuántica, Física de partículas...",
        "icono": m_moderna,
        "btn": {
          "texto": "Explorar", 
          "clase": "moderna",
          "link": "/moderna"
        }
      }
    ],
    "additionalContent": `
      <h3>¿En qué se diferencian?</h3>
      <ul>
        <li><strong>Clásica:</strong> Objetos grandes y velocidades bajas.</li>
        <li><strong>Moderna:</strong> Partículas subatómicas y altas velocidades.</li>
        <li><strong>Clásica: Newton, Galileo:</strong> Leyes del movimiento y fuerza.</li>
        <li><strong>Moderna: Einstein, Planck:</strong> Relatividad y teoría cuántica.</li>
      </ul>
    `
  },
  // ... resto de temas existentes
}
```

### 2. DynamicPage.jsx Modifications

#### 2.1 Enhanced Route Detection

Modificar la función `determinePageType` para manejar la ruta raíz:

```javascript
function determinePageType(pathSegments) {
  // Caso especial: ruta raíz
  if (pathSegments.length === 0) return 'root';
  
  // ... resto de la lógica existente
}
```

#### 2.2 Root Page Renderer

Agregar un nuevo caso en el switch principal:

```javascript
export default function DynamicPage() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  const pageType = determinePageType(pathSegments);
  
  switch (pageType) {
    case 'root':
      return <RootPageRenderer />;
    case 'topic':
      return <TopicPageRenderer pathSegments={pathSegments} />;
    case 'subtopic':
      return <SubtopicPage />;
    default:
      return <NotFoundPage pathSegments={pathSegments} />;
  }
}
```

#### 2.3 Root Page Component

Crear un componente específico para renderizar la página raíz:

```javascript
function RootPageRenderer() {
  const rootTopic = topicsData[""];
  
  if (!rootTopic) {
    return <NotFoundPage pathSegments={[]} />;
  }
  
  return (
    <div className="page-root">
      <div className="intro-card theme-blue">
        <strong>{rootTopic.title}</strong>
        <div>{rootTopic.intro}</div>
      </div>
      
      <div className="tema-cards-row theme-blue">
        {rootTopic.cards.map(card => (
          <div className={`tema-card theme-blue practical ${card.tipo}`} key={card.tipo}>
            <span className="tema-card-icon">
              <img src={card.icono} alt={card.titulo} className="tema-card-icon-img" />
            </span>
            <div className="tema-card-content">
              <div className="tema-card-title">{card.titulo}</div>
              <div className="tema-card-desc">{card.descripcion}</div>
              <a className={`tema-card-btn ${card.btn.clase}`} href={card.btn.link}>
                {card.btn.texto}
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {rootTopic.additionalContent && (
        <div className="compara-card theme-blue" 
             dangerouslySetInnerHTML={{ __html: rootTopic.additionalContent }} />
      )}
    </div>
  );
}
```

### 3. App.jsx Route Changes

Modificar las rutas en App.jsx para que "/" use DynamicPage:

```javascript
function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {/* Ruta raíz ahora usa DynamicPage */}
        <Route path="/" element={<DynamicPage />} />
        <Route path="/constantes" element={<Constantes />} />
        
        {/* Ruta dinámica unificada */}
        <Route path="/*" element={<DynamicPage />} />
      </Route>
    </Routes>
  );
}
```

## Data Models

### Root Topic Model

```typescript
interface RootTopic {
  title: string;
  intro: string;
  cards: Array<{
    tipo: string;
    titulo: string;
    descripcion: string;
    icono: string;
    btn: {
      texto: string;
      clase: string;
      link: string;
    };
  }>;
  additionalContent: string;
}
```

### Migration Strategy

1. **Phase 1**: Agregar entrada raíz a `topicsData`
2. **Phase 2**: Modificar `DynamicPage.jsx` para manejar ruta raíz
3. **Phase 3**: Actualizar rutas en `App.jsx`
4. **Phase 4**: Eliminar `Index.jsx` y limpiar imports

## Error Handling

### Missing Root Topic

Si la entrada raíz no existe en `topicsData`, mostrar página de error:

```javascript
function RootPageRenderer() {
  const rootTopic = topicsData[""];
  
  if (!rootTopic) {
    return (
      <div className="page-root">
        <div className="intro-card theme-red text-center">
          <strong>Error de configuración</strong>
          <p>No se encontró la configuración de la página principal.</p>
        </div>
      </div>
    );
  }
  
  // ... resto del renderizado
}
```

### Breadcrumbs for Root

El componente Breadcrumbs debe manejar el caso especial de la página raíz:

```javascript
const Breadcrumbs = ({ pathSegments }) => {
  // Si estamos en la raíz, no mostrar breadcrumbs
  if (pathSegments.length === 0) {
    return null;
  }
  
  // ... resto de la lógica existente
};
```

## Testing Strategy

### Unit Tests

1. **Root Topic Rendering**: Verificar que `RootPageRenderer` renderiza correctamente
2. **Route Detection**: Verificar que `determinePageType` retorna 'root' para ruta vacía
3. **Data Structure**: Verificar que la entrada raíz en `topicsData` tiene la estructura correcta

### Integration Tests

1. **Navigation**: Verificar que la navegación a "/" funciona correctamente
2. **Links**: Verificar que los enlaces a /clasica y /moderna funcionan
3. **Styling**: Verificar que los estilos CSS se aplican correctamente

### Manual Testing

1. Navegar a "/" y verificar que se muestra el contenido correcto
2. Verificar que los enlaces funcionan
3. Verificar que no hay errores en consola
4. Verificar que el comportamiento es idéntico al Index.jsx original

## Implementation Notes

### CSS Compatibility

El nuevo componente debe usar las mismas clases CSS que Index.jsx:
- `page-root`
- `intro-card theme-blue`
- `tema-cards-row theme-blue`
- `tema-card theme-blue practical`
- `compara-card theme-blue`

### Icon Imports

Los iconos `m_clasica` y `m_moderna` deben estar disponibles en `topics.generated.js` para la entrada raíz.

### Backward Compatibility

Durante la transición, mantener ambos sistemas funcionando hasta verificar que la integración funciona correctamente.