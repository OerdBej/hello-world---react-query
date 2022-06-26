import { useState } from "react";
import Navbar from "./components./Navbar";
import Planets from "./components./Planets";
import People from "./components./People";

const App = () => {
  const [page, setPage] = useState("planets");

  return (
    <div className="App">
      <h1>Star Wars Info</h1>

      <Navbar setPage={setPage} />

      <div className="content">
        {page === "planets" ? <People /> : <Planets />}
      </div>
    </div>
  );
};

export default App;
