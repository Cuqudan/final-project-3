import React, { useEffect, useState } from "react";
import styles from "./SectionProfile.module.scss";
import ProductProfile from "../ProductCards/ProductProfile";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, setCredentials } from "../../store/Reducers/authSlice";
import { useLogoutMutation } from "../../store/Reducers/userApiSlice";

const SectionProfile = () => {
  const navigation = useNavigate();
  const [basketItems, setBasketItems] = useState([]);
  const { userInfo } = useSelector((state) => state.auth);
  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch();

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
  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigation('/login');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.profile}>
      <div className={styles.container}>
        <div className={styles.profileItems}>
          <div className={styles.profileImg}>
            <img
              src="https://ps.w.org/cbxuseronline/assets/icon-256x256.png?rev=2284897"
              alt="photo"
            />
          </div>
          <div className={styles.profileText}>
            <h4>{userInfo.name}</h4>
            <p>{userInfo.email}</p>
            <button onClick={handleLogout}>LOGOUT</button>
          </div>
        </div>
        <div className={styles.profileCards}>
          {basketItems &&
            basketItems.map((item) => <ProductProfile key={item.id} item={item} Removetoprofile={() => handleDecreaseQuantity(item._id)}/>)}
        </div>
      </div>
    </div>
  );
};

export default SectionProfile;
