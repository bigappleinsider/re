import React from "react";
import Card, { renderPrice } from "./index";

import { shallow, mount } from "enzyme";

const setup = (renderShallow, listing) => {
  const props = {
    listing
  };

  const enzymeWrapper = renderShallow
    ? shallow(<Card {...props} />)
    : mount(<Card {...props} />);

  return enzymeWrapper;
};

const listing = {
  address1: "7791 Luther Way",
  address2: "Knoxville, TN 37918",
  price: "549999",
  beds: "3",
  baths: "2.5",
  sqft: "3000",
  built: "1976",
  thumb: "https://placeimg.com/200/200/tech",
  url: "http://zillow.com"
};

describe("<Card> component", () => {
  let enzymeWrapper;
  beforeEach(() => {
    enzymeWrapper = setup(true, listing);
  });

  it("should render address", () => {
    expect(
      enzymeWrapper
        .find(".address")
        .first()
        .text()
    ).toEqual(listing.address1);

    expect(
      enzymeWrapper
        .find(".address")
        .last()
        .text()
    ).toEqual(listing.address2);
  });

  it("should render comma delimited price", () => {
    expect(
      enzymeWrapper
        .find(".price")
        .first()
        .text()
    ).toEqual(renderPrice(listing.price));
  });

  it("should render property thumbnail", () => {
    expect(enzymeWrapper.find("img").prop("src")).toEqual(listing.thumb);
  });
});
