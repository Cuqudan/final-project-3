import React from "react";
import styles from "./SectionAdrenalin.module.scss";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
const SectionAdrenalin = () => {
  const navigation = useNavigate()
  return (
    <div className={styles.adrenalin}>
      <div className={styles.container}>
        <div className={styles.adrenalintText}>
          <span>A D R E N A L I N E</span>
          <h1>DYNAMIC RACING EXPERIENCE</h1>
          <p>
            Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus
            viverra nulla ut metus varius laoreet srtrum aenean imperdiet. Etiam
            ultricies nisi vel augue.
          </p>
          <button onClick={()=> navigation("/productlist")}>
            READ MORE <HiOutlineArrowLongRight size={20} />
          </button>
        </div>
        <div className={styles.adrenalinIMG}>
          <img
            src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/08/h1-img-8.jpg"
            alt="photo"
          />
        </div>
        <img
          src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/white_helmet.png"
          alt="photo"
        />
      </div>
    </div>
  );
};

export default SectionAdrenalin;
