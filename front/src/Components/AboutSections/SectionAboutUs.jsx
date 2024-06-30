import React from 'react'
import styles from "./SectionAboutUs.module.scss";

const SectionAboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.container}>
        <div className={styles.aboutUsText}>
          <span>P E R F O R M A N C E</span>
          <h1>ABOUT US</h1>
        </div>
      </div>
    </div>
  )
}

export default SectionAboutUs