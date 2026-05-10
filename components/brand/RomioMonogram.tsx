import { cn } from '@/lib/cn'

/** Marca de agua / navbar: monograma RA con balanza (currentColor). */
export default function RomioMonogram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      aria-hidden
    >
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path strokeWidth="1.3" d="M4 32V14M4 14h7M4 14l-2.5 5M11 14l2.5 5M6.5 19h3" />
        <path strokeWidth="1.1" d="M6 32h28" opacity="0.85" />
      </g>
      <text
        x="14"
        y="30"
        fontSize="22"
        fontFamily="Georgia, serif"
        fontWeight="700"
        fill="currentColor"
      >
        R
      </text>
      <text
        x="24"
        y="30"
        fontSize="17"
        fontFamily="Georgia, serif"
        fontWeight="700"
        fill="currentColor"
        opacity="0.88"
      >
        A
      </text>
    </svg>
  )
}
