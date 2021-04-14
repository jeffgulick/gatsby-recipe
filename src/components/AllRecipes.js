import React from "react";
import TagsList from "./TagsList";
import RecipesList from "./RecipesList";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;
const AllRecipes = () => {
  // const data = useStaticQuery(query)
  // const recipes = data.allContentfulRecipe.nodes
  //below destructures the data returned to useStaticQuery. the data from the query. above is another way to do
  //the same. cant decide which i like better
  const { allContentfulRecipe: { nodes: recipes } } = useStaticQuery(query);

  console.log(recipes);
  return (
    <div>
      <h4>AllRecipes</h4>
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </div>
  );
};

export default AllRecipes;
