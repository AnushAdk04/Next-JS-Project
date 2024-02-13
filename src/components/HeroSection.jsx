"use client";

import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export const HeroSection = () => {
  return (
    <div className='bg-gray-900 text-white h-screen flex items-center justify-center'>
      <div className='text-center w-1/2'>
        <div>
          <h1 className="text-white font-bold pt-30">
            <span className="text-white text-8xl">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              className='bg-gradient-to-r from-purple-500 to-pink-600 text-transparent bg-clip-text font-extrabold text-7xl'
              sequence={[
                "Anush Adhikari",
                2000,
                "Frontend Developer",
                2000,
                "UI/UX Designer",
                2000,
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          </h1>
          <button className='mt-8 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-pink-500 hover:to-purple-600 text-white py-2 px-4 rounded-md text-lg font-semibold'>
            Download CV
          </button>
          <button className='mt-8 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-pink-500 hover:to-purple-600 text-white py-2 px-4 rounded-md text-lg font-semibold ml-20'>
            Hire Me
          </button>
        </div>
      </div>

      <div className='w-1/2 flex justify-end mt-8'>
        <img src='/images/heroimage.png' alt='Hero Image' className='mr-5' />
      </div>
    </div>
  );
};