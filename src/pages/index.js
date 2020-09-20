import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  //const posts = data.allMarkdownRemark.nodes
  const posts = data.allKontentItemBlogPost.nodes


  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <p>No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).</p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      {posts.map((post) => {
        const title = post.elements.title.value // post.frontmatter.title || post.fields.slug
        return (
          <article
            key={post.elements.slug.value}
            itemScope
            itemType="http://schema.org/Article"
          >
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link
                  style={{ boxShadow: `none` }}
                  to={post.elements.slug.value}
                  itemProp="url"
                >
                  <span itemProp="headline">{title}</span>
                </Link>
              </h3>
              <small>{post.elements.published_date.value}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.elements.description.value,
                }}
                itemProp="description"
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allKontentItemBlogPost(sort: {fields: elements___published_date___value, order: DESC}) {
      nodes {
        elements {
          title {
            value
          }
          slug {
            value
          }
          published_date {
            value
          }
          description {
            value
          }
        }
      }
    }
  }
`
