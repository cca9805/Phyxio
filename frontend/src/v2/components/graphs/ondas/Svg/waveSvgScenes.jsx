const COLORS = {
  ink: "#172033",
  muted: "#5f6c7b",
  axis: "#94a3b8",
  blue: "#2563eb",
  cyan: "#0891b2",
  green: "#16a34a",
  amber: "#d97706",
  red: "#dc2626",
  violet: "#7c3aed",
  fillBlue: "#dbeafe",
  fillCyan: "#cffafe",
  fillAmber: "#fef3c7",
  fillRed: "#fee2e2",
};

const n = (value, fallback) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const format = (fmt, value, digits = 2) =>
  typeof fmt === "function" ? fmt(value, digits) : Number(value).toFixed(digits);

const sinePath = ({ x0 = 80, y0 = 240, width = 620, amp = 55, cycles = 3, samples = 96, phase = 0 }) => {
  const points = Array.from({ length: samples + 1 }, (_, i) => {
    const x = x0 + (width * i) / samples;
    const y = y0 - amp * Math.sin((2 * Math.PI * cycles * i) / samples + phase);
    return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
  });
  return points.join(" ");
};

const ArrowDefs = ({ id }) => (
  <defs>
    <marker id={`${id}-arrow`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.ink} />
    </marker>
    <marker id={`${id}-blue-arrow`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.blue} />
    </marker>
    <marker id={`${id}-green-arrow`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill={COLORS.green} />
    </marker>
  </defs>
);

export function renderWavelengthScene({ p = {}, lang = "es", fmt }) {
  const tt = (es, en) => (lang === "en" ? en : es);
  const lambda = n(p.lambda, 2);
  const deltaX = n(p.Delta_x, 6);
  const cycles = Math.max(1, Math.round(n(p.n, 3)));
  const xA = 160;
  const lambdaPx = 150;
  const xB = xA + lambdaPx;
  const xEnd = xA + Math.min(4, cycles) * lambdaPx;
  return (
    <>
      <ArrowDefs id="wavelength" />
      <rect x="48" y="70" width="754" height="360" rx="18" fill="#f8fafc" stroke="#d7dee8" />
      <line x1="90" y1="260" x2="760" y2="260" stroke={COLORS.axis} strokeWidth="2" />
      <path d={sinePath({ x0: 100, y0: 260, width: 650, amp: 62, cycles: 4 })} fill="none" stroke={COLORS.blue} strokeWidth="5" />
      <line x1={xA} y1="135" x2={xA} y2="360" stroke={COLORS.red} strokeWidth="2.5" strokeDasharray="7 7" />
      <line x1={xB} y1="135" x2={xB} y2="360" stroke={COLORS.red} strokeWidth="2.5" strokeDasharray="7 7" />
      <line x1={xA} y1="372" x2={xB} y2="372" stroke={COLORS.ink} strokeWidth="2.5" markerStart="url(#wavelength-arrow)" markerEnd="url(#wavelength-arrow)" />
      <text x={(xA + xB) / 2} y="402" textAnchor="middle" fill={COLORS.ink} fontSize="22" fontWeight="700">
        lambda = {format(fmt, lambda, 2)}
      </text>
      <line x1={xA} y1="105" x2={xEnd} y2="105" stroke={COLORS.green} strokeWidth="2.5" markerStart="url(#wavelength-green-arrow)" markerEnd="url(#wavelength-green-arrow)" />
      <text x={(xA + xEnd) / 2} y="92" textAnchor="middle" fill={COLORS.green} fontSize="19" fontWeight="700">
        Delta_x = {format(fmt, deltaX, 2)} ; n = {cycles}
      </text>
      <circle cx={xA} cy="198" r="7" fill={COLORS.red} />
      <circle cx={xB} cy="198" r="7" fill={COLORS.red} />
      <text x="90" y="455" fill={COLORS.muted} fontSize="18">
        {tt("Dos estados equivalentes separados por una longitud de onda.", "Two equivalent states separated by one wavelength.")}
      </text>
    </>
  );
}

export function renderPropagationSpeedScene({ p = {}, lang = "es", fmt }) {
  const tt = (es, en) => (lang === "en" ? en : es);
  const v = n(p.v, 2.4);
  const dx = n(p.Delta_x, 2.4);
  const dt = n(p.Delta_t, 1);
  const phaseShift = 0.75;
  return (
    <>
      <ArrowDefs id="propagation-speed" />
      <rect x="48" y="68" width="754" height="365" rx="18" fill="#f8fafc" stroke="#d7dee8" />
      <text x="88" y="112" fill={COLORS.ink} fontSize="20" fontWeight="700">{tt("Misma fase en dos instantes", "Same phase at two instants")}</text>
      <line x1="90" y1="220" x2="760" y2="220" stroke={COLORS.axis} strokeWidth="2" />
      <path d={sinePath({ x0: 95, y0: 220, width: 610, amp: 48, cycles: 3 })} fill="none" stroke={COLORS.blue} strokeWidth="4" />
      <path d={sinePath({ x0: 95, y0: 305, width: 610, amp: 48, cycles: 3, phase: -phaseShift })} fill="none" stroke={COLORS.cyan} strokeWidth="4" />
      <text x="715" y="214" fill={COLORS.blue} fontSize="17" fontWeight="700">t</text>
      <text x="715" y="300" fill={COLORS.cyan} fontSize="17" fontWeight="700">t + Delta_t</text>
      <circle cx="248" cy="172" r="7" fill={COLORS.blue} />
      <circle cx="338" cy="257" r="7" fill={COLORS.cyan} />
      <line x1="248" y1="142" x2="338" y2="142" stroke={COLORS.green} strokeWidth="3" markerStart="url(#propagation-speed-green-arrow)" markerEnd="url(#propagation-speed-green-arrow)" />
      <line x1="248" y1="150" x2="248" y2="330" stroke={COLORS.axis} strokeWidth="2" strokeDasharray="6 6" />
      <line x1="338" y1="150" x2="338" y2="330" stroke={COLORS.axis} strokeWidth="2" strokeDasharray="6 6" />
      <text x="293" y="130" textAnchor="middle" fill={COLORS.green} fontSize="18" fontWeight="700">Delta_x = {format(fmt, dx, 2)}</text>
      <text x="92" y="382" fill={COLORS.ink} fontSize="22" fontWeight="700">v = Delta_x / Delta_t = {format(fmt, v, 2)}</text>
      <text x="92" y="410" fill={COLORS.muted} fontSize="17">{tt("La rapidez sigue una cresta, valle o frente reconocible.", "Speed follows a recognizable crest, trough, or front.")}</text>
    </>
  );
}

export function renderTransverseLongitudinalScene({ p = {}, lang = "es", fmt }) {
  const tt = (es, en) => (lang === "en" ? en : es);
  const ct = n(p.C_T, 0.9);
  const cl = n(p.C_L, 0.8);
  return (
    <>
      <ArrowDefs id="wave-orientation" />
      <rect x="48" y="62" width="754" height="390" rx="18" fill="#f8fafc" stroke="#d7dee8" />
      <line x1="100" y1="170" x2="740" y2="170" stroke={COLORS.axis} strokeWidth="2" />
      <path d={sinePath({ x0: 110, y0: 170, width: 575, amp: 44, cycles: 2.5 })} fill="none" stroke={COLORS.violet} strokeWidth="4" />
      <line x1="182" y1="170" x2="182" y2="118" stroke={COLORS.violet} strokeWidth="3" markerEnd="url(#wave-orientation-arrow)" />
      <line x1="100" y1="90" x2="220" y2="90" stroke={COLORS.blue} strokeWidth="3" markerEnd="url(#wave-orientation-blue-arrow)" />
      <text x="245" y="95" fill={COLORS.blue} fontSize="17">{tt("propagacion", "propagation")}</text>
      <text x="100" y="130" fill={COLORS.violet} fontSize="18" fontWeight="700">{tt("Transversal: perturbacion perpendicular", "Transverse: perpendicular disturbance")}</text>
      <line x1="100" y1="330" x2="740" y2="330" stroke={COLORS.axis} strokeWidth="2" />
      {[0, 1, 2, 3, 4, 5].map((group) => (
        <g key={group}>
          <rect x={115 + group * 98} y="285" width={group % 2 ? 42 : 22} height="90" fill={group % 2 ? COLORS.fillRed : COLORS.fillBlue} opacity="0.8" />
          {Array.from({ length: group % 2 ? 6 : 3 }, (_, i) => (
            <circle key={i} cx={126 + group * 98 + i * 6} cy={330 + ((i % 2) - 0.5) * 30} r="5" fill={group % 2 ? COLORS.red : COLORS.cyan} />
          ))}
        </g>
      ))}
      <line x1="184" y1="392" x2="235" y2="392" stroke={COLORS.green} strokeWidth="3" markerEnd="url(#wave-orientation-green-arrow)" />
      <text x="100" y="280" fill={COLORS.green} fontSize="18" fontWeight="700">{tt("Longitudinal: perturbacion paralela", "Longitudinal: parallel disturbance")}</text>
      <text x="96" y="430" fill={COLORS.ink} fontSize="18" fontWeight="700">C_T = {format(fmt, ct, 2)} ; C_L = {format(fmt, cl, 2)}</text>
    </>
  );
}

export function renderWaveEnergyScene({ p = {}, lang = "es", fmt }) {
  const tt = (es, en) => (lang === "en" ? en : es);
  const amplitude = n(p.amplitud ?? p.A, 0.08);
  const omega = n(p.omega, 12);
  const energy = n(p.u_energia ?? p.energia_de_la_onda ?? p.E_onda, amplitude * amplitude * omega * omega);
  return (
    <>
      <ArrowDefs id="wave-energy" />
      <rect x="50" y="66" width="750" height="370" rx="18" fill="#f8fafc" stroke="#d7dee8" />
      <path d={`${sinePath({ x0: 100, y0: 240, width: 610, amp: 62, cycles: 3 })} L 710 240 L 100 240 Z`} fill={COLORS.fillAmber} opacity="0.75" />
      <path d={sinePath({ x0: 100, y0: 240, width: 610, amp: 62, cycles: 3 })} fill="none" stroke={COLORS.amber} strokeWidth="5" />
      <line x1="118" y1="240" x2="118" y2="178" stroke={COLORS.red} strokeWidth="3" markerEnd="url(#wave-energy-arrow)" />
      <text x="132" y="206" fill={COLORS.red} fontSize="18" fontWeight="700">A = {format(fmt, amplitude, 2)}</text>
      {[0.22, 0.38, 0.52, 0.7, 0.86].map((ratio, i) => (
        <rect key={i} x={105 + i * 122} y={380 - ratio * 82} width="58" height={ratio * 82} rx="8" fill={i % 2 ? COLORS.amber : COLORS.red} opacity="0.78" />
      ))}
      <text x="92" y="110" fill={COLORS.ink} fontSize="22" fontWeight="700">{tt("Energia distribuida en el medio", "Energy distributed through the medium")}</text>
      <text x="92" y="142" fill={COLORS.muted} fontSize="17">{tt("La energia crece con el cuadrado de la amplitud y de la frecuencia angular.", "Energy grows with the square of amplitude and angular frequency.")}</text>
      <text x="92" y="415" fill={COLORS.ink} fontSize="20" fontWeight="700">u ~ A^2 omega^2 ; omega = {format(fmt, omega, 2)} ; u = {format(fmt, energy, 2)}</text>
    </>
  );
}

export function renderReflectionScene({ p = {}, lang = "es", fmt }) {
  const tt = (es, en) => (lang === "en" ? en : es);
  const theta = n(p.theta_i ?? p.theta_r, Math.PI / 5);
  const reflectance = Math.max(0, Math.min(1, n(p.R_reflectancia, 0.65)));
  const angleDeg = theta > Math.PI ? theta : (theta * 180) / Math.PI;
  return (
    <>
      <ArrowDefs id="reflection" />
      <rect x="52" y="66" width="746" height="370" rx="18" fill="#f8fafc" stroke="#d7dee8" />
      <line x1="425" y1="105" x2="425" y2="405" stroke={COLORS.axis} strokeWidth="3" strokeDasharray="8 7" />
      <text x="438" y="124" fill={COLORS.muted} fontSize="17">{tt("normal", "normal")}</text>
      <line x1="150" y1="360" x2="425" y2="255" stroke={COLORS.blue} strokeWidth="5" markerEnd="url(#reflection-blue-arrow)" />
      <line x1="425" y1="255" x2="700" y2="360" stroke={COLORS.green} strokeWidth="5" markerEnd="url(#reflection-green-arrow)" opacity={0.45 + reflectance * 0.55} />
      <line x1="110" y1="255" x2="742" y2="255" stroke={COLORS.ink} strokeWidth="4" />
      <path d="M 425 255 A 68 68 0 0 0 358 280" fill="none" stroke={COLORS.blue} strokeWidth="2.5" />
      <path d="M 425 255 A 68 68 0 0 1 492 280" fill="none" stroke={COLORS.green} strokeWidth="2.5" />
      <text x="318" y="302" fill={COLORS.blue} fontSize="18" fontWeight="700">theta_i</text>
      <text x="508" y="302" fill={COLORS.green} fontSize="18" fontWeight="700">theta_r</text>
      <text x="92" y="112" fill={COLORS.ink} fontSize="22" fontWeight="700">{tt("Ley de reflexion", "Law of reflection")}</text>
      <text x="92" y="145" fill={COLORS.muted} fontSize="17">{tt("El angulo reflejado se mide desde la misma normal.", "The reflected angle is measured from the same normal.")}</text>
      <rect x="92" y="392" width="180" height="16" rx="8" fill={COLORS.fillRed} />
      <rect x="92" y="392" width={180 * reflectance} height="16" rx="8" fill={COLORS.red} />
      <text x="290" y="406" fill={COLORS.ink} fontSize="18" fontWeight="700">
        theta = {format(fmt, angleDeg, 1)} deg ; R = {format(fmt, reflectance, 2)}
      </text>
    </>
  );
}
