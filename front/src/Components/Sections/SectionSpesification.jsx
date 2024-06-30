import React from "react";
import styles from "./SectionSpesification.module.scss";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const SectionSpesification = () => {
  const navigation = useNavigate()
  return (
    <div className={styles.spesification}>
      <div className={styles.spesificationText}>
        <h1>TRY PROFESSIONAL <br /> EQUIPMENT</h1>
        <p>S P E C I F I C A T I O N S</p>
      </div>
      <div className={styles.spesificationImg}>
        <div className={styles.spesificationImgtext}>
          <h3>New Dry <br /> Clutch</h3>
          <button onClick={()=> navigation("/aboutme")}>
            READ <br /> MORE <HiOutlineArrowLongRight size={20} />
          </button>
        </div>
      </div>
      <img
        src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/h2-img-4-1-1.png"
        alt="photo"
      />
    </div>
  );
};

export default SectionSpesification;
