import fs from 'fs';
import path from 'path';
import thermodynamicsHierarchy from '../src/data/termodinamica/hierarchicalStructure.js';

// Función para generar rutas automáticamente basadas en la jerarquía
function generateRoutes() {
  const routes = [];
  
  // Ruta principal de termodinámica
  routes.push({
    path: '/termodinamica',
    component: 'ThermodynamicsMainPage',
    title: 'Termodinámica - Página Principal',
    description: 'Estructura jerárquica de todos los temas de termodinámica'
  });
  
  // Generar rutas para cada nivel, tema y subtema
  thermodynamicsHierarchy.levels.forEach(level => {
    level.topics.forEach(topic => {
      // Ruta del tema principal
      routes.push({
        path: `/termodinamica/${topic.id}`,
        component: `${topic.id}Theory`,
        title: topic.title,
        description: topic.description,
        level: level.title,
        prerequisites: topic.prerequisites || [],
        estimatedTime: topic.estimatedTime,
        isTheoryHeavy: topic.isTheoryHeavy
      });
      
      // Rutas de subtemas
      topic.subtopics.forEach(subtopic => {
        routes.push({
          path: `/termodinamica/${topic.id}/${subtopic.id}`,
          component: `${subtopic.id}Theory`,
          title: subtopic.title,
          description: subtopic.description,
          parentTopic: topic.title,
          level: level.title,
          priority: subtopic.priority,
          estimatedTime: subtopic.estimatedTime,
          isTheoryOnly: subtopic.isTheoryOnly
        });
        
        // Rutas de sub-subtemas si existen
        if (subtopic.subtopics) {
          subtopic.subtopics.forEach(subsubtopic => {
            routes.push({
              path: `/termodinamica/${topic.id}/${subtopic.id}/${subsubtopic.id}`,
              component: `${subsubtopic.id}Theory`,
              title: subsubtopic.title,
              description: subsubtopic.description,
              parentSubtopic: subtopic.title,
              parentTopic: topic.title,
              level: level.title,
              priority: subsubtopic.priority,
              estimatedTime: subsubtopic.estimatedTime,
              isTheoryOnly: subsubtopic.isTheoryOnly
            });
          });
        }
      });
    });
  });
  
  return routes;
}

// Función para generar breadcrumbs automáticamente
function generateBreadcrumbs(routePath) {
  const pathParts = routePath.split('/').filter(part => part);
  const breadcrumbs = [];
  
  // Siempre empezar con la página principal
  breadcrumbs.push({
    title: 'Termodinámica',
    path: '/termodinamica',
    icon: '🌡️'
  });
  
  if (pathParts.length > 1) {
    // Encontrar el tema
    const topicId = pathParts[1];
    const topic = findTopicById(topicId);
    if (topic) {
      breadcrumbs.push({
        title: topic.title,
        path: `/termodinamica/${topicId}`,
        icon: topic.icon
      });
    }
    
    if (pathParts.length > 2) {
      // Encontrar el subtema
      const subtopicId = pathParts[2];
      const subtopic = findSubtopicById(topicId, subtopicId);
      if (subtopic) {
        breadcrumbs.push({
          title: subtopic.title,
          path: `/termodinamica/${topicId}/${subtopicId}`,
          icon: subtopic.icon
        });
      }
      
      if (pathParts.length > 3) {
        // Encontrar el sub-subtema
        const subsubtopicId = pathParts[3];
        const subsubtopic = findSubsubtopicById(topicId, subtopicId, subsubtopicId);
        if (subsubtopic) {
          breadcrumbs.push({
            title: subsubtopic.title,
            path: `/termodinamica/${topicId}/${subtopicId}/${subsubtopicId}`,
            icon: subsubtopic.icon
          });
        }
      }
    }
  }
  
  return breadcrumbs;
}

// Funciones auxiliares para buscar elementos en la jerarquía
function findTopicById(topicId) {
  for (const level of thermodynamicsHierarchy.levels) {
    const topic = level.topics.find(t => t.id === topicId);
    if (topic) return topic;
  }
  return null;
}

function findSubtopicById(topicId, subtopicId) {
  const topic = findTopicById(topicId);
  if (topic) {
    return topic.subtopics.find(s => s.id === subtopicId);
  }
  return null;
}

function findSubsubtopicById(topicId, subtopicId, subsubtopicId) {
  const subtopic = findSubtopicById(topicId, subtopicId);
  if (subtopic && subtopic.subtopics) {
    return subtopic.subtopics.find(s => s.id === subsubtopicId);
  }
  return null;
}

// Función para generar navegación siguiente/anterior
function generateNavigation(currentPath) {
  const routes = generateRoutes();
  const currentIndex = routes.findIndex(route => route.path === currentPath);
  
  if (currentIndex === -1) return { previous: null, next: null };
  
  const previous = currentIndex > 0 ? routes[currentIndex - 1] : null;
  const next = currentIndex < routes.length - 1 ? routes[currentIndex + 1] : null;
  
  return { previous, next };
}

