import React from "react";
import styles from "./ProductCart.module.scss";
import { FaRegStar } from "react-icons/fa";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { TbExposurePlus1 } from "react-icons/tb";
import { TbExposureMinus1 } from "react-icons/tb";

const ProductBasket = ({item, plus, minus, removetocart}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img src={item.thumbnail} alt="photo" />
        <button onClick={plus}><TbExposurePlus1 size={20}/> </button>
        <button onClick={removetocart}>
          REMOVE {item.count} <HiOutlineArrowLongRight size={20} />
        </button>
        <button onClick={minus}><TbExposureMinus1 size={20}/> </button>
      </div>
      <div className={styles.cardText}>
        <p>{item.description}</p>
        <p>
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </p>
      </div>
      <div className={styles.cardText}>
        <h6>{item.title}</h6>
        <h6>€{item.price}</h6>
      </div>
    </div>
  );
};

export default ProductBasket;
