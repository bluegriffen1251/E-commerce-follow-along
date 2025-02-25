<<<<<<< HEAD
import PropTypes from "prop-types";
import {React,useState,useEffect} from 'react';

const Product = ({ name, images, description, price }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
=======
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Product({ _id, name, images, description, price }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

>>>>>>> 532cadd (milestone 22)
  useEffect(() => {
    if (!images || images.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval); // Cleanup on unmount
<<<<<<< HEAD
  }, [images]);   //Defining useState and useEffect Hooks

  const currentImage = images[currentIndex]; //add this line
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transform transition-transform hover:scale-105 flex flex-col items-center">
      <div className="w-full">
        <img
          src={`http://localhost:8000${currentImage}`} //change this as we need to add image dynamically 
          alt={name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
          {name}
        </h2>
        <p className="text-sm text-gray-600 text-center mb-4">{description}</p>
      </div>
      <div className="w-full text-center">
        <p className="text-lg font-bold text-gray-900 mb-4">${price.toFixed(2)}</p>
        <button className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-all">
=======
  }, [images]);



  const currentImage = images[currentIndex];
  return (
    <div className="bg-neutral-200 p-4 rounded-lg shadow-md flex flex-col justify-between">
      <div className="w-full ">
        <img
          src={`http://localhost:8000${currentImage}`} // Ensure the URL is correct\
          alt={name}
          className="w-full h-56 object-cover rounded-lg mb-2"
        />
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-sm opacity-75 mt-2">{description}</p>
      </div>
      <div className="w-full mt-4">
        <p className="text-lg font-bold my-2">${price.toFixed(2)}</p>

        <button className="w-full text-white px-4 py-2 rounded-md bg-neutral-900 hover:bg-neutral-700 transition duration-300"
          onClick={() => navigate(`/product/${_id}`)}
        >
>>>>>>> 532cadd (milestone 22)
          More Info
        </button>
      </div>
    </div>
  );
<<<<<<< HEAD
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
=======
}
>>>>>>> 532cadd (milestone 22)
