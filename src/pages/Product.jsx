import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Product = () => {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    // <div className="bg-gray-100 min-h-screen">
    //   <h1 className="text-3xl font-bold text-gray-800 py-4">Product Page</h1>
    //   <div className="max-w-4xl mx-auto px-4 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    //     {products.map((product) => (
    //       <div key={product.id} className="p-4 border border-gray-300 rounded cursor-pointer">
    //         <h2 className="text-xl font-bold">{product.title}</h2>
    //         <Link to={`/dashboard/product/${product.id}`} className="text-blue-500 underline">
    //         <img src={product.image} alt={product.title} className="w-full max-w-md my-2" /></Link>
    //         <p className="text-gray-700">{product.description}</p>
    //         <p className="text-gray-500 mt-2">${product.price}</p>  
    //       </div> 
    //     ))}
    //   </div>
    // </div>
    <div className="text-center bg-gray-400">
    <div className="grid grid-cols-4 gap-4 p-5">
      {product.map((item) => (
        <div
          key={item.id}
          className="rounded overflow-hidden shadow-lg items-center bg-white p-5"
        >
     
     <NavLink to={`/dashboard/product/${item.id}`} >

            <img
              className="h-[150px] py-[10px] w-full transition duration-700 ease-in-out hover:scale-125"
              src={item.image}
              alt={item.title}
            />
          </NavLink>
          <div className="py-4">
            <div className="font-bold text-xl h-[35px]">
              {item.title.length > 30
                ? item.title.substr(0, 15) + "..."
                : item.title}
            </div>
          </div>
          <div className="font-medium h-[95px]">
            {item.description.length > 60
              ? item.description.substr(0, 60) + "..."
              : item.description}
          </div>
          <div className="p-5">
            <label htmlFor="" className="font-bold">
              PRICE :
            </label>
            <span className="bg-gray-200 font-bold rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">
              &#8377;{item.price}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default Product;
