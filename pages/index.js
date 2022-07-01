import React, { useState } from "react";

import users from "./../data/users";

import Gallery from "./../Components/Gallery";
import Layout from "./../components/Layout";

export default function App() {
  const [featuredUsers] = useState(users);

  return (
    <Layout title='Photo Gallery' description='A Photo Gallery from Unsplash'>
      <main className='photo-gallery-main-container'>
        {featuredUsers.map((item, index) => {
          return <Gallery {...item} key={index} />;
        })}
      </main>
    </Layout>
  );
}
