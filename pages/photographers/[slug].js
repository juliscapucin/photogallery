import React, { useState } from "react";
import Layout from "../../components/Layout";

import images from "./../../data/images";

export default function Photograpers() {
  const [photo, setPhoto] = useState(images[1].url);
  return (
    <Layout>
      <section className='photo-gallery-photographer-container'>
        <div className='photo-gallery-photographer-main-image'>
          <img src={photo}></img>
        </div>
      </section>
    </Layout>
  );
}
