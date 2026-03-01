import { useState, useMemo, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/phyxio_fb.png';
import { useAuth } from '../contexts/AuthContext';
import { getIconForSection } from '../config/icon-config';

// ✅ Mapa oficial V2
import yaml from 'js-yaml';
import phyxioMapYaml from '../v2/map/phyxio-map.yaml?raw';

// ==========================================================================
// Fuente de verdad: mapa oficial V2 (phyxio-map.yaml)
// Sin tocar componentes ni className: solo sustituimos el origen de "sidebarItems"
// ==========================================================================

/**
 * Devuelve el array de nodos raíz del mapa, independientemente de si el YAML
 * usa `root: [...]` (lista) o `root: { children: [...] }` (objeto).
 */
const safeLoadMapNodes = () => {
  try {
    const data = yaml.load(phyxioMapYaml);
    const root = data?.root;

    // Formato actual (tu YAML): root: [ ... ]
    if (Array.isArray(root)) return root;

    // Formato alternativo: root: { children: [...] }
    if (root?.children && Array.isArray(root.children)) return root.children;

    console.warn('[NavbarSidebar] phyxio-map.yaml: no encuentro nodos raíz en `root`');
    return [];
  } catch (e) {
    console.error('[NavbarSidebar] Error cargando phyxio-map.yaml:', e);
    return [];
  }
};

const PHYXIO_ROOT_NODES = safeLoadMapNodes();

/** ids tipo "energia-potencial-gravitatoria" -> "Energia Potencial Gravitatoria" */
const labelFromId = (id) => {
  if (!id) return '';
  const acronyms = new Set(['mru', 'mrua', 'mas', 'si', 'pv', 'em', 'rlc', 'ohm', 'snell', 'ca', 'dc']);
  return String(id)
    .split('-')
    .filter(Boolean)
    .map((w) => {
      const low = w.toLowerCase();
      if (acronyms.has(low)) return low.toUpperCase();
      if (low.length <= 3 && /^[a-z]+$/.test(low)) return low.toUpperCase();
      return low.charAt(0).toUpperCase() + low.slice(1);
    })
    .join(' ');
};

const mapToSidebarItems = (nodes) => {
  const arr = Array.isArray(nodes) ? nodes : [];
  const sorted = [...arr].sort((a, b) => (a?.orden ?? 0) - (b?.orden ?? 0));

  return sorted.map((n) => {
    const ruta = n?.ruta_relativa ? String(n.ruta_relativa).replace(/^\/+|\/+$/g, '') : '';
    const link = ruta ? `/v2/${ruta}` : '/v2';

    const children =
      Array.isArray(n?.children) && n.children.length > 0
        ? mapToSidebarItems(n.children)
        : [];

    return {
      label: n?.titulo || labelFromId(n?.id),
      link,
      icon: n?.icon ?? n?.emoji ?? null,
      children
    };
  });
};

// ✅ Mantiene el mismo nombre "sidebarItems" para que el resto del archivo quede intacto
const sidebarItems = PHYXIO_ROOT_NODES.length ? mapToSidebarItems(PHYXIO_ROOT_NODES) : [];

// Build a metadata map from route links to icons using icon-config.js
// (Fallback: solo se usa si el YAML no trae `icon`)
const buildMetadataMap = () => {
  const map = {};

  const extractLinks = (items) => {
    items.forEach((item) => {
      if (item?.link) {
        const segments = item.link.split('/').filter(Boolean);
        const lastSegment = segments[segments.length - 1];

        const icon = getIconForSection(lastSegment);
        if (icon) {
          map[item.link] = icon;
          map[`/${lastSegment}`] = icon;
        }
      }

      if (item?.children?.length) extractLinks(item.children);
    });
  };

  extractLinks(sidebarItems);
  return map;
};

const metadataIconMap = buildMetadataMap();
// LevelFilter removed: filtering disabled to show full sidebar

// (Eliminado: vista por niveles educativos — se mantendrá solo la vista por temas)

// ==========================================================================
// Navbar
// ==========================================================================
export function Navbar({ onMenuClick, isMobile, isDark, onThemeToggle, onLoginClick, onRegisterClick }) {
  // Determinar la estructura a mostrar — solo por temas
  const activeSidebarItems = sidebarItems;
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  // (Se eliminó el toggle de vista por niveles; la app muestra solo la vista por temas)

  // Obtener badge del tier
  const getTierBadge = (tier) => {
    const badges = {
      guest: { label: 'Invitado', color: '#6c757d' },
      demo: { label: 'Demo', color: '#17a2b8' },
      basic: { label: 'Básico', color: '#28a745' },
      premium: { label: 'Premium', color: '#ffc107' },
      educator: { label: 'Educador', color: '#dc3545' },
      admin: { label: 'Administrador', color: '#6f42c1' }
    };
    return badges[tier] || badges.guest;
  };

  const tierBadge = user ? getTierBadge(user.tier) : null;

  return (
    <nav className={`navbar ${isDark ? 'dark' : ''}`}>
      <div className="navbar-left">
        <button className="navbar-menu-button" onClick={onMenuClick}>
          <i className="bi bi-list"></i>
        </button>
        
        <Link to="/" className="navbar-logo-link">
          <img src={logo} alt="Phyxio" className="navbar-logo-img" />
          <span className="navbar-title">Phyxio</span>
        </Link>
      </div>
      
      <div className="navbar-right">
        {!user ? (
          <div className="navbar-auth-buttons">
            <button className="navbar-theme-toggle" onClick={onThemeToggle}>
              <i className={`bi ${isDark ? 'bi-sun' : 'bi-moon'}`}></i>
            </button>
            <button className="tema-card-btn" onClick={onLoginClick}>
              Iniciar Sesión
            </button>
            <button className="tema-card-btn" onClick={onRegisterClick}>
              Registrarse
            </button>
          </div>
        ) : (
          <div className="navbar-user-menu">
            <button 
              className="navbar-user-btn"
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              <div className="navbar-user-avatar">
                <i className="bi bi-person-circle"></i>
              </div>
              <div className="navbar-user-info">
                <span className="navbar-user-name">{user.name || user.email}</span>
                {tierBadge && (
                  <span 
                    className="navbar-tier-badge"
                    style={{ backgroundColor: tierBadge.color }}
                  >
                    {tierBadge.label}
                  </span>
                )}
              </div>
              <i className={`bi bi-chevron-${showUserMenu ? 'up' : 'down'}`}></i>
            </button>
            
            {showUserMenu && (
              <div className="navbar-user-dropdown">
                <Link to="/profile" className="navbar-dropdown-item">
                  <i className="bi bi-person"></i> Perfil
                </Link>
                <Link to="/subscription" className="navbar-dropdown-item">
                  <i className="bi bi-gem"></i> Suscripción
                </Link>
                <button className="navbar-dropdown-item" onClick={logout}>
                  <i className="bi bi-box-arrow-right"></i> Cerrar Sesión
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

// ==========================================================================
// Sidebar recursive component
// ==========================================================================
function SidebarRecursive({ items, currentPath, openSet, toggleOpen, isExpanded, onLinkClick, isEducationLevelRoute }) {
  const navigate = useNavigate();

  // Función para determinar si un item es wrapper o nodo real
  const isWrapperNode = (item) => {
    // Wrapper nodes typically have empty link or match pattern
    return !item.link || item.link === '' || item.link === '#';
  };

  // Función para renderizar el icono
  const renderIcon = (item) => {
    // 1) MAP FIRST: si el mapa trae icon (emoji), se pinta tal cual
    if (item?.icon) {
      return <span className="sidebar-icon-emoji">{item.icon}</span>;
    }

    // 2) Plan B: icon-config (si existe link)
    const fallback = item?.link ? metadataIconMap?.[item.link] : null;
    if (fallback) {
      // si fallback es un bootstrap icon
      if (typeof fallback === "string" && fallback.startsWith("bi-")) {
        return <i className={`bi ${fallback}`}></i>;
      }
      // si fallback es un emoji o texto
      return <span className="sidebar-icon-emoji">{fallback}</span>;
    }

    // 3) Último recurso
    return <i className="bi bi-folder"></i>;
  };


  return (
    <ul className="sidebar-items">
      {items.map((item) => {
        // Procesar wrapper nodes: si tiene un solo hijo, promoverlo visualmente
        let renderItem = item;
        if (item.children && item.children.length === 1 && isWrapperNode(item)) {
          const only = item.children[0];
          if (only && only.link) {
            // promote the single child's content for rendering
            renderItem = { ...only, children: only.children || [] };
          }
        }

        const isActive = renderItem.link && 
          (currentPath === renderItem.link || currentPath.startsWith(renderItem.link + '/'));
        const isOpen = openSet.has(renderItem.link);
        const hasChildren = renderItem.children && renderItem.children.length > 0;

        return (
          <li key={renderItem.link || renderItem.label} className={`sidebar-item ${isActive ? 'active' : ''}`}>
            <div className="sidebar-item-header">
              <Link
                to={renderItem.link || '#'}
                className="sidebar-item-link"
                onClick={onLinkClick}
              >
                <span className="sidebar-item-icon">
                  {renderIcon(renderItem)}
                </span>
                {isExpanded && (
                  <span className="sidebar-item-label">{renderItem.label}</span>
                )}
              </Link>

              {hasChildren && isExpanded && (
                <button
                  className="sidebar-toggle-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleOpen(renderItem.link);
                  }}
                >
                  <i className={`bi bi-chevron-${isOpen ? 'up' : 'down'}`}></i>
                </button>
              )}
            </div>

            {hasChildren && isOpen && (
              <div className="sidebar-children">
                <SidebarRecursive
                  items={renderItem.children}
                  currentPath={currentPath}
                  openSet={openSet}
                  toggleOpen={toggleOpen}
                  isExpanded={isExpanded}
                  onLinkClick={onLinkClick}
                  isEducationLevelRoute={isEducationLevelRoute}
                />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

// ==========================================================================
// Sidebar component (exported)
// ==========================================================================
export function Sidebar({ isExpanded, isMobile, onLinkClick }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const [openSet, setOpenSet] = useState(new Set());

  // Determinar estructura activa: solo por temas
  const activeSidebarItems = sidebarItems;

  // Ordenar items por label si se desea (aquí lo dejamos como venga del mapa)
  const filteredSidebarItems = useMemo(() => {
    return activeSidebarItems;
  }, [activeSidebarItems]);

  const toggleOpen = (link) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(link)) next.delete(link);
      else next.add(link);
      return next;
    });
  };

  // Auto-expand branch activo
  const findActiveBranch = (items, path) => {
    for (const item of items) {
      if (item.link && (path === item.link || path.startsWith(item.link + '/'))) {
        const branch = [item];
        if (item.children && item.children.length > 0) {
          const childBranch = findActiveBranch(item.children, path);
          if (childBranch.length > 0) {
            return [...branch, ...childBranch];
          }
        }
        return branch;
      }
    }
    return [];
  };

  useEffect(() => {
    const branch = findActiveBranch(filteredSidebarItems, currentPath);
    if (branch.length > 0) {
      setOpenSet((prev) => {
        const next = new Set(prev);
        branch.forEach(item => {
          if (item.link) next.add(item.link);
        });
        return next;
      });
    }
  }, [currentPath, filteredSidebarItems]);

  // Detectar si estamos en una ruta "educational level" (ya no se usa, pero lo mantenemos para firma)
  const isEducationLevelRoute = false;

  return (
    <aside className={`sidebar ${isMobile ? 'mobile' : ''} ${isExpanded ? '' : 'collapsed'}`}>

      <nav className="sidebar-nav">
        <div className="sidebar-header">
          {/* LevelFilter removed: showing all topics */}
        </div>
        <SidebarRecursive 
            items={filteredSidebarItems} 
            currentPath={currentPath} 
            openSet={openSet} 
            toggleOpen={toggleOpen}
            isExpanded={isExpanded}
            onLinkClick={onLinkClick}
            isEducationLevelRoute={isEducationLevelRoute}
        />
      </nav>
      <div className="sidebar-footer">
        <div className="sidebar-tools">

          <Link
            to="/v2/tools/calculadora"
            className="sidebar-tool-btn"
            title="Calculadora rápida"
            onClick={onLinkClick}
          >
            <span className="sidebar-icon">
              <i className="bi bi-calculator"></i>
            </span>
            {isExpanded && <span className="sidebar-label">Calculadora</span>}
          </Link>

          <Link
            to="/v2/tools/conversor"
            className="sidebar-tool-btn"
            title="Conversor de unidades"
            onClick={onLinkClick}
          >
            <span className="sidebar-icon">
              <i className="bi bi-arrow-left-right"></i>
            </span>
            {isExpanded && <span className="sidebar-label">Conversor</span>}
          </Link>

          <Link
            to="/v2/tools/constantes"
            className="sidebar-tool-btn"
            title="Constantes físicas"
            onClick={onLinkClick}
          >
            <span className="sidebar-icon">
              <i className="bi bi-rulers"></i>
            </span>
            {isExpanded && <span className="sidebar-label">Constantes</span>}
          </Link>

        </div>
      </div>

    </aside>
  );
}
