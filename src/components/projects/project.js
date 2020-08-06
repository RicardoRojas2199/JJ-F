/**@jsx jsx */

import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const Project = ({ project, servicios }) => {
  const regex = servicios ? /^servicios\// : /^obras\//;
  const path = servicios ? '/servicios/' : '/obras/';
  const slug = project.frontmatter.slug.replace(regex, path);
  return (
    <div>
      <Link
        to={slug}
        sx={{
          color: 'textLink',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
            '&>div.gatsby-image-wrapper': {
              transform: 'translateY(-5px)',
              boxShadow: '0px 10px 5px -5px rgba(0,0,0,0.27)',
            },
          },
        }}
      >
        <Img
          sizes={{
            ...project.frontmatter.cover.childImageSharp.fluid,
            aspectRatio: 1 / 1,
          }}
        />
        <h6
          sx={{
            m: 0,
            textAlign: 'center',
            p: 2,
            textTransform: 'uppercase',
          }}
        >
          {project.frontmatter.title}
        </h6>
      </Link>
    </div>
  );
};

export default Project;
