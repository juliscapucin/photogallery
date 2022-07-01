import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import Layout from "../../components/Layout";

import images from "./../../data/images";

export default function Photographers({ image }) {
  const [photo, setPhoto] = useState(image.url);
  const [hasScrolled, setHasScrolled] = useState(false);
  const refMainImage = useRef(null);

  console.log(image);

  // Scroll to top
  useEffect(() => {
    window.scroll(0, 0);
    setHasScrolled(true);
  }, []);

  // After scrolling to top, make main image position relative
  useEffect(() => {
    setTimeout(() => {
      refMainImage.current.style.position = "relative";
      refMainImage.current.style.right = 0;
    }, 800);
  }, [hasScrolled]);

  return (
    <Layout>
      <section className='photographer-container'>
        <div className='photographer-main-image-container' ref={refMainImage}>
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

// GET STATIC PATHS
// ----------------
export async function getStaticPaths() {
  const { data } = images;

  const paths = images.map((item) => ({
    params: { slug: item.slug },
  }));

  return { paths, fallback: false };
}

// GET STATIC PROPS
// ----------------
export async function getStaticProps({ params: { slug } }) {
  const { data } = images;

  const imagesData = images.filter((item) => item.slug === slug);

  return { props: { image: imagesData[0] }, revalidate: 1 };
}
