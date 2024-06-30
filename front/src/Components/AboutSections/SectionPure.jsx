import React from "react";
import styles from "./SectionPure.module.scss";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const SectionPure = () => {
  return (
    <div className={styles.pure}>
      <button>
        PLAY
        <a href="">
          <FaRegArrowAltCircleRight />
        </a>
      </button>
      <div className={styles.container}>
        <div className={styles.pureText}>
          <span>A D R E N A L I N E</span>
          <h1>PURE RACING ADRENALIN RUSH & MORE</h1>
        </div>
      </div>
    </div>
  );
};

export default SectionPure;
