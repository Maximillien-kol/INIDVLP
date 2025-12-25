"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CTASection } from "@/components/sections/cta-section"
import Image from "next/image"
import Link from "next/link"
import { CTAButton } from "@/components/ui/cta-button"
import { ArrowUpRight } from "lucide-react"
import { useState } from "react"


interface ContactInfoProps {
    label: string
    items: { text: string; href?: string; isLink?: boolean }[]
}

function ContactInfo({ label, items }: ContactInfoProps) {
    return (
        <div className="space-y-3">
            <h3 className="text-sm text-gray-500 mb-4">{label}</h3>
            {items.map((item, index) => (
                <div key={index}>
                    {item.isLink && item.href ? (
                        <Link
                            href={item.href}
                            className="text-base md:text-lg text-[#1C1C1C] hover:text-gray-600 transition-colors font-medium"
                        >
                            {item.text}
                        </Link>
                    ) : (
                        <p className="text-base md:text-lg text-[#1C1C1C] font-medium">{item.text}</p>
                    )}
                </div>
            ))}
        </div>
    )
}

export default function ContactPage() {
    const [selectedServices, setSelectedServices] = useState<string[]>([])
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    })

    const toggleService = (service: string) => {
        setSelectedServices(prev =>
            prev.includes(service)
                ? prev.filter(s => s !== service)
                : [...prev, service]
        )
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    services: selectedServices,
                }),
            })

            if (response.ok) {
                setSubmitStatus('success')
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    message: '',
                })
                setSelectedServices([])
            } else {
                setSubmitStatus('error')
            }
        } catch (error) {
            console.error('Error submitting form:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header variant="solid" />

            <main className="flex-1 bg-gray-50">
                <div className="px-8 lg:px-16 py-16 md:py-24">
                    {/* Contact Container */}
                    <div className="bg-white rounded-sm p-8 md:p-12 lg:p-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                            {/* Left Column: Heading and Contact Info */}
                            <div className="space-y-12">
                                {/* Heading */}
                                <div>
                                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#1C1C1C] mb-6">
                                        Contact us
                                    </h1>
                                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                        Get in touch with us for any enquiries<br />
                                        and questions
                                    </p>
                                </div>

                                {/* Contact Information Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                    <ContactInfo
                                        label="general inquiries"
                                        items={[
                                            { text: "contact@ini.rw", href: "mailto:contact@ini.rw", isLink: true },
                                        ]}
                                    />

                                    <ContactInfo
                                        label="careers"
                                        items={[
                                            { text: "contact@ini.rw", href: "mailto:contact@ini.rw", isLink: true },
                                        ]}
                                    />

                                    <ContactInfo
                                        label="collaborations"
                                        items={[
                                            { text: "s.bagira@ini.rw", href: "mailto:s.bagira@ini.rw", isLink: true },
                                            { text: "k.bagira@ini.rw", href: "mailto:k.bagira@ini.rw", isLink: true },
                                        ]}
                                    />

                                    <ContactInfo
                                        label="address"
                                        items={[
                                            { text: "Kigali, Rwanda,", isLink: false },
                                            { text: "Nyarugenge district", isLink: false },
                                        ]}
                                    />
                                </div>

                                {/* Social Media Links */}
                                <div className="pt-8">
                                    <div className="flex gap-8">
                                        <Link
                                            href="https://www.linkedin.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#1C1C1C] hover:text-gray-700 transition-colors text-sm md:text-base font-medium"
                                        >
                                            LinkedIn
                                        </Link>
                                        <Link
                                            href="https://instagram.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#1C1C1C] hover:text-gray-700 transition-colors text-sm md:text-base font-medium"
                                        >
                                            Instagram
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Contact Form */}
                            <div className="bg-gray-50 p-8 rounded-sm">
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    {/* First Name & Last Name */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm text-gray-600 mb-2">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="Full name"
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-[#1C1C1C] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="company" className="block text-sm text-gray-600 mb-2">
                                                Company (Optional)
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                placeholder="Company name"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-[#1C1C1C] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Email & Phone */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="example@gmail.com"
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-[#1C1C1C] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm text-gray-600 mb-2">
                                                Phone (Optional)
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="+250...."
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-[#1C1C1C] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Select Service */}
                                    <div>
                                        <label className="block text-sm text-gray-600 mb-3">
                                            Select Service
                                        </label>
                                        <div className="flex flex-wrap gap-3">
                                            <button
                                                type="button"
                                                onClick={() => toggleService("Institutional Website Development")}
                                                className={`px-6 py-2.5 border rounded-full text-sm transition-colors ${selectedServices.includes("Institutional Website Development")
                                                    ? "bg-[#1C1C1C] text-white border-[#1C1C1C]"
                                                    : "border-gray-300 text-[#1C1C1C] hover:bg-gray-100"
                                                    }`}
                                            >
                                                Consulting & Strategy
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => toggleService("Web Systems & Platforms")}
                                                className={`px-6 py-2.5 border rounded-full text-sm transition-colors ${selectedServices.includes("Web Systems & Platforms")
                                                    ? "bg-[#1C1C1C] text-white border-[#1C1C1C]"
                                                    : "border-gray-300 text-[#1C1C1C] hover:bg-gray-100"
                                                    }`}
                                            >
                                                Software Solutions
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => toggleService("Digital Strategy")}
                                                className={`px-6 py-2.5 border rounded-full text-sm transition-colors ${selectedServices.includes("Digital Strategy")
                                                    ? "bg-[#1C1C1C] text-white border-[#1C1C1C]"
                                                    : "border-gray-300 text-[#1C1C1C] hover:bg-gray-100"
                                                    }`}
                                            >
                                                Cloud Services
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => toggleService("Website Revamp & Modernization")}
                                                className={`px-6 py-2.5 border rounded-full text-sm transition-colors ${selectedServices.includes("Website Revamp & Modernization")
                                                    ? "bg-[#1C1C1C] text-white border-[#1C1C1C]"
                                                    : "border-gray-300 text-[#1C1C1C] hover:bg-gray-100"
                                                    }`}
                                            >
                                                IT Services
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() => toggleService("Custom Features & Integrations")}
                                                className={`px-6 py-2.5 border rounded-full text-sm transition-colors ${selectedServices.includes("Custom Features & Integrations")
                                                    ? "bg-[#1C1C1C] text-white border-[#1C1C1C]"
                                                    : "border-gray-300 text-[#1C1C1C] hover:bg-gray-100"
                                                    }`}
                                            >
                                                Data Centers
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => toggleService("Other")}
                                                className={`px-6 py-2.5 border rounded-full text-sm transition-colors ${selectedServices.includes("Other")
                                                    ? "bg-[#1C1C1C] text-white border-[#1C1C1C]"
                                                    : "border-gray-300 text-[#1C1C1C] hover:bg-gray-100"
                                                    }`}
                                            >
                                                Other (Please specify)
                                            </button>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm text-gray-600 mb-2">
                                            Message (Optional)
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows={5}
                                            placeholder="Tell us about your project..."
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-[#1C1C1C] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all resize-none"
                                        />
                                    </div>


                                    {/* Status Messages */}
                                    {submitStatus === 'success' && (
                                        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm">
                                            Thank you! Your message has been sent successfully. We'll get back to you soon.
                                        </div>
                                    )}
                                    {submitStatus === 'error' && (
                                        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm">
                                            Sorry, there was an error sending your message. Please try again or email us directly.
                                        </div>
                                    )}

                                    {/* Submit Button */}
                                    <div className="flex justify-center pt-4">
                                        <CTAButton
                                            asButton
                                            type="submit"
                                            variant="ghost"
                                            size="md"
                                            className={`uppercase tracking-wider text-sm font-semibold ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        >
                                            {isSubmitting ? 'Sending...' : 'Submit now'}
                                        </CTAButton>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <CTASection />
            <Footer />
        </div>
    )
}
