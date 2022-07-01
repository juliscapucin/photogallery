import React from "react";

export default function Header() {
  return (
    <header>
      <a
        className='photo-gallery-btn'
        href={"https://unsplash.com/@joegeek"}
        // href={`${!loading && url}`}
        target='_blank'
      >
        <div className='photo-gallery-user-name'>
          <h1>Joe Geek</h1>
        </div>
      </a>
    </header>
  );
}
