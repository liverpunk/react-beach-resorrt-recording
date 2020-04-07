import React from "react";
import Hero from "../componenets/Hero";
import Banner from "../componenets/Banner";
import { Link } from "react-router-dom";
import Services from "../componenets/Services";
import FeaturedRooms from "../componenets/FeaturedRooms";

export const Home = () => {
  return (
    <React.Fragment>
      <Hero>
        <Banner title="luxrious room" subtitle="deluxe room starting from $299">
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </React.Fragment>
  );
};
export default Home;
