import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { HeartOutlined, HeartFilled, ShareAltOutlined } from '@ant-design/icons'
import * as classes from './blog-post.module.scss'
import Navbar from '../components/Navbar/Navbar'
import blogsData from '../data/blogs.json'
import SEO from '../components/SEO/SEO'
import { articleSchema, breadcrumbSchema } from '../utils/schema'

function BlogPost({ pageContext }) {
    const { slug } = pageContext
    const blog = blogsData.find(b => b.slug === slug)

    const [liked, setLiked] = useState(false)
    const [likeCount, setLikeCount] = useState(0)
    const [showShareMenu, setShowShareMenu] = useState(false)

    useEffect(() => {
        // Load like status from localStorage
        if (typeof window !== 'undefined') {
            const isLiked = localStorage.getItem(`blog-liked-${slug}`)
            const count = localStorage.getItem(`blog-likes-${slug}`)
            setLiked(isLiked === 'true')
            setLikeCount(count ? parseInt(count) : 0)
        }
    }, [slug])

    const handleLike = () => {
        const newLiked = !liked
        const newCount = newLiked ? likeCount + 1 : likeCount - 1

        setLiked(newLiked)
        setLikeCount(newCount)

        // Save to localStorage
        if (typeof window !== 'undefined') {
            localStorage.setItem(`blog-liked-${slug}`, newLiked)
            localStorage.setItem(`blog-likes-${slug}`, newCount)
        }
    }

    const handleShare = (platform) => {
        const url = typeof window !== 'undefined' ? window.location.href : ''
        const title = blog?.title || ''

        const shareUrls = {
            twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
            whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
        }

        if (platform === 'copy') {
            navigator.clipboard.writeText(url)
            setShowShareMenu(false)
            // You could add a toast notification here
        } else {
            window.open(shareUrls[platform], '_blank', 'width=600,height=400')
            setShowShareMenu(false)
        }
    }

    if (!blog) {
        return (
            <div className={classes.notFound}>
                <h1>Blog post not found</h1>
                <Link to="/blog">Back to Blog</Link>
            </div>
        )
    }

    return (
        <div className={classes.blogPostPage}>
            <Navbar />

            {/* Blog Header */}
            <div className={classes.blogHeader}>
                    <div className={classes.blogHeaderContent}>
                        {/* <Link to="/blog" className={classes.backLink}>
                            ← 
                        </Link> */}
                        <div className={classes.blogCategory}>{blog.category}</div>
                        <h1 className={classes.blogPostTitle}>{blog.title}</h1>
                        <div className={classes.blogPostMeta}>
                            <span className={classes.blogAuthor}> {blog.author}</span>
                            <span className={classes.blogDivider}>•</span>
                            <span className={classes.blogDate}>{blog.date}</span>
                            <span className={classes.blogDivider}>•</span>
                            <span className={classes.blogReadTime}>{blog.readTime}</span>
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                <div className={classes.featuredImage}>
                    <img src={blog.image} alt={blog.title} />
                </div>

                {/* Blog Content */}
                <div className={classes.blogContent}>
                    <div className={classes.blogContentInner}>
                        {/* Engagement Bar */}
                        <div className={classes.engagementBar}>
                            <button
                                className={`${classes.likeButton} ${liked ? classes.liked : ''}`}
                                onClick={handleLike}
                                aria-label="Like post"
                            >
                                {liked ? <HeartFilled /> : <HeartOutlined />}
                                <span>{likeCount}</span>
                            </button>

                            <div className={classes.shareButtonWrapper}>
                                <button
                                    className={classes.shareButton}
                                    onClick={() => setShowShareMenu(!showShareMenu)}
                                    aria-label="Share post"
                                >
                                    <ShareAltOutlined />
                                    <span>Share</span>
                                </button>

                                {showShareMenu && (
                                    <div className={classes.shareMenu}>
                                        <button onClick={() => handleShare('twitter')}>Twitter</button>
                                        <button onClick={() => handleShare('facebook')}>Facebook</button>
                                        <button onClick={() => handleShare('linkedin')}>LinkedIn</button>
                                        <button onClick={() => handleShare('whatsapp')}>WhatsApp</button>
                                        <button onClick={() => handleShare('copy')}>Copy Link</button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Article Content */}
                        <article
                            className={classes.articleContent}
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />
                    </div>
                </div>

                {/* Related Posts or CTA */}
                <div className={classes.blogFooter}>
                    <div className={classes.blogFooterContent}>
                        <Link to="/blog" className={classes.backToBlog}>
                            ← View All Posts
                        </Link>
                    </div>
                </div>
            </div>
    )
}

export default BlogPost

export const Head = ({ pageContext }) => {
    const { slug } = pageContext
    const blog = blogsData.find(b => b.slug === slug)

    if (!blog) {
        return <title>Blog Post Not Found | CricKonnect</title>
    }

    const article = articleSchema({
        title: blog.metaTitle || blog.title,
        description: blog.metaDescription || blog.excerpt,
        image: blog.image,
        author: blog.author,
        datePublished: blog.datePublished || new Date().toISOString(),
        dateModified: blog.dateModified,
        slug: blog.slug
    })

    const breadcrumbs = breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "The Nightwatchman Notes", url: "/blog" },
        { name: blog.title, url: `/blog/${blog.slug}` }
    ])

    const combinedSchema = {
        "@context": "https://schema.org",
        "@graph": [article, breadcrumbs]
    }

    return (
        <SEO
            title={blog.metaTitle || `${blog.title} | CricKonnect`}
            description={blog.metaDescription || blog.excerpt}
            keywords={blog.metaKeywords || `${blog.category}, cricket, ${blog.title}`}
            url={`/blog/${blog.slug}`}
            image={blog.image}
            article={true}
            publishedTime={blog.datePublished || new Date().toISOString()}
            modifiedTime={blog.dateModified}
            category={blog.category}
            tags={blog.tags}
            author={blog.author}
            schema={combinedSchema}
        />
    )
}
