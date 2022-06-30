import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import styles from "./../styles/Layout.module.scss";

const opacityTransitionVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
  },
  exit: { opacity: 1 },
};

const opacity2TransitionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

const transitionContainerVariants = {
  visible: {
    x: 0,
    transition: { duration: 0.2, staggerChildren: 0.1 },
  },
  exit: {
    x: 0,
    transition: { duration: 0.2, staggerChildren: 0.1 },
  },
};

const transitionVariants = {
  hidden: { x: "0%" },
  visible: {
    x: "-100%",
    transition: { duration: 0.2, ease: "easeInOut" },
  },
  exit: { x: "0%", transition: { duration: 0.1, ease: "easeInOut" } },
};

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();

  return (
    <>
      <motion.div
        variants={opacityTransitionVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <motion.div
          className={styles.transition}
          variants={transitionContainerVariants}
        >
          <motion.div
            className={styles.transitionUnit}
            variants={transitionVariants}
          ></motion.div>
          <motion.div
            className={styles.transitionUnit}
            variants={transitionVariants}
          ></motion.div>
          <motion.div
            className={styles.transitionUnit}
            variants={transitionVariants}
          ></motion.div>
          <motion.div
            className={styles.transitionUnit}
            variants={transitionVariants}
          ></motion.div>
        </motion.div>
      </motion.div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <motion.div
        variants={opacity2TransitionVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <div className={styles.mainContainer}>{children}</div>
      </motion.div>
    </>
  );
}

Layout.defaultProps = {
  title: "Paul de Heer | Film editor",
  description: "Here goes description for meta tag.",
  keywords: "film, filmmaking, edition",
  link: "rel='icon' href='/favicon.ico'",
};