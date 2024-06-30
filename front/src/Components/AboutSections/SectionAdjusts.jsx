import React from "react";
import styles from "./SectionAdjusts.module.scss";
import { SiVerizon } from "react-icons/si";

const SectionAdjusts = () => {
  return (
    <div className={styles.adjusts}>
      <div className={styles.container}>
        <div className={styles.adjustsText}>
          <span>A D R E N A L I N E</span>
          <h1>
            ADJUSTS THE <br /> HYDRAULIC FORK
          </h1>
          <p>
            Aliquam lorem ante, dapibus in, viera quis, feugiat Phasellus viverra nulla ut metus varius laoreet srtrum aenean imperdiet. Etiam
            ultricies nisi vel augue
          </p>
          <p>
            <SiVerizon color="#ED1D24" /> Web & Mobile-Optimized
          </p>
          <p>
            <SiVerizon color="#ED1D24" /> Custom Domain Server
          </p>
          <p>
            <SiVerizon color="#ED1D24" /> Best Hosting on the Markey
          </p>
          <p>
            <SiVerizon color="#ED1D24" /> Out Standing Support
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionAdjusts;
