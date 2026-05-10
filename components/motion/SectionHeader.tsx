'use client'

import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'
import EditorialEyebrow, {
  type EditorialEyebrowTone,
} from '@/components/brand/EditorialEyebrow'
import { cn } from '@/lib/cn'

export type { EditorialEyebrowTone }

type SectionHeaderProps = {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  className?: string
  eyebrowClassName?: string
  align?: 'left' | 'center'
  numeral?: string
  tone?: EditorialEyebrowTone
  /** Accent color for animated underline (Tailwind class fragment or hex via style) */
  underlineClassName?: string
  showUnderline?: boolean
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  eyebrowClassName,
  align = 'left',
  numeral,
  tone = 'navy',
  underlineClassName = 'bg-brand-gold',
  showUnderline = true,
}: SectionHeaderProps) {
  const reduced = useReducedMotion()

  return (
    <div
      className={cn(
        align === 'center' && 'text-center',
        className,
      )}
    >
      <div className="mb-3">
        <EditorialEyebrow
          label={eyebrow}
          numeral={numeral}
          align={align}
          tone={tone}
          labelClassName={eyebrowClassName}
        />
      </div>
      <h2
        className={cn(
          'font-serif relative inline-block text-3xl font-bold text-brand-navy md:text-4xl',
          align === 'center' && 'mx-auto block',
        )}
      >
        {title}
        {showUnderline && (
          <motion.span
            className={cn(
              'absolute -bottom-2 left-0 h-0.5 rounded-full',
              underlineClassName,
              align === 'center' && 'left-1/2 -translate-x-1/2',
            )}
            initial={{ width: 0 }}
            whileInView={{ width: align === 'center' ? 60 : 72 }}
            viewport={{ once: true }}
            transition={
              reduced
                ? { duration: 0 }
                : { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.12 }
            }
          />
        )}
      </h2>
      {description && (
        <div
          className={cn(
            'mt-6 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </div>
      )}
    </div>
  )
}
