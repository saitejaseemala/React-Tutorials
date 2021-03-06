import React from "react";
import ImageCard from "./ImageCard";
import "../styles/ImagesList.css";

const ImagesList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};
export default ImagesList;
