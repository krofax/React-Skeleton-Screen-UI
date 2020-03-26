import React from "react";
import Card from "./Card";

const CardList = ({ list }) => {
    return (
      <ul className="list">
        {list.items.map((item, index) => {
          return <Card key={index} item={item} channel={list.channel} />;
        })}
      </ul>
    );
  };

  export default CardList;