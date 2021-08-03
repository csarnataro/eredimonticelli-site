/* eslint-disable react/prop-types */
import Image from 'next/image'
import React from 'react'

type ImgMediaCardProps = {
  image: string;
  title?: string;
}

export default function ImgMediaCard ({ image, title }: ImgMediaCardProps) {
  return (
    <div>
      <div data-attribute="SRL">
        <Image
          title={title}
          alt={title}
          src={image}
          layout="fill"
        />
        <div onClick={() => alert(1)}>
          <p>
            {title}
          </p>
        </div>
      </div>
    </div>
  )
}
