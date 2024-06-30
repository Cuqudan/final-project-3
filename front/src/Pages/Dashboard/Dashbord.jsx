import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import HeaderContact from "../../Components/Header/HeaderContact";
import SectionDashboard from "../../Components/DashboardSections/SectionDashboard";
import axios from "axios";
import styles from "../Home/Home.module.scss";
import UserCard from "../../Components/UsersCard/UserCard";
import { useSelector } from "react-redux";
import { useFormik } from "formik";

const Dashbord = () => {
  const [users, setUsers] = useState([]);
  const { userInfo } = useSelector((state) => state.auth);

  const getUser = () => {
    axios
      .get("http://localhost:8000/api/users/")
      .then((res) => setUsers(res.data.allUsers));
  };

  useEffect(() => {
    getUser();
  }, []);

  const removeuser = (_id) => {
    axios.delete(`http://localhost:8000/api/users/${_id}`);
    setTimeout(() => {
      getUser();
    }, 500);
  };

  const formik = useFormik({
    initialValues: {
      thumbnail: "",
      description: "",
      title: "",
      price: "",
      category: "",
    },
    onSubmit: values => {
      axios.post("http://localhost:8000/api/notes/post", values);
      formik.resetForm();
    },
  });
  const handledelete = (_id) => {
    axios.delete(`http://localhost:8000/api/notes/${_id}`)
  }
  return (
    <div className={styles.home}>
      <HeaderContact />
      <SectionDashboard />
      <div className={styles.homeContainer}>
        <div className={styles.homeInputs}>
          <form onSubmit={formik.handleSubmit}>
            <input
              name="thumbnail"
              type="text"
              placeholder="ITEM PHOTO"
              onChange={formik.handleChange}
              value={formik.values.thumbnail}
            />
            <input
              name="description"
              type="text"
              placeholder="ITEM DESCRIPTION"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
            <input
              name="title"
              type="text"
              placeholder="ITEM TITLE"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            <input
              name="category"
              type="text"
              placeholder="ITEM CATEGORY"
              onChange={formik.handleChange}
              value={formik.values.category}
            />
            <input
              name="price"
              type="number"
              placeholder="ITEM PRICE"
              onChange={formik.handleChange}
              value={formik.values.price}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className={styles.homeCards}>
          {users &&
            users.map((userInfo) => (
              <UserCard
                userInfo={userInfo}
                removeUser={() => removeuser(userInfo._id)}
              />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashbord;
