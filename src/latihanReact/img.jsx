import React from 'react'

export default function Img({src,alt,...props}) {
  return <img src={src} alt={alt} {...props} />
}
