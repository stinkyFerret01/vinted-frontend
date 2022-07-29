import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";

const Login = () => {
  //les States

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

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
    console.log(response.data.token);
    setToken(response.data.token);
  };
  return (
    <section>
      <h1>Login !!</h1>
      <article>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={email}
            placeholder="your e-mail"
            onChange={handleEmailChange}
          />
          <input
            type="text"
            value={password}
            placeholder="your password"
            onChange={handlePasswordChange}
          />
          <input type="Submit" value="submit" />
        </form>
        <br />
        <p>{token}</p>
      </article>
    </section>
  );
};

export default Login;
