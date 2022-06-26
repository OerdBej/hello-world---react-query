import React from "react";
import { useQuery } from "react-query";

const fetchPlanets = async () => {
  const res = await fetch("https://swapi.dev/api/people/");
  return res.json();
};

const Planets = () => {
  const { data, status } = useQuery("planets", fetchPlanets);
  console.log(data);

  return (
    <div>
      <h2>Hello From Planets components</h2>
      <p>{status}</p>
    </div>
  );
};

export default Planets;
