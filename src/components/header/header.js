/**@jsx jsx */
import Img from 'gatsby-image'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { jsx } from 'theme-ui'
import { TiThMenu } from 'react-icons/ti'
import Navigation from './navigation'

const Header = ({ handleMenu }) => {
  const data = useStaticQuery(graphql`
    query Logo {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <header sx={{ variant: 'layout.header' }}>
      <Link
        to='/'
        sx={{ width: '110px', m: 0, bg: 'white', borderRadius: '25%' }}
      >
        <Img
          fluid={data.file.childImageSharp.fluid}
          imgStyle={{ width: '110px', borderRadius: '8px' }}
        />
      </Link>

      <Navigation />
      <TiThMenu onClick={handleMenu} />
    </header>
  )
}

export default Header
