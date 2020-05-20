import React from "react";

export default function Image(props) {
  return (
    <picture>
        <source
            srcSet={require(`images/${props.src}?webp`)}
            type="image/webp"
        />
        <source
            srcSet={require(`images/${props.src}`)}
            type={`image/${props.src.split('.').pop()}`}
        />
        <img
            src={require(`images/${props.src}`)}
            width={props.width}
            height={props.height}
            alt={props.alt}
            className={props.className}
        />
    </picture>
  )
}