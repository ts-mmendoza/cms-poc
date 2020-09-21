import React from "react"
import { graphql } from "gatsby"

const FeaturesPage = ({data}) => {
    const featuredItem  = data.kontentItemBreakfast

    return(
        <div>
            <h1>{featuredItem.elements.name.value}</h1>
            <img 
            style={{display: "flex" }}
            src={featuredItem.elements.full_image.value[0].url}
            alt={featuredItem.elements.name.value}
            />
            <section
          dangerouslySetInnerHTML={{ __html: featuredItem.elements.long_description.value }}
          itemProp="articleBody"
        />
        </div>
    )
}

export default FeaturesPage

export const pageQuery = graphql`
query BreakfastQuery ($slug: String!) {
    kontentItemBreakfast(elements: {slug: {value: {eq: $slug}}}) {
      elements {
        slug {
          value
        }
        name {
          value
        }
        full_image {
          value {
            url
          }
        }
        keywords {
          value
        }
        long_description {
          value
        }
      }
    }
  }
  
`