import React from "react";

const Card = ({ item, channel }) => {
    return (
      <li className="card">
        <a
          href={`https://www.youtube.com/watch?v=${item.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
        >
          <img src={item.image} alt={item.title} className="card-image" />
          <img src={item.image} alt={item.title} className="channel-image" />
          <h4 className="card-title">{item.title}</h4>
          <p className="card-channel">
            <i>{channel}</i>
          </p>
          <div className="card-metrics">
            {item.views} &bull; {item.published}
          </div>
        </a>
      </li>
    );
  };

  export default Card;