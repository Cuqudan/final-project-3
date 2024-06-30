import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import styles from "./Payment.module.scss";
import axios from "axios";
import HeaderContact from "../../Components/Header/HeaderContact";
import ProductPayment from "../../Components/ProductCards/ProductPayment";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Payment = () => {
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

  const calculateTotalPrice = () => {
    return basketItems.reduce((total, item) => total + item.price * item.count, 0);
  };
  return (
    <div className={styles.payment}>
      <HeaderContact />
      <div className={styles.paymentContainer}>
        <div className={styles.paymentInputs}>
          <h1>Payment</h1>
          <form>
            <label htmlFor="card-number">Card Number</label>
            <input
              type="number"
              placeholder="1234 5678 9012 3456"
              name="card-number"
            />
            <div className={styles.paymentInputExpiry}>
              <div className={styles.expiry}>
                <label htmlFor="expiry-month">Expiry Month</label>
                <input type="number" placeholder="06" name="expiry-month" />
              </div>
              <div className={styles.expiry}>
                <label htmlFor="expiry-year">Expiry Year</label>
                <input type="number" placeholder="2025" name="expiry-year" />
              </div>
              <div className={styles.expiry}>
                <label htmlFor="cvv">CVV</label>
                <input type="number" placeholder="123" name="cvv" />
              </div>
            </div>
            <button type="submit">Pay €{calculateTotalPrice()}</button>
          </form>
        </div>
        <div className={styles.paymentText}>
          <p>YOUR ORDERS</p>
        </div>
        <div className={styles.paymentCards}>
          {basketItems && basketItems.map((item) => <ProductPayment item={item} 
                Removetopayment={() => handleDecreaseQuantity(item._id)}/>)}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
