import React from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Home() {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();
  return (
    <div className="home">
      {user ? (
        <h1>🧑‍🎓 Welcome to Udayy 🧑‍🎓</h1>
      ) : (
        <button onClick={() => history.push("/login")}>Click to Login</button>
      )}
    </div>
  );
}

export default Home;
