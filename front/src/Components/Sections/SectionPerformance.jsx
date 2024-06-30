import React from "react";
import styles from "./SectionPerformance.module.scss";

const SectionPerformance = () => {
  return (
    <div className={styles.performance}>
      <div className={styles.performanceBG}>
        <div className={styles.container}>
          <div className={styles.performanceText}>
            <span>P E R F O R M A N C E</span>
            <h1>TAKE ON THE CHICANE</h1>
            <p>
              Lorem ipsum dolor sit amet, copy the following link into you'll
              use this resource on. If you want to know more, adipiscing elit.
              Morbi obortis ligula euismod se.
            </p>
          </div>
          <img
            src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/h2-rev-img-14.png"
            alt="photo"
          />
          <img
            src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/h2-rev-img-15.png"
            alt="photo"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionPerformance;
