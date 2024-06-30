import React from "react";
import styles from "./ProductCart.module.scss";
import { FaRegStar } from "react-icons/fa";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { GiTechnoHeart } from "react-icons/gi";
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCart = ({ item }) => {
  const { item_id } = useParams();
  const { userInfo } = useSelector(state => state.auth);
  const navigate = useNavigate();

  const handleAddToBag = () => {
    if (!userInfo) {
      toast.warn('You must register to add to cart.');
      setTimeout(() => {
        navigate('/register', { state: { from: window.location.pathname } });
      }, 3000); // 3 saniye sonra yönlendirme
      return;
    }

    const storedUserInfo = localStorage.getItem('userInfo');
    let basketList = [];

    if (storedUserInfo) {
      const userInfoObject = JSON.parse(storedUserInfo);

      const productToAdd = {
        userId: userInfo._id, // User ID ile ilişkilendiriyoruz
        _id: item._id,
        title: item.title,
        description:item.description,
        price: item.price,
        thumbnail: item.thumbnail
      };

      if (localStorage.getItem('basketList')) {
        basketList = JSON.parse(localStorage.getItem('basketList'));
        const existingProduct = basketList.find(product => product._id === item._id && product.userId === userInfo._id);
        if (!existingProduct) {
          basketList.push(productToAdd);
          toast.success(`${item.title} added to Bag!`);
        } else {
          toast.info(`${item.title} is already in Bag.`);
        }
      } else {
        basketList = [productToAdd];
        toast.success(`${item.title} added to Bag!`);
      }

      localStorage.setItem('basketList', JSON.stringify(basketList));
    } else {
      console.log('You need to Login or Register');
    }
  };
  const handleAddToWish = () => {
    if (!userInfo) {
      toast.warn('You must register to add to cart.');
      setTimeout(() => {
        navigate('/register', { state: { from: window.location.pathname } });
      }, 3000); // 3 saniye sonra yönlendirme
      return;
    }

    const storedUserInfo = localStorage.getItem('userInfo');
    let wishlist = [];

    if (storedUserInfo) {
      const userInfoObject = JSON.parse(storedUserInfo);

      const productToAdd = {
        userId: userInfo._id, // User ID ile ilişkilendiriyoruz
        _id: item._id,
        title: item.title,
        description:item.description,
        price: item.price,
        thumbnail: item.thumbnail
      };

      if (localStorage.getItem('wishlist')) {
        wishlist = JSON.parse(localStorage.getItem('wishlist'));
        const existingProduct = wishlist.find(product => product._id === item._id && product.userId === userInfo._id);
        if (!existingProduct) {
          wishlist.push(productToAdd);
          toast.success(`${item.title} added to Wish!`);
        } else {
          toast.info(`${item.title} is already in Wish.`);
        }
      } else {
        wishlist = [productToAdd];
        toast.success(`${item.title} added to Wish!`);
      }

      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    } else {
      console.log('You need to Login or Register');
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img src={item.thumbnail} alt="photo" />
        <button className={styles.cardBtnWish} onClick={handleAddToWish}>
          <GiTechnoHeart />
        </button>
        <button onClick={handleAddToBag}>
          ADD TO CART <HiOutlineArrowLongRight size={20} />
        </button>
      </div>
      <div className={styles.cardText}>
        <p>{item.description}</p>
        <p>
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </p>
      </div>
      <div className={styles.cardText}>
        <h6>{item.title}</h6>
        <h6>€{item.price}</h6>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductCart;
