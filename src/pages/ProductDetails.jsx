import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        console.log(data); // Add this line
      })
      .catch((error) => console.log(error));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <div
    
    className="rounded overflow-hidden shadow-lg text-center bg-white p-5  h-full mx-[550px]"
  >
     <h2>{product.title}</h2>
     <img
               className="h-[150px] py-[10px] px-12  "
      src={product.image} alt={product.title} />
     <p  className="font-bold text-xl truncate ">{product.description}</p>
     <p className="font-bold text-xl truncate ">${product.price}</p>

   </div></div>
  );
};

export default ProductDetails;
