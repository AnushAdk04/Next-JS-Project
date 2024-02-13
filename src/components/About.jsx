import React from 'react';

export const About = () => {
  return (
    <section className="bg-gray-700 py-5">
      <h2 className="text-5xl font-bold text-sky-400 mb-8 text-center">About Me</h2>
      <h3 className="text-3xl font-semibold text-green-600 mb-4 ml-64">Hi, I'm Anush Adhikari.</h3>
      <div className="container mx-auto px-4 flex">
        <img
          src="/images/profile.jpg"
          alt="Anush Adhikari"
          className="rounded-full h-auto w-48 md:w-64 mr-4"
        />
        <div className='flex flex-col'>
          <p className="text-xl text-purple-400 mb-6">
            I'm a passionate frontend developer and UI/UX designer with a strong focus on creating intuitive, responsive, and visually appealing web applications. I believe in the power of design to elevate user experiences and transform ideas into reality.
          </p>
          <p className="text-xl text-purple-400 mb-6">
            With a background in both design and development, I combine creativity with technical expertise to deliver engaging user experiences. My goal is to craft digital solutions that not only meet user needs but also exceed expectations.
          </p>
          <p className="text-xl text-purple-400 mb-6">
            Let's collaborate and bring your vision to life!
          </p>
          <button className="bg-blue-500 text-white font-semibold py-1 px-2 rounded hover:bg-blue-600 hover:text-white">
            See More
          </button>
        </div>
      </div>
    </section>
  );
};
