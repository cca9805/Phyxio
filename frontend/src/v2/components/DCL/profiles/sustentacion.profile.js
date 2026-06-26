// frontend/src/v2/components/DCL/profiles/sustentacion.profile.js
//
// Profile DCL para: sustentacion (Nivel 5 v5)
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

const sustentacionProfile = {
    scene: DCL_SCENE_IDS.PARTICLE_FREE,
    question: DCL_QUESTION_TYPES.FORCE_BALANCE,
    lang: "es",

    meta: {
        id: "dcl-sustentacion",
        title: {
            es: "DCL · Sustentación aerodinámica — fuerzas sobre el ala",
            en: "FBD · Aerodynamic lift — forces on the wing",
        },
        smartHeader: {
            es: "Fuerzas en el ala · Bernoulli aplicado",
            en: "Wing forces · Applied Bernoulli",
        },
        leafId: "sustentacion",
        question: {
            es: "¿Qué fuerzas actúan sobre el ala y cómo se equilibran en vuelo nivelado?",
            en: "What forces act on the wing and how do they balance in level flight?",
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
        // ── Sustentación L — sube ────────────────────────────────────
        {
            id: "lift_force",
            type: DCL_VECTOR_TYPE_IDS.APPLIED_FORCE,
            bodyId: "body_wing",
            magnitudeId: "L",
            label: {
                es: "Sustentación L",
                en: "Lift L",
            },
            symbol: "L",
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

        // ── Arrastre D — opuesto al movimiento ───────────────────────
        {
            id: "drag_force",
            type: DCL_VECTOR_TYPE_IDS.DRAG,
            bodyId: "body_wing",
            magnitudeId: "D",
            label: {
                es: "Arrastre D",
                en: "Drag D",
            },
            symbol: "D",
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
            id: "note_bernoulli",
            text: {
                es: "Ext.: v↑ → p↓  ·  Int.: v↓ → p↑  →  Δp = ½ρ(v_sup² − v_inf²)",
                en: "Upper: v↑ → p↓  ·  Lower: v↓ → p↑  →  Δp = ½ρ(v_sup² − v_inf²)",
            },
            visible: true,
            priority: 2,
        },
        {
            id: "note_balance",
            text: {
                es: "Vuelo nivelado: L = W  ·  Crucero: T = D",
                en: "Level flight: L = W  ·  Cruise: T = D",
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
        sectionId: "sustentacion",
        conceptId: "diferencia-de-presiones",
        label: {
            es: "Sustentación · diferencia de presiones vía Bernoulli",
            en: "Lift · pressure difference via Bernoulli",
        },
    },

    interpretation: {
        header_bridge: {
            es: "El ala está en equilibrio dinámico: la fuerza hacia arriba (L) cancela el peso, y el empuje cancela el arrastre.",
            en: "The wing is in dynamic equilibrium: the upward force (L) cancels weight, and thrust cancels drag.",
        },
        reading_focus: {
            es: "En vuelo nivelado a velocidad constante los cuatro vectores forman dos pares equilibrados: L↑ = W↓ y T→ = D←. Si L > W el avión asciende; si L < W desciende.",
            en: "In level flight at constant speed the four vectors form two balanced pairs: L↑ = W↓ and T→ = D←. If L > W the aircraft climbs; if L < W it descends.",
        },
        graph_role: {
            es: "Mostrar visualmente el balance de las cuatro fuerzas fundamentales del vuelo y la condición de equilibrio que define el vuelo nivelado.",
            en: "Visually show the balance of the four fundamental flight forces and the equilibrium condition that defines level flight.",
        },
        calc_reading: {
            es: "La condición L = mg permite despejar la velocidad mínima de vuelo: v_min = √(2mg / ρSC_L). Aumentar C_L (flaps) reduce v_min y permite despegar más lento.",
            en: "The condition L = mg allows solving for minimum flight speed: v_min = √(2mg / ρSC_L). Increasing C_L (flaps) reduces v_min and allows a slower take-off.",
        },
        graph_reading: {
            es: "La longitud del vector L representa la magnitud de la fuerza de sustentación. Si L = W, los vectores verticales tienen la misma longitud y sentidos opuestos: el avión no sube ni baja.",
            en: "The length of the L vector represents the lift force magnitude. If L = W, the vertical vectors have equal length and opposite directions: the aircraft neither climbs nor descends.",
        },
        physical_insight: {
            es: "La sustentación es la fuerza perpendicular al viento relativo, no necesariamente perpendicular al suelo. En viraje el vector L se inclina: su componente vertical sigue sosteniendo el avión, pero aparece una componente horizontal que curva la trayectoria. Por eso virar requiere aumentar L (mayor ángulo de ataque) para que la componente vertical siga siendo igual al peso.",
            en: "Lift is the force perpendicular to the relative wind, not necessarily perpendicular to the ground. In a turn, the L vector tilts: its vertical component still supports the aircraft, but a horizontal component curves the path. That is why turning requires increasing L (higher angle of attack) so the vertical component still equals the weight.",
        },
        likely_errors: {
            es: [
                "Creer que la sustentación siempre apunta verticalmente hacia arriba; en realidad apunta perpendicular al viento relativo.",
                "Confundir empuje (T, horizontal) con sustentación (L, perpendicular al flujo).",
                "Olvidar que en vuelo nivelado L = W y T = D simultáneamente.",
                "Pensar que más velocidad siempre mejora el vuelo sin considerar que a alta velocidad el arrastre D crece con v², aumentando el consumo de combustible.",
                "Creer que el ala genera sustentación aunque el fluido no se mueva (la sustentación requiere velocidad relativa).",
            ],
            en: [
                "Believing lift always points straight up; in reality it points perpendicular to the relative wind.",
                "Confusing thrust (T, horizontal) with lift (L, perpendicular to flow).",
                "Forgetting that in level flight L = W and T = D must hold simultaneously.",
                "Thinking more speed always improves flight without considering that at high speed drag D grows with v², increasing fuel consumption.",
                "Believing the wing generates lift even without relative fluid motion (lift requires relative velocity).",
            ],
        },
    },
};

export default sustentacionProfile;
