// frontend/src/v2/components/DCL/profiles/aerodinamica-basica.profile.js
//
// Profile DCL para: aerodinamica-basica (Nivel 5 v5)
//

import {
    DCL_SCENE_IDS,
    DCL_QUESTION_TYPES,
    DCL_BODY_KIND_IDS,
    DCL_VECTOR_TYPE_IDS,
    DCL_ANCHORS,
    DCL_HIGHLIGHT_MODES,
    DCL_LABEL_POSITIONS,
} from "../dclGrammar";

const aerodinamicaBasicaProfile = {
    scene: DCL_SCENE_IDS.PARTICLE_FREE,
    question: DCL_QUESTION_TYPES.FORCE_BALANCE,
    lang: "es",

    meta: {
        id: "dcl-aerodinamica-basica",
        title: {
            es: "DCL · Aerodinámica Básica",
            en: "FBD · Basic Aerodynamics",
        },
        smartHeader: {
            es: "Fuerzas Aerodinámicas · Lift & Drag",
            en: "Aerodynamic Forces · Lift & Drag",
        },
        leafId: "aerodinamica-basica",
        question: {
            es: "¿Cómo se equilibran la sustentación, el arrastre, el peso y el empuje sobre un perfil?",
            en: "How do lift, drag, weight, and thrust balance on an airfoil?",
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
            id: "body_wing",
            kind: DCL_BODY_KIND_IDS.POINT,
            label: {
                es: "Perfil alar",
                en: "Wing aerofoil",
            },
            role: "main",
            anchor: DCL_ANCHORS.CENTER,
            labelYOffset: 60,
            style: {
                variant: "default",
                highlight: DCL_HIGHLIGHT_MODES.PRIMARY,
                opacity: 1,
            },
        },
    ],

    vectors: [
        // ── Sustentación L_f — sube ──────────────────────────────────
        {
            id: "lift_force",
            type: DCL_VECTOR_TYPE_IDS.APPLIED_FORCE,
            bodyId: "body_wing",
            magnitudeId: "L_f",
            label: {
                es: "Sustentación L_f",
                en: "Lift L_f",
            },
            symbol: "L_f",
            anchor: DCL_ANCHORS.TOP,
            anchorYOffset: -30,
            directionMode: "up",
            semanticRole: "lift",
            style: {
                highlight: DCL_HIGHLIGHT_MODES.PRIMARY,
                labelPosition: DCL_LABEL_POSITIONS.END,
                priority: 4,
                visible: true,
            },
        },

        // ── Peso W — baja ────────────────────────────────────────────
        {
            id: "weight_force",
            type: DCL_VECTOR_TYPE_IDS.WEIGHT,
            bodyId: "body_wing",
            magnitudeId: "mg",
            label: {
                es: "Peso W = mg",
                en: "Weight W = mg",
            },
            symbol: "W",
            anchor: DCL_ANCHORS.BOTTOM,
            anchorYOffset: 30,
            directionMode: "down",
            semanticRole: "weight",
            style: {
                highlight: DCL_HIGHLIGHT_MODES.SECONDARY,
                labelPosition: DCL_LABEL_POSITIONS.END,
                priority: 3,
                visible: true,
            },
        },

        // ── Empuje T — horizontal ────────────────────────────────────
        {
            id: "thrust_force",
            type: DCL_VECTOR_TYPE_IDS.APPLIED_FORCE,
            bodyId: "body_wing",
            magnitudeId: "T",
            label: {
                es: "Empuje T",
                en: "Thrust T",
            },
            symbol: "T",
            anchor: DCL_ANCHORS.LEFT,
            anchorYOffset: 0,
            directionMode: "right",
            semanticRole: "thrust",
            style: {
                highlight: DCL_HIGHLIGHT_MODES.SECONDARY,
                labelPosition: DCL_LABEL_POSITIONS.TOP,
                priority: 2,
                visible: true,
            },
        },

        // ── Arrastre D_f — opuesto al movimiento ──────────────────────
        {
            id: "drag_force",
            type: DCL_VECTOR_TYPE_IDS.DRAG,
            bodyId: "body_wing",
            magnitudeId: "D_f",
            label: {
                es: "Arrastre D_f",
                en: "Drag D_f",
            },
            symbol: "D_f",
            anchor: DCL_ANCHORS.RIGHT,
            anchorYOffset: 0,
            directionMode: "left",
            semanticRole: "drag",
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
            id: "note_aero",
            text: {
                es: "Fuerzas aerodinámicas escalan con v²",
                en: "Aerodynamic forces scale with v²",
            },
            visible: true,
            priority: 2,
        },
        {
            id: "note_balance",
            text: {
                es: "Equilibrio: L_f = W  ·  T = D_f",
                en: "Equilibrium: L_f = W  ·  T = D_f",
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
        followCalculator: false,
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
        sectionId: "aerodinamica-basica",
        conceptId: "ecuaciones-fundamentales",
        label: {
            es: "Ecuaciones de Sustentación y Arrastre",
            en: "Lift and Drag Equations",
        },
    },

    interpretation: {
        header_bridge: {
            es: "El ala está en equilibrio dinámico: la sustentación compensa el peso y el empuje compensa el arrastre.",
            en: "The wing is in dynamic equilibrium: lift compensates for weight and thrust compensates for drag.",
        },
        reading_focus: {
            es: "Observa la magnitud de L_f frente a D_f. La eficiencia aerodinámica es crítica para el diseño.",
            en: "Observe the magnitude of L_f versus D_f. Aerodynamic efficiency is critical for design.",
        },
        graph_role: {
            es: "Mostrar visualmente el balance de las cuatro fuerzas fundamentales del vuelo (L_f, D_f, W, T).",
            en: "Visually show the balance of the four fundamental flight forces (L_f, D_f, W, T).",
        },
        calc_reading: {
            es: "La condición L_f = mg permite despejar la velocidad mínima de vuelo para un peso dado.",
            en: "The condition L_f = mg allows solving for the minimum flight speed for a given weight.",
        },
        graph_reading: {
            es: "La longitud de los vectores L_f y D_f escala con v² en la calculadora.",
            en: "The length of vectors L_f and D_f scales with v² in the calculator.",
        },
        physical_insight: {
            es: "El arrastre D_f siempre se opone al movimiento, mientras que L_f es perpendicular al flujo incidente.",
            en: "Drag D_f always opposes motion, while L_f is perpendicular to the incident flow.",
        },
        likely_errors: {
            es: [
                "Creer que la sustentación L_f siempre apunta verticalmente hacia arriba; apunta perpendicular al flujo.",
                "Confundir el empuje T con la sustentación L_f.",
            ],
            en: [
                "Believing lift L_f always points straight up; it points perpendicular to the flow.",
                "Confusing thrust T with lift L_f.",
            ],
        },
    },
};

export default aerodinamicaBasicaProfile;
