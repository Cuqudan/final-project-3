import React, { useEffect, useState } from "react";
import styles from "./Login.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../store/Reducers/userApiSlice";
import { setCredentials } from "../../store/Reducers/authSlice";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigation("/myaccount");
    }
  }, [navigation, userInfo]);

  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigation("/myaccount");
    } catch (error) {
      toast.error("Sehv email ya sifre");
    }
  };

  return (
    <div className={styles.login}>
      <h1>LOGIN</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">YOUR EMAIL</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
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
        <div className={styles.loginBtns}>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Logging..." : "LOGIN"}
          </button>
          <button onClick={() => navigation("/register")}>REGISTER</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
