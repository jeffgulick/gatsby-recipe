import React from "react";
import setUpTags from "../utils/setUpTags";
import { Link } from "gatsby";

const TagsList = ({ recipes }) => {
  console.log(recipes);
  //utils function to get and sort tags by string content
  const newTags = setUpTags(recipes);

  return (
    <div className="tags-container">
      <h4>Recipes</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [text, value] = tag;
          return (
            <Link to={`/${text}`} key={index}>
              {text} ({value})
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TagsList;
