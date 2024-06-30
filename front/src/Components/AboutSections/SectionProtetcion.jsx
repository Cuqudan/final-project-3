import React from "react";
import styles from "./SectionProtetcion.module.scss";

const SectionProtetcion = () => {
  return (
    <div className={styles.protetcion}>
      <div className={styles.protetcionText}>
        <h1>
          MAXIMUM SPEED <br /> & STABILITY
        </h1>
        <p>P E R F O R M A N C E</p>
      </div>
      <div className={styles.container}>
        <div className={styles.protetcionCard}>
          <img
            src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/p1-iwt-img-6.png"
            alt="photo"
          />
          <h4>PROTETCION LINE</h4>
          <p>
            Etiam ultricies nisi vel augue, nulla ut me varius laoreet.
            Phasellus viverra nulla ut metus varius.
          </p>
        </div>
        <div className={styles.protetcionCard}>
          <img
            src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/p1-iwt-img-3.png"
            alt="photo"
          />
          <h4>CODE BLOCKS</h4>
          <p>
            Aliquam lorem ante, daibus in, viera quis, feugiat hasell. Etiam
            ultricies nisi vel augue, nulla ut.
          </p>
        </div>
        <div className={styles.protetcionCard}>
          <img
            src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/p1-iwt-img-2.png"
            alt="photo"
          />
          <h4>NEW STANDARDS</h4>
          <p>
            Etiam ultricies nisi vel augue, nulla ut me varius laoreet.
            Phasellus viverra nulla ut metus varius.
          </p>
        </div>
        <div className={styles.protetcionCard}>
          <img
            src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/p1-iwt-img-5.png"
            alt="photo"
          />
          <h4>OUR SOLUTION</h4>
          <p>
            Aliquam lorem ante, daibus in, viera quis, feugiat hasell. Etiam
            ultricies nisi vel augue, nulla ut.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionProtetcion;
