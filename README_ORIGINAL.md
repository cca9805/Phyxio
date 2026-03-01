<<<<<<< HEAD
# 📝 README - Backend Phyxio Calculator

## Descripción

Backend API REST para Phyxio Calculator con autenticación JWT, gestión de usuarios y tracking de uso.

## 🚀 Inicio Rápido

### Requisitos

- Node.js >= 18
- MySQL >= 8.0
- npm >= 9

### Instalación

1. **Instalar dependencias:**
```bash
npm install
```

2. **Configurar variables de entorno:**
```bash
cp .env.example .env
# Editar .env con tus credenciales
```

3. **Crear base de datos:**
```bash
mysql -u root -p < config/database.sql
```

4. **Iniciar servidor:**
```bash
# Producción
npm start

# Desarrollo (con auto-reload)
npm run dev
```

El servidor estará disponible en `http://localhost:3000`

## 📁 Estructura

```
backend/
├── server.js              # Punto de entrada
├── package.json           # Dependencias
├── .env.example           # Variables de entorno ejemplo
├── config/
│   ├── database.js        # Configuración MySQL
│   └── database.sql       # Schema de BD
├── middleware/
│   ├── auth.js            # Middleware JWT
│   └── errorHandler.js    # Manejo de errores
├── models/
│   ├── User.js            # Modelo de usuario
│   └── Usage.js           # Modelo de tracking
└── routes/
    ├── auth.routes.js     # Rutas de autenticación
    ├── user.routes.js     # Rutas de usuario
    └── subscription.routes.js # Rutas de suscripción
```

## 🔌 API Endpoints

### Autenticación

- `POST /api/auth/register` - Registrar usuario
- `POST /api/auth/login` - Iniciar sesión
- `POST /api/auth/logout` - Cerrar sesión
- `GET /api/auth/me` - Obtener usuario actual

### Usuario

- `GET /api/user/profile` - Obtener perfil
- `PUT /api/user/profile` - Actualizar perfil
- `GET /api/user/usage` - Obtener uso
- `POST /api/user/usage/calculator` - Registrar uso calculadora

### Suscripciones

- `GET /api/subscription/plans` - Listar planes
- `POST /api/subscription/upgrade` - Actualizar plan
- `POST /api/subscription/cancel` - Cancelar suscripción

Ver documentación completa en `/docs/IMPLEMENTACION_BASE_DATOS.md`

## 🔐 Seguridad

- JWT para autenticación
- Passwords hasheados con bcryptjs
- Rate limiting implementado
- Helmet para headers de seguridad
- CORS configurado

## 📦 Dependencias

- **express** - Framework web
- **mysql2** - Cliente MySQL
- **bcryptjs** - Hash de contraseñas
- **jsonwebtoken** - Autenticación JWT
- **cors** - CORS middleware
- **helmet** - Headers de seguridad
- **dotenv** - Variables de entorno
- **express-validator** - Validación de datos

## 🧪 Testing

```bash
# Probar conexión a BD
node -e "require('./config/database').testConnection()"

# Health check
curl http://localhost:3000/health

# Registro de prueba
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"123456","name":"Test"}'
```

## 🌐 Despliegue

Ver guía completa en `/docs/IMPLEMENTACION_BASE_DATOS.md`

### Variables de Entorno Requeridas

```env
PORT=3000
NODE_ENV=production
DB_HOST=tu-host
DB_USER=tu-usuario
DB_PASSWORD=tu-password
DB_NAME=phyxio_db
JWT_SECRET=tu-secreto-seguro
FRONTEND_URL=https://tu-dominio.com
```

## 📄 Licencia

ISC
=======
# 🧮 Phyxio Calculator

Aplicación web completa para el aprendizaje de física con calculadoras interactivas, teoría detallada y ejercicios prácticos.

## 📋 Descripción

