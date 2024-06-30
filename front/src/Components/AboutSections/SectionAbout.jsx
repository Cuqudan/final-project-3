import React from "react";
import styles from "./SectionAbout.module.scss";
const SectionAbout = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.aboutText}>
          <span>P E R F O R M A N C E</span>
          <h1>ABOUT ME</h1>
        </div>
      </div>
    </div>
  );
};

export default SectionAbout;
