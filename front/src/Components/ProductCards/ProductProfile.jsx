import React from "react";
import styles from "./ProductProfile.module.scss";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const ProductProfile = ({ item, Removetoprofile }) => {
  return (
    <div className={styles.productProfile}>
      <div className={styles.productProfileImg}>
        <img src={item.thumbnail} alt="photo" />
        <button onClick={Removetoprofile}>
          REMOVE {item.count} <HiOutlineArrowLongRight size={20} />
        </button>
      </div>
      <div className={styles.productProfileText}>
        <h6>{item.title}</h6>
        <h6>€{item.price}</h6>
      </div>
    </div>
  );
};

export default ProductProfile;
