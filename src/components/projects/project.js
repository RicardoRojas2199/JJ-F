/**@jsx jsx */

import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const Project = ({ project }) => {
  const slug = project.frontmatter.slug.replace(/^obras\//, '/obras/');
  return (
    <div
      sx={{
        bg: 'primary',
        border: '1px solid #ccc',
        boxShadow:
          '0px 2px 4px rgba(40, 41, 61, 0.04), 0px 8px 16px rgba(96, 97, 112, 0.16)',
      }}
    >
      <Link
        to={slug}
        sx={{
          color: 'text',
          textDecoration: 'none',
        }}
      >
        <Img
          sizes={{
            ...project.frontmatter.cover.childImageSharp.fluid,
            aspectRatio: 1 / 1,
          }}
        />
        <h3
          sx={{
            m: 0,
            textAlign: 'center',
            p: 2,
            color: 'background',
          }}
        >
          {project.frontmatter.title}
        </h3>
      </Link>
    </div>
  );
};

export default Project;
