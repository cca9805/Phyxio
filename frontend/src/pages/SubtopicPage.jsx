import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { topicsData } from '../data/topics.generated';
import { getTheoryByTopic, getCalculatorsByTopic, getExercisesByTopic } from '../utils/contentLoader';
import ContentAccessControl from '../components/ContentAccessControl';

const MarkdownRenderer = lazy(() => import('../components/MarkdownRenderer'));
const MarkdownLoading = () => <div className="p-4">Cargando contenido...</div>;

// --- Componente para Renderizar la Teoría ---
const TheoryRenderer = ({ content, exercises, hasCalculators }) => {
    console.log("🎨 TheoryRenderer - content:", content);
    console.log("🎨 TheoryRenderer - exercises:", exercises);
    
    if (!content) {
        console.log("❌ TheoryRenderer - No hay contenido");
        return <p>No hay teoría disponible para este tema.</p>;
    }

    const hasExercises = exercises && exercises.length > 0;

    // Caso 1: El contenido es un string de Markdown (para temas no migrados).
    if (typeof content === 'string') {
        console.log("📝 TheoryRenderer - Renderizando Markdown");
        return (
            <ContentAccessControl hasCalculators={hasCalculators} hasExercises={hasExercises}>
                <Suspense fallback={<MarkdownLoading />}>
                    <MarkdownRenderer source={content} />
                </Suspense>
            </ContentAccessControl>
        );
    }

    // Caso 2: El contenido es un Módulo de JS con un componente por defecto.
    if (content && content.default) {
        console.log("⚛️ TheoryRenderer - Renderizando componente React");
        console.log("⚛️ TheoryRenderer - content.default:", content.default);
        const TheoryComponent = content.default;
        
        // Envolver con control de acceso
        return (
            <ContentAccessControl hasCalculators={hasCalculators} hasExercises={hasExercises}>
                <TheoryComponent exercises={exercises} />
            </ContentAccessControl>
        );
    }

    console.error("❌ Error: El formato del contenido de la teoría no es válido.", content);
    return <p>Error al mostrar el contenido de la teoría.</p>;
};

