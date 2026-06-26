// frontend/src/v2/components/DCL/profiles/aceleracionRelativa.profile.js

import {
    DCL_SCENE_IDS,
    DCL_QUESTION_TYPES,
    DCL_BODY_KIND_IDS,
    DCL_VECTOR_TYPE_IDS,
    DCL_ANCHORS,
    DCL_HIGHLIGHT_MODES,
    DCL_LABEL_POSITIONS,
} from "../dclGrammar";

const aceleracionRelativaProfile = {
    scene: DCL_SCENE_IDS.PARTICLE_FREE,
    question: DCL_QUESTION_TYPES.MOTION_RELATION,
    lang: "es",

    graph_identity: {
        pregunta_principal: {
            es: "¿Cómo se transforma el vector aceleración de una partícula al cambiar de sistema de referencia en traslación?",
            en: "How does the acceleration vector of a particle transform when switching between translating reference frames?",
        },
        magnitud_estrella: "a_rel",
        magnitud_secundaria: "a_A",
        variable_control: "a_B",
        tipo_lectura: "vectorial",
    },

    infoCards: [
        {
            key: "ley",
            label: { es: "Composición galileana", en: "Galilean composition" },
            highlight: "a_rel = a_A − a_B",
            highlightColor: "#f87171",
            description: {
                es: "La aceleración relativa es la diferencia vectorial de las aceleraciones absolutas.",
                en: "Relative acceleration is the vector difference of the absolute accelerations.",
            },
        },
        {
            key: "reading",
            label: { es: "Lectura numérica", en: "Numerical reading" },
            lines: ({ p }) => [
                `a_A = ${p?.a_A ?? "?"} m/s²`,
                `a_B = ${p?.a_B ?? "?"} m/s²`,
            ],
            result: ({ p }) => `a_rel = ${(p?.a_A ?? 0) - (p?.a_B ?? 0)} m/s²`,
            resultColor: "#4ade80",
        },
        {
            key: "idea",
            label: { es: "Clave conceptual", en: "Key concept" },
            bg: "rgba(99,102,241,0.12)",
            description: {
                es: "Si el marco B es inercial (a_B = 0), la aceleración relativa coincide con la absoluta.",
                en: "If frame B is inertial (a_B = 0), relative acceleration equals the absolute acceleration.",
            },
        },
    ],

    meta: {
        id: "dcl-aceleracion-relativa",
        title: {
            es: "DCL · Aceleración relativa entre sistemas de referencia",
            en: "FBD · Relative acceleration between reference frames",
        },
        smartHeader: {
            es: "Cinemática relativa · Dos observadores",
            en: "Relative kinematics · Two observers",
        },
        leafId: "aceleracion-relativa",
        question: {
            es: "¿Cómo cambia el vector aceleración al cambiar de sistema de referencia?",
            en: "How does the acceleration vector change when switching reference frames?",
        },
    },

    environment: {
        inclineAngleDeg: 0,
        showGrid: false,
        gravityDirection: "down",
    },

    params: {},

    bodies: [
        {
            id: "body_particle",
            kind: DCL_BODY_KIND_IDS.POINT,
            label: {
                es: "Partícula P",
                en: "Particle P",
            },
            role: "main",
            anchor: DCL_ANCHORS.CENTER,
            labelYOffset: 55,
            style: {
                variant: "default",
                highlight: DCL_HIGHLIGHT_MODES.PRIMARY,
                opacity: 1,
            },
        },
    ],

    vectors: [
        {
            id: "accel_ground",
            type: DCL_VECTOR_TYPE_IDS.ACCELERATION,
            bodyId: "body_particle",
            magnitudeId: "a_A",
            label: {
                es: "Aceleración absoluta (S)",
                en: "Absolute acceleration (S)",
            },
            symbol: "a_A",
            anchor: DCL_ANCHORS.CENTER,
            anchorYOffset: -28,
            directionMode: "right",
            semanticRole: "absolute_motion",
            style: {
                highlight: DCL_HIGHLIGHT_MODES.PRIMARY,
                labelPosition: DCL_LABEL_POSITIONS.END,
                priority: 3,
                visible: true,
            },
        },
        {
            id: "accel_frame",
            type: DCL_VECTOR_TYPE_IDS.ACCELERATION,
            bodyId: "body_particle",
            magnitudeId: "a_B",
            label: {
                es: "Aceleración del marco (S')",
                en: "Frame acceleration (S')",
            },
            symbol: "a_B",
            anchor: DCL_ANCHORS.CENTER,
            anchorYOffset: 10,
            directionMode: "right",
            semanticRole: "frame_motion",
            style: {
                highlight: DCL_HIGHLIGHT_MODES.SECONDARY,
                labelPosition: DCL_LABEL_POSITIONS.TOP,
                priority: 2,
                visible: true,
            },
        },
        {
            // Vector resultado de la composición: a_A = a_rel + a_B
            // derived:true → se renderiza punteado, visualmente diferenciado
            id: "accel_relative",
            type: DCL_VECTOR_TYPE_IDS.ACCELERATION,
            bodyId: "body_particle",
            magnitudeId: "a_rel",
            label: {
                es: "Aceleración relativa (P respecto a S')",
                en: "Relative acceleration (P w.r.t. S')",
            },
            symbol: "a_{rel}",
            anchor: DCL_ANCHORS.CENTER,
            anchorYOffset: 28,
            directionMode: "right",
            semanticRole: "relative_motion",
            derived: true,
            style: {
                highlight: DCL_HIGHLIGHT_MODES.MUTED,
                labelPosition: DCL_LABEL_POSITIONS.BOTTOM,
                priority: 1,
                visible: true,
            },
        },
    ],

    labels: [
        {
            id: "note_frames",
            text: {
                es: "S: sistema tierra · S': marco móvil",
                en: "S: ground frame · S': moving frame",
            },
            visible: true,
            priority: 2,
        },
        {
            id: "note_law",
            text: {
                es: "a_A = a_{rel} + a_B",
                en: "a_A = a_{rel} + a_B",
            },
            visible: true,
            priority: 1,
        },
    ],

    options: {
        showSurface: false,
        showAxes: true,
        showAngleMarker: false,
        autoLabelLayout: true,
        autoVectorScale: true,
        clampVectorLengths: true,
        showVectorMagnitudes: false,
        showBodyNames: true,
        followCalculator: true,
        experimentMode: true,
        debug: false,

        resolveComponents: false,
        resolveResultant: false,
        showStepControls: false,
        resolutionStep: 0,
        snapVectorDirections: true,

        displayMode: "student",
        enableVectorSelection: true,
        showCompactLegend: true,
        showTypicalErrors: true,
        showTheoryLink: true,
    },

    theory_link: {
        sectionId: "aceleracion-relativa",
        conceptId: "composicion-aceleraciones",
        label: {
            es: "Aceleración relativa · composición de aceleraciones",
            en: "Relative acceleration · acceleration composition",
        },
    },

    interpretation: {
        header_bridge: {
            es: "La aceleración no es absoluta: su valor depende del sistema de referencia desde el que se mide.",
            en: "Acceleration is not absolute: its value depends on the reference frame from which it is measured.",
        },
        reading_focus: {
            es: "Observa que el mismo evento físico produce vectores de aceleración distintos según el observador. La relación a_{P} = a_{P/S'} + a_{S'} muestra cómo se componen.",
            en: "Notice that the same physical event produces different acceleration vectors depending on the observer. The relation a_{P} = a_{P/S'} + a_{S'} shows how they compose.",
        },
        graph_role: {
            es: "Visualizar la descomposición vectorial de la aceleración absoluta en componente relativa y componente de arrastre del marco.",
            en: "Visualize the vector decomposition of absolute acceleration into the relative component and the frame drag component.",
        },
        calc_reading: {
            es: "La aceleración relativa se obtiene por sustracción vectorial: a_{P/S'} = a_P − a_{S'}. Cuando el marco es inercial (a_{S'} = 0), la aceleración relativa coincide con la absoluta.",
            en: "Relative acceleration is obtained by vector subtraction: a_{P/S'} = a_P − a_{S'}. When the frame is inertial (a_{S'} = 0), the relative acceleration equals the absolute one.",
        },
        graph_reading: {
            es: "Si los dos vectores a_P y a_{S'} son iguales en módulo y dirección, la aceleración relativa es nula: la partícula no acelera respecto al marco S'.",
            en: "If both vectors a_P and a_{S'} are equal in magnitude and direction, the relative acceleration is zero: the particle does not accelerate with respect to frame S'.",
        },
        physical_insight: {
            es: "La composición de aceleraciones es la base conceptual que distingue el análisis cinemático en sistemas inerciales y no inerciales. Cuando a_{S'} ≠ 0, el marco 'empuja' parte de la aceleración observada, y lo que mide el observador en S' ya no refleja la causa real (fuerza neta). Por eso la dinámica newtoniana solo es válida sin corrección en sistemas inerciales: es la condición que hace que a_{P/S'} = a_P.",
            en: "Acceleration composition is the conceptual foundation that distinguishes kinematic analysis in inertial and non-inertial systems. When a_{S'} ≠ 0, the frame 'contributes' part of the observed acceleration, and what the observer in S' measures no longer reflects the real cause (net force). This is why Newtonian dynamics is only valid without correction in inertial frames: it is the condition that makes a_{P/S'} = a_P.",
        },
        likely_errors: {
            es: [
                "Creer que la aceleración de una partícula es la misma para todos los observadores.",
                "Confundir la aceleración del marco (a_{S'}) con la aceleración relativa (a_{P/S'}).",
                "Sumar vectores de aceleración sin respetar sentido y dirección.",
                "Asumir que el marco S' debe estar en reposo para que sus medidas sean válidas.",
            ],
            en: [
                "Believing that a particle's acceleration is the same for all observers.",
                "Confusing the frame acceleration (a_{S'}) with the relative acceleration (a_{P/S'}).",
                "Adding acceleration vectors without respecting direction and sense.",
                "Assuming that frame S' must be at rest for its measurements to be valid.",
            ],
        },
    },
};

export default aceleracionRelativaProfile;
