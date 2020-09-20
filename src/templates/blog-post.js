import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  //const post = data.markdownRemark
  const post  = data.kontentItemBlogPost
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = pageContext

  console.log(post);
  console.log(previous);

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.elements.title.value}
        description={post.elements.description.value}
      />
      <article itemScope itemType="http://schema.org/Article">
        <header>
          <h1
            itemProp="headline"
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.elements.title.value}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {post.elements.published_date.value}
          </p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.elements.content.value }}
          itemProp="articleBody"
        />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.elements.slug.value} rel="prev">
                ← {previous.elements.title.value}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.elements.slug.value} rel="next">
                {next.elements.title.value} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    kontentItemBlogPost(elements: {slug: {value: {eq: $slug}}}) {
      elements {
        author {
          value
        }
        description {
          value
        }
        hero_image {
          value {
            url
          }
        }
        content {
          value
        }
        published_date {
          value(fromNow: true)
        }
        slug {
          value
        }
        title {
          value
        }
      }
    }    
  }
`
