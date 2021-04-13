import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            width: 200
            height: 200
          )
        }
      }
    }
  }
`;
const Gallery = () => {
  const data = useStaticQuery(query);
  const nodes = data.allFile.nodes;
  console.log("data", data);

  return (
    <div>
      <h2>simple image gallery</h2>
      <Wrapper>
        {nodes.map((image, index) => {
          const { name } = image;
          const pathToImage = getImage(image)
          //image.childImageSharp.gatsbyImageData is the same as below
          {/* const {
            childImageSharp: { gatsbyImageData },
          } = image; */}

          return (
            <article key={index} className="item">
              <GatsbyImage
                // image={gatsbyImageData}
                image={pathToImage}                alt={name}
                className="gallery-img"
              />
              <p>{name}</p>
            </article>
          );
        })}
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  .item {
    margin-right: 1rem;
  }
  .gallery-img{
      border-radius: 1rem;
  }
`;

export default Gallery;
