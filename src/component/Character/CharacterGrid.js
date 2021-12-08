import React from "react";
import ChraracterItem from "./ChraracterItem";
import Spinner from "./Spinner";

const CharacterGrid = ({ items, isloading }) => {
  return isloading ? (
    <Spinner/>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <ChraracterItem key={item.char_id} item={item}></ChraracterItem>
      ))}
    </section>
  );
};

export default CharacterGrid;
