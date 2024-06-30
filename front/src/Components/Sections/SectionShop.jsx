import React from "react";
import styles from "./SectionShop.module.scss";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const SectionShop = () => {
  const navigation = useNavigate()
  return (
    <div className={styles.shop}>
      <div className={styles.shopCard}>
        <div className={styles.shopCardText}>
          <p>Racing Boots</p>
          <h3>X-Fourteent boots</h3>
        </div>
        <button onClick={()=> navigation("/productlist")}>
          SHOP NOW <HiOutlineArrowLongRight size={20} />
        </button>
        <img
          src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/h2-banner-img-2.png"
          alt="photo"
        />
      </div>
      <div className={styles.shopCard}>
        <div className={styles.shopCardText}>
          <p>premium helmets </p>
          <h3>RJ Platinum-R helmets </h3>
        </div>
        <button onClick={()=> navigation("/productlist")}>
          SHOP NOW <HiOutlineArrowLongRight size={20} />
        </button>
        <img
          src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/h2-banner-img-4.png"
          alt="photo"
        />
      </div>
      <div className={styles.shopCard}>
        <div className={styles.shopCardText}>
          <p>racing gloves </p>
          <h3>NEOTEC II racing gloves </h3>
        </div>
        <button onClick={()=> navigation("/productlist")}>
          SHOP NOW <HiOutlineArrowLongRight size={20} />
        </button>
        <img
          src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/h2-banner-img-6.png"
          alt="photo"
        />
      </div>
    </div>
  );
};

export default SectionShop;
