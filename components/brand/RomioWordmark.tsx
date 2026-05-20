import { cn } from '@/lib/cn'
import { t } from '@/i18n'

type RomioWordmarkProps = {
  className?: string
  /** compact = navbar; hero = sección; footer = bloque medio; display = pie gigante editorial */
  variant?: 'compact' | 'hero' | 'footer' | 'display'
}

/**
 * Wordmark editorial inspirado en el logo (ROMIO + Y ASOCIADOS + rule + ABOGADOS).
 */
export default function RomioWordmark({
  className,
  variant = 'footer',
}: RomioWordmarkProps) {
  if (variant === 'display') {
    return (
      <div className={cn('pointer-events-none text-center font-serif text-current', className)}>
        <p className="text-[clamp(3.5rem,14vw,9rem)] font-bold leading-none tracking-[0.04em] text-white/[0.14]">
          {t('common.brand.wordmark.romio')}
        </p>
        <div className="mx-auto mt-4 flex max-w-md items-center justify-center gap-3 text-brand-gold/70">
          <span className="h-px flex-1 bg-brand-gold/60" />
          <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.35em] text-brand-gold/90">
            {t('common.brand.wordmark.yAsociados')}
          </span>
          <span className="h-px flex-1 bg-brand-gold/60" />
        </div>
        <p className="mt-3 font-sans text-[10px] font-medium uppercase tracking-[0.42em] text-white/40">
          {t('common.brand.wordmark.abogadosUpper')}
        </p>
      </div>
    )
  }

  const title = cn(
    'leading-tight font-bold tracking-[0.08em]',
    variant === 'compact' && 'text-sm md:text-base',
    variant === 'hero' && 'text-2xl md:text-3xl',
    variant === 'footer' && 'text-[clamp(1.5rem,4vw,2.5rem)]',
  )

  const sub = cn(
    'mt-1 font-sans font-semibold uppercase text-brand-gold',
    variant === 'compact' && 'text-[8px] tracking-[0.32em]',
    variant === 'hero' && 'text-[10px] tracking-[0.28em]',
    variant === 'footer' && 'text-xs tracking-[0.26em] md:text-sm',
  )

  const abog = cn(
    'font-sans font-medium uppercase opacity-90',
    variant === 'compact' && 'text-[7px] tracking-[0.4em]',
    variant === 'hero' && 'text-[9px] tracking-[0.38em]',
    variant === 'footer' && 'text-[10px] tracking-[0.36em] md:text-xs',
  )

  return (
    <div className={cn('text-center font-serif text-current', className)}>
      <p className={title}>{t('common.brand.wordmark.romio')}</p>
      <p className={sub}>{t('common.brand.wordmark.yAsociadosRule')}</p>
      <div
        className="mx-auto my-3 h-px max-w-[min(90%,20rem)] bg-brand-gold/40"
        aria-hidden
      />
      <p className={abog}>{t('common.brand.wordmark.abogadosUpper')}</p>
    </div>
  )
}
