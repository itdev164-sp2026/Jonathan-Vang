import React from "react";
import { graphql } from "gatsby";

export default function BlogPost({ data }) {
  return (
    <main style={{ padding: 20 }}>
      <h1>{data.contentfulBlogPost.title}</h1>
    </main>
  );
}

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
    }
  }
`;

