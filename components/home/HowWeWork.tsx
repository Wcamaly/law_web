// components/home/HowWeWork.tsx
const steps = [
  {
    number: '01',
    icon: '📞',
    title: 'Consulta',
    description:
      'Nos contactás por WhatsApp o email. Primera consulta sin costo para entender tu situación.',
  },
  {
    number: '02',
    icon: '📋',
    title: 'Análisis',
    description:
      'Estudiamos tu caso en detalle, evaluamos las posibilidades y te explicamos el panorama con claridad.',
  },
  {
    number: '03',
    icon: '⚖️',
    title: 'Estrategia',
    description:
      'Definimos el mejor camino legal: negociación, mediación o juicio según tu caso y tus objetivos.',
  },
  {
    number: '04',
    icon: '✅',
    title: 'Resultado',
    description:
      'Ejecutamos la estrategia y te mantenemos informado en cada etapa hasta obtener el mejor resultado.',
  },
]

export default function HowWeWork() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1e3a5f]/40 mb-3">
            Proceso
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1e3a5f]">
            Cómo trabajamos
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#f8f9fa] text-3xl mb-4">
                {step.icon}
              </div>
              <div className="text-xs font-bold text-[#1e3a5f]/30 mb-1 tracking-widest">
                {step.number}
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1e3a5f] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
