import React from "react";
import Hero from "../component/layout/Hero";
import GenderCollectionSection from "../component/products/GenderCollectionSection";
import NewArrivals from "../component/products/NewArrivals";
import ProductDetails from "../component/products/ProductDetails";
import ProductGrid from "../component/products/ProductGrid";
import FeaturesCollection from "../component/products/FeaturesCollection"
import FeatureSection from "../component/products/FeatureSection"

const placeholderProducts = [
  {
    _id : 1,
    name : " Product 1",
    price: 100,
    images :[{ url: "https://picsum.photos/500/500?random=1"}]
  },
  {
    _id : 2,
    name : " Product 2",
    price: 100,
    images :[{ url: "https://picsum.photos/500/500?random=2"}]
  },
  {
    _id : 3,
    name : " Product 3",
    price: 100,
    images :[{ url: "https://picsum.photos/500/500?random=3"}]
  },
  {
    _id : 4,
    name : " Product 4",
    price: 100,
    images :[{ url: "https://picsum.photos/500/500?random=4"}]
  },
  {
    _id : 5,
    name : " Product 5",
    price: 100,
    images :[{ url: "https://picsum.photos/500/500?random=8"}]
  },
  {
    _id : 6,
    name : " Product 6",
    price: 100,
    images :[{ url: "https://picsum.photos/500/500?random=9"}]
  },
  {
    _id : 7,
    name : " Product 7",
    price: 100,
    images :[{ url: "https://picsum.photos/500/500?random=10"}]
  },
  {
    _id : 8,
    name : " Product 8",
    price: 100,
    images :[{ url: "https://picsum.photos/500/500?random=4"}]
  },

]
 

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />

      {/* Best Seller */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <ProductDetails />

      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for Women
        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>
      <FeaturesCollection />
      <FeatureSection />
    </div>
  );
};

export default Home;
