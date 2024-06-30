import React from "react";
import styles from "./SectionStability.module.scss";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const SectionStability = () => {
  const navigation = useNavigate()
  return (
    <div className={styles.stability}>
      <div className={styles.stabilityText}>
        <h1>
          MAXIMUM SPEED & <br /> STABILITY
        </h1>
        <p>S P E C I F I C A T I O N S</p>
      </div>
      <div className={styles.container}>
        <div className={styles.stabilityCard}>
          <img
            src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/h1-blog-img-13-433x330.jpg"
            alt="photo"
          />
          <div className={styles.stabilityCardText}>
            <p>JULY 10, 2024 </p>
            <h4>Old Bikes, Old Riders </h4>
          </div>
          <button onClick={()=> navigation("/aboutus")}>
            READ <br /> MORE <HiOutlineArrowLongRight size={20} />
          </button>
        </div>
        <div className={styles.stabilityCard}>
          <img
            src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/h1-blog-img-14-433x330.jpg"
            alt="photo"
          />
          <div className={styles.stabilityCardText}>
            <p>JULY 10, 2024 </p>
            <h4>Exceed Expectations </h4>
          </div>
          <button onClick={()=> navigation("/aboutus")}>
            READ <br /> MORE <HiOutlineArrowLongRight size={20} />
          </button>
        </div>
        <div className={styles.stabilityCard}>
          <img
            src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/h1-blog-img-15-433x330.jpg"
            alt="photo"
          />
          <div className={styles.stabilityCardText}>
            <p>JULY 10, 2024 </p>
            <h4>2019 Grand Prix </h4>
          </div>
          <button onClick={()=> navigation("/aboutus")}>
            READ <br /> MORE <HiOutlineArrowLongRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionStability;
