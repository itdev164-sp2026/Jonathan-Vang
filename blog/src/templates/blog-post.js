import * as React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"

const BlogPost = ({ data }) => {
  const post = data.contentfulBlogPost
  const body = JSON.parse(post.body.raw)

  return (
    <Layout>
      <h1>{post.title}</h1>

      {documentToReactComponents(body)}

    </Layout>
  )
}

export const query = graphql`
query BlogPostTemplate($slug: String!) {
  contentfulBlogPost(slug: { eq: $slug }) {
    title
    body {
      raw
    }
  }
}
`

export default BlogPost
