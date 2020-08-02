/**@jsx jsx */
import { jsx } from "theme-ui";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/layout";

const ProjectTemplate = ({ data }) => {
  return (
    <Layout>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export default ProjectTemplate;

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      body
    }
  }
`;
