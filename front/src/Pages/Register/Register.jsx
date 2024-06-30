import React, { useEffect, useState } from "react";
import styles from "./Register.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../store/Reducers/userApiSlice";
import { setCredentials } from "../../store/Reducers/authSlice";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { userInfo } = useSelector((state) => state.auth);
  const [register, { isLoading }] = useRegisterMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate("/myaccount");
    }
  }, [userInfo, navigate]);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await register({ name, email, password }).unwrap();
      dispatch(setCredentials(res));
      navigate("/myaccount");
    } catch (err) {
      console.error("Failed to register: ", err);
    }
  };

  return (
    <div className={styles.register}>
      <h1>REGISTER</h1>
      <form onSubmit={handleRegister}>
        <label htmlFor="name">YOUR NAME</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">YOUR EMAIL</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">YOUR PASSWORD</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={styles.registerBtns}>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "User creating" : "REGISTER"}
          </button>
          <button onClick={() => navigate("/login")}>LOGIN</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