// Componente para breadcrumbs de navegación
const Breadcrumbs = ({ pathSegments }) => {
  const navigate = useNavigate();
  
  // Función para obtener el nombre legible de un segmento
  const getReadableLabel = (segment, index) => {
    // Mapeo de nombres técnicos a nombres legibles
    const labelMap = {
      'clasica': 'Física Clásica',
      'moderna': 'Física Moderna',
      'mecanica': 'Mecánica',
      'termodinamica': 'Termodinámica',
      'electromagnetismo': 'Electromagnetismo',
      'cinematica': 'Cinemática',
      'dinamica': 'Dinámica',
      'estatica': 'Estática',
      '01_conceptos_fundamentales': 'Conceptos Fundamentales',
      '02_magnitudes_termicas': 'Magnitudes Térmicas',
      '03_principios_de_la_termodinamica': 'Principios de la Termodinámica',
      '04_modelos_moleculares_y_gases': 'Modelos Moleculares y Gases',
      '05_entropia': 'Entropía',
      '06_procesos_termodinamicos': 'Procesos Termodinámicos',
      '07_potenciales_termodinamicos': 'Potenciales Termodinámicos',
      '08_maquinas_termicas_y_refrigeracion': 'Máquinas Térmicas y Refrigeración',
      '09_ciclos_termodinamicos': 'Ciclos Termodinámicos',
      '10_ciclos_combinados': 'Ciclos Combinados',
      '11_transferencia_de_calor': 'Transferencia de Calor',
      '12_aplicaciones_practicas': 'Aplicaciones Prácticas',
      '13_termodinamica_estadistica': 'Termodinámica Estadística',
      'temperatura': 'Temperatura',
      'calor': 'Calor',
      'presion': 'Presión',
      'trabajo_termodinamico': 'Trabajo Termodinámico',
      'electricidad': 'Electricidad',
      'magnetismo': 'Magnetismo',
      'ondas': 'Ondas Electromagnéticas',
      'electronica': 'Electrónica'
    };
    
    // Si existe en el mapa, usar ese nombre
    if (labelMap[segment]) {
      return labelMap[segment];
    }
    
    // Si no, intentar buscar en topicsData
    try {
      const topic = topicsData[segment];
      if (topic && topic.title) {
        return topic.title;
      }
      
      // Buscar en las cards de los padres
      const parentPath = pathSegments.slice(0, index).join('/');
      if (parentPath && topicsData[parentPath]) {
        const card = topicsData[parentPath].cards?.find(c => c.tipo === segment);
        if (card) {
          return card.titulo;
        }
      }
    } catch (e) {
      // Si falla, continuar con el formato por defecto
    }
    
    // Por defecto, capitalizar y reemplazar guiones/underscores
    return segment
      .replace(/_/g, ' ')
      .replace(/-/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  const breadcrumbItems = pathSegments.map((segment, index) => {
    const path = '/' + pathSegments.slice(0, index + 1).join('/');
    const label = getReadableLabel(segment, index);
    
    return { path, label, isLast: index === pathSegments.length - 1 };
  });
  
  console.log('Breadcrumb rendering with items:', breadcrumbItems);
  
  return (
    <nav className="modern-breadcrumbs mb-4">
      <div className="breadcrumb-container">
        <button 
          onClick={() => navigate('/')} 
          className="breadcrumb-pill breadcrumb-home"
          aria-label="Ir a inicio"
        >
          <i className="bi bi-house-fill"></i>
          <span className="breadcrumb-label">Inicio</span>
        </button>
        
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={index}>
            <span className="breadcrumb-separator">
              <i className="bi bi-chevron-right"></i>
            </span>
            {item.isLast ? (
              <span className="breadcrumb-pill breadcrumb-active">
                {item.label}
              </span>
            ) : (
              <button 
                onClick={() => navigate(item.path)} 
                className="breadcrumb-pill breadcrumb-link"
              >
                {item.label}
              </button>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default function SubtopicPage() {
    const location = useLocation();
    const [theoryContent, setTheoryContent] = useState(null);
    const [exercisesArray, setExercisesArray] = useState([]);
    const [calculatorsArray, setCalculatorsArray] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const pathSegments = location.pathname.split('/').filter(Boolean);
    const subtopicId = pathSegments[pathSegments.length - 1];
    // Construir ruta para contentLoader (sin 'clasica')
    const dataPath = pathSegments.filter(seg => seg !== 'clasica' && seg !== 'moderna');
    const fullPath = '/' + dataPath.join('/');
    
    // Función para buscar recursivamente en toda la estructura de topicsData
    // Buscador más tolerante: compara `card.tipo`, sufijos como `-cc`,
    // y también la última parte del `card.btn.link` si existe.
    const findSubtopicInfo = (subtopicId) => {
      const normalizeLastSegment = (link) => {
        if (!link) return null;
        const parts = link.split('/').filter(Boolean);
        return parts.length ? parts[parts.length - 1] : null;
      };

      for (const topicKey in topicsData) {
        const topic = topicsData[topicKey];
        if (!topic || !topic.cards) continue;

        for (const card of topic.cards) {
          // Direct match
          if (card.tipo === subtopicId) return card;

          // Suffix match: e.g. 'circuitos-avanzados-cc' -> 'cc'
          if (card.tipo && card.tipo.endsWith(`-${subtopicId}`)) return card;

          // Match by last segment of the link: /.../cc
          const last = normalizeLastSegment(card.btn && card.btn.link);
          if (last === subtopicId) return card;
        }
      }
      return null;
    };
    
    const subtopicInfo = findSubtopicInfo(subtopicId);

    useEffect(() => {
        if (!subtopicId) {
            setLoading(false);
            return;
        }

        const fetchContent = async () => {
            setLoading(true);
            setError(null);
            try {
                // Cargamos en paralelo la teoría, calculadoras y los nuevos ejercicios
                // Ahora pasamos la ruta completa en lugar de solo el subtopicId
                const [theory, calculators, exercises] = await Promise.all([
                    getTheoryByTopic(fullPath).catch(() => null),
                    getCalculatorsByTopic(fullPath).catch(() => []),
                    getExercisesByTopic(fullPath).catch(() => []),
                ]);

                setTheoryContent(theory);
                setCalculatorsArray(calculators || []);
                setExercisesArray(exercises || []);
            } catch (err) {
                setError('Error crítico al cargar contenido.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchContent();
    }, [subtopicId]);

    if (loading) return <div className="page-root text-center p-8">Cargando...</div>;
    if (!subtopicInfo) return <div className="page-root intro-card theme-red text-center"><strong>Error:</strong><p>No se encontró la configuración para <strong>{subtopicId}</strong>.</p><Link to="/" className="btn btn-primary">Volver</Link></div>;
    if (error) return <div className="page-root intro-card theme-red text-center"><strong>Error Crítico:</strong><p>{error}</p></div>;

    const hasCalculators = calculatorsArray && calculatorsArray.length > 0;
    // Si no hay contenido JSX pero el tema es una página índice con cards, renderizar los cards
    // Reutilizar `dataPath` ya calculado más arriba
    const candidateKeys = [subtopicId, dataPath.join('/'), dataPath[dataPath.length - 1]];
    let topicIndex = null;
    for (const key of candidateKeys) {
      if (key && topicsData[key]) {
        topicIndex = topicsData[key];
        break;
      }
    }

    const isIndexWithCards = !theoryContent && topicIndex && Array.isArray(topicIndex.cards) && topicIndex.cards.length > 0;

    return (
        <div className="page-root">
            <Breadcrumbs pathSegments={pathSegments} />

            <div className="content-card">
                {isIndexWithCards ? (
                  <div className="cards-grid">
                    {topicIndex.cards.map((card, idx) => (
                      <div key={idx} className="topic-card p-4 mb-3 border rounded">
                        <h4>{card.titulo}</h4>
                        <p className="muted">{card.descripcion}</p>
                        <Link to={card.btn?.link || '#'} className="btn btn-primary">{card.btn?.texto || 'Abrir'}</Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <TheoryRenderer 
                      content={theoryContent} 
                      exercises={exercisesArray}
                      hasCalculators={hasCalculators}
                  />
                )}
            </div>
        </div>
    );
}
