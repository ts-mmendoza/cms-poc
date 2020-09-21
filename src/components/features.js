import React from 'react'
import { Link } from "gatsby"

// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
// import Image from "gatsby-image"

const Features = ({ feature }) => {
    const featuredItem = feature
    console.log("Featured Item", featuredItem)
    return (
        <div>
            <Link
                style={{ boxShadow: `none` }}
                to={featuredItem.elements.slug.value}
                itemProp="url"
            >
                <span itemProp="headline">{featuredItem.elements.name.value}</span>
                <img
                    style={{ width: 100, height: 100, display: "flex" }}
                    src={featuredItem.elements.hero_image.value[0].url}
                    alt={featuredItem.elements.name.value} />
            </Link>

            {/* <h4>{featuredItem.elements.name.value}</h4>
            <p>{featuredItem.elements.short_description.value}</p> */}
        </div>
    )
}


export default Features