import React from 'react';
import coverImage from '../assets/coverimage.png';


function Home() {
  return (
    <div className="relative w-full h-screen">
      {/* Cover Image */}
      <img src={coverImage} alt="Cover" className="w-full h-full object-cover" />

      {/* Overlay with Text */}
      <div className="absolute top-0 left-52 w-full h-full flex items-center justify-center bg-transparent">
        <h1 className="text-white text-10xl md:text-5xl font-bold text-center leading-relaxed">
          "Code your<br /> dreams into<br /> reality. Every <br />line brings you <br />closer to<br /> innovation."
        </h1>
      </div>
    </div>
  );
}

export default Home;
