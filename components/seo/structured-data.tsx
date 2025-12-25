/**
 * Structured Data Component for SEO
 * Renders JSON-LD structured data in the DOM
 */

export function StructuredData({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    )
}
