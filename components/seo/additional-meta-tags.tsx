/**
 * Additional Meta Tags Component
 * Add this component to pages that need extra SEO meta tags
 */

interface AdditionalMetaTagsProps {
    author?: string
    tags?: string[]
    category?: string
    language?: string
    geo?: {
        placename?: string
        position?: string
        region?: string
    }
}

export function AdditionalMetaTags({
    author = "INI Development",
    tags = [],
    category = "Technology",
    language = "en",
    geo,
}: AdditionalMetaTagsProps) {
    return (
        <>
            {/* Author Information */}
            {author && <meta name="author" content={author} />}

            {/* Article Tags */}
            {tags.length > 0 && <meta name="article:tag" content={tags.join(", ")} />}

            {/* Category */}
            {category && <meta name="article:section" content={category} />}

            {/* Language */}
            <meta httpEquiv="content-language" content={language} />

            {/* Geography/Location Meta Tags for Local SEO */}
            {geo?.placename && <meta name="geo.placename" content={geo.placename} />}
            {geo?.position && <meta name="geo.position" content={geo.position} />}
            {geo?.region && <meta name="geo.region" content={geo.region} />}

            {/* Mobile Meta Tags */}
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

            {/* Microsoft Tiles */}
            <meta name="msapplication-TileColor" content="#000000" />
            <meta name="msapplication-tap-highlight" content="no" />

            {/* Theme Color (Dark Mode Support) */}
            <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
            <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />

            {/* Rating */}
            <meta name="rating" content="general" />

            {/* Coverage */}
            <meta name="coverage" content="Worldwide" />

            {/* Distribution */}
            <meta name="distribution" content="global" />

            {/* Robots - Additional */}
            <meta name="googlebot" content="index,follow" />
            <meta name="bingbot" content="index,follow" />
            <meta name="slurp" content="index,follow" />

            {/* Cache Control */}
            <meta httpEquiv="cache-control" content="public, max-age=31536000" />

            {/* Expires */}
            <meta httpEquiv="expires" content="0" />
        </>
    )
}
