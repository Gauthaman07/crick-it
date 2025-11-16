const path = require('path')
const blogsData = require('./src/data/blogs.json')

exports.createPages = async ({ actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve('./src/templates/blog-post.js')

    blogsData.forEach((blog) => {
        createPage({
            path: `/blog/${blog.slug}`,
            component: blogPostTemplate,
            context: {
                slug: blog.slug,
            },
        })
    })
}
