import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo-config'

/**
 * Comprehensive Sitemap Generator
 * Generates detailed XML sitemap with proper priorities, update frequencies,
 * and last modified dates for optimal SEO crawling
 */
export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url
    const currentDate = new Date()

    // Get specific dates for different content types
    const getLastModified = (daysAgo: number = 0): Date => {
        const date = new Date()
        date.setDate(date.getDate() - daysAgo)
        return date
    }

    return [
        // ==========================================
        // HOMEPAGE - Highest Priority
        // ==========================================
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 1.0,
        },

        // ==========================================
        // MAIN SERVICE PAGES - Critical for Business
        // ==========================================
        {
            url: `${baseUrl}/services`,
            lastModified: getLastModified(7), // Updated weekly
            changeFrequency: 'weekly',
            priority: 0.95, // Very high - main service offering
        },

        // ==========================================
        // ABOUT & COMPANY PAGES - Brand Trust
        // ==========================================
        {
            url: `${baseUrl}/aboutus`,
            lastModified: getLastModified(30), // Updated monthly
            changeFrequency: 'monthly',
            priority: 0.85, // High - important for trust
        },
        {
            url: `${baseUrl}/approach`,
            lastModified: getLastModified(30),
            changeFrequency: 'monthly',
            priority: 0.80, // Important - differentiator
        },

        // ==========================================
        // CONTACT PAGE - Conversion Critical
        // ==========================================
        {
            url: `${baseUrl}/contact`,
            lastModified: getLastModified(14), // Updated bi-weekly
            changeFrequency: 'weekly',
            priority: 0.90, // Very high - conversion page
        },

        // ==========================================
        // LEGAL PAGES - Required for Compliance
        // ==========================================
        {
            url: `${baseUrl}/terms`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.50, // Medium - legal requirement
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.50,
        },

        // ==========================================
        // FUTURE: Add more pages as you create them
        // ==========================================
        // Example for blog posts (uncomment when ready):
        // {
        //   url: `${baseUrl}/blog`,
        //   lastModified: currentDate,
        //   changeFrequency: 'daily',
        //   priority: 0.85,
        // },

        // Example for case studies (uncomment when ready):
        // {
        //   url: `${baseUrl}/portfolio`,
        //   lastModified: getLastModified(7),
        //   changeFrequency: 'weekly',
        //   priority: 0.80,
        // },

        // Example for pricing (uncomment when ready):
        // {
        //   url: `${baseUrl}/pricing`,
        //   lastModified: getLastModified(30),
        //   changeFrequency: 'monthly',
        //   priority: 0.85,
        // },

        // ==========================================
        // DYNAMIC PAGES - Add when you have them
        // ==========================================
        // Dynamic blog posts, case studies, etc.
        // ...dynamicBlogPosts,
        // ...dynamicPortfolioItems,
    ]
}

/**
 * Priority Guidelines:
 * 1.0 = Homepage (always highest)
 * 0.9-0.95 = Main service pages, contact
 * 0.8-0.85 = About, approach, important secondary pages
 * 0.6-0.75 = Blog index, portfolio, resources
 * 0.4-0.6 = Individual blog posts, case studies
 * 0.3-0.4 = Archive pages, tags
 */

/**
 * Change Frequency Guidelines:
 * always = Rarely used, only for pages that change with every access
 * hourly = News sites, frequently updated content
 * daily = Homepage, main pages with frequent updates
 * weekly = Service pages, contact, actively updated pages
 * monthly = About, approach, less frequently updated pages
 * yearly = Static pages, legal pages
 * never = Archived content
 */
