/**
 * Advanced SEO Utilities - Additional schema generators and helpers
 * Extends the base SEO utilities with more specialized functions
 */

import { siteConfig } from "./seo-config"

/**
 * Generate JSON-LD structured data for Article (for blog posts)
 */
export function generateArticleSchema(props: {
    title: string
    description: string
    url: string
    datePublished: string
    dateModified?: string
    authorName: string
    image?: string
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: props.title,
        description: props.description,
        url: props.url,
        datePublished: props.datePublished,
        dateModified: props.dateModified || props.datePublished,
        author: {
            "@type": "Person",
            name: props.authorName,
        },
        publisher: {
            "@type": "Organization",
            name: siteConfig.company.name,
            logo: {
                "@type": "ImageObject",
                url: `${siteConfig.url}/images/logo.png`,
            },
        },
        image: props.image || siteConfig.ogImage,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": props.url,
        },
    }
}

/**
 * Generate JSON-LD structured data for LocalBusiness
 */
export function generateLocalBusinessSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: siteConfig.company.name,
        image: `${siteConfig.url}/images/logo.png`,
        "@id": siteConfig.url,
        url: siteConfig.url,
        telephone: siteConfig.company.phone,
        email: siteConfig.company.email,
        address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.company.address.streetAddress,
            addressLocality: siteConfig.company.address.addressLocality,
            addressRegion: siteConfig.company.address.addressRegion,
            addressCountry: siteConfig.company.address.addressCountry,
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 0, // TODO: Add actual coordinates
            longitude: 0,
        },
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
            ],
            opens: "08:00",
            closes: "21:00",
        },
        sameAs: siteConfig.company.sameAs,
    }
}

/**
 * Generate JSON-LD structured data for Review/Rating
 */
export function generateReviewSchema(props: {
    itemName: string
    ratingValue: number
    reviewCount: number
    bestRating?: number
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        name: props.itemName,
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: props.ratingValue,
            reviewCount: props.reviewCount,
            bestRating: props.bestRating || 5,
        },
    }
}

/**
 * Generate JSON-LD structured data for Video
 */
export function generateVideoSchema(props: {
    name: string
    description: string
    thumbnailUrl: string
    uploadDate: string
    duration: string
    contentUrl: string
}) {
    return {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: props.name,
        description: props.description,
        thumbnailUrl: props.thumbnailUrl,
        uploadDate: props.uploadDate,
        duration: props.duration,
        contentUrl: props.contentUrl,
        embedUrl: props.contentUrl,
    }
}

/**
 * Generate JSON-LD structured data for HowTo (for tutorials/guides)
 */
export function generateHowToSchema(props: {
    name: string
    description: string
    totalTime?: string
    steps: Array<{ name: string; text: string; image?: string }>
}) {
    return {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: props.name,
        description: props.description,
        totalTime: props.totalTime,
        step: props.steps.map((step, index) => ({
            "@type": "HowToStep",
            position: index + 1,
            name: step.name,
            text: step.text,
            image: step.image,
        })),
    }
}

/**
 * Generate canonical URL for a given path
 */
export function getCanonicalUrl(path: string): string {
    // Remove trailing slash if present
    const cleanPath = path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path
    // Ensure path starts with /
    const normalizedPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`
    return `${siteConfig.url}${normalizedPath}`
}

/**
 * Generate meta keywords string from array
 */
export function generateKeywordsString(keywords: string[]): string {
    return keywords.join(', ')
}

/**
 * Truncate text to specified length for meta descriptions
 */
export function truncateDescription(text: string, maxLength: number = 160): string {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength - 3) + '...'
}

/**
 * Generate Open Graph image URL
 */
export function getOgImageUrl(imagePath?: string): string {
    if (!imagePath) return `${siteConfig.url}${siteConfig.ogImage}`
    return imagePath.startsWith('http') ? imagePath : `${siteConfig.url}${imagePath}`
}

/**
 * Generate structured data for multiple schemas
 * Returns array format for multiple schemas on one page
 */
export function generateMultipleSchemas(schemas: Record<string, unknown>[]): Record<string, unknown> {
    if (schemas.length === 1) return schemas[0]
    return {
        "@context": "https://schema.org",
        "@graph": schemas,
    }
}
