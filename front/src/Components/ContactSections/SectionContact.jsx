import React from "react";
import styles from "./SectionContact.module.scss";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import axios from "axios";
const SectionContact = () => {
  const handleSubmit = () => {
    axios.post("https://mail.google.com/mail/u/0/#inbox")
  }
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.contactText}>
          <span>A D R E N A L I N E</span>
          <h1>IMPROVE GENERAL <br /> RIDEABILITY</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            aliquet mi sapien, a malesuada tellus vehicula ac. Aliquam accumsan
            sapien sit amet lectus varius, vel lobortis urna tempus. Aliquam
            hendrerit felis eget ultrices tempus onec consequat mattis
            ullamcorper ut egestas idus risus.
          </p>
          <h3>OFFICE IN NEW YORK</h3>
          <li>
            <CiLocationOn size={20} color="#ED1D24" />
            <a href="">7300-7398 Colonial Rd, Brooklyn, NY 11209, USA</a>
          </li>
          <li>
            <MdOutlineLocalPhone size={20} color="#ED1D24" />
            <a href="">+ (123) 124-567-8901</a>
          </li>
          <li>
            <TfiEmail size={20} color="#ED1D24" />
            <a href="">carrier@qodeinteractive.com</a>
          </li>
        </div>
        <div className={styles.contactInputs}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="Name">YOUR NAME</label>
            <input
              id="name"
              type="text"
            />
            <label htmlFor="email">YOUR EMAIL</label>
            <input
              id="email"
              type="email"
            />
            <label htmlFor="lastName">YOUR MESSAGE</label>
            <input
              id="message"
              type="text"
            />
            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SectionContact;
