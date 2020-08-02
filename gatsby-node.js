const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  const pages = JSON.parse(JSON.stringify(result.data.allMdx.nodes));

  const projects = pages.filter((page) =>
    page.frontmatter.slug.includes("obras")
  );
  projects.forEach((project, index) => {
    createPage({
      path: project.frontmatter.slug,
      component: path.resolve("./src/templates/project-template.js"),
      context: { id: project.id },
    });
  });
};
