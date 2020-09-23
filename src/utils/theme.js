const defaultFontStack = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Raleway',
  'Segoe UI',
  'Roboto',
  'Helvetica',
  'Arial',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol'
]

export const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 64],
  fonts: {
    body: defaultFontStack.join(),
    heading: 'Raleway, sans-serif',
    monospace: 'Menlo, monospace'
  },
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 700
  },
  colors: {
    text: '#5d5d5d',
    background: '#fff',
    primary: '#004693',
    secondary: '#ffc600',
    textLink: '#004693',
    muted: '#777b7f'
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading'
    }
  },
  styles: {
    h1: {
      variant: 'text.heading',
      fontSize: 6,
      textAlign: 'center',
      color: 'primary'
    },
    h2: {
      variant: 'text.heading',
      fontSize: 5
    },
    h3: {
      variant: 'text.heading',
      fontSize: 4
    },
    h4: {
      variant: 'text.heading',
      fontSize: 3
    },
    h5: {
      variant: 'text.heading',
      fontSize: 2
    },
    h6: {
      variant: 'text.heading',
      fontSize: 1
    },
    p: {
      mt: 0,
      textAlign: 'left',
      color: 'text',
      fontFamily: 'heading',
      '& > span.gatsby-resp-image-wrapper': {
        maxWidth: '400px!important'
      }
    },
    ul: {
      fontFamily: 'heading',
      li: {
        listStyleType: 'none',
        mb: 3
      }
    }
  },
  button: {
    primary: {
      color: 'background',
      bg: 'textLink',
      textTransform: 'uppercase',
      px: 5,
      py: 2,
      fontFamily: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
      border: 'none',
      outline: 'none',
      borderRadius: '8px'
    }
  },
  layout: {
    form: {
      display: 'grid',
      gridGap: 3,
      maxWidth: '400px',
      mx: 'auto',
      label: {
        display: 'grid',
        gridGap: 2,
        fontSize: 2,
        fontFamily: 'heading',
        fontWeight: 'heading',
        input: {
          height: '32px',
          fontSize: 2,
          borderRadius: '4px',
          px: 2,
          border: '1px solid #ccc',
          bg: 'transparent'
        },
        textArea: {
          fontSize: 2,
          borderRadius: '4px',
          px: 2,
          border: '1px solid #ccc'
        }
      }
    },
    header: {
      bg: 'primary',
      color: 'background',
      position: 'fixed',
      zIndex: '300',
      width: '100vw',
      height: 64,
      py: 2,
      px: [3, null, 'calc(50vw - 480px)'],
      display: 'grid',
      alignItems: 'center',
      gridTemplateColumns: ['1fr 32px', null, '300px 1fr'],
      boxShadow: ' 0px 10px 5px -5px rgba(0,0,0,0.27)',
      svg: {
        fontSize: 5,
        display: ['block', null, 'none']
      },
      h1: {
        m: 0
      },
      nav: {
        display: ['none', null, 'flex'],
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',
        a: {
          color: 'background',
          fontSize: 3,
          fontWeight: 'heading',
          textDecoration: 'none',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          borderBottom: '3px solid transparent',
          '&:hover': {
            borderBottom: t => `3px solid ${t.colors.secondary}`
          }
        }
      }
    },
    drawer: {
      position: 'fixed',
      height: 'calc(100vh - 64px)',
      top: 64,
      width: '100vw',
      display: ['block', null, 'none'],
      bg: 'background',
      nav: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',
        p: 3,
        a: {
          color: 'text',
          fontSize: 4,
          fontWeight: 'heading',
          textDecoration: 'none',
          textTransform: 'uppercase',
          textAlign: 'center',
          '&:hover': {
            color: 'primary'
          }
        }
      }
    }
  }
}
