import React, { Component } from "react";
import deafultBcg from "../images/room-1.jpeg";

import Banner from "../componenets/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../componenets/StyledHero";
class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      deafultBcg,
    };
  }
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3> There is no such Room Available...</h3>
          <Link to="/rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      images,
      breakfast,
      pets,
      capacity,
      size,
      price,
      extras,
    } = room;
    const [mainImg, ...defaultImg] = images;
    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back To Rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6> Price: ${price}</h6>
              <h6> Size: {size} Sq.ft</h6>
              <h6>
                Max Capacity:
                {capacity > 1 ? `${capacity} people` : `${capacity}person`}
              </h6>
              <h6>{pets ? "Pets are allowed " : "Pets are not allowed"}</h6>
              <h6>
                {breakfast
                  ? " Free Breakfast is included "
                  : " Free Breakfast is not included"}
              </h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h3> Extras</h3>
          <ul className="extras">
            {extras.map((extraItems, index) => {
              return <li key={index}>- {extraItems}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
export default SingleRoom;
