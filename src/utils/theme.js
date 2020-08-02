const defaultFontStack = [
  "-apple-system",
  "BlinkMacSystemFont",
  "Raleway",
  "Segoe UI",
  "Roboto",
  "Helvetica",
  "Arial",
  "sans-serif",
  "Apple Color Emoji",
  "Segoe UI Emoji",
  "Segoe UI Symbol",
];

export const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 64],
  fonts: {
    body: defaultFontStack.join(),
    heading: "Raleway, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 700,
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#004693",
    secondary: "#ffc600",
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
  },
  styles: {
    h1: {
      variant: "text.heading",
      fontSize: 6,
    },
  },
  layout: {
    header: {
      bg: "primary",
      color: "white",
      height: 64,
      py: 2,
      px: [3, null, "calc(50vw - 480px)"],
      display: "grid",
      gridTemplateColumns: ["1fr 32px", null, "300px 1fr"],
      svg: {
        fontSize: 5,
        display: ["block", null, "none"],
      },
      h1: {
        m: 0,
      },
      nav: {
        display: ["none", null, "flex"],
        justifyContent: "space-around",
        alignItems: "center",
        a: {
          color: "background",
          fontSize: 3,
          fontWeight: "heading",
          textDecoration: "none",
          "&:hover": {
            color: "secondary",
          },
        },
      },
    },
    drawer: {
      position: "fixed",
      height: "calc(100vh - 64px)",
      top: 64,
      width: "100vw",
      display: ["block", null, "none"],
      bg: "background",
      nav: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100%",
        p: 3,
        a: {
          color: "text",
          fontSize: 4,
          fontWeight: "heading",
          textDecoration: "none",
          textTransform: "uppercase",
          textAlign: "center",
          "&:hover": {
            color: "primary",
          },
        },
      },
    },
    main: {
      width: "90vw",
      mx: "auto",
      maxWidth: "960px",
    },
  },
};
