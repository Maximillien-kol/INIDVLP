/**
 * SEO Utilities - Helper functions for generating SEO metadata and structured data
 * Implements best practices for search engine optimization
 */

import type { Metadata } from "next"
import { siteConfig } from "./seo-config"

interface PageSEOProps {
    title?: string
    description?: string
    keywords?: string[]
    image?: string
    canonical?: string
    noindex?: boolean
    nofollow?: boolean
    publishedTime?: string
    modifiedTime?: string
    authors?: string[]
    type?: "website" | "article" | "profile"
}

/**
 * Generate comprehensive metadata for a page
 * Includes Open Graph, Twitter Cards, and all essential SEO tags
 */
export function generateMetadata({
    title,
    description,
    keywords = [],
    image,
    canonical,
    noindex = false,
    nofollow = false,
    publishedTime,
    modifiedTime,
    authors,
    type = "website",
}: PageSEOProps = {}): Metadata {
    const pageTitle = title
        ? `${title} | ${siteConfig.name}`
        : siteConfig.title
    const pageDescription = description || siteConfig.description
    const pageImage = image ? `${siteConfig.url}${image}` : `${siteConfig.url}${siteConfig.ogImage}`
    const pageKeywords = [...siteConfig.keywords, ...keywords].join(", ")
    const pageUrl = canonical || siteConfig.url

    return {
        title: pageTitle,
        description: pageDescription,
        keywords: pageKeywords,
        authors: authors?.map((name) => ({ name })) || siteConfig.authors,
        creator: siteConfig.creator,
        publisher: siteConfig.publisher,
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        metadataBase: new URL(siteConfig.url),
        alternates: {
            canonical: pageUrl,
        },
        openGraph: {
            type,
            locale: "en_US",
            url: pageUrl,
            title: pageTitle,
            description: pageDescription,
            siteName: siteConfig.name,
            images: [
                {
                    url: pageImage,
                    width: 1200,
                    height: 630,
                    alt: title || siteConfig.title,
                },
            ],
            ...(publishedTime && { publishedTime }),
            ...(modifiedTime && { modifiedTime }),
        },
        twitter: {
            card: "summary_large_image",
            title: pageTitle,
            description: pageDescription,
            images: [pageImage],
        },
        robots: {
            index: !noindex,
            follow: !nofollow,
            googleBot: {
                index: !noindex,
                follow: !nofollow,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        verification: {
            google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
            yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
        },
    }
}

/**
 * Generate HTML string for JSON-LD structured data
 * Use this in server components with dangerouslySetInnerHTML
 */
export function getStructuredDataScript(data: Record<string, unknown> | Record<string, unknown>[]) {
    return `<script type="application/ld+json">${JSON.stringify(data)}</script>`
}

/**
 * Generate JSON-LD structured data for Organization
 */
export function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteConfig.company.name,
        legalName: siteConfig.company.legalName,
        description: siteConfig.company.description,
        url: siteConfig.url,
        logo: `${siteConfig.url}/images/logo.png`,
        foundingDate: siteConfig.company.foundingDate,
        email: siteConfig.company.email,
        telephone: siteConfig.company.phone,
        address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.company.address.streetAddress,
            addressLocality: siteConfig.company.address.addressLocality,
            addressRegion: siteConfig.company.address.addressRegion,
            addressCountry: siteConfig.company.address.addressCountry,
        },
        sameAs: siteConfig.company.sameAs,
    }
}

/**
 * Generate JSON-LD structured data for Website
 */
export function generateWebsiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
        },
    }
}

/**
 * Generate JSON-LD structured data for WebPage
 */
export function generateWebPageSchema(props: {
    name: string
    description: string
    url: string
    datePublished?: string
    dateModified?: string
}) {
    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: props.name,
        description: props.description,
        url: props.url,
        ...(props.datePublished && { datePublished: props.datePublished }),
        ...(props.dateModified && { dateModified: props.dateModified }),
        isPartOf: {
            "@type": "WebSite",
            name: siteConfig.name,
            url: siteConfig.url,
        },
        publisher: {
            "@type": "Organization",
            name: siteConfig.company.name,
            url: siteConfig.url,
        },
    }
}

/**
 * Generate JSON-LD structured data for Service
 */
export function generateServiceSchema(props: {
    name: string
    description: string
    url: string
    serviceType: string
    areaServed?: string
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        name: props.name,
        description: props.description,
        url: props.url,
        serviceType: props.serviceType,
        provider: {
            "@type": "Organization",
            name: siteConfig.company.name,
            url: siteConfig.url,
        },
        ...(props.areaServed && { areaServed: props.areaServed }),
    }
}

/**
 * Generate JSON-LD structured data for Breadcrumb
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `${siteConfig.url}${item.url}`,
        })),
    }
}

/**
 * Generate JSON-LD structured data for FAQ
 */
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    }
}
