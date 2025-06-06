import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const FilterSideBar = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });

  const [priceRange, setPriceRange] = useState([0, 100]);
  const categories = ["Top Wear", "Bottom Wear"];
  const colors = [
    "Red",
    "Blue",
    "Black",
    "Green",
    "Yellow",
    "Gray",
    "White",
    "Pink",
    "Beige",
    "Navy",
  ];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const materials = [
    "Cotton",
    "Wool",
    "Denim",
    "Polyster",
    "Silk",
    "Linen",
    "Viscose",
    "Fleece",
  ];
  const brands = [
    "Urban Threads",
    "Modern Fit",
    "Street Style",
    "Beach Breeze",
    "Fashionista",
    "ChicStyle",
  ];
  const genders = ["Men", "Women"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    setFilter({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });
    setPriceRange([0, params.maxPrice || 100]);
  }, [searchParams]);

  const handelFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    let newFilters = { ...filter };

    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
    } else {
      newFilters[name] = value;
    }
    setFilter(newFilters);
    updateUrlParams(newFilters);
  };

  const updateUrlParams = (newFilters) => {
    const params = new URLSearchParams();
    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key, newFilters[key].join(","));
      } else if (newFilters[key]) {
        params.append(key, newFilters[key]);
      }
    });
    setSearchParams(params);
    navigate(`?${params.toString()}`);
  };

  const handlePriceChange = (e) =>{
    const newPrice = e.target.value ;
    setPriceRange([0, newPrice])
    const newFilters ={...filter, minPrice : 0, maxPrice : newPrice}
    setFilter(newFilters)
    updateUrlParams(newFilters)
  }

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>
      {/* Categories */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              value={category}
              checked={filter.category === category}
              onChange={handelFilterChange}
              className="mr-2 h-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{category}</span>
          </div>
        ))}
      </div>
      {/* Gender */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Gender</label>
        {genders.map((gender) => (
          <div key={gender} className="flex items-center mb-1">
            <input
              type="radio"
              name="gender"
              value={gender}
              checked={filter.gender === gender}
              onChange={handelFilterChange}
              className="mr-2 h-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{gender}</span>
          </div>
        ))}
      </div>
      {/* Colors */}
      <div className="mb-6 ">
        <label className="block text-gray-600 font-medium mb-2">Colors</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              name="color"
              value={color}
              type="submit"
              onClick={handelFilterChange}
              className={`w-8 h-8 border border-gray-300 rounded-full 
                cursor-pointer transition hover:scale-105 ${filter.color === color ? "ring-2 ring-blue-500" : ""}`}
              style={{
                backgroundColor: color.toLocaleLowerCase(),
              }}
            ></button>
          ))}
        </div>
      </div>
      {/* Size */}
      <div className="mb-6 ">
        <label className="block text-gray-600 font-medium mb-2">Size</label>
        {sizes.map((size) => (
          <div key={size} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="size"
              value={size}
              checked={filter.size.includes(size)}
              onChange={handelFilterChange}
              className="mr-2 h-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700 font-semibold ">{size}</span>
          </div>
        ))}
      </div>
      {/* Material */}
      <div className="mb-6 ">
        <label className="block text-gray-600 font-medium mb-2">Material</label>
        {materials.map((material) => (
          <div key={material} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="material"
              value={material}
              onChange={handelFilterChange}
              checked={filter.material.includes(material)}
              className="mr-2 h-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700 font-semibold ">{material}</span>
          </div>
        ))}
      </div>
      {/* Brands */}
      <div className="mb-6 ">
        <label className="block text-gray-600 font-medium mb-2">Brand</label>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="brand"
              value={brand}
              onChange={handelFilterChange}
              checked={filter.brand.includes(brand)}
              className="mr-2 h-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700 font-semibold ">{brand}</span>
          </div>
        ))}
      </div>
      {/* Price rang */}
      <div className="mb-6 ">
        <label className="block text-gray-600 font-medium mb-2">Price</label>
        <input
          type="range"
          name="priceRange"
          min={0}
          max={100}
          value={priceRange[1]}
          onChange={handlePriceChange}

          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-gray-600 mt-2">
          <span>$0</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};
