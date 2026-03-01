import React, { useEffect, useState } from 'react';

const DebugGlobPage = () => {
  const [globInfo, setGlobInfo] = useState(null);

  useEffect(() => {
    const theoryJsxModules = import.meta.glob('/src/data/**/teoria.jsx');
    
    const info = {
      total: Object.keys(theoryJsxModules).length,
      opticaFiles: Object.keys(theoryJsxModules).filter(k => k.includes('optica')),
      allFiles: Object.keys(theoryJsxModules)
    };
    
    console.log('=== DEBUG GLOB INFO ===');
    console.log('Total:', info.total);
    console.log('Óptica files:', info.opticaFiles);
    
    setGlobInfo(info);
  }, []);

  if (!globInfo) return <div>Cargando...</div>;

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>Debug: import.meta.glob</h1>
      
      <h2>Resumen</h2>
      <p>Total archivos teoria.jsx: <strong>{globInfo.total}</strong></p>
      <p>Archivos de Óptica: <strong>{globInfo.opticaFiles.length}</strong></p>
      
      <h2>Archivos de Óptica detectados:</h2>
      <ul>
        {globInfo.opticaFiles.map(file => (
          <li key={file} style={{ color: 'green' }}>{file}</li>
        ))}
      </ul>
      
      {globInfo.opticaFiles.length === 0 && (
        <div style={{ background: '#fee', padding: '10px', border: '1px solid red' }}>
          <strong>⚠️ NO SE DETECTARON ARCHIVOS DE ÓPTICA</strong>
          <p>Esto significa que Vite no está encontrando los archivos.</p>
        </div>
      )}
      
      <h2>Todos los archivos (primeros 20):</h2>
      <ul>
        {globInfo.allFiles.slice(0, 20).map(file => (
          <li key={file}>{file}</li>
        ))}
      </ul>
    </div>
  );
};

export default DebugGlobPage;
