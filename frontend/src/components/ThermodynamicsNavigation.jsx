import React from 'react';
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

export default ThermodynamicsNavigation;