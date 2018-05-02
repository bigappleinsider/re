import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchListings, sortListings } from "../../actions/reActions";

import { Button } from "reactstrap";
import Card from "../../components/common/Card";
import { SORT_PRICE, SORT_SQFT, SORT_BEDS } from "./config";
import "./ListingGrid.css";

class ListingGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: SORT_PRICE
    };
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchListings());
  }
  handleSort(sortVal) {
    const { dispatch } = this.props;
    dispatch(sortListings(sortVal));
    this.setState({ sort: sortVal });
  }
  render() {
    const { listings } = this.props;
    const { sort } = this.state;

    return (
      <div className="listingGrid">
        <h2>Awesome Listings Widget</h2>
        <div className="sortNav">
          <Button
            color={sort === SORT_PRICE ? "primary" : "success"}
            onClick={() => this.handleSort(SORT_PRICE)}
          >
            {"Price"}
          </Button>
          <Button
            color={sort === SORT_BEDS ? "primary" : "success"}
            onClick={() => this.handleSort(SORT_BEDS)}
          >
            {"Beds"}
          </Button>
          <Button
            color={sort === SORT_SQFT ? "primary" : "success"}
            onClick={() => this.handleSort(SORT_SQFT)}
          >
            {"Sq. ft."}
          </Button>
        </div>
        <div className="reCards">
          {listings.map((listing, idx) => {
            return <Card key={idx} listing={listing} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { listings } = state.listingReducer;
  return {
    listings
  };
};

export default connect(mapStateToProps)(ListingGrid);
