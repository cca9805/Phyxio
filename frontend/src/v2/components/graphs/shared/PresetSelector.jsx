/**
 * PresetSelector - Selector de presets reutilizable
 * 
 * Permite seleccionar valores predefinidos (ej: gravedad de diferentes planetas)
 * 
 * @param {Array} presets - Array de objetos { id, name, value?, description? }
 * @param {string} value - ID del preset seleccionado
 * @param {function} onChange - Callback (presetId) => void
 * @param {boolean} disabled - Si está deshabilitado
 * @param {string} label - Etiqueta del selector
 */
export default function PresetSelector({ 
  presets = [], 
  value, 
  onChange, 
  disabled = false,
  label = "Preset"
}) {
  return (
    <div className="v2-card">
      <div className="v2-card-title">{label}</div>
      <select
        className="form-select"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        aria-label={label}
      >
        {presets.map((preset) => (
          <option key={preset.id} value={preset.id}>
            {preset.name}
            {preset.value != null ? ` (${preset.value})` : ""}
          </option>
        ))}
      </select>
      {presets.find(p => p.id === value)?.description && (
        <div className="muted" style={{ marginTop: 6, fontSize: 12 }}>
          {presets.find(p => p.id === value).description}
        </div>
      )}
    </div>
  );
}
