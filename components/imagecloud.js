import React from "react";
import { Image } from 'cloudinary-react';

export default function ImageCloud(props) {
  const { src, width } = props;
  
  return (
      <Image 
        cloudName="dndoa4fno"
        publicId={src}
        width={width}
        crop="limit"
        secure="true"
      />
  )
}