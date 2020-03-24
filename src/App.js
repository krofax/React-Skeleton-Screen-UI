import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

import dummyData from "./data";

import "./App.css";

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

const CardList = ({ list }) => {
  return (
    <ul className="list">
      {list.items.map((item, index) => {
        return <Card key={index} item={item} channel={list.channel} />;
      })}
    </ul>
  );
};

// Skeleton component
const SkeletonCard = () => {
  return (
    <section>
      <h2 className="section-title">
        <Skeleton height={30} width={300} />
      </h2>

      <ul className="list">
        {Array(9)
          .fill()
          .map((item, index) => (
            <li className="card" key={index}>
              <Skeleton height={180} />
              <h4 className="card-title">
              <Skeleton circle={true} height={50} width={50} /> &nbsp;
                <Skeleton height={36} width={`80%`} />
              </h4>
              <p className="card-channel">
                <Skeleton width={`60%`} />
              </p>
              <div className="card-metrics">
                <Skeleton width={`90%`} />
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};

const App = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load this effect on mount
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setVideos(dummyData);
      setLoading(false);
    }, 5000);
    // Cancel the timer while unmounting
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading && <SkeletonCard />}
      {!loading &&
        videos.map((list, index) => {
          return (
            <section key={index}>
              <h2 className="section-title">{list.section}</h2>
              <CardList list={list} />
              <hr />
            </section>
          );
        })}
    </div>
  );
};

export default App;
