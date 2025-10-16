"use client";

type Props = {
  raag?: string;
  aroha?: string[];
  avaroha?: string[];
};

const SWARAS = ["Sa","re/RE","Re","ga/GA","Ga","Ma","ma","Pa","dha/DHA","Dha","ni/NI","Ni","Sa'"];

export default function RagaViz({ raag, aroha, avaroha }: Props) {
  return (
    <div className="card" aria-label="Rāga visualizer">
      <strong>{raag || "Rāga"}</strong>
      <svg viewBox="0 0 320 60" width="100%" height="80">
        {SWARAS.map((s, i) => (
          <g key={i} transform={`translate(${10 + i*24}, 10)`}>
            <circle r="8" cx="0" cy="20" />
            <text x="-8" y="44" fontSize="8">{s}</text>
          </g>
        ))}
      </svg>
      {aroha && <div><em>Āroh:</em> {aroha.join(" - ")}</div>}
      {avaroha && <div><em>Avaroha:</em> {avaroha.join(" - ")}</div>}
    </div>
  );
}
