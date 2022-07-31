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
        <h1>Vinted</h1>
      </Link>
      <article className={pack.search ? "display" : "hidden"}>
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
        <Ranger {...pack} />
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
