import React from "react";
import { useQuery } from "react-query";
import { getMovies } from "../api";

const Home = () => {
  const { isLoading, data } = useQuery(["movies", "nowPlaying"], getMovies);
  console.log(data);
  return <div style={{ height: "200vh" }}>Home</div>;
};

export default Home;
