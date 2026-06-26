// frontend/src/v2/components/DCL/profiles/sistemasNoInerciales.profile.js

import {
    DCL_SCENE_IDS,
    DCL_QUESTION_TYPES,
    DCL_BODY_KIND_IDS,
    DCL_VECTOR_TYPE_IDS,
    DCL_ANCHORS,
    DCL_HIGHLIGHT_MODES,
    DCL_LABEL_POSITIONS,
} from "../dclGrammar";

const sistemasNoInerialesProfile = {
    scene: DCL_SCENE_IDS.BLOCK_ON_TABLE,
    question: DCL_QUESTION_TYPES.IDENTIFY_FORCES,
    lang: "es",

    meta: {
        id: "dcl-sistemas-no-inerciales",
        title: {
            es: "DCL · Sistemas de referencia no inerciales",
            en: "FBD · Non-inertial reference frames",
        },
        smartHeader: {
            es: "Sistema no inercial · Fuerza ficticia",
            en: "Non-inertial frame · Fictitious force",
        },
        leafId: "sistemas-no-inerciales-intro",
        question: {
            es: "¿Qué fuerza adicional aparece al observar un cuerpo desde un sistema de referencia acelerado?",
            en: "What additional force appears when observing a body from an accelerated reference frame?",
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
            kind: DCL_BODY_KIND_IDS.BLOCK,
            label: {
                es: "Masa m",
                en: "Mass m",
            },
            role: "main",
            anchor: DCL_ANCHORS.CENTER,
            labelYOffset: 70,
            style: {
                variant: "default",
                highlight: DCL_HIGHLIGHT_MODES.PRIMARY,
                opacity: 1,
            },
        },
    ],

    vectors: [
        {
            id: "weight_particle",
            type: DCL_VECTOR_TYPE_IDS.WEIGHT,
            bodyId: "body_particle",
            magnitudeId: "P",
            label: {
                es: "Peso (real)",
                en: "Weight (real)",
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
            id: "normal_particle",
            type: DCL_VECTOR_TYPE_IDS.NORMAL,
            bodyId: "body_particle",
            magnitudeId: "N",
            label: {
                es: "Normal (real)",
                en: "Normal (real)",
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
            id: "fictitious_force",
            type: DCL_VECTOR_TYPE_IDS.CUSTOM,
            bodyId: "body_particle",
            magnitudeId: "F_ficticia",
            label: {
                es: "Fuerza ficticia (−ma_marco)",
                en: "Fictitious force (−ma_frame)",
            },
            symbol: "F_{ficticia}",
            anchor: DCL_ANCHORS.CENTER,
            directionMode: "left",
            semanticRole: "fictitious_cause",
            style: {
                highlight: DCL_HIGHLIGHT_MODES.MUTED,
                labelPosition: DCL_LABEL_POSITIONS.END,
                priority: 2,
                visible: true,
            },
        },
        {   // Vector cinemático de contexto: aceleración del marco de referencia
            // Aparece punteado (tipo acceleration) apuntando a la derecha.
            // Muestra por qué existe F_ficticia: F_fict = −m·a_marco
            id: "frame_accel",
            type: DCL_VECTOR_TYPE_IDS.ACCELERATION,
            bodyId: "body_particle",
            magnitudeId: "a_marco",
            label: {
                es: "Aceleración del marco (contexto)",
                en: "Frame acceleration (context)",
            },
            symbol: "a_{marco}",
            anchor: DCL_ANCHORS.TOP,
            directionMode: "right",
            semanticRole: "system_response",
            derived: true,
            style: {
                highlight: DCL_HIGHLIGHT_MODES.MUTED,
                labelPosition: DCL_LABEL_POSITIONS.END,
                priority: 1,
                visible: true,
            },
        },
        {
            id: "accel_relative",
            type: DCL_VECTOR_TYPE_IDS.ACCELERATION,
            bodyId: "body_particle",
            magnitudeId: "a_rel",
            label: {
                es: "Aceleración relativa al marco",
                en: "Acceleration relative to frame",
            },
            symbol: "a_{rel}",
            anchor: DCL_ANCHORS.CENTER,
            directionMode: "right",
            semanticRole: "system_response",
            style: {
                highlight: DCL_HIGHLIGHT_MODES.NONE,
                labelPosition: DCL_LABEL_POSITIONS.BOTTOM,
                priority: 1,
                visible: false,
            },
        },
    ],

    labels: [
        {
            id: "note_marco",
            text: {
                es: "Marco acelerado → a_marco",
                en: "Accelerated frame → a_frame",
            },
            visible: true,
            priority: 1,
        },
    ],

    options: {
        showSurface: true,
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
        sectionId: "sistemas-no-inerciales-intro",
        conceptId: "fuerza-ficticia",
        label: {
            es: "Sistemas no inerciales · fuerza ficticia",
            en: "Non-inertial frames · fictitious force",
        },
    },

    interpretation: {
        header_bridge: {
            es: "En un sistema no inercial aparece una fuerza ficticia proporcional a la aceleración del marco: F_{fict} = −m · a_{marco}. No tiene agente físico.",
            en: "In a non-inertial frame a fictitious force proportional to the frame's acceleration appears: F_{fict} = −m · a_{frame}. It has no physical agent.",
        },
        reading_focus: {
            es: "Observa que la fuerza ficticia (trazada en tono atenuado) apunta en sentido opuesto a la aceleración del marco. Las fuerzas reales —peso y normal— siguen presentes con sus causas físicas habituales.",
            en: "Notice that the fictitious force (drawn in muted tone) points opposite to the frame's acceleration. The real forces—weight and normal—remain present with their usual physical causes.",
        },
        graph_role: {
            es: "Distinguir visualmente entre fuerzas reales (interacciones físicas verificables) y la fuerza ficticia (artefacto matemático del cambio de marco).",
            en: "Visually distinguish between real forces (verifiable physical interactions) and the fictitious force (mathematical artifact of the frame change).",
        },
        calc_reading: {
            es: "La segunda ley en el marco no inercial toma la forma: ΣF_{reales} + F_{fict} = m · a_{rel}. Si a_{rel} = 0 en el marco, ΣF_{reales} = m · a_{marco}, que reproduce el resultado inercial visto desde afuera.",
            en: "The second law in the non-inertial frame takes the form: ΣF_{real} + F_{fict} = m · a_{rel}. If a_{rel} = 0 in the frame, ΣF_{real} = m · a_{frame}, which reproduces the inertial result seen from outside.",
        },
        graph_reading: {
            es: "Si en el diagrama solo aparecen las fuerzas reales (sin la fuerza ficticia), el cuerpo parece acelerarse sin causa: ese es el error típico al aplicar F = ma sin corregir el marco.",
            en: "If only the real forces appear in the diagram (without the fictitious force), the body seems to accelerate without cause: that is the typical error when applying F = ma without correcting for the frame.",
        },
        physical_insight: {
            es: "La fuerza ficticia no es una fuerza real: ningún agente la ejerce, no cumple la tercera ley de Newton y desaparece en cualquier sistema inercial. Es el precio que pagamos por querer usar F = ma dentro de un marco que acelera. Comprender esto es la diferencia conceptual entre describir el movimiento (cinemática relativa) y explicarlo dinámicamente (segunda ley con corrección no inercial).",
            en: "The fictitious force is not a real force: no agent exerts it, it does not obey Newton's third law, and it vanishes in any inertial frame. It is the price we pay for wanting to use F = ma inside an accelerating frame. Understanding this is the conceptual difference between describing motion (relative kinematics) and explaining it dynamically (second law with non-inertial correction).",
        },
        likely_errors: {
            es: [
                "Tratar la fuerza ficticia como si tuviera un agente físico real.",
                "Incluir la fuerza ficticia en el DCL de un sistema inercial.",
                "Confundir la fuerza ficticia con la reacción de la tercera ley.",
                "Omitir la fuerza ficticia al aplicar la segunda ley en un marco acelerado.",
                "Pensar que la fuerza ficticia 'empuja' al cuerpo en lugar de ser un artefacto de cambio de marco.",
            ],
            en: [
                "Treating the fictitious force as if it had a real physical agent.",
                "Including the fictitious force in the FBD of an inertial frame.",
                "Confusing the fictitious force with the third-law reaction.",
                "Omitting the fictitious force when applying the second law in an accelerated frame.",
                "Thinking the fictitious force 'pushes' the body instead of being a frame-change artifact.",
            ],
        },
    },
};

export default sistemasNoInerialesProfile;
