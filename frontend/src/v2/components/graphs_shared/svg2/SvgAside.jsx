import React from "react";

/**
 * SvgAside (v2)
 * Panel genérico de controles basado en schema.
 *
 * Props:
 * - title, description
 * - params
 * - onChange(partialParams)
 * - controls: [{ key, label, type, min, max, step, unit, options }]
 */
export default function SvgAside({
  title = "",
  description = "",
  params = {},
  onChange,
  controls = [],
  className = "",
}) {
  const set = (key, value) => {
    onChange?.({ [key]: value });
  };

  return (
    <aside className={`card p-3 ${className}`}>
      {title ? <div className="text-base font-semibold mb-1">{title}</div> : null}
      {description ? <div className="text-sm opacity-80 mb-3">{description}</div> : null}

      <div className="space-y-3">
        {controls.map((c) => {
          const v = params?.[c.key];

          const disabled =
            typeof c.disabled === "function" ? !!c.disabled(params) : !!c.disabled;

          if (c.type === "toggle") {
            const id = `v2chk-${c.key}`;
            return (
              <div key={c.key} className="v2-check-row">
                <label htmlFor={id} className="v2-check">
                  <input
                    id={id}
                    style={{ padding: 12 }}
                    type="checkbox"
                    checked={!!v}
                    disabled={disabled}
                    onChange={(e) => set(c.key, e.target.checked)}
                  />
                  <span className="v2-check-label">{c.label}</span>
                </label>

                {c.hint ? <div className="v2-check-hint">{c.hint}</div> : null}
              </div>
            );
          }

          if (c.type === "select") {
            return (
              <label key={c.key} className="block text-sm">
                <div className="opacity-90 mb-1">{c.label}</div>
                <select
                  className="w-full border rounded px-2 py-1"
                  value={v ?? ""}
                  disabled={disabled}
                  onChange={(e) => set(c.key, e.target.value)}
                >
                  {(c.options ?? []).map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </label>
            );
          }

          // number / range
          const inputType = c.type === "range" ? "range" : "number";
          return (
            <label key={c.key} className="block text-sm">
              <div className="flex items-baseline justify-between mb-1">
                <span className="opacity-90">{c.label}</span>
                <span className="opacity-70">
                  {String(v ?? "")}{c.unit ? ` ${c.unit}` : ""}
                </span>
              </div>
              <input
                className="w-full"
                type={inputType}
                value={v ?? ""}
                disabled={disabled}
                min={c.min}
                max={c.max}
                step={c.step}
                onChange={(e) => {
                  const raw = e.target.value;
                  const num = raw === "" ? "" : Number(String(raw).replace(",", "."));
                  set(c.key, Number.isFinite(num) ? num : raw);
                }}
              />
            </label>
          );
        })}
      </div>
    </aside>
  );
}
