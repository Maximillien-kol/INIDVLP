/**
 * SEO Performance Monitoring Utilities
 * Helper functions to track SEO metrics and performance
 */

/**
 * Log page view for analytics
 */
export function logPageView(url: string) {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '', {
            page_path: url,
        })
    }
}

/**
 * Log custom event for SEO tracking
 */
export function logEvent(action: string, category: string, label?: string, value?: number) {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        })
    }
}

/**
 * Track search queries for SEO insights
 */
export function trackSearch(searchTerm: string) {
    logEvent('search', 'Site Search', searchTerm)
}

/**
 * Track outbound links for SEO analysis
 */
export function trackOutboundLink(url: string) {
    logEvent('click', 'Outbound Link', url)
}

/**
 * Track form submissions
 */
export function trackFormSubmission(formName: string) {
    logEvent('submit', 'Form', formName)
}

/**
 * Track page engagement time
 */
export function trackEngagement(timeInSeconds: number, pagePath: string) {
    logEvent('engagement', 'Time on Page', pagePath, timeInSeconds)
}

/**
 * Monitor Core Web Vitals for SEO
 */
export function reportWebVitals(metric: {
    id: string
    name: string
    value: number
    label: string
}) {
    // Log to analytics
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', metric.name, {
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            event_label: metric.id,
            non_interaction: true,
        })
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
        console.log('[Web Vital]', metric)
    }
}

// Type definition for Google Analytics
declare global {
    interface Window {
        gtag?: (
            command: string,
            targetId: string,
            config?: Record<string, unknown>
        ) => void
    }
}

export { }
