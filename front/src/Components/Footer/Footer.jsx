import React from "react";
import styles from "./Footer.module.scss";
import { FaRegClock } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerAbout}>
          <h3>ABOUT GRANDPRIX</h3>
          <p>
            If you are looking for the smoothest way to reach the top speed &
            cruise in front of your competitors, you’re in the right place.
            Welcome to GrandPrix.
          </p>
          <div className={styles.footerAboutTime}>
            <FaRegClock size={20} color="white"/>
            <p>
              Monday-Friday: 9am to 5pm; <br /> Satuday: 10am to 2pm
            </p>
          </div>
        </div>
        <div className={styles.footerAbout}>
          <h3>OUR SERVICES</h3>
          <li>
            <a href="">Chemical Engineering Projects</a>
          </li>
          <li>
            <a href="">Mining Engineering</a>
          </li>
          <li>
            <a href="">Construction Engineering</a>
          </li>
          <li>
            <a href="">Welding Engineering</a>
          </li>
          <li>
            <a href="">Space Program XYZ</a>
          </li>
        </div>
        <div className={styles.footerAbout}>
          <h3>OFFICE IN NEW YORK</h3>
          <li>
            <CiLocationOn size={20} color="white"/>
            <a href="">
              7398 Colonial Rd, Brooklyn <br /> 242 Wythe Ave #4, Brooklyn
            </a>
          </li>
          <li>
            <MdOutlineLocalPhone size={20} color="white"/>
            <a href="">
              + (123) 124-567-8901 <br /> + (123) 124-567-8901
            </a>
          </li>
          <li>
            <TfiEmail size={20} color="white"/>
            <a href="">
              carrier@qodeinteractive.com <br /> grand@qodeinteractive.com
            </a>
          </li>
        </div>
        <div className={styles.footerAbout}>
          <h3>OUR LOCATIONS</h3>
          <img
            src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/footer-img-5-300x171.png"
            alt="photo"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
