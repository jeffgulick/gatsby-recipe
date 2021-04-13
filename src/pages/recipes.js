import React from "react";
import Layout from "../components/Layout";
import Gallery from '../examples/Gallery'

const Recipes = ({ data }) => {
  return (
    <Layout>
      <p>recipes page</p>
      <Gallery />
    </Layout>
  );
};

export default Recipes;
