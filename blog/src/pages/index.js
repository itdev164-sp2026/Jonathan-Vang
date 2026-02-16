import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const getExcerpt = raw => {
  const data = JSON.parse(raw)
  return data.content[0].content[0].value.slice(0, 120) + "..."
}

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Blog Posts</h1>

    <ul>
      {data.allContentfulBlogPost.edges.map(edge => (
        <li key={edge.node.id}>

          <h2>
            <Link to={`/blog/${edge.node.slug}`}>
              {edge.node.title}
            </Link>
          </h2>

          <GatsbyImage
            image={edge.node.heroImage.gatsbyImageData}
            alt={edge.node.title}
          />

          <p>{getExcerpt(edge.node.body.raw)}</p>

        </li>
      ))}
    </ul>

  </Layout>
)

export const query = graphql`
{
  allContentfulBlogPost {
    edges {
      node {
        id
        title
        slug
        heroImage {
          gatsbyImageData(width: 300, placeholder: BLURRED)
        }
        body {
          raw
        }
      }
    }
  }
}
`

export const Head = () => <Seo title="Home" />

export default IndexPage
