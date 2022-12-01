import React from "react";

export type ImageType = {
  src: string;
};

const Image = ({ src }: ImageType) => {
  return <img src={src} alt="img" />;
};

export default Image;
