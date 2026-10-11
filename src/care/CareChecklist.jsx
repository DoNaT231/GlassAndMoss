import { useState } from "react";
import { checklistItems } from "./guideData";

export default function CareChecklist() {
  const [checked, setChecked] = useState(() => checklistItems.map(() => false));
  const done = checked.filter(Boolean).length;
  const progress = Math.round((done / checklistItems.length) * 100);

  function toggle(index) {
    setChecked((current) => current.map((value, i) => (i === index ? !value : value)));
  }

  function reset() {
    setChecked(checklistItems.map(() => false));
  }

  return (
    <div className="max-w-[46rem]">
      <div className="flex items-end justify-between gap-4">
        <p className="type-small">
          {done} / {checklistItems.length} teljesült
        </p>
        <button
          type="button"
          onClick={reset}
          className="type-small text-[#A3B86C] underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A3B86C]"
        >
          Újrakezdés
        </button>
      </div>
      <div
        className="mt-3 h-px bg-white/15"
        role="progressbar"
        aria-valuenow={done}
        aria-valuemin={0}
        aria-valuemax={checklistItems.length}
        aria-label="Ellenőrzőlista állapota"
      >
        <div className="h-px bg-[#A3B86C] motion-reduce:transition-none" style={{ width: `${progress}%` }} />
      </div>
      <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
        {checklistItems.map((item, index) => {
          const id = `care-check-${index}`;
          return (
            <li key={item}>
              <label htmlFor={id} className="flex cursor-pointer items-start gap-4 py-4">
                <input
                  id={id}
                  type="checkbox"
                  checked={checked[index]}
                  onChange={() => toggle(index)}
                  className="mt-1 h-4 w-4 shrink-0 accent-[#8FAE3C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A3B86C]"
                />
                <span className={`type-body ${checked[index] ? "text-white/45" : ""}`}>{item}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
