import React from 'react';

export default function LevelFilter({ value, onChange }) {
  return (
    <div className="level-filter">
      <label className="level-filter-label">Filtrar nivel:</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Filtrar por nivel educativo"
      >
        <option value="all">Todos</option>
        <option value="basico_eso">Básico (ESO)</option>
        <option value="completo">Completo</option>
      </select>
    </div>
  );
}
