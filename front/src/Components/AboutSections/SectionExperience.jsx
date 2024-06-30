import React from "react";
import styles from "./SectionExperience.module.scss";

const SectionExperience = () => {
  return (
    <div className={styles.experience}>
      <div className={styles.experienceText}>
        <h1>
          DYNAMIC RACING <br /> EXPERIENCE
        </h1>
        <p>P E R F O R M A N C E</p>
      </div>
      <div className={styles.container}>
        <img
          src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/h1-blog-img-5-430x650.jpg"
          alt="photo"
          className={styles.experienceIMG}
        />
        <img
          src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/h1-blog-img-6-430x650.jpg"
          alt="photo"
        />
        <img
          src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/h1-blog-img-9-430x650.jpg"
          alt="photo"
          className={styles.experienceIMG}
        />
      </div>
    </div>
  );
};

export default SectionExperience;
