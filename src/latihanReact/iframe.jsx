import React from 'react'

export default function Iframe({width,height,src,title,...props}) {
  return (
    <iframe width={width} height={height} src={src} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen {...props}></iframe>
  )
}
