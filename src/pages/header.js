import { Link } from "react-router-dom";
import Cookies from "js-cookie";

import Ranger from "./ranger";

const Header = ({ ...pack }) => {
  const removeToken = () => {
    pack.setToken(null);
    Cookies.remove("token");
  };

  return (
    <header>
      <Link to="/">
        <img src="./logo-vinted.png" alt="logo de vinted" />
      </Link>
      <article id="filter" className={pack.search ? "display" : "hidden"}>
        <input
          type="text"
          placeholder="Search your emoji"
          value={pack.filter.title}
          onChange={(event) => {
            const step = { ...pack.filter };
            step.title = event.target.value;
            pack.setFilter({ ...step });
          }}
        />
        <div id="filterPrice">
          <div id="filterSort">
            <h4>trier par prix:</h4>
          </div>
          <div id="filterValues">
            <h4>prix entre:</h4>
            <Ranger {...pack} />
          </div>
        </div>
      </article>
      <Link
        className={Cookies.get("token") ? "hidden" : "display"}
        to="/signup"
      >
        Sign-up !!
      </Link>
      <Link className={Cookies.get("token") ? "hidden" : "display"} to="/login">
        Login !!
      </Link>
      <Link className={Cookies.get("token") ? "display" : "hidden"} to="/login">
        vends tes articles
      </Link>
      <button
        className={Cookies.get("token") ? "display" : "hidden"}
        onClick={removeToken}
      >
        Se Déconnecter
      </button>
    </header>
  );
};

export default Header;
