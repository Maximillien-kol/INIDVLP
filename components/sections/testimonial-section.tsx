"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface Testimonial {
    quote: string
    author: string
    title: string
    company: string
    avatar?: string
}

const testimonials: Testimonial[] = [
    {
        quote: "Working with INI Development was a transformative experience. Their eye for detail and ability to create mesmerizing digital solutions are unmatched. Every piece brought new depth and fascination.",
        author: "GWIZA U. Carine",
        title: "Creative Director",
        company: "Lightsource",
    },
    {
        quote: "The team at INI Development exceeded our expectations. Their technical expertise combined with creative problem-solving helped us launch our platform on time and within budget.",
        author: "BRIAN HILLSON",
        title: "Product Manager",
        company: "Dely",
    },
    {
        quote: "From concept to deployment, INI Development was a reliable partner. Their commitment to quality and attention to user experience made all the difference in our project's success.",
        author: "SHIMA Kimberly",
        title: "Founder & CEO",
        company: "Pillar-H",
    },
]

export function TestimonialSection() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const activeTestimonial = testimonials[activeIndex]

    // Auto-play carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true)

            setTimeout(() => {
                setActiveIndex((current) => (current + 1) % testimonials.length)
                setIsTransitioning(false)
            }, 500) // Half second for fade out
        }, 5000) // Change every 5 seconds

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="bg-white px-8 lg:px-16 py-20 mx-4 lg:mx-[100px]">
            <div className="max-w-7xl mx-auto">
                {/* Quote Mark */}
                <div className="mb-8">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-[#1C1C1C]">
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                    </svg>
                </div>

                {/* Testimonial Quote with Fade Transition */}
                <blockquote
                    className={`mb-12 transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'
                        }`}
                >
                    <p className="text-l md:text-4xl lg:text-5xl font-light leading-tight text-[#1C1C1C] mb-8">
                        {activeTestimonial.quote}
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                            {activeTestimonial.avatar ? (
                                <Image
                                    src={activeTestimonial.avatar}
                                    alt={activeTestimonial.author}
                                    width={48}
                                    height={48}
                                    className="object-cover"
                                />
                            ) : (
                                <span className="text-gray-500 text-xl font-medium">
                                    {activeTestimonial.author.charAt(0)}
                                </span>
                            )}
                        </div>
                        <div>
                            <p className="text-base font-medium text-[#1C1C1C]">
                                {activeTestimonial.author}
                            </p>
                            <p className="text-sm text-gray-500">
                                {activeTestimonial.title} of {activeTestimonial.company}
                            </p>
                        </div>
                    </div>
                </blockquote>
            </div>
        </section>
    )
}
