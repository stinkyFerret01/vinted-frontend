import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
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
      "https://lereacteur-vinted-api.herokuapp.com/user/signup",
      {
        username: name,
        email: email,
        password: password,
      }
    );
    navigate("/login");
    console.log(response.data);
  };
  return (
    <section>
      {props.setSearch(false)}
      <h1>Sign-up !!</h1>
      <article>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            placeholder="your name"
            onChange={handleNameChange}
          />
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
      </article>
    </section>
  );
};

export default Signup;
