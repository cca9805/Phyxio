/**
 * GraphCard - Tarjeta reutilizable para envolver gráficos
 * 
 * Proporciona un contenedor consistente para todos los gráficos
 * con título y estilos estandarizados.
 */
export default function GraphCard({ title, children, style = {} }) {
  return (
    <div className="v2-card" style={{ marginTop: 12, ...style }}>
      {title && <div className="v2-card-title">{title}</div>}
      {children}
    </div>
  );
}
