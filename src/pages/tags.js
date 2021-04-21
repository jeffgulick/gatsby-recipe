import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import setUpTags from "../utils/setUpTags";

const Tags = ({ data }) => {
  const newTags = setUpTags(data.allContentfulRecipe.nodes);
  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag;
            return (
              <Link key={index} to={`/${text}`} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

//page query that gets tags from contentful
export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;
export default Tags;
