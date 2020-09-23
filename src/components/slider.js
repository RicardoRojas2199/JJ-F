/**@jsx jsx */
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import { jsx } from 'theme-ui'
import { useEffect, useState } from 'react'

const Slider = () => {
  const [mobile, setMobile] = useState(true)
  useEffect(() => {
    if (window.innerWidth > 768) {
      setMobile(false)
    }
  }, [])
  const data = useStaticQuery(graphql`
    query Bg {
      landscape: file(relativePath: { eq: "bg-landscape.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vertical: file(relativePath: { eq: "bg-phone.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div sx={{ position: 'relative', pt: 64 }}>
      {mobile ? (
        <Img
          fluid={data.vertical.childImageSharp.fluid}
          style={{ height: 'calc(100vh - 64px)' }}
        />
      ) : (
        <Img
          fluid={data.landscape.childImageSharp.fluid}
          style={{ height: 'calc(100vh - 64px)' }}
        />
      )}
      <div
        sx={{
          bg: 'black',
          opacity: 0.6,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 100
        }}
      ></div>
      <div
        sx={{
          position: 'absolute',
          top: 0,
          left: '5vw',
          width: '90vw',
          height: '100%',
          zIndex: 200,
          color: 'background',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          pb: 6,
          fontWeight: 'heading',
          textTransform: 'uppercase',
          fontFamily: 'heading',
          textAlign: 'center'
        }}
      >
        <h1>Diseñamos obras en general</h1>
        <h2 sx={{ m: 0 }}>¿Qué podemos hacer por ti?</h2>
        <h2 sx={{ m: 0 }}>¡Averigualo!</h2>
      </div>
    </div>
  )
}

export default Slider
