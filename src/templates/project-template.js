/**@jsx jsx */
import { jsx } from 'theme-ui';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout';

const ProjectTemplate = ({ data }) => {
  const { gallery } = data.mdx.frontmatter;
  return (
    <Layout>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      <div
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))',
          gridGap: '16px',
          gridAutoRows: '200px',
        }}
      >
        {gallery.map((image) => (
          <div
            key={image.childImageSharp.id}
            sx={{
              gridRow:
                image.childImageSharp.fluid.aspectRatio > 0.7 && 'span 2',
              gridColumn:
                image.childImageSharp.fluid.aspectRatio > 1.5 && 'span 2',
            }}
          >
            <Img
              fluid={image.childImageSharp.fluid}
              sx={{
                borderRadius: '16px',
                boxShadow:
                  '0px 2px 4px rgba(40, 41, 61, 0.5), 0px 8px 16px rgba(96, 97, 112, 0.3)',
              }}
              style={{ height: '100%', width: '100%' }}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ProjectTemplate;

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        gallery {
          childImageSharp {
            id
            fluid {
              aspectRatio
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
