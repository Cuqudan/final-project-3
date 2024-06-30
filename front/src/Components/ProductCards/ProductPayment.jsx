import React from "react";
import styles from "./ProductPayment.module.scss";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
const ProductPayment = ({item, Removetopayment}) => {
  return (
    <div className={styles.productPayment}>
        <img src={item.thumbnail} alt="photo" />
      <div className={styles.productPaymentText}>
        <h6>{item.title}</h6>
        <h6>€{item.price}</h6>
      </div>
      <button onClick={Removetopayment}>
          REMOVE  <HiOutlineArrowLongRight size={20} />
        </button>
    </div>
  )
}

export default ProductPayment