import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import SectionPerformance from "../../Components/Sections/SectionPerformance";
import SectionShop from "../../Components/Sections/SectionShop";
import SectionAdrenalin from "../../Components/Sections/SectionAdrenalin";
import SectionSpesification from "../../Components/Sections/SectionSpesification";
import SectionStability from "../../Components/Sections/SectionStability";
import SectionImages from "../../Components/Sections/SectionImages";
import Footer from "../../Components/Footer/Footer";
import styles from "./Home.module.scss";
import ProductCart from "../../Components/ProductCards/ProductCart";
import axios from "axios";
const Home = () => {
  const [product, setProduct] = useState([]);

  const getData = () => {
    axios
      .get("http://localhost:8000/api/notes")
      .then((res) => setProduct(res.data.allNotes));
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className={styles.home}>
      <Header />
      <SectionPerformance />
      <SectionShop />
      <div className={styles.homeContainer}>
        <div className={styles.homeText}>
          <h1>
            IMPROVE GENERAL <br /> RIDEABILITY
          </h1>
          <p>P E R F O R M A N C E</p>
        </div>
        <div className={styles.homeCards}>
          {product &&
            product.map((item) => <ProductCart key={item.id} item={item} />)}
        </div>
      </div>
      <SectionAdrenalin />
      <SectionSpesification />
      <SectionStability />
      <SectionImages />
      <Footer />
    </div>
  );
};

export default Home;
