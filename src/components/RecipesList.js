import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

//component the adds recipe images and titles to page
const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map((recipe) => {
        //destruct recipe object
        const { id, title, image, prepTime, cookTime } = recipe;
        //helper function for image. prevents crash if image is missing
        const path = getImage(image);
        return (
          //setting up images with titles
          <Link key={id} to={`/${title}`} className="recipe">
            <GatsbyImage image={path} className="recipe-img" alt={title} />
            <h5>{title}</h5>
            <p>
              Prep : {prepTime}min | Cook : {cookTime}min{" "}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default RecipesList;
