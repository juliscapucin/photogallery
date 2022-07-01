import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

import images from "../data/images";

/*
=================== 
Transition Variants
===================
*/

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 1 },
  },
};

/*
=================== 
Image Component
===================
*/
export default function Image({ url, description, id, index }) {
  const [info, setInfo] = useState({});
  const [showInfo, setShowInfo] = useState(false);
  const refParagraph = useRef(null);
  const refImageWrapper = useRef(null);
  const refTextInfo = useRef(null);
  const router = useRouter();

  useEffect(() => {
    images.forEach((item) => {
      if (item.id === id) {
        setInfo(item);
      }
    });
  }, []);

  const growImage = () => {
    refImageWrapper.current.style.width = "90vw";
    refImageWrapper.current.style.height = "100vh";
    refTextInfo.current.style.transform = "translateY(150%)";

    refImageWrapper.current.scrollIntoView();

    setTimeout(() => {
      router.push(`/photographers/${info.slug}`);
    }, 600);
  };

  return (
    // <motion.article
    //   variants={containerVariants}
    //   initial='hidden'
    //   animate='visible'
    //   exit='exit'
    // >
    <button
      className='photo-gallery-btn'
      onMouseEnter={() => setShowInfo(!showInfo)}
      onMouseLeave={() => setShowInfo(!showInfo)}
      onClick={growImage}
    >
      <div className='photo-gallery-img-container' ref={refImageWrapper}>
        <div className='photo-gallery-info-container' ref={refTextInfo}>
          <div
            className='photo-gallery-info'
            style={
              showInfo
                ? {
                    transform: "translateY(0%)",
                  }
                : {
                    transform: "translateY(65%)",
                  }
            }
          >
            <h3>{info.title}</h3>
            <div className='photo-gallery-paragraph' ref={refParagraph}>
              <p>{info.paragraph}</p>
              <p>{info.shortText}</p>
            </div>
          </div>
        </div>
        <div className='photo-gallery-img'>
          <img src={url} alt={description} loading='lazy' />
        </div>
      </div>
    </button>
    // </motion.article>
  );
}
