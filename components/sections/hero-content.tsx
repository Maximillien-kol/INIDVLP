import { CTAButton } from "@/components/ui/cta-button"

interface HeroContentProps {
  tagline: string
  headline: string
  description: string
  ctaText: string
  ctaHref: string
}

export function HeroContent({ tagline, headline, description, ctaText, ctaHref }: HeroContentProps) {
  return (
    <div className="max-w-xl">
      <p className="text-sm tracking-widest text-white/80 mb-6">{tagline}</p>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6 text-balance">
        {headline}
      </h1>
      <p className="text-white/70 text-base leading-relaxed mb-8 max-w-md">{description}</p>
      <CTAButton href={ctaHref}>{ctaText}</CTAButton>
    </div>
  )
}
