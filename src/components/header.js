import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import Ranger from "./ranger";

const Header = ({ pack }) => {
  const navigate = useNavigate();
  const removeToken = () => {
    pack.setToken(null);
    Cookies.remove("token");
    navigate("/");
  };

  return (
    <header>
      <Link to="/">
        <img src="./logo-vinted.png" alt="logo de vinted" />
      </Link>
      <article id="filter" className={pack.search ? "display" : "hidden"}>
        <input
          id="filterTitle"
          type="text"
          placeholder="chercher des articles"
          value={pack.filter.title}
          onChange={(event) => {
            const step = { ...pack.filter };
            step.title = event.target.value;
            pack.setFilter(step);
          }}
        />
        <div id="filterPrice">
          <div id="filterSort">
            <h4>trier par prix:</h4>
          </div>
          <div id="filterValues">
            <h4>prix entre:</h4>
            <Ranger setFilter={pack.setFilter} filter={pack.filter} />
          </div>
        </div>
      </article>
      <div className="buttonKit">
        <Link
          className={Cookies.get("token") ? "hidden" : "display button"}
          to="/signup"
        >
          Sign-up !!
        </Link>

        <Link
          className={Cookies.get("token") ? "hidden" : "display button"}
          to="/login"
        >
          Login !!
        </Link>

        <Link
          className={"display button2"}
          to={pack.token ? "/publish" : "/login"}
        >
          vends tes articles
        </Link>

        <button
          className={Cookies.get("token") ? "display button" : "hidden"}
          onClick={removeToken}
        >
          Se Déconnecter
        </button>
      </div>
    </header>
  );
};

export default Header;
