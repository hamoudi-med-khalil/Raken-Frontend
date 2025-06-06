import React, { useState } from "react";
import { FaSkull } from "react-icons/fa";
import { TbFileDescription } from "react-icons/tb";

const EditProductPage = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collections: "",
    material: "",
    gender: "",
    images: [
      {
        url: "https://picsum.photos/150?random=1",
      },
      {
        url: "https://picsum.photos/150?random=2",
      },
    ],
  });

  const handleChange = (e) =>{
    const {name , value} = e.target;
    setProductData({...productData, [name] : value})
  }
  
  const handleImageUpload = async (e)=>{
    const file = e.target.files[0]
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
  }

  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-6">Edit Product</h2>
      <form onSubmit={handleSubmit}>
        {/* name */}
        <div className="mb-6">
          <label htmlFor="name" className="block font-semibold mb-2">
            Product Name
          </label>
          <input
             type="text"
             name="name"
             value={productData.name}
             onChange={handleChange}
             className="w-full border border-gray-300 rounded-md p-2"
             required
             />
        </div>
        {/* description */}
        <div className="mb-6">
          <label htmlFor="description" className="block font-semibold mb-2">
            Description
          </label>
          <textarea
             type="text"
             name="description"
             value={productData.description}
             onChange={handleChange}
             className="w-full border border-gray-300 rounded-md p-2"
             rows={4}
             required
             />
        </div>
           {/* Price */}
        <div className="mb-6">
          <label htmlFor="price" className="block font-semibold mb-2">
            Price
          </label>
          <input
             type="number"
             name="price"
             value={productData.price}
             onChange={handleChange}
             className="w-full border border-gray-300 rounded-md p-2"
             required
             />
        </div>
           {/* Count In stock */}
        <div className="mb-6">
          <label htmlFor="countinstock" className="block font-semibold mb-2">
            Count In Stock
          </label>
          <input
             type="number"
             name="countInStock"
             value={productData.countInStock}
             onChange={handleChange}
             className="w-full border border-gray-300 rounded-md p-2"
             required
             />
        </div>
           {/* SKU */}
        <div className="mb-6">
          <label htmlFor="sku" className="block font-semibold mb-2">
            SKU
          </label>
          <input
             type="text"
             name="sku"
             value={productData.sku}
             onChange={handleChange}
             className="w-full border border-gray-300 rounded-md p-2"
             
             />
        </div>
           {/* Sizes */}
        <div className="mb-6">
          <label htmlFor="sizes" className="block font-semibold mb-2">
            Sizes 
          </label>
          <input
             type="text"
             name="sizes"
             value={productData.sizes.join(",")}
             onChange={(e) => setProductData({
                ...productData,
                sizes: e.target.value.split(",").map((size)=> size.trim())
             }) }
             className="w-full border border-gray-300 rounded-md p-2"
             
             />
        </div>
           {/* Color */}
        <div className="mb-6">
          <label htmlFor="colors" className="block font-semibold mb-2">
            Colors 
          </label>
          <input
             type="text"
             name="colors"
             value={productData.colors.join(",")}
             onChange={(e) => setProductData({
                ...productData,
                colors: e.target.value.split(",").map((color)=> color.trim())
             }) }
             className="w-full border border-gray-300 rounded-md p-2"
             
             />
        </div>
        {/* image Upload */}
        <div className="mb-6">
             <label htmlFor="image" className="block font-semibold mb-2">
            Upload Image  
          </label>
          <input type="file"
            onChange={handleImageUpload}
          />
          <div className="flex gap-4 mt-4">
            {productData.images.map((image, index)=>(
                <img key={index} src={image.url} alt={image.name} 
                className="h-20 w-20 rounded-lg object-cover shadow-md"/>
            ))}

          </div>
        </div>
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors  ">
            Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
