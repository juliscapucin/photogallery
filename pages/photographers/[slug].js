import React, { useState } from "react";
import Layout from "../../components/Layout";

import images from "./../../data/images";

export default function Photograpers() {
  const [photo, setPhoto] = useState(images[0].url);
  return (
    <Layout>
      <section className='photographer-container'>
        <div className='photographer-main-image-container'>
          <div className='photographer-main-image'>
            <img src={photo}></img>
          </div>
        </div>
        <article>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            obcaecati magnam delectus dignissimos esse, voluptates nam corporis
            beatae libero, cumque laboriosam ea asperiores nulla unde repellat
            est quam aliquid! At aliquam iure quo sunt, asperiores porro!
          </p>
        </article>
      </section>
    </Layout>
  );
}
