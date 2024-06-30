import React, { useEffect, useState } from "react";
import HeaderContact from "../../Components/Header/HeaderContact";
import Footer from "../../Components/Footer/Footer";
import styles from "./ProductList.module.scss";
import ProductCart from "../../Components/ProductCards/ProductCart";
import axios from "axios";

const ProductList = () => {
  const [product, setproduct] = useState([]);
  const [search, setsearch] = useState("");
  const handleSearch = (event) => {
    setsearch(event.target.value);
  };

  const filteredproduct = product.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  const getData = () => {
    axios
      .get("http://localhost:8000/api/notes")
      .then((res) => setproduct(res.data.allNotes));
  };
  useEffect(() => {
    getData();
  }, []);
  const filterProductclothes = () => {
    const filteredByCategory = filteredproduct.filter(
      (item) => item.catagory == "CLOTHES"
    );
    return filteredByCategory;
  };
  console.log(filterProductclothes());
  const filterProductspare = () => {
    const filteredByCategory = filteredproduct.filter(
      (item) => item.catagory === "SPARE PARTS"
    );
    return filteredByCategory;
  };
  return (
    <div className={styles.productlist}>
      <HeaderContact />
      <div className={styles.productlistContainer}>
        <div className={styles.productlistText}>
          <h1>PRODUCTS</h1>
          <div className={styles.search}>
            <input
              type="text"
              onChange={handleSearch}
              value={search}
              placeholder="Search"
            />
          </div>
        </div>
        <div className={styles.productlistCards}>
          {filteredproduct &&
            filteredproduct.map((item) => <ProductCart item={item} />)}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductList;
