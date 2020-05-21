import { useState, useEffect } from "react";
import { Image, Transformation } from "cloudinary-react";

export default function ImageCloud(props) {
  const [didMount, setMount] = useState(false);

  useEffect(() => {
    if (!didMount)
      setMount(true)

    console.log(props.src)
  }, [didMount])

  return (
      <Image cloudName={process.env.CLOUD_API_NAME} apiKey={process.env.CLOUD_API_KEY} api_secret={process.env.CLOUD_API_SECRET} publicId={props.src} type="fetch">
        <Transformation width={props.width} height={props.height} gravity="faces" crop="limit" fetchFormat="auto" quality="75" />
      </Image>
  ) && didMount
}