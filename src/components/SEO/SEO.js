import React from 'react'

const SEO = ({
    title,
    description,
    keywords,
    author = "Crickonnect",
    type = "website",
    image = "/images/og-image.jpg",
    url,
    article = false,
    publishedTime,
    modifiedTime,
    category,
    tags,
    schema
}) => {
    const siteUrl = "https://crickonnect.com"
    const fullUrl = url ? `${siteUrl}${url}` : siteUrl
    const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`

    return (
        <>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            {author && <meta name="author" content={author} />}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />

            {/* Canonical URL */}
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={article ? "article" : type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="Crickonnect" />
            <meta property="og:locale" content="en_US" />

            {/* Article specific tags */}
            {article && publishedTime && (
                <meta property="article:published_time" content={publishedTime} />
            )}
            {article && modifiedTime && (
                <meta property="article:modified_time" content={modifiedTime} />
            )}
            {article && category && (
                <meta property="article:section" content={category} />
            )}
            {article && tags && tags.map((tag, index) => (
                <meta key={index} property="article:tag" content={tag} />
            ))}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImage} />
            <meta name="twitter:creator" content="@crickonnect" />
            <meta name="twitter:site" content="@crickonnect" />

            {/* Additional SEO tags */}
            <meta name="theme-color" content="#d32f2f" />
            <meta name="msapplication-TileColor" content="#d32f2f" />

            {/* Structured Data */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </>
    )
}

export default SEO
