<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import Product from "../components/auth/Product";
=======
// react-app/src/pages/Home.js
//milestone_16 completed
import React, { useEffect, useState } from "react";
import Product from "../components/auth/Product";
import Nav from "../components/auth/nav";


>>>>>>> 532cadd (milestone 22)
export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error handling

  useEffect(() => {
    fetch("http://localhost:8000/api/v2/product/get-products")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
<<<<<<< HEAD
        console.error("❌ Error fetching products:", err);
=======
        console.error(" Error fetching products:", err);
>>>>>>> 532cadd (milestone 22)
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center text-white mt-10">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-10">Error: {error}</div>;
  }

  return (
<<<<<<< HEAD
    <div className="w-full min-h-screen bg-neutral-800">
      <h1 className="text-3xl text-center text-white py-6">Product Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
        {products.map((product) => (
          <Product key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
}
=======
    <>
      <Nav />
      <div className="w-full min-h-screen bg-neutral-800">
        <h1 className="text-3xl text-center text-white py-6">Product Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
          {products.map((product) => (
            <Product key={product._id} {...product} />
          ))}
        </div>
      </div>
    </>
  );
}
>>>>>>> 532cadd (milestone 22)
