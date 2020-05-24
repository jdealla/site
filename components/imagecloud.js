import React from "react";
import Img from 'react-cloudinary-lazy-image'

export default function ImageCloud(props) {
  const { src, width, height, alt, styles } = props;
  
  return (
      <Img 
        cloudName="dndoa4fno"
        imageName={`${src}`}
        alt={alt}
        fluid={{
          maxWidth: width,
          height: height
        }}
        style={styles}
        urlParams={'c_limit'}
        quality="good"

      />
  )
}