Phyxio Calculator es una plataforma educativa que combina:
- **Teoría de física** completa y estructurada
- **Calculadoras interactivas** para cada tema
- **Ejercicios prácticos** con soluciones paso a paso
- **Sistema de autenticación** con múltiples niveles de acceso
- **Tracking de uso** y limitaciones por tier
- **Panel de administración** para gestión de usuarios

## 🏗️ Arquitectura

```
phyxio-calculator/
├── backend/          # API REST (Node.js + Express + MySQL)
├── frontend/         # SPA (React + Vite)
└── docs/            # Documentación adicional
```

### Backend
- **Framework**: Express.js
- **Base de datos**: MySQL
- **Autenticación**: JWT
- **Despliegue**: Railway

### Frontend
- **Framework**: React 18
- **Build tool**: Vite
- **Routing**: React Router
- **Despliegue**: Arsys / Netlify

## 📚 Documentación

### 🚀 Guías Principales

- **[Guía Completa de Despliegue](docs/00-guias-principales/GUIA_DESPLIEGUE_COMPLETA.md)** ⭐
  - Despliegue completo paso a paso
  - GitHub + Railway + MySQL + Hosting
  - Configuración de variables de entorno
  - Verificación y troubleshooting

- **[Guía de Despliegue Frontend](docs/00-guias-principales/GUIA_DESPLIEGUE_FRONTEND.md)**
  - Compilación del frontend
  - Despliegue en Arsys (FTP/SSH)
  - Despliegue en Netlify
  - Configuración de dominio

- **[Sistema de Limitaciones V2](docs/00-guias-principales/SISTEMA_LIMITACIONES_V2.md)**
  - Cómo funcionan las restricciones por tier
  - Implementación de limitaciones
  - Configuración de tiers

- **[Estructura del Proyecto](docs/00-guias-principales/ESTRUCTURA_PROYECTO.md)**
  - Mapa visual completo del proyecto
  - Navegación rápida
  - Organización de archivos

### 📖 Documentación Técnica

- **[Documentación Técnica Completa](docs/README.md)** - Índice de toda la documentación técnica
- **[Documentación Backend](docs/backend/README.md)** - Documentación específica del API
- **[Documentación Frontend](docs/frontend/README.md)** - Documentación específica del frontend
- **[Backend README](backend/README.md)** - Información general del backend
- **[Frontend README](frontend/README.md)** - Información general del frontend

## 🚀 Inicio Rápido

### Desarrollo Local

#### Backend

```bash
cd backend
npm install
cp .env.example .env
# Editar .env con tus credenciales
npm run dev
```

#### Frontend

```bash
cd frontend
npm install
cp .env.example .env.development
# Editar .env.development con la URL del backend local
npm run dev
```

### Despliegue a Producción

Sigue la **[Guía Completa de Despliegue](docs/00-guias-principales/GUIA_DESPLIEGUE_COMPLETA.md)** para instrucciones detalladas.

## 🎯 Características Principales

### Sistema de Autenticación
- ✅ Registro de usuarios con verificación de email
- ✅ Login con JWT
- ✅ Recuperación de contraseña
- ✅ Usuarios temporales (demo)
- ✅ Múltiples niveles de acceso (Guest, Demo, Basic, Premium, Educator, Admin)

### Sistema de Suscripciones
- ✅ Diferentes planes con límites personalizados
- ✅ Tracking de uso diario
- ✅ Restricciones por tier
- ✅ Gestión de suscripciones

### Contenido Educativo
- ✅ 287 temas de física organizados jerárquicamente
- ✅ Calculadoras interactivas
- ✅ Ejercicios con soluciones
- ✅ Teoría detallada con fórmulas LaTeX
- ✅ Navegación intuitiva

### Panel de Administración
- ✅ Gestión de usuarios
- ✅ Cambio de tiers
- ✅ Auditoría de acciones
- ✅ Estadísticas de uso

## 🛠️ Tecnologías

### Backend
- Node.js 18+
- Express.js
- MySQL 8.0+
- JWT para autenticación
- Bcrypt para encriptación
- Nodemailer para emails

