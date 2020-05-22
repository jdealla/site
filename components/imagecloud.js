import { Image, Transformation } from "cloudinary-react";

export default function ImageCloud(props) {
  return (
      <Image publicId={`${props.src}`} cloudName="dndoa4fno">
        <Transformation width={props.width} height={props.height} quality="60" crop="limit" />
      </Image> 
  )
}