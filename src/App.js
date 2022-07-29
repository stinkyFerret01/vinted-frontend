import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

// const navigate = useNavigate();

import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Offers from "./pages/offers";
import Loading from "./pages/loading";

function App() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const starter = () => {
    return isLoading ? <Navigate to="/loading" /> : <Navigate to="/home" />;
  };

  useEffect(() => {
    starter();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <body className="App">
      {/* {starter()} */}
      <Router>
        <header>
          <Link to="/home">
            <h1>Vinted</h1>
          </Link>
          <Link to="/offers">Offers !!</Link>
          <Link to="/signup">Sign-up !!</Link>
          <Link to="/login">Login !!</Link>
        </header>
        <Routes>
          <Route path="/home" element={<Home data={data} />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </body>
  );
}

export default App;
