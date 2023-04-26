import React from "react";
import { GifItem } from "../components";
import LinearProgress from "@mui/material/LinearProgress";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  const printImages = () => {
    return images.map((image) => <GifItem key={image.id} {...image} />);
  };

  return (
    <div>
      <h3>{category}</h3>
      {isLoading && <LinearProgress />}
      <div className="card-grid">{printImages()}</div>
    </div>
  );
};
