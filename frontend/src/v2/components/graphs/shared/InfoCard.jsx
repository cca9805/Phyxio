/**
 * InfoCard - Tarjeta para mostrar información calculada
 * 
 * Muestra resultados, valores calculados o información derivada
 * de los parámetros del gráfico.
 */
export default function InfoCard({ title, children, className = "" }) {
  return (
    <div className={`v2-card ${className}`}>
      {title && <div className="v2-card-title">{title}</div>}
      {children}
    </div>
  );
}
