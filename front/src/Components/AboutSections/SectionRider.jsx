import React from "react";
import styles from "./SectionRider.module.scss";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
const SectionRider = () => {
  return (
    <div className={styles.rider}>
      <div className={styles.container}>
        <div className={styles.riderText}>
          <span>A D R E N A L I N E</span>
          <h1>IMPROVE GENERAL RIDEABILITY</h1>
          <p>
            Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus
            viverra nulla ut metus varius laoreet srtrum aenean imperdiet. Etiam
            ultricies nisi vel augue.
          </p>
          <div className={styles.riderOfficial}>
            <img src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/author-img-1.jpg" alt="photo" />
            <div className={styles.riderOfficialText}>
                <p>OFFICIAL RIDER</p>
                <h6>JACKIE BRONSON</h6>
            </div>
          </div>
        </div>
        <div className={styles.riderIMG}>
          <img
            src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/08/h1-img-3.jpg"
            alt="photo"
          />
        </div>
        <img
          src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/08/h1-img-2.png"
          alt="photo"
        />
      </div>
    </div>
  );
};

export default SectionRider;
