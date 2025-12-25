"use client"

import { useEffect, useRef, useState } from "react"

interface StatProps {
    number: string
    label: string
}

function Stat({ number, label }: StatProps) {
    const [displayValue, setDisplayValue] = useState(0)
    const [hasAnimated, setHasAnimated] = useState(false)
    const statRef = useRef<HTMLDivElement>(null)

    // Extract numeric value and suffix from the number string
    const parseNumber = (str: string) => {
        const match = str.match(/^(\d+)(.*)$/)
        if (match) {
            return {
                value: parseInt(match[1]),
                suffix: match[2]
            }
        }
        return { value: 0, suffix: str }
    }

    const { value: targetValue, suffix } = parseNumber(number)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true)

                        // Animate counter
                        const duration = 2000 // 2 seconds
                        const startTime = Date.now()

                        const animate = () => {
                            const currentTime = Date.now()
                            const elapsed = currentTime - startTime
                            const progress = Math.min(elapsed / duration, 1)

                            // Ease out cubic function for smooth deceleration
                            const easeOutCubic = 1 - Math.pow(1 - progress, 3)
                            const currentValue = Math.floor(easeOutCubic * targetValue)

                            setDisplayValue(currentValue)

                            if (progress < 1) {
                                requestAnimationFrame(animate)
                            }
                        }

                        requestAnimationFrame(animate)
                    }
                })
            },
            { threshold: 0.5 }
        )

        if (statRef.current) {
            observer.observe(statRef.current)
        }

        return () => {
            if (statRef.current) {
                observer.unobserve(statRef.current)
            }
        }
    }, [targetValue, hasAnimated])

    return (
        <div ref={statRef} className="text-left">
            <div className="text-4xl md:text-5xl font-light text-[#1C1C1C] mb-2">
                {displayValue}{suffix}
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">
                {label}
            </p>
        </div>
    )
}

export function AboutUsSection() {
    const [scrollProgress, setScrollProgress] = useState(0)
    const textRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            if (!textRef.current) return

            const element = textRef.current
            const rect = element.getBoundingClientRect()
            const windowHeight = window.innerHeight

            // Calculate scroll progress when element is in view
            const elementTop = rect.top
            const elementHeight = rect.height

            // Start revealing when element enters viewport
            const start = windowHeight
            const end = windowHeight / 2

            if (elementTop < start && elementTop > end - elementHeight) {
                const progress = 1 - (elementTop - end) / (start - end)
                setScrollProgress(Math.max(0, Math.min(1, progress)))
            } else if (elementTop <= end - elementHeight) {
                setScrollProgress(1)
            } else {
                setScrollProgress(0)
            }
        }

        window.addEventListener("scroll", handleScroll)
        handleScroll() // Initial check

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const text = "We make digital development easier than ever with custom designs, expert development, and ongoing support. Whether you're a startup or an established business, we'll guide you every step of the way."
    const words = text.split(" ")

    return (
        <section className="py-20 px-8 lg:px-16 bg-white mx-4 lg:mx-[100px]">

            {/* Main Description */}
            <div className="mb-16">
                <p
                    ref={textRef}
                    className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed"
                >
                    {words.map((word, index) => {
                        const wordProgress = scrollProgress * words.length
                        const isRevealed = index < wordProgress

                        return (
                            <span
                                key={index}
                                className="transition-colors duration-300"
                                style={{
                                    color: isRevealed ? "#1C1C1C" : "#A0AEC0"
                                }}
                            >
                                {word}{" "}
                            </span>
                        )
                    })}
                </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-16">
                <Stat
                    number="12+"
                    label="projects completed"
                />
                <Stat
                    number="24h"
                    label="average project assessment turnaround"
                />
                <Stat
                    number="100%"
                    label="client satisfaction rate"
                /></div></section>
    )
}
