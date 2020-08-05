/**@jsx jsx */
import { jsx } from 'theme-ui';
import { useStaticQuery, graphql } from 'gatsby';

import Project from './project';

const ProjectsLayout = ({ obras }) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { frontmatter: { slug: { regex: "/^obras/" } } }) {
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
  return (
    <div
      sx={{
        display: 'grid',
        gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr'],
        gridGap: 4,
      }}
    >
      {projects.map((project) => (
        <Project basePath={obras} project={project} key={project.id} />
      ))}
    </div>
  );
};

export default ProjectsLayout;
