import { cn } from '@/lib/cn'

export type EditorialEyebrowTone = 'gold' | 'navy' | 'gold-on-dark'

type EditorialEyebrowProps = {
  label: string
  numeral?: string
  align?: 'left' | 'center'
  tone?: EditorialEyebrowTone
  className?: string
  /** Override label color / tracking (e.g. SectionHeader `eyebrowClassName`) */
  labelClassName?: string
}

const labelTone: Record<EditorialEyebrowTone, string> = {
  /** Dorado sobre fondos claros (cream / blanco) */
  gold: 'text-brand-gold/80',
  navy: 'text-brand-navy/60',
  'gold-on-dark': 'text-white/85',
}

export default function EditorialEyebrow({
  label,
  numeral,
  align = 'left',
  tone = 'navy',
  className,
  labelClassName,
}: EditorialEyebrowProps) {
  return (
    <div
      className={cn(
        'flex flex-wrap items-center gap-x-3 gap-y-1',
        align === 'center' && 'justify-center text-center',
        className,
      )}
    >
      <span
        className="h-px w-8 shrink-0 bg-brand-gold/75 md:w-10"
        aria-hidden
      />
      {numeral ? (
        <span className="font-serif text-lg font-bold leading-none text-brand-gold md:text-xl">
          {numeral}
        </span>
      ) : null}
      <span
        className={cn(
          'text-[11px] font-semibold uppercase tracking-[0.3em]',
          labelTone[tone],
          labelClassName,
        )}
      >
        {label}
      </span>
    </div>
  )
}
