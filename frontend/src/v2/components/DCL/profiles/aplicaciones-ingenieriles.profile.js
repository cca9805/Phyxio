// frontend/src/v2/components/DCL/profiles/aplicaciones-ingenieriles.profile.js
//
// Profile DCL para: aplicaciones-ingenieriles (Nivel 5 v5)
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

const aplicacionesIngenierilesProfile = {
    scene: DCL_SCENE_IDS.PARTICLE_FREE,
    question: DCL_QUESTION_TYPES.FORCE_BALANCE,
    lang: "es",

    meta: {
        id: "dcl-aplicaciones-ingenieriles",
        title: {
            es: "DCL · Balance de Potencia en Bombas",
            en: "FBD · Power Balance in Pumps",
        },
        smartHeader: {
            es: "Potencia Suministrada vs Útil",
            en: "Supplied vs Useful Power",
        },
        leafId: "aplicaciones-ingenieriles",
        question: {
            es: "¿Cómo se distribuye la potencia suministrada entre el trabajo útil y las pérdidas?",
            en: "How is the supplied power distributed between useful work and losses?",
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
            id: "body_pump",
            kind: DCL_BODY_KIND_IDS.POINT,
            label: {
                es: "Bomba Hidráulica",
                en: "Hydraulic Pump",
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
        // ── Potencia de Entrada P_in ─────────────────────────────────
        {
            id: "power_in",
            type: DCL_VECTOR_TYPE_IDS.APPLIED_FORCE,
            bodyId: "body_pump",
            magnitudeId: "P_in",
            label: {
                es: "Potencia Entrada P_in",
                en: "Input Power P_in",
            },
            symbol: "P_{\\text{in}}",
            anchor: DCL_ANCHORS.LEFT,
            directionMode: "right",
            semanticRole: "input",
            style: {
                highlight: DCL_HIGHLIGHT_MODES.SECONDARY,
                labelPosition: DCL_LABEL_POSITIONS.TOP,
                priority: 3,
                visible: true,
            },
        },

        // ── Potencia Útil P_util ─────────────────────────────────────
        {
            id: "power_util",
            type: DCL_VECTOR_TYPE_IDS.APPLIED_FORCE,
            bodyId: "body_pump",
            magnitudeId: "P_util",
            label: {
                es: "Potencia Útil P_util",
                en: "Useful Power P_util",
            },
            symbol: "P_{\\text{útil}}",
            anchor: DCL_ANCHORS.RIGHT,
            directionMode: "right",
            semanticRole: "output",
            style: {
                highlight: DCL_HIGHLIGHT_MODES.PRIMARY,
                labelPosition: DCL_LABEL_POSITIONS.TOP,
                priority: 2,
                visible: true,
            },
        },

        // ── Pérdidas P_loss ──────────────────────────────────────────
        {
            id: "power_loss",
            type: DCL_VECTOR_TYPE_IDS.DRAG,
            bodyId: "body_pump",
            magnitudeId: "P_loss",
            label: {
                es: "Pérdidas (Calor/Fricción)",
                en: "Losses (Heat/Friction)",
            },
            symbol: "P_{\\text{pérdidas}}",
            anchor: DCL_ANCHORS.BOTTOM,
            directionMode: "down",
            semanticRole: "loss",
            derived: true,
            style: {
                highlight: DCL_HIGHLIGHT_MODES.MUTED,
                labelPosition: DCL_LABEL_POSITIONS.END,
                priority: 1,
                visible: true,
            },
        },
    ],

    labels: [
        {
            id: "note_conservation",
            text: {
                es: "Conservación: P_in = P_util + P_pérdidas",
                en: "Conservation: P_in = P_util + P_losses",
            },
            visible: true,
            priority: 2,
        },
        {
            id: "note_efficiency",
            text: {
                es: "Eficiencia η = P_util / P_in",
                en: "Efficiency η = P_util / P_in",
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
        sectionId: "aplicaciones-ingenieriles",
        conceptId: "balance-de-potencia",
        label: {
            es: "Balance de Potencia Hidráulica",
            en: "Hydraulic Power Balance",
        },
    },

    interpretation: {
        header_bridge: {
            es: "El diagrama representa el flujo de energía a través de la máquina: lo que entra debe ser igual a lo que se aprovecha más lo que se pierde.",
            en: "The diagram represents the energy flow through the machine: what goes in must equal what is used plus what is lost.",
        },
        reading_focus: {
            es: "El vector P_in es siempre el más largo. La eficiencia η determina qué proporción de ese vector se convierte en P_util.",
            en: "The P_in vector is always the longest. Efficiency η determines what proportion of that vector becomes P_util.",
        },
        graph_role: {
            es: "Visualizar el principio de conservación de la energía aplicado a sistemas de bombeo.",
            en: "Visualize the principle of energy conservation applied to pumping systems.",
        },
        calc_reading: {
            es: "A mayor diferencia entre P_in y P_util, menor es la eficiencia η del sistema.",
            en: "The greater the difference between P_in and P_util, the lower the system's efficiency η.",
        },
        graph_reading: {
            es: "Los vectores horizontales representan la entrada y salida de potencia, mientras que el vertical representa la degradación de energía.",
            en: "Horizontal vectors represent power input and output, while the vertical one represents energy degradation.",
        },
        physical_insight: {
            es: "La 'pérdida' no desaparece, se transforma en calor que calienta el fluido y los rodamientos de la bomba.",
            en: "The 'loss' does not disappear, it transforms into heat that warms the fluid and the pump bearings.",
        },
        likely_errors: {
            es: [
                "Creer que P_util puede ser mayor que P_in (violación de la Primera Ley).",
                "Olvidar que las pérdidas son una consecuencia inevitable de la viscosidad real.",
            ],
            en: [
                "Believing P_util can be greater than P_in (violation of the First Law).",
                "Forgetting that losses are an inevitable consequence of real viscosity.",
            ],
        },
    },
};

export default aplicacionesIngenierilesProfile;
