# 🎨 Frontend - Phyxio Calculator

Aplicación web SPA para Phyxio Calculator construida con React y Vite.

## 📚 Documentación

La documentación completa del frontend se encuentra en:

**[📖 docs/frontend/](../docs/frontend/README.md)**

### Documentos Disponibles

- **[GUIA_RAPIDA_ESTRUCTURAS.md](../docs/frontend/GUIA_RAPIDA_ESTRUCTURAS.md)** - Guía de estructuras de datos
- **[TIER_RESTRICTIONS_GUIDE.md](../docs/frontend/TIER_RESTRICTIONS_GUIDE.md)** - Guía de restricciones por tier
- **[README.md](../docs/frontend/README.md)** - Índice completo de documentación del frontend

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env.development

# Editar .env.development con la URL del backend
# Iniciar en desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview
```

## 📂 Estructura

```
frontend/
├── src/
│   ├── components/      # Componentes React
│   ├── contexts/        # Context API (Auth, etc.)
│   ├── data/            # Contenido educativo (287 temas)
│   ├── hooks/           # Custom hooks
│   ├── pages/           # Páginas principales
│   ├── services/        # API calls
│   ├── styles/          # Estilos CSS
│   └── utils/           # Utilidades
├── public/              # Archivos estáticos
└── vite.config.js       # Configuración de Vite
```

## 🔗 Enlaces Útiles

- **[Documentación Principal](../README.md)** - README del proyecto
- **[Documentación Técnica](../docs/README.md)** - Índice de documentación
- **[Guía de Despliegue Frontend](../docs/00-guias-principales/GUIA_DESPLIEGUE_FRONTEND.md)** - Despliegue del frontend
- **[Guía de Contenido](../docs/05-contenido/)** - Crear teoría, ejercicios y calculadoras

## 🛠️ Tecnologías

- React 18
- Vite
- React Router
- KaTeX (fórmulas matemáticas)
- Axios

---

**Para más información, consulta la [documentación completa del frontend](../docs/frontend/README.md)**