// Función para generar el archivo de configuración de rutas
function generateRoutesConfig() {
  const routes = generateRoutes();
  
  const routesConfig = `// Configuración automática de rutas de termodinámica
// Generado automáticamente desde hierarchicalStructure.js

export const thermodynamicsRoutes = ${JSON.stringify(routes, null, 2)};

// Función para obtener breadcrumbs de una ruta
export function getBreadcrumbs(routePath) {
  ${generateBreadcrumbs.toString()}
  
  return generateBreadcrumbs(routePath);
}

// Función para obtener navegación anterior/siguiente
export function getNavigation(currentPath) {
  ${generateNavigation.toString()}
  
  return generateNavigation(currentPath);
}

// Función para obtener información de una ruta específica
export function getRouteInfo(routePath) {
  return thermodynamicsRoutes.find(route => route.path === routePath);
}

// Función para obtener todas las rutas de un nivel específico
export function getRoutesByLevel(levelTitle) {
  return thermodynamicsRoutes.filter(route => route.level === levelTitle);
}

// Función para obtener rutas por tipo (teórico/práctico)
export function getRoutesByType(isTheoryOnly) {
  return thermodynamicsRoutes.filter(route => route.isTheoryOnly === isTheoryOnly);
}

export default thermodynamicsRoutes;`;

  return routesConfig;
}

// Función para generar componente de navegación
function generateNavigationComponent() {
  const navigationComponent = `import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getBreadcrumbs, getNavigation } from '../data/termodinamica/routesConfig.js';
import './ThermodynamicsNavigation.css';

const ThermodynamicsNavigation = () => {
  const location = useLocation();
  const breadcrumbs = getBreadcrumbs(location.pathname);
  const { previous, next } = getNavigation(location.pathname);

  return (
    <div className="thermodynamics-navigation">
      {/* Breadcrumbs */}
      <nav className="breadcrumbs">
        <ol className="breadcrumb-list">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="breadcrumb-item">
              {index < breadcrumbs.length - 1 ? (
                <Link to={crumb.path} className="breadcrumb-link">
                  <span className="breadcrumb-icon">{crumb.icon}</span>
                  <span className="breadcrumb-title">{crumb.title}</span>
                </Link>
              ) : (
                <span className="breadcrumb-current">
                  <span className="breadcrumb-icon">{crumb.icon}</span>
                  <span className="breadcrumb-title">{crumb.title}</span>
                </span>
              )}
              {index < breadcrumbs.length - 1 && (
                <span className="breadcrumb-separator">›</span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Navegación anterior/siguiente */}
      <div className="topic-navigation">
        {previous && (
          <Link to={previous.path} className="nav-button nav-previous">
            <span className="nav-direction">← Anterior</span>
            <span className="nav-title">{previous.title}</span>
          </Link>
        )}
        
        <Link to="/termodinamica" className="nav-button nav-home">
          <span className="nav-icon">🏠</span>
          <span className="nav-title">Inicio</span>
        </Link>
        
        {next && (
          <Link to={next.path} className="nav-button nav-next">
            <span className="nav-direction">Siguiente →</span>
            <span className="nav-title">{next.title}</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ThermodynamicsNavigation;`;

  return navigationComponent;
}

// Ejecutar la generación
console.log('🔧 Generando configuración de rutas jerárquicas...\n');

try {
  // Generar configuración de rutas
  const routesConfig = generateRoutesConfig();
  fs.writeFileSync('src/data/termodinamica/routesConfig.js', routesConfig, 'utf8');
  console.log('✅ Generado: routesConfig.js');
  
  // Generar componente de navegación
  const navigationComponent = generateNavigationComponent();
  fs.writeFileSync('src/components/ThermodynamicsNavigation.jsx', navigationComponent, 'utf8');
  console.log('✅ Generado: ThermodynamicsNavigation.jsx');
  
  // Mostrar estadísticas
  const routes = generateRoutes();
  console.log(`\n📊 Estadísticas de rutas generadas:`);
  console.log(`   • Total de rutas: ${routes.length}`);
  console.log(`   • Rutas de temas principales: ${routes.filter(r => r.path.split('/').length === 3).length}`);
  console.log(`   • Rutas de subtemas: ${routes.filter(r => r.path.split('/').length === 4).length}`);
  console.log(`   • Rutas de sub-subtemas: ${routes.filter(r => r.path.split('/').length === 5).length}`);
  console.log(`   • Rutas teóricas: ${routes.filter(r => r.isTheoryOnly).length}`);
  console.log(`   • Rutas prácticas: ${routes.filter(r => r.isTheoryOnly === false).length}`);
  
  console.log('\n✅ Generación de rutas jerárquicas completada!');
  console.log('🎯 La navegación ahora sigue la estructura didáctica definida.');
  
} catch (error) {
  console.error('❌ Error generando rutas:', error.message);
}