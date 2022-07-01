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
      <section className='photo-gallery-gallery'>
        <div className='photo-gallery-grid '>
          {images.map((item, index) => {
            return <Image index={index} key={index} {...item} />;
          })}
        </div>
      </section>
    </>
  );
}
