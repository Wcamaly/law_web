// components/home/AboutSection.tsx
const metrics = [
  { value: '+10', label: 'Años de experiencia' },
  { value: '+500', label: 'Casos resueltos' },
  { value: '5', label: 'Áreas de práctica' },
]

const values = ['Compromiso', 'Claridad', 'Resultados']

export default function AboutSection() {
  return (
    <section
      id="nosotros"
      className="bg-[#1e3a5f] text-white py-20 px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
              Nosotros
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Un equipo comprometido<br />con cada caso.
            </h2>
            <p className="text-white/70 leading-relaxed mb-6 text-base">
              Romio &amp; Asociados es un estudio jurídico con base en Mar del Plata.
              Trabajamos como equipo en cada caso, combinando experiencia en diversas
              ramas del derecho para ofrecer una solución integral y eficiente.
              No tomamos más casos de los que podemos atender bien.
            </p>
            <div className="flex flex-wrap gap-3">
              {values.map((v) => (
                <span
                  key={v}
                  className="text-xs font-bold uppercase tracking-wider border border-white/20 rounded-full px-4 py-1.5 text-white/60"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-6 text-center">
            {metrics.map((m) => (
              <div key={m.label}>
                <div className="font-serif text-4xl md:text-5xl font-bold text-white mb-2">
                  {m.value}
                </div>
                <div className="text-xs text-white/50 leading-tight">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
