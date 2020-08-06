/**@jsx jsx */
import { jsx } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';

import Project from '../projects/project';

const ServiceLayout = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { frontmatter: { slug: { regex: "/^servicio/" } } }) {
        nodes {
          id
          frontmatter {
            title
            slug
            cover {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);
  const projects = data.allMdx.nodes;
  console.log(projects);
  return (
    <div
      sx={{
        display: 'grid',
        gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr'],
        gridGap: 4,
      }}
    >
      {projects.map((project) => (
        <Project project={project} key={project.id} servicios />
      ))}
    </div>
  );
};

export default ServiceLayout;
