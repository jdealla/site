import { Image, Transformation } from "cloudinary-react";

export default function ImageCloud(props) {
  const { src, width } = props;
  return (
      <Image publicId={`${src}`} cloudName="dndoa4fno" secure="true">
        <Transformation width={width} quality="90" crop="limit" fetchFormat="auto" />
      </Image> 
  )
}