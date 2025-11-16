// Structured Data Schemas for SEO

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Crickonnect",
    "alternateName": "CricKonnect",
    "url": "https://crickonnect.com",
    "logo": "https://crickonnect.com/images/logo.png",
    "description": "Cricket match booking and team management made simple, powerful, and organized. Built for captains who want complete control of their game.",
    "sameAs": [
        "https://www.instagram.com/cric_konnect_?igsh=MWhrZHZnMDRkaWE4OA==",
        "https://www.youtube.com/@Crick_connect10"
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "email": "contact@crickonnect.com"
    }
}

export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Crickonnect",
    "url": "https://crickonnect.com",
    "description": "Cricket match booking and team management platform for grassroots cricket",
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://crickonnect.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
    }
}

export const breadcrumbSchema = (items) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": `https://crickonnect.com${item.url}`
    }))
})

export const articleSchema = (article) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": `https://crickonnect.com${article.image}`,
    "author": {
        "@type": "Person",
        "name": article.author
    },
    "publisher": {
        "@type": "Organization",
        "name": "Crickonnect",
        "logo": {
            "@type": "ImageObject",
            "url": "https://crickonnect.com/images/logo.png"
        }
    },
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://crickonnect.com/blog/${article.slug}`
    }
})

export const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "The Nightwatchman Notes",
    "description": "Cricket insights, legendary moments, and grassroots stories from the world of cricket",
    "url": "https://crickonnect.com/blog",
    "publisher": {
        "@type": "Organization",
        "name": "Crickonnect",
        "logo": {
            "@type": "ImageObject",
            "url": "https://crickonnect.com/images/logo.png"
        }
    }
}

export const serviceSchema = (service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
        "@type": "Organization",
        "name": "Crickonnect"
    },
    "areaServed": {
        "@type": "Country",
        "name": "India"
    },
    "serviceType": "Sports Management Platform"
})

export const faqSchema = (faqs) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
        }
    }))
})
