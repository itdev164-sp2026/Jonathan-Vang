const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allContentfulBlogPost {
        nodes {
          id
          slug
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const templatePath = path.resolve(__dirname, "src", "templates", "blog-post.js");
  console.log("Using template:", templatePath);

  result.data.allContentfulBlogPost.nodes.forEach((post) => {
    createPage({
      path: `/blog/${post.slug}`,
      component: templatePath,
      context: {
        slug: post.slug,
      },
    });
  });
};

