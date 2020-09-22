import React from "react";
import Movies from "../movies/Movies";
import Search from "../movies/Search";

const Index = () => {
  return (
    <React.Fragment>
      <Search />
      <Movies />
    </React.Fragment>
  );
};

export default Index;
