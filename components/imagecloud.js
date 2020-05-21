import { useRef, useEffect } from "react";
import { Image, Transformation } from "cloudinary-react";

const isProd = process.env.NODE_ENV === 'production'
const BASE_URL = isProd ? `${process.env.VERCEL_URL}` : "http://localhost:3000"

export default function ImageCloud(props) {
  const mounted = useRef(false)

  useEffect(() => {
    mounted.current = true;

    return () => { mounted.current = false; }
  }, [])

  return mounted.current ? (
      <Image cloudName={process.env.CLOUD_API_NAME} publicId={`${BASE_URL}/${props.src}`} type="fetch">
        <Transformation width={props.width} height={props.height} gravity="faces" crop="limit" fetchFormat="auto" quality="auto" />
      </Image> 
  ) : null
}