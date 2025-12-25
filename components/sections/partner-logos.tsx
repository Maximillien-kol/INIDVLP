import Image from "next/image"

interface Partner {
  name: string
  logo: string
}

interface PartnerLogosProps {
  partners: Partner[]
}

export function PartnerLogos({ partners }: PartnerLogosProps) {
  return (
    <div className="flex flex-col items-center md:items-end">
      <p className="text-white/70 text-sm mb-4">Our Partner:</p>
      <div className="flex items-center gap-6">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="w-10 h-10 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
          >
            <Image
              src={partner.logo || "/placeholder.svg"}
              alt={partner.name}
              width={40}
              height={40}
              className="object-contain brightness-0 invert"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
