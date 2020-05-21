import { useRef } from "react";
import { Image, Transformation } from "cloudinary-react";

const isProd = process.env.NODE_ENV === 'production'
const BASE_URL = isProd ? `${process.env.VERCEL_URL}` : "http://localhost:3000"

export default function ImageCloud(props) {
  const imageRef = useRef();

  console.log(process.env.CLOUD_API_NAME);

  return imageRef != null ? (
      <Image innerRef={imageRef} cloudName={process.env.CLOUD_API_NAME} publicId={`${BASE_URL}/${props.src}`} type="fetch">
        <Transformation width={props.width} height={props.height} gravity="faces" crop="limit" fetchFormat="auto" quality="75" />
      </Image>
  ) : null;
}