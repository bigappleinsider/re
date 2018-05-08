import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./Card.css";

export const renderPrice = price => {
  const commaDelimited = price.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `$${commaDelimited}`;
};

const handleCardClick = url => {
  window.location = url;
};

const Card = ({ listing }) => {
  return (
    <div className="reCard" onClick={() => handleCardClick(listing.url)}>
      <div className="cardImage">
        <img src={listing.thumb} alt={listing.address1} />
      </div>

      <div className={cx("cardDetails", listing.built ? "" : "padded")}>
        {listing.built && (
          <div className="built">{"Built in " + listing.built}</div>
        )}
        {listing.address1 && <div className="address">{listing.address1}</div>}
        {listing.address2 && <div className="address">{listing.address2}</div>}

        {listing.price && (
          <div className="price">{renderPrice(listing.price)}</div>
        )}

        <div className="fineDetails">
          {listing.beds && <div>{listing.beds} beds</div>}
          {listing.baths && <div> &bull; {listing.baths} baths</div>}
          {listing.sqft && <div> &bull; {listing.sqft} sq ft</div>}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  listing: PropTypes.object.isRequired
};

export default Card;
