import React from "react";
import Layout from "../components/layout";
import AboutUs from "../components/about-us";

const Index = ({ location }) => (
  <Layout location={location}>
    <h2>Nosotros</h2>
    <AboutUs />
  </Layout>
);
export default Index;
