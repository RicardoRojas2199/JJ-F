/**@jsx jsx */
import { jsx } from 'theme-ui'
import { AiFillBulb } from 'react-icons/ai'
import { FaBullseye } from 'react-icons/fa'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import Image from 'gatsby-image'

const Nosotros = () => {
  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "nosotros.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Nosotros</h1>
      <div
        sx={{
          display: 'grid',
          gridTemplateColumns: ['1fr', '360px 1fr'],
          gridGap: '1rem'
        }}
      >
        <Image
          fluid={image.file.childImageSharp.fluid}
          style={{
            maxWidth: '360px'
          }}
        />
        <p sx={{ display: 'flex', alignItems: 'center' }}>
          Desde 2009 nos constituimos como una empresa constructora,
          desarrollamos diversos proyectos a nivel nacional, en todos los
          sectores de la construcción: Infraestructura, enegería, edificaciones,
          minería, gas y petróleo, industria y saneamiento.
          <br />
          <br />
          Nuestra amplia experiencia, profesionalismo, hace que podamos
          garantizar a nuestros clientes la entrega de un proyecto con los más
          altos estándares de seguridad, calidad y entregado antes del plazo
          pactado, respetando y protegiendo el medio ambiente.
        </p>
      </div>
      <div
        sx={{
          display: 'grid',
          gridTemplateColumns: ['1fr', '1fr 1fr'],
          gridGap: '1rem',
          textAlign: 'center'
        }}
      >
        <div>
          <h2>
            <AiFillBulb sx={{ color: 'primary' }} /> <br /> Misión{' '}
          </h2>
          <p>
            Brindar valor agregado a nuestro proyectos integrales, a nuestra
            supervisión y construcción cumpliendo con las expectativas
            requeridas y satisfaciendo las necesidades de nuestros clientes.
            Garantizando nuestro trabajo con responsabilidad, seguridad, calidad
            y eficiencia.
          </p>
        </div>
        <div>
          <h2>
            <FaBullseye sx={{ color: 'primary' }} />
            <br /> Visión
          </h2>
          <p>
            Ser una empresa referente del diseño y construcción a nivel
            nacional; promoviendo el uso correcto y sostenible de materiales.
            Promover nuestros valores fundamentales como: Honestidad, Liderazgo,
            Excelencia, Innovación y Responsabilidad social
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Nosotros

// ---
// title: Nosotros
// slug: nosotros
// ---

// # Nuestra Empresa

// ![](../images/nosotros.jpg)

// Desde 2009 nos constituimos como una empresa constructora, desarrollamos diversos proyectos a nivel nacional, en todos los sectores de la construcción: Infraestructura, enegería, edificaciones, minería, gast y petróleo, industria y saneamiento.

// ## Misión

// Brindar valor agregado a nuestro proyectos integrales, a nuestra supervisión y construcció; cumpliendo con las expectativas requeridas y satisfaciendo las necesidades de nuestros clientes. Garantizando nuestro trabajo con responsabilidad, seguridad, calidad y eficiencia.

// ## Visión

// Ser una empresa referente del diseño y construcción a nivel nacional; promoviendo el uso correcto y sostenible de materiales.
