import { useRef, useEffect } from "react";
import { Image, Transformation } from "cloudinary-react";

export default function ImageCloud(props) {
  const mounted = useRef(false)

  useEffect(() => {
    mounted.current = true;

    return () => { mounted.current = false; }
  }, [])

  return mounted.current ? (
      <Image cloudName={process.env.CLOUD_API_NAME} publicId={props.src} type="fetch">
        <Transformation width={props.width} height={props.height} gravity="faces" crop="limit" fetchFormat="auto" quality="auto" />
      </Image> 
  ) : null
}