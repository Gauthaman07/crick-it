import React, { useState } from 'react'
import { Link } from 'gatsby'
import * as classes from './blog.module.scss'
import Navbar from '../components/Navbar/Navbar'
import blogsData from '../data/blogs.json'
import SEO from '../components/SEO/SEO'
import { blogSchema, breadcrumbSchema } from '../utils/schema'

function BlogPage() {
    const [activeCategory, setActiveCategory] = useState('All')

    // Get unique categories
    const categories = ['All', ...new Set(blogsData.map(blog => blog.category))]

    // Filter blogs based on active category
    const filteredBlogs = activeCategory === 'All'
        ? blogsData
        : blogsData.filter(blog => blog.category === activeCategory)

    return (
        <div className={classes.blogPage}>
            <Navbar />

            <div className={classes.blogContentWrapper}>
                <div className={classes.blogContainer}>
                    {/* Blog Header */}
                    <h1 className={classes.blogMainTitle}>The Nightwatchman Notes</h1>

                    {/* Category Filters */}
                    <div className={classes.categoryFilters}>
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`${classes.categoryButton} ${activeCategory === category ? classes.active : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Blog Grid */}
                    <div className={classes.blogGrid}>
                        {filteredBlogs.map((blog, index) => (
                            <Link
                                to={`/blog/${blog.slug}`}
                                key={blog.id}
                                className={`${classes.blogCard} ${index === 0 ? classes.featured : ''}`}
                            >
                                <div className={classes.blogCardImage}>
                                    <img src={blog.image} alt={blog.title} />
                                    <div className={classes.blogCategory}>{blog.category}</div>
                                </div>
                                <div className={classes.blogCardContent}>
                                    <h2 className={classes.blogCardTitle}>{blog.title}</h2>
                                    <div className={classes.blogDate}>{blog.date}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPage

export const Head = () => {
    const breadcrumbs = breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "The Nightwatchman Notes", url: "/blog" }
    ])

    const combinedSchema = {
        "@context": "https://schema.org",
        "@graph": [blogSchema, breadcrumbs]
    }

    return (
        <SEO
            title="The Nightwatchman Notes - Cricket Stories & Insights | Crickonnect"
            description="Cricket insights, legendary moments, and grassroots stories from the world of cricket. Read about cricket legends, memorable matches, and the spirit of grassroots cricket."
            keywords="cricket blog, cricket stories, cricket legends, cricket insights, grassroots cricket, cricket moments, cricket history, cricket articles, Sachin Tendulkar, MS Dhoni, Virat Kohli"
            url="/blog"
            image="/images/og-blog.jpg"
            schema={combinedSchema}
        />
    )
}
