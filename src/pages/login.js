import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";

const Login = ({ ...pack }) => {
  //les States

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //les Fonctions

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/user/login",
      {
        email: email,
        password: password,
      }
    );
    pack.setToken(response.data.token);
    Cookies.set("token", response.data.token, { expires: 7 });
    console.log(response.data.token);
  };
  return (
    <section className="fullPage">
      {pack.setSearch(false)}
      <h1>Login !!</h1>
      <article>
        <form className="formLogin" onSubmit={handleSubmit}>
          <input
            className="formInput"
            type="text"
            value={email}
            placeholder="your e-mail"
            onChange={handleEmailChange}
          />
          <input
            className="formInput"
            type="text"
            value={password}
            placeholder="your password"
            onChange={handlePasswordChange}
          />
          <input className="formInput" type="Submit" value="submit" />
        </form>
        <br />
        <p>{Cookies.get("token")}</p>
      </article>
    </section>
  );
};

export default Login;
