import { cn } from '@/lib/cn'

type SectionRuleProps = {
  className?: string
  /** Ancho máximo del trazo */
  maxWidth?: string
}

/** Rule horizontal estilo logo: línea — punto — línea (dorado). */
export default function SectionRule({ className, maxWidth = '12rem' }: SectionRuleProps) {
  return (
    <div
      className={cn('flex items-center gap-3 text-brand-gold', className)}
      style={{ maxWidth }}
      aria-hidden
    >
      <span className="h-px flex-1 bg-brand-gold/70" />
      <span className="h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
      <span className="h-px flex-1 bg-brand-gold/70" />
    </div>
  )
}
