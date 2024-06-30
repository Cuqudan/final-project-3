import React from "react";
import styles from "./SectionAccelelrating.module.scss";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
const SectionAccelelrating = () => {
  const navigation = useNavigate()
  return (
    <div className={styles.accelelrating}>
      <div className={styles.accelelratingText}>
        <h1>
          ACCELERATING YOUR <br /> RIDING STYLE
        </h1>
        <p>P E R F O R M A N C E</p>
      </div>
      <div className={styles.container}>
        <div className={styles.accelelratingCard}>
          <img
            src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/h1-blog-img-1.jpg"
            alt="photo"
          />
          <span>JULY 10, 2024 </span>
          <h4>2024 CHESTNUT CORNER</h4>
          <p>
            Lorem ipsum dolor sit amet, sea no tantas consul disputationi, ei
            his tota legere.
          </p>
          <button onClick={()=> navigation("/aboutme")}>
            READ MORE <HiOutlineArrowLongRight size={20} />
          </button>
        </div>
        <div className={styles.accelelratingCard}>
          <img
            src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/h1-blog-img-2.jpg"
            alt="photo"
          />
          <span>JULY 10, 2024 </span>
          <h4>NEW REKLUSE CORE EXP</h4>
          <p>
            Lorem ipsum dolor sit amet, sea no tantas consul disputationi, ei
            his tota legere.
          </p>

          <button onClick={()=> navigation("/aboutme")}>
            READ MORE <HiOutlineArrowLongRight size={20} />
          </button>
        </div>
        <div className={styles.accelelratingCard}>
          <img
            src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/h1-blog-img-3.jpg"
            alt="photo"
          />
          <span>JULY 10, 2024 </span>
          <h4>CLOSEOUT MOTOCROSS</h4>
          <p>
            Lorem ipsum dolor sit amet, sea no tantas consul disputationi, ei
            his tota legere.
          </p>
          <button onClick={()=> navigation("/aboutme")}>
          READ MORE <HiOutlineArrowLongRight size={20} />
        </button>
        </div>
       
      </div>
    </div>
  );
};

export default SectionAccelelrating;
