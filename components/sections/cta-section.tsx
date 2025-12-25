import { CTAButton } from "@/components/ui/cta-button"
import { ArrowUpRight } from "lucide-react"

export function CTASection() {
    return (
        <section className="relative min-h-[200px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage: `url('/pic.jpg')`,
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#2c4a5e]/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-8 lg:px-16 py-20 mx-4 lg:mx-[100px]">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 max-w-4xl mx-auto leading-tight">
                    Let’s talk about your dream project?
                </h2>

                <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                    Low engagement? Poor conversions? Let us help identify the user experience friction points on your site
                </p>

                <div className="flex justify-center">
                    <CTAButton
                        href="/contact"
                        variant="primary"
                        size="md"
                        icon={ArrowUpRight}
                        className="uppercase tracking-wider text-sm font-semibold"
                    >
                        START A PROJECT
                    </CTAButton>
                </div>
            </div>
        </section>
    )
}
