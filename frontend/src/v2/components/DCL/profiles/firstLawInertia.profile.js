// frontend/src/v2/components/DCL/profiles/firstLawInertia.profile.js

import {
    DCL_SCENE_IDS,
    DCL_QUESTION_TYPES,
    DCL_BODY_KIND_IDS,
    DCL_VECTOR_TYPE_IDS,
    DCL_ANCHORS,
    DCL_HIGHLIGHT_MODES,
    DCL_LABEL_POSITIONS,
} from "../dclGrammar";

const firstLawInertiaProfile = {
    scene: DCL_SCENE_IDS.BLOCK_ON_TABLE,
    question: DCL_QUESTION_TYPES.FORCE_BALANCE,
    lang: "es",

    meta: {
        id: "dcl-first-law-inertia",
        title: {
            es: "DCL · Primera ley de Newton (inercia)",
            en: "FBD · Newton's first law (inertia)",
        },
        smartHeader: {
            es: "Equilibrio · Bloque sobre mesa",
            en: "Equilibrium · Block on table",
        },
        leafId: "primera-ley-inercia",
        question: {
            es: "¿Qué fuerzas aparecen cuando la resultante sobre el bloque es nula?",
            en: "Which forces appear when the resultant on the block is zero?",
        },
        pregunta_principal: {
            es: "¿Qué fuerzas aparecen cuando la resultante sobre el bloque es nula?",
            en: "Which forces appear when the resultant on the block is zero?",
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
            id: "body_main",
            kind: DCL_BODY_KIND_IDS.BLOCK,
            label: {
                es: "Bloque",
                en: "Block",
            },
            role: "main",
            anchor: DCL_ANCHORS.CENTER,
            style: {
                variant: "default",
                highlight: DCL_HIGHLIGHT_MODES.PRIMARY,
                opacity: 1,
            },
        },
    ],

    vectors: [
        {
            id: "weight_main",
            type: DCL_VECTOR_TYPE_IDS.WEIGHT,
            bodyId: "body_main",
            magnitudeId: "P",
            label: {
                es: "Peso",
                en: "Weight",
            },
            symbol: "P",
            anchor: DCL_ANCHORS.CENTER,
            semanticRole: "gravitational_cause",
            style: {
                highlight: DCL_HIGHLIGHT_MODES.PRIMARY,
                labelPosition: DCL_LABEL_POSITIONS.END,
                priority: 3,
                visible: true,
            },
        },
        {
            id: "normal_main",
            type: DCL_VECTOR_TYPE_IDS.NORMAL,
            bodyId: "body_main",
            magnitudeId: "N",
            label: {
                es: "Normal",
                en: "Normal",
            },
            symbol: "N",
            anchor: DCL_ANCHORS.CONTACT,
            semanticRole: "constraint_force",
            style: {
                highlight: DCL_HIGHLIGHT_MODES.SECONDARY,
                labelPosition: DCL_LABEL_POSITIONS.END,
                priority: 2,
                visible: true,
            },
        },
        {
            id: "applied_main",
            type: DCL_VECTOR_TYPE_IDS.APPLIED_FORCE,
            bodyId: "body_main",
            magnitudeId: "F",
            label: {
                es: "Fuerza aplicada",
                en: "Applied force",
            },
            symbol: "F",
            anchor: DCL_ANCHORS.CENTER,
            directionMode: "right",
            semanticRole: "external_action",
            style: {
                highlight: DCL_HIGHLIGHT_MODES.NONE,
                labelPosition: DCL_LABEL_POSITIONS.END,
                priority: 1,
                visible: false,
            },
        },
        {
            id: "friction_main",
            type: DCL_VECTOR_TYPE_IDS.FRICTION,
            bodyId: "body_main",
            magnitudeId: "f",
            label: {
                es: "Rozamiento",
                en: "Friction",
            },
            symbol: "f",
            anchor: DCL_ANCHORS.CONTACT,
            directionMode: "left",
            semanticRole: "opposition",
            style: {
                highlight: DCL_HIGHLIGHT_MODES.NONE,
                labelPosition: DCL_LABEL_POSITIONS.END,
                priority: 1,
                visible: false,
            },
        },
        {
            id: "acceleration_main",
            type: DCL_VECTOR_TYPE_IDS.ACCELERATION,
            bodyId: "body_main",
            magnitudeId: "a",
            label: {
                es: "Aceleración",
                en: "Acceleration",
            },
            symbol: "a",
            anchor: DCL_ANCHORS.CENTER,
            directionMode: "right",
            semanticRole: "system_response",
            style: {
                highlight: DCL_HIGHLIGHT_MODES.NONE,
                labelPosition: DCL_LABEL_POSITIONS.END,
                priority: 1,
                visible: false,
            },
        },
    ],

    labels: [],

    options: {
        showSurface: true,
        showAxes: false,
        showAngleMarker: false,
        autoLabelLayout: true,
        autoVectorScale: true,
        clampVectorLengths: true,
        showVectorMagnitudes: false,
        showBodyNames: false,
        followCalculator: false,
        experimentMode: false,
        debug: false,

        resolveComponents: false,
        resolveResultant: false,
        showStepControls: false,
        resolutionStep: 0,
        snapVectorDirections: true,

        // mejoras nuevas
        displayMode: "student",
        enableVectorSelection: true,
        showCompactLegend: true,
        showTypicalErrors: true,
        showTheoryLink: true,
    },

    theory_link: {
        sectionId: "primera-ley-de-newton",
        conceptId: "resultante-nula",
        label: {
            es: "Primera ley de Newton · resultante nula",
            en: "Newton's first law · zero resultant",
        },
    },

    interpretation: {
        header_bridge: {
            es: "La primera ley no exige ausencia de fuerzas, sino resultante nula.",
            en: "The first law does not require absence of forces, but zero resultant force.",
        },
        reading_focus: {
            es: "Fíjate en que pueden existir fuerzas y, aun así, la resultante ser nula.",
            en: "Notice that forces may exist and the resultant can still be zero.",
        },
        graph_role: {
            es: "Mostrar que la primera ley no significa ausencia de fuerzas, sino resultante nula.",
            en: "Show that the first law does not mean absence of forces, but zero resultant force.",
        },
        calc_reading: {
            es: "La lectura visual debe sugerir equilibrio vertical y ausencia de causa horizontal neta en el diagrama mostrado.",
            en: "The visual reading should suggest vertical equilibrium and no net horizontal cause in the shown diagram.",
        },
        graph_reading: {
            es: "El cuerpo puede permanecer en reposo o moverse con velocidad constante aunque no aparezca ninguna fuerza horizontal neta.",
            en: "The body may remain at rest or move with constant velocity even if no net horizontal force is shown.",
        },
        physical_insight: {
            es: "La primera ley cambia radicalmente la pregunta física: no hay que explicar por qué un cuerpo se mueve, sino por qué cambia su velocidad. El movimiento uniforme (reposo o MRU) no necesita causa dinámica; solo el cambio de velocidad (aceleración) exige una fuerza neta no nula.",
            en: "The first law radically changes the physical question: we don't need to explain why a body moves, but why it changes its velocity. Uniform motion (rest or constant velocity) needs no dynamic cause; only velocity change (acceleration) requires a non-zero net force.",
        },
        likely_errors: {
            es: [
                "Pensar que si hay movimiento debe dibujarse una fuerza hacia delante.",
                "Confundir velocidad con fuerza.",
                "Creer que la primera ley solo describe cuerpos en reposo.",
                "Interpretar 'fuerza neta nula' como 'no existen fuerzas'."
            ],
            en: [
                "Thinking that motion requires a forward force to be drawn.",
                "Confusing velocity with force.",
                "Believing that the first law only describes bodies at rest.",
                "Interpreting 'zero net force' as 'no forces exist'."
            ],
        },
    },
};

export default firstLawInertiaProfile;
