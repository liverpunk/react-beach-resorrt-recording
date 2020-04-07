import React from "react";
import Hero from "../componenets/Hero";
import Banner from "../componenets/Banner";
import { Link } from "react-router-dom";

function Error() {
  return (
    <Hero>
      <Banner title="404" subtitle="Page Not Found">
        <Link to="/" className="btn-primary">
          Return to Home
        </Link>
      </Banner>
    </Hero>
  );
}
export default Error;
