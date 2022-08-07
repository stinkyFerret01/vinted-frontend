import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = ({ setSearch }) => {
  //les States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //les Fonctions
  const navigate = useNavigate();
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "https://vinted-backend01.herokuapp.com/user/signup",
      // "https://lereacteur-vinted-api.herokuapp.com/user/signup",
      {
        name: name,
        mail: email,
        password: password,
      }
    );
    console.log(response.data);
    navigate("/login");
  };

  return (
    <section className="fullPage">
      <h1>Sign-up !!</h1>
      setSearch(false);
      <article>
        <form className="formSignup" onSubmit={handleSubmit}>
          <input
            className="formInput"
            type="text"
            value={name}
            placeholder="your name"
            onChange={handleNameChange}
          />
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
      </article>
    </section>
  );
};

export default Signup;
