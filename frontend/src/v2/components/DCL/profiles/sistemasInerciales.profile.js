// frontend/src/v2/components/DCL/profiles/sistemasInerciales.profile.js

import {
    DCL_SCENE_IDS,
    DCL_QUESTION_TYPES,
    DCL_BODY_KIND_IDS,
    DCL_VECTOR_TYPE_IDS,
    DCL_ANCHORS,
    DCL_HIGHLIGHT_MODES,
    DCL_LABEL_POSITIONS,
} from "../dclGrammar";

const sistemasInerialesProfile = {
    scene: DCL_SCENE_IDS.BLOCK_ON_TABLE,
    question: DCL_QUESTION_TYPES.FORCE_BALANCE,
    lang: "es",

    meta: {
        id: "dcl-sistemas-inerciales",
        title: {
            es: "DCL · Sistemas de referencia inerciales",
            en: "FBD · Inertial reference frames",
        },
        smartHeader: {
            es: "Sistema inercial · Equilibrio de fuerzas",
            en: "Inertial frame · Force equilibrium",
        },
        leafId: "sistemas-inerciales",
        question: {
            es: "¿Qué condición de fuerzas garantiza que un sistema de referencia es inercial?",
            en: "What force condition guarantees that a reference frame is inertial?",
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
                es: "Cuerpo de prueba",
                en: "Test body",
            },
            role: "main",
            anchor: DCL_ANCHORS.CENTER,
            labelYOffset: 50,
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
            id: "velocity_main",
            type: DCL_VECTOR_TYPE_IDS.VELOCITY,
            bodyId: "body_main",
            magnitudeId: "v",
            label: {
                es: "Velocidad constante",
                en: "Constant velocity",
            },
            symbol: "v",
            anchor: DCL_ANCHORS.CENTER,
            directionMode: "right",
            semanticRole: "state_descriptor",
            style: {
                highlight: DCL_HIGHLIGHT_MODES.SECONDARY,
                labelPosition: DCL_LABEL_POSITIONS.END,
                priority: 2,
                visible: true,
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

    labels: [
        {
            id: "note_inertial",
            text: {
                es: "Sistema inercial · ΣF = 0 · a = 0",
                en: "Inertial frame · ΣF = 0 · a = 0",
            },
            visible: true,
            priority: 2,
        },
        {
            id: "note_law",
            text: {
                es: "Primera ley: v = cte si ΣF = 0",
                en: "First law: v = const if ΣF = 0",
            },
            visible: true,
            priority: 1,
        },
    ],

    options: {
        showSurface: true,
        showAxes: false,
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
        sectionId: "sistemas-inerciales",
        conceptId: "primera-ley-marco-inercial",
        label: {
            es: "Sistemas inerciales · primera ley de Newton",
            en: "Inertial frames · Newton's first law",
        },
    },

    interpretation: {
        header_bridge: {
            es: "Un sistema de referencia es inercial cuando la resultante de fuerzas sobre cualquier cuerpo libre es nula y su movimiento es uniforme.",
            en: "A reference frame is inertial when the net force on any free body is zero and its motion is uniform.",
        },
        reading_focus: {
            es: "Fíjate en que el peso y la normal son iguales en módulo y opuestos en dirección. La resultante neta es cero, por eso el cuerpo se mueve con velocidad constante.",
            en: "Notice that weight and normal force are equal in magnitude and opposite in direction. The net resultant is zero, which is why the body moves with constant velocity.",
        },
        graph_role: {
            es: "Mostrar que en un sistema inercial las fuerzas reales se equilibran: no hay aceleración y la primera ley de Newton se cumple sin correcciones.",
            en: "Show that in an inertial frame, real forces balance: there is no acceleration and Newton's first law holds without corrections.",
        },
        calc_reading: {
            es: "ΣF = 0 implica a = 0, es decir, velocidad constante. Esto es la definición experimental de un marco inercial: el principio de inercia de Galileo se verifica directamente.",
            en: "ΣF = 0 implies a = 0, meaning constant velocity. This is the experimental definition of an inertial frame: Galileo's principle of inertia is verified directly.",
        },
        graph_reading: {
            es: "El vector velocidad está presente y es constante (ninguna fuerza neta lo modifica). Los vectores de peso y normal se cancelan mutuamente: el cuerpo prueba que el marco es inercial.",
            en: "The velocity vector is present and constant (no net force modifies it). Weight and normal vectors cancel each other: the body proves the frame is inertial.",
        },
        physical_insight: {
            es: "La condición de sistema inercial no es solo 'estar en reposo': un tren que viaja a 300 km/h sin acelerar es tan inercial como una estación fija. Lo que define un marco inercial es que en él se cumple la primera ley sin necesidad de añadir fuerzas ficticias. Esto es lo que permite aplicar directamente F = ma.",
            en: "The condition for an inertial frame is not just 'being at rest': a train traveling at 300 km/h without accelerating is as inertial as a stationary platform. What defines an inertial frame is that in it the first law holds without adding fictitious forces. This is what allows F = ma to be applied directly.",
        },
        likely_errors: {
            es: [
                "Pensar que un sistema inercial debe estar en reposo absoluto.",
                "Creer que un marco que se mueve a velocidad constante 'acumula' errores con el tiempo.",
                "Confundir equilibrio de fuerzas con ausencia de movimiento.",
                "Aplicar F = ma en un sistema que acelera sin añadir la fuerza ficticia.",
            ],
            en: [
                "Thinking that an inertial frame must be in absolute rest.",
                "Believing that a frame moving at constant velocity 'accumulates' errors over time.",
                "Confusing force equilibrium with absence of motion.",
                "Applying F = ma in an accelerating frame without adding the fictitious force.",
            ],
        },
    },
};

export default sistemasInerialesProfile;
