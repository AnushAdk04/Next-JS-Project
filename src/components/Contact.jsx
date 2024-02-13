"use client"

import React, { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    console.log(formData);
    // You can send the form data to your backend or handle it as per your requirement
  };

  return (
    <div className="bg-gray-700 py-10">
      <div className="max-w-3xl mx-auto bg-gray-600 p-6 rounded-md shadow-md">
        <h2 className="text-4xl font-semibold mb-4 text-white">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white text-xl">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 w-full border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white text-xl">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 w-full border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-white text-xl">Subject:</label>
            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="mt-1 p-2 w-full border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white text-xl">Message:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="mt-1 p-2 w-full border-gray-300 rounded-md"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 font-bold text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
        </form>
      </div>
    </div>
  );
};
