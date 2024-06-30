import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import styles from "../Home/Home.module.scss";
import axios from "axios";
import HeaderContact from "../../Components/Header/HeaderContact";
import ProductBasket from "../../Components/ProductCards/ProductBasket";
import { GiWallet } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Basket = () => {
  const [basketItems, setBasketItems] = useState([]);
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    // localStorage'den sepet listesini alın
    const storedBasketList = localStorage.getItem("basketList");

    if (storedBasketList) {
      const parsedBasketList = JSON.parse(storedBasketList);
      // Her ürünün count değerini sayıya dönüştür
      const updatedBasketItems = parsedBasketList.map((item) => ({
        ...item,
        count: parseInt(item.count) || 1, // Eğer count NaN veya undefined ise 1 olarak ayarla
        price: parseFloat(item.price).toFixed(2), // Fiyatı ondalık kısmı iki basamakla sınırla
      }));
      setBasketItems(updatedBasketItems);
    }
  }, []);

  // Ürün sayısını artırma işlevi
  const handleIncreaseQuantity = (itemId) => {
    const updatedBasketItems = basketItems.map((item) => {
      if (item._id === itemId) {
        const newCount = item.count + 1;
        const newPrice = (item.price / item.count) * newCount; // Yeni fiyatı hesapla

        return {
          ...item,
          count: newCount,
          price: newPrice.toFixed(2), // Fiyatı güncelle, ondalık kısmı iki basamakla sınırla
        };
      }
      return item;
    });

    // Güncellenmiş sepet listesini localStorage'e kaydedin
    localStorage.setItem("basketList", JSON.stringify(updatedBasketItems));

    // State'i güncelleyin
    setBasketItems(updatedBasketItems);
  };

  // Ürün sayısını azaltma veya ürünü sepetten kaldırma işlevi
  const handleDecreaseQuantity = (itemId) => {
    const updatedBasketItems = basketItems
      .map((item) => {
        if (item._id === itemId) {
          if (item.count > 1) {
            const newCount = item.count - 1;
            const newPrice = (item.price / item.count) * newCount; // Yeni fiyatı hesapla

            return {
              ...item,
              count: newCount,
              price: newPrice.toFixed(2), // Fiyatı güncelle, ondalık kısmı iki basamakla sınırla
            };
          } else {
            // Ürün adedi 1 ise ürünü sepetten kaldır
            return null;
          }
        }
        return item;
      })
      .filter((item) => item !== null); // null olanları filtrele

    // Güncellenmiş sepet listesini localStorage'e kaydedin
    localStorage.setItem("basketList", JSON.stringify(updatedBasketItems));

    // State'i güncelleyin
    setBasketItems(updatedBasketItems);
  };

  const handlePayment = (itemPrice) => {
    navigate("/basket/payment", { state: { itemPrice } });
  };

  return (
    <div className={styles.home}>
      <HeaderContact />
      <div className={styles.homeContainer}>
        <div className={styles.homeText}>
          <h1>BASKET</h1>
          <p>YOUR ORDERS</p>
        </div>
        <div className={styles.homeCards}>
          {basketItems &&
            basketItems.map((item) => (
              <ProductBasket
                key={item.productId}
                item={item}
                plus={() => handleIncreaseQuantity(item._id)}
                minus={() => handleDecreaseQuantity(item._id)}
                removetocart={() => handleDecreaseQuantity(item._id)}
              />
            ))}
        </div>
        <button
          onClick={() => navigate("/payment")}
          className={styles.homePaymentBtn}
        >
          PAYMENT
          <GiWallet />
        </button>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Basket;
