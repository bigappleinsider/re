import mockListingService from "../mocks/mockListingService";

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";

const handleSortListings = (listings, order = "price") => {
  return listings.slice().sort((a, b) => {
    return a[order] > b[order];
  });
};

export const fetchListings = () => async dispatch => {
  const data = await mockListingService();

  return dispatch({
    type: RECEIVE_LISTINGS,
    payload: handleSortListings(data)
  });
};

export const sortListings = (order = "price") => (dispatch, getState) => {
  const state = getState();
  const { listings } = state.listingReducer;

  return dispatch({
    type: RECEIVE_LISTINGS,
    payload: handleSortListings(listings, order)
  });
};
