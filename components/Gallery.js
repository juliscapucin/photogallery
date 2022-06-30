import React, { useState, useEffect } from "react";
import Image from "./Image";

import images from "./../data/images";

const clientID = `?client_id=${process.env.REACT_APP_HOR_SNAP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/users/`;

export default function Gallery({ name, url }) {
  const [loading, setLoading] = useState(true);
  const [allImages, setAllImages] = useState(images);

  return (
    <>
      <header>
        <a
          className='photo-gallery-btn'
          href={`${!loading && url}`}
          target='_blank'
        >
          <div className='photo-gallery-user-name'>
            <h1>{name}</h1>
          </div>
        </a>
      </header>
      <section className='photo-gallery-gallery'>
        <div className='photo-gallery-grid '>
          {images.map((item, index) => {
            return <Image index={index + 1} key={index} {...item} />;
          })}
        </div>
      </section>
    </>
  );
}
