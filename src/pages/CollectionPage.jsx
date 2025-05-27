import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { FilterSideBar } from "../component/products/FilterSideBar";
import SortOptions from "../component/products/SortOptions";
import ProductGrid from "../component/products/ProductGrid";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const [isSideFilterBarOpen, setIsSideFilterBarOpen] = useState(false);
  const sideFilterBarRef = useRef(null);

  const toggleOpenSideFilterBar = () => {
    setIsSideFilterBarOpen(!isSideFilterBarOpen);
  };

  const handleClickOutside = (e) => {
    if (
      sideFilterBarRef.current &&
      !sideFilterBarRef.current.contains(e.target)
    ) {
      setIsSideFilterBarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    // Nettoyage à la désinstallation du composant
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchProducts = [
        {
          _id: 1,
          name: " Product 1",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=1" }],
        },
        {
          _id: 2,
          name: " Product 2",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=2" }],
        },
        {
          _id: 3,
          name: " Product 3",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=3" }],
        },
        {
          _id: 4,
          name: " Product 4",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=4" }],
        },
        {
          _id: 5,
          name: " Product 5",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=8" }],
        },
        {
          _id: 6,
          name: " Product 6",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=9" }],
        },
        {
          _id: 7,
          name: " Product 7",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=10" }],
        },
        {
          _id: 8,
          name: " Product 8",
          price: 100,
          images: [{ url: "https://picsum.photos/500/500?random=4" }],
        },
      ];
      setProducts(fetchProducts);
    }, 1000);
  }, [sideFilterBarRef]);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Moblie filter button */}
      <button
        onClick={toggleOpenSideFilterBar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <FaFilter className="mr-2" /> Filter
      </button>
      {/* Filter Sidebar */}
      <div
        ref={sideFilterBarRef}
        className={`${isSideFilterBarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterSideBar />
      </div>
      <div className="flex-grow">
        <h2 className="text-2xl uppercase mb-4">All Collections</h2>
        {/* Sort Options */}
        <SortOptions />

        {/* Product Grid */}
        < ProductGrid products={products} />
      </div>
    </div>
  );
};

export default CollectionPage;
