"use client"

export function VisionMissionSection() {
    return (
        <section className="bg-white px-8 lg:px-16 py-20 mx-4 lg:mx-[100px]">
            <div className="space-y-20">
                {/* Vision Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* Left: Label */}
                    <div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light whitespace-nowrap">
                            <span className="text-[#1C1C1C]">OUR VISION</span>
                        </h2>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-normal text-[#1C1C1C]">
                            Delivering Impact Through Digital Innovation
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            We envision a world where digital development is not just a service, but a driver of progress and efficiency. Through innovation and reliability, we aim to simplify digital transformation across industries. Our commitment is to make technology smarter, faster, and more sustainable.
                        </p>
                    </div>
                </div>

                {/* Mission Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* Left: Label */}
                    <div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light whitespace-nowrap">
                            <span className="text-[#1C1C1C]">OUR MISSION</span>
                        </h2>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-normal text-[#1C1C1C]">
                            Building Solutions, Empowering Growth
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Our mission is to provide tailored digital solutions that we can adapt to diverse business needs. We focus on operational excellence, real-time collaboration, and long-term partnerships. By optimizing every aspect of development, we help clients achieve scalable, measurable growth.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
