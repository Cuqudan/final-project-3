import React from "react";
import styles from "./SectionRideability.module.scss";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
const SectionRideability = () => {
  const navigation = useNavigate()
  return (
    <div className={styles.rideability}>
      <div className={styles.container}>
        <div className={styles.rideabilityText}>
          <span>A D R E N A L I N E</span>
          <h1>IMPROVE GENERAL RIDEABILITY</h1>
          <p>
            Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus
            viverra nulla ut metus varius laoreet srtrum aenean imperdiet. Etiam
            ultricies nisi vel augue.
          </p>
          <button onClick={()=> navigation("/productlist")}>
            READ MORE <HiOutlineArrowLongRight size={20} />
          </button>
        </div>
        <div className={styles.rideabilityIMG}>
          <img
            src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/p1-img-1.jpg"
            alt="photo"
          />
        </div>
        <img
          src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/p1-img-2.png"
          alt="photo"
        />
      </div>
    </div>
  );
};

export default SectionRideability;