### Frontend
- React 18
- Vite
- React Router
- KaTeX para fórmulas matemáticas
- Axios para peticiones HTTP

### DevOps
- Git & GitHub
- Railway (Backend)
- Arsys/Netlify (Frontend)
- PM2 (Process manager)

## 📦 Estructura del Proyecto

```
phyxio-calculator/
├── backend/
│   ├── config/              # Configuración (DB, email, etc.)
│   ├── middleware/          # Middlewares (auth, validation, etc.)
│   ├── models/              # Modelos de datos
│   ├── routes/              # Rutas del API
│   ├── services/            # Lógica de negocio
│   ├── migrations/          # Scripts SQL de base de datos
│   ├── scripts/             # Scripts de utilidad
│   ├── server.js            # Punto de entrada
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/      # Componentes React
│   │   ├── contexts/        # Context API (Auth, etc.)
│   │   ├── data/            # Contenido educativo
│   │   ├── hooks/           # Custom hooks
│   │   ├── pages/           # Páginas principales
│   │   ├── services/        # Servicios (API calls)
│   │   ├── styles/          # Estilos CSS
│   │   └── utils/           # Utilidades
│   ├── public/              # Archivos estáticos
│   ├── vite.config.js       # Configuración de Vite
│   └── package.json
│
├── docs/                    # Documentación adicional
└── README.md               # Este archivo
```

## 🔐 Seguridad

- ✅ Contraseñas hasheadas con bcrypt
- ✅ Tokens JWT con expiración
- ✅ Validación de entrada en backend
- ✅ Rate limiting en endpoints sensibles
- ✅ CORS configurado correctamente
- ✅ Variables de entorno para secretos
- ✅ Auditoría de acciones administrativas

## 🧪 Testing

### Backend
```bash
cd backend
npm test
```

### Frontend
```bash
cd frontend
npm test
```

## 📊 Tiers y Limitaciones

| Tier | Calculadoras/día | Ejercicios/día | Teoría | Precio |
|------|------------------|----------------|--------|--------|
| Guest | 0 | 0 | ✅ | Gratis |
| Demo | 10 | 5 | ✅ | Gratis (1h) |
| Basic | 50 | 20 | ✅ | €4.99/mes |
| Premium | ∞ | ∞ | ✅ | €9.99/mes |
| Educator | ∞ | ∞ | ✅ | €14.99/mes |
| Admin | ∞ | ∞ | ✅ | - |

## 🤝 Contribuir

Este es un proyecto privado. Para contribuir:

1. Crea una rama para tu feature
2. Haz commit de tus cambios
3. Push a la rama
4. Crea un Pull Request

## 📝 Licencia

Todos los derechos reservados © 2025 Phyxio Calculator

## 📞 Soporte

Para soporte o preguntas:
- Email: soporte@phyxio.net
- Documentación: Ver guías en este repositorio

## 🗺️ Roadmap

### Completado ✅
- [x] Sistema de autenticación completo
- [x] Sistema de suscripciones
- [x] Tracking de uso
- [x] Panel de administración
- [x] 287 temas de física
- [x] Calculadoras interactivas
- [x] Sistema de ejercicios
- [x] Despliegue en producción

### En Desarrollo 🚧
- [ ] Sistema de pagos (Stripe/PayPal)
- [ ] Notificaciones push
- [ ] Modo offline
- [ ] App móvil (React Native)

### Futuro 🔮
- [ ] Gamificación (badges, logros)
- [ ] Foros de discusión
- [ ] Clases en vivo
- [ ] Certificados de finalización

## 📈 Estadísticas

- **Temas de física**: 287
- **Calculadoras**: 150+
- **Ejercicios**: 500+
- **Líneas de código**: 50,000+
- **Tiempo de desarrollo**: 6 meses

## 🙏 Agradecimientos

- Comunidad de React
- Comunidad de Express
- Railway por el hosting
- Todos los contribuidores

---

**Última actualización**: Diciembre 2025  
**Versión**: 2.0.0
>>>>>>> 6e72906 (Primer commit)
