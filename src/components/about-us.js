/**@jsx jsx */
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import { jsx } from "theme-ui";

const AboutUs = () => {
  const data = useStaticQuery(graphql`
    query Aboutus {
      file(relativePath: { eq: "aboutus.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: ["1fr", "1fr 1fr", null],
      }}
    >
      <div>
        <h3>
          Somos <span>JJ&amp;F CONTRATISTAS GENERALES S.A.C.</span>
        </h3>
        <h4>
          Somos una empresa que se desarrolla en el sector de la construcción,
          manejando proyectos con principios de calidad, tiempo, alcances y
          costos. Adaptamos las especificaciones técnicas y los planes a los
          diversos requerimientos de nuestros clientes.
        </h4>
        <p>
          Nos distinguimos de otras empresas por el nivel de compromiso para
          satisfacer los requerimientos de los clientes. La sostenibilidad del
          negocio se fundamenta en el valor económico generado por excelentes
          relaciones de negocio con nuestros clientes.
        </p>
      </div>
      <Img fluid={data.file.childImageSharp.fluid} />
    </div>
  );
};

export default AboutUs;
