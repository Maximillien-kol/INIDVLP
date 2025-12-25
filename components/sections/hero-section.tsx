import { HeroContent } from "@/components/sections/hero-content"
import { PartnerLogos } from "@/components/sections/partner-logos"

const partners = [
  { name: "iniopportunity", logo: "/iniopportunity.png" },
  { name: "pillarh", logo: "/pillarh.png" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-bg.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-[#4a6b8a]/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-between px-8 lg:px-16 pt-32 pb-12 mx-4 lg:mx-[100px]">
        <div className="flex-1 flex items-center">
          <HeroContent
            tagline="WE ARE INI DEVELOPMENT"
            headline="Digital Development Partner "
            description="We design and develop reliable web platforms for SMEs and large organizations that need stability, clarity, and room to grow."
            ctaText="START A PROJECT"
            ctaHref="/get-started"
          />
        </div>

        {/* Partner Logos */}
        <div className="flex justify-end">
          <PartnerLogos partners={partners} />
        </div>
      </div>
    </section>
  )
}
