import React from "react";
import illusion from "./optical-illusions-abstract.gif";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <div className="homepage">
        <Link to="/play" className="playButton">
          Play!
        </Link>
        <img src={illusion} alt="optical-illusion" className="illusion" />
      </div>
    </main>
  );
};

export default Home;
