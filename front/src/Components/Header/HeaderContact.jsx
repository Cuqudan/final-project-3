import React from "react";
import styles from "./HeaderContact.module.scss";
import { useNavigate } from "react-router-dom";
const HeaderContact = () => {
  const navigation = useNavigate();
  return (
    <div className={styles.headerContact}>
      <div className={styles.container}>
        <img
          src="https://grandprix.qodeinteractive.com/wp-content/uploads/2019/09/borko-logo-black.png"
          alt="logo"
        />
        <div className={styles.headerContactItems}>
          <nav>
            <ul>
              <li onClick={() => navigation("/")}>
                <a href="">HOME</a>
              </li>
              <li>
                <a href="">PAGES</a>
                <div className={styles.pagesDropdown}>
                  <a href="" onClick={() => navigation("/aboutme")}>
                    ABOUT ME
                  </a>
                  <a href="" onClick={() => navigation("/aboutus")}>
                    ABOUT US
                  </a>
                  <a href="" onClick={() => navigation("/contact")}>
                    CONTACT
                  </a>
                </div>
              </li>
              <li onClick={() => navigation("/wishlist")}>
                <a href="">FAVORITES</a>
              </li>
              <li onClick={() => navigation("/basket")}>
                <a href="">CART</a>
              </li>
              <li onClick={() => navigation("/productlist")}>
                <a href="">SHOP</a>
              </li>
              <li onClick={() => navigation("/login")}>
                <a href="">PROFILE</a>
              </li>
            </ul>
          </nav>
          <input type="text" placeholder="SEARCH" />
        </div>
      </div>
      <div className={styles.headerContactMobileNavbar}>
        <nav>
          <ul>
            <li onClick={() => navigation("/")}>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">PAGES</a>
              <div className={styles.pagesDropdown}>
                <a href="" onClick={() => navigation("/aboutme")}>
                  ABOUT ME
                </a>
                <a href="" onClick={() => navigation("/aboutus")}>
                  ABOUT US
                </a>
                <a href="" onClick={() => navigation("/contact")}>
                  CONTACT
                </a>
              </div>
            </li>
            <li onClick={() => navigation("/wishlist")}>
              <a href="">FAVORITES</a>
            </li>
            <li onClick={() => navigation("/basket")}>
              <a href="">CART</a>
            </li>
            <li onClick={() => navigation("/productlist")}>
              <a href="">SHOP</a>
            </li>
            <li onClick={() => navigation("/login")}>
              <a href="">PROFILE</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderContact;
