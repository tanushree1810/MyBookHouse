import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom';

import { Banner } from 'flowbite-react';
import { HiX } from 'react-icons/hi';
import { MdAnnouncement } from 'react-icons/md';

const SignleBook = () => {
    const data = useLoaderData();
    const { bookTitle,authorName,imageURL,bookDescription, category } = data;
    console.log(data)
    return (
        <div className="max-w-3xl mx-auto py-48 flex flex-col items-center">
      

      {/* Book details */}
      <div className="flex items-center mb-8" >
        <img src={imageURL} alt={bookTitle} className="w-64  h-auto mr-8" />
        <div>
          <h1 className="text-6xl font-bold text-blue-800 mb-14">{bookTitle}</h1>
          <p className="text-gray-600 mb-2 text-2xl font-bold">Category: <span className='text-blue-500'>{category}</span></p>
          <p className="text-gray-600 mb-4 text-xl">{bookDescription}</p>
          <p className="text-gray-800 mb-2 font-semibold  text-2xl">Author: <span className='text-blue-500'>  {authorName} </span></p>
          {/* You can add more details here such as ratings, genre, etc. */}
        </div>
      </div>

      {/* Back to home link */}
      <div className="mt-8">
        <Link to="/" className="inline-block bg-blue-800  text-white font-semibold py-2 px-4 rounded hover:bg-black transition-all duration-700">Back to Home</Link>
      </div>
    </div>
    
    )
}

export default SignleBook