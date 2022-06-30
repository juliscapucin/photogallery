import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import users from "./../data/users";

import Gallery from "./../Components/Gallery";
import Layout from "./../components/Layout";

import styles from "./../styles/Layout.module.scss";

export default function App() {
  const [featuredUsers] = useState(users);

  return (
    <Layout title='Photo Gallery' description='A Photo Gallery from Unsplash'>
      <main className='photo-gallery-main-container'>
        {featuredUsers.map((item, index) => {
          return (
            <AnimatePresence exitBeforeEnter key={index}>
              <Gallery {...item} />
            </AnimatePresence>
          );
        })}
      </main>
      <footer className='photo-gallery-footer'>
        <p>© 2022 Juli Scapucin</p>
        <div className='photo-gallery-socials'>
          <p>Social</p>
          <ul>
            <li>
              <a href='#'>Instagram</a>
            </li>
            <li>
              <a href='#'>LinkedIn</a>
            </li>
            <li>
              <a href='#'>Twitter</a>
            </li>
          </ul>
        </div>
      </footer>
    </Layout>
  );
}
