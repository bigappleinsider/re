import React from "react";
import PropTypes from "prop-types";

import "./Card.css";

export const renderPrice = price => {
  const commaDelimited = price.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `$${commaDelimited}`;
};

const Card = ({ listing }) => {
  return (
    <a href={listing.url}>
      <div className="reCard">
        <div className="cardImage">
          <img src={listing.thumb} alt={listing.address1} />
        </div>

        <div className="cardDetails">
          {listing.built && (
            <div className="built">{"Built in " + listing.built}</div>
          )}
          <div className="address">{listing.address1}</div>
          <div className="address">{listing.address2}</div>
          <div className="price">{renderPrice(listing.price)}</div>
          <div className="fineDetails">
            {listing.beds && <div>{listing.beds} beds</div>}
            {listing.baths && <div> &bull; {listing.baths} baths</div>}
            {listing.sqft && <div> &bull; {listing.sqft} sq ft</div>}
          </div>
        </div>
      </div>
    </a>
  );
};

Card.propTypes = {
  listing: PropTypes.object.isRequired
};

export default Card;
