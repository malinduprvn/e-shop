import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";
import Img1 from "../../assets/product/p-1.jpg"; // Corrected path
import Img2 from "../../assets/product/p-2.jpg"; // Corrected path
import Img3 from "../../assets/product/p-3.jpg"; // Corrected path
import Img4 from "../../assets/product/p-4.jpg"; // Corrected path
import Img5 from "../../assets/product/p-5.jpg"; // Corrected path
import Img9 from "../../assets/product/p-9.jpg"; // Corrected path
import Img7 from "../../assets/product/p-7.jpg"; // Corrected path

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 4,
    img: Img4,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 5,
    img: Img5,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 9,
    img: Img9,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 7,
    img: Img7,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 7,
    img: Img7,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
];

const ProductsData2 = [

];

const Products = () => {
  return (
    <div>
      <div className="container">
        <div className="grid">
          {/* Header section */}
          <Heading title="Our Products" subtitle="Explore Our Products" />

          {/* body section */}
          <ProductCard data={ProductsData} />
          <ProductCard data={ProductsData2} />
        </div>
      </div>
    </div>
  );
};

export default Products;
