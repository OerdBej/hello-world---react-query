import { useState } from "react";
import Fetch from "./components/Fetch";
import Axios from "./components/Axios";
import Planets from "./components/Planets";
import Navbar from "./components/Navbar";
import People from "./components/People";

const App = () => {
  const [page, setPage] = useState("planets");

  return (
    <div className="App">
      <h1>Hello World from React Query</h1>

      <Navbar setPage={setPage} />
      <Fetch />
      <Axios />

      <div className="content">
        {page === "planets" ? <People /> : <Planets />}
      </div>
    </div>
  );
};

export default App;
