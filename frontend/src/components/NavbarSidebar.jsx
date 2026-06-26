import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/phyxio_fb.png";
import { useAuth } from "../contexts/AuthContext";
import { tr } from "../v2/utils/uiLanguage";
import PhyxioGlobalSearch from "../v2/search/PhyxioGlobalSearch";
import { getContextForRoute, getPhyxioSearchEntries } from "../v2/search/phyxioSearch";

export function Navbar({
  onMenuClick,
  isMobile,
  isDark,
  uiLanguage = "es",
  onLanguageToggle,
  onThemeToggle,
  onLoginClick,
  onRegisterClick,
}) {
  const { user, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const getTierBadge = (tier) => {
    const badges = {
      guest: { label: tr(uiLanguage, "Invitado", "Guest"), color: "#6c757d" },
      demo: { label: "Demo", color: "#17a2b8" },
      basic: { label: tr(uiLanguage, "Basico", "Basic"), color: "#28a745" },
      premium: { label: "Premium", color: "#ffc107" },
      educator: { label: tr(uiLanguage, "Educador", "Educator"), color: "#dc3545" },
      admin: { label: tr(uiLanguage, "Administrador", "Administrator"), color: "#6f42c1" },
    };
    return badges[tier] || badges.guest;
  };

  const tierBadge = user ? getTierBadge(user.tier) : null;

  return (
    <nav className={`navbar ${isDark ? "dark" : ""}`}>
      <div className="navbar-left">
        <button className="navbar-menu-button" onClick={onMenuClick} type="button">
          <i className="bi bi-list"></i>
        </button>

        <Link to="/" className="navbar-logo-link">
          <img src={logo} alt="Phyxio" className="navbar-logo-img" />
          <span className="navbar-title">Phyxio</span>
        </Link>
      </div>

      <PhyxioGlobalSearch lang={uiLanguage} />

      <div className="navbar-right">
        <div className="navbar-global-toggles">
          <button
            className="navbar-language-toggle"
            onClick={onLanguageToggle}
            aria-label={`${tr(uiLanguage, "Cambiar idioma. Idioma actual:", "Change language. Current language:")} ${
              uiLanguage === "es" ? "Espanol" : "English"
            }`}
            title={uiLanguage === "es" ? "Switch to English" : "Cambiar a Espanol"}
            type="button"
          >
            {uiLanguage === "es" ? "ES" : "EN"}
          </button>
          <button className="navbar-theme-toggle" onClick={onThemeToggle} type="button">
            <i className={`bi ${isDark ? "bi-sun" : "bi-moon"}`}></i>
          </button>
        </div>

        {!user ? (
          <div className="navbar-auth-buttons">
            <button className="tema-card-btn" onClick={onLoginClick} type="button">
              {tr(uiLanguage, "Iniciar sesion", "Sign in")}
            </button>
            <button className="tema-card-btn" onClick={onRegisterClick} type="button">
              {tr(uiLanguage, "Registrarse", "Sign up")}
            </button>
          </div>
        ) : (
          <div className="navbar-user-menu">
            <button
              className="navbar-user-btn"
              onClick={() => setShowUserMenu(!showUserMenu)}
              type="button"
            >
              <div className="navbar-user-avatar">
                <i className="bi bi-person-circle"></i>
              </div>
              <div className="navbar-user-info">
                <span className="navbar-user-name">{user.name || user.email}</span>
                {tierBadge && (
                  <span className="navbar-tier-badge" style={{ backgroundColor: tierBadge.color }}>
                    {tierBadge.label}
                  </span>
                )}
              </div>
              <i className={`bi bi-chevron-${showUserMenu ? "up" : "down"}`}></i>
            </button>

            {showUserMenu && (
              <div className="navbar-user-dropdown">
                <Link to="/profile" className="navbar-dropdown-item">
                  <i className="bi bi-person"></i> {tr(uiLanguage, "Perfil", "Profile")}
                </Link>
                <Link to="/subscription" className="navbar-dropdown-item">
                  <i className="bi bi-gem"></i> {tr(uiLanguage, "Suscripcion", "Subscription")}
                </Link>
                <button className="navbar-dropdown-item" onClick={logout} type="button">
                  <i className="bi bi-box-arrow-right"></i> {tr(uiLanguage, "Cerrar sesion", "Sign out")}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

function SidebarContextList({ title, icon, items, isExpanded, onLinkClick, emptyLabel }) {
  if (!isExpanded) {
    return (
      <div className="sidebar-context-icon-block" title={title}>
        <i className={`bi ${icon}`}></i>
      </div>
    );
  }

  return (
    <section className="sidebar-context-section">
      <h3>
        <i className={`bi ${icon}`}></i>
        <span>{title}</span>
      </h3>
      {items.length === 0 ? (
        <p className="sidebar-context-empty">{emptyLabel}</p>
      ) : (
        <ul className="sidebar-context-list">
          {items.map((item) => (
            <li key={item.route || item.id || item.title}>
              <Link to={item.url || `/v2/${item.route}`} onClick={onLinkClick}>
                {item.icon && <span className="sidebar-icon-emoji">{item.icon}</span>}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export function Sidebar({ isExpanded, isMobile, onLinkClick, uiLanguage = "es" }) {
  const location = useLocation();
  const cleanRoute = location.pathname.replace(/^\/v2\/?/, "").replace(/^\/+|\/+$/g, "");
  const [context, setContext] = useState({
    current: null,
    parent: null,
    siblings: [],
    prerequisites: [],
    relatedByTags: [],
    relatedByFormulas: [],
  });
  const [rootItems, setRootItems] = useState([]);

  useEffect(() => {
    let cancelled = false;

    Promise.all([
      getContextForRoute(cleanRoute, { lang: uiLanguage }),
      getPhyxioSearchEntries(),
    ]).then(([nextContext, entries]) => {
      if (cancelled) return;
      setContext(nextContext);
      setRootItems(
        entries
          .filter((entry) => entry.route && entry.route.split("/").length === 1)
          .slice(0, 8)
          .map((entry) => ({
            id: entry.id,
            route: entry.route,
            url: `/v2/${entry.route}`,
            title: uiLanguage === "en" ? entry.title?.en || entry.title?.es : entry.title?.es || entry.title?.en,
            icon: entry.icon,
          }))
      );
    });

    return () => {
      cancelled = true;
    };
  }, [cleanRoute, uiLanguage]);

  const current = context.current;
  const tags = current?.tags || [];
  const formulas = current?.formulas || [];

  return (
    <aside className={`sidebar ${isMobile ? "mobile" : ""} ${isExpanded ? "" : "collapsed"}`}>
      <nav className="sidebar-nav">
        {isExpanded && (
          <div className="sidebar-context-current">
            <span className="sidebar-context-kicker">{tr(uiLanguage, "Contexto", "Context")}</span>
            <strong>{current?.title || tr(uiLanguage, "Explorador Phyxio", "Phyxio Explorer")}</strong>
            {context.parent?.title && <span>{context.parent.title}</span>}
          </div>
        )}

        <SidebarContextList
          title={tr(uiLanguage, "Bloques", "Blocks")}
          icon="bi-grid"
          items={rootItems}
          isExpanded={isExpanded}
          onLinkClick={onLinkClick}
          emptyLabel={tr(uiLanguage, "Sin bloques disponibles.", "No blocks available.")}
        />
        <SidebarContextList
          title={tr(uiLanguage, "Mismo bloque", "Same block")}
          icon="bi-diagram-3"
          items={context.siblings || []}
          isExpanded={isExpanded}
          onLinkClick={onLinkClick}
          emptyLabel={tr(uiLanguage, "Sin leafs cercanos.", "No nearby leaves.")}
        />
        <SidebarContextList
          title={tr(uiLanguage, "Prerrequisitos", "Prerequisites")}
          icon="bi-signpost"
          items={context.prerequisites || []}
          isExpanded={isExpanded}
          onLinkClick={onLinkClick}
          emptyLabel={tr(uiLanguage, "Sin prerrequisitos declarados.", "No declared prerequisites.")}
        />
        <SidebarContextList
          title={tr(uiLanguage, "Relacionados", "Related")}
          icon="bi-link-45deg"
          items={context.relatedByTags || []}
          isExpanded={isExpanded}
          onLinkClick={onLinkClick}
          emptyLabel={tr(uiLanguage, "Sin relaciones por tags.", "No tag relations.")}
        />

        {isExpanded && (tags.length > 0 || formulas.length > 0) && (
          <section className="sidebar-context-section">
            <h3>
              <i className="bi bi-tags"></i>
              <span>{tr(uiLanguage, "Claves del leaf", "Leaf keys")}</span>
            </h3>
            {tags.length > 0 && (
              <div className="sidebar-context-tags">
                {tags.slice(0, 8).map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            )}
            {formulas.length > 0 && (
              <div className="sidebar-context-formulas">
                {formulas.slice(0, 4).map((formula) => (
                  <code key={formula.id}>{formula.id}</code>
                ))}
              </div>
            )}
          </section>
        )}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-tools">
          <Link to="/v2/tools/calculadora" className="sidebar-tool-btn" title="Calculadora" onClick={onLinkClick}>
            <span className="sidebar-icon"><i className="bi bi-calculator"></i></span>
            {isExpanded && <span className="sidebar-label">{tr(uiLanguage, "Calculadora", "Calculator")}</span>}
          </Link>
          <Link to="/v2/tools/conversor" className="sidebar-tool-btn" title="Conversor" onClick={onLinkClick}>
            <span className="sidebar-icon"><i className="bi bi-arrow-left-right"></i></span>
            {isExpanded && <span className="sidebar-label">{tr(uiLanguage, "Conversor", "Converter")}</span>}
          </Link>
          <Link to="/v2/tools/constantes" className="sidebar-tool-btn" title="Constantes" onClick={onLinkClick}>
            <span className="sidebar-icon"><i className="bi bi-rulers"></i></span>
            {isExpanded && <span className="sidebar-label">{tr(uiLanguage, "Constantes", "Constants")}</span>}
          </Link>
        </div>
      </div>
    </aside>
  );
}
