import { useRef, useEffect } from "react";
import { Image, Transformation } from "cloudinary-react";

export default function ImageCloud(props) {
  const mounted = useRef(false)

  useEffect(() => {
    mounted.current = true;

    return () => { mounted.current = false; }
  }, [])

  return mounted.current ? (
      <Image publicId={`${props.src}`} cloudName="dndoa4fno">
        <Transformation width={props.width} height={props.height} fetchFormat="auto" quality="auto" />
      </Image> 
  ) : null
}