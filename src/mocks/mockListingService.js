import batmanRealty from "./batmanRealty";
import supermanRealty from "./supermanRealty.js";

const mockListingService = () => {
  return new Promise((resolve, reject) => {
    let transformedData = [];

    const batmanRealtyKeys = Object.keys(batmanRealty);

    batmanRealtyKeys.forEach(addressKey => {
      const addressParts = addressKey.match(/^(.*), (.*, .*)$/);
      transformedData.push({
        address1: addressParts[1],
        address2: addressParts[2],
        price: batmanRealty[addressKey].cost.replace(",", ""),
        beds: batmanRealty[addressKey].beds,
        baths: batmanRealty[addressKey].baths,
        sqft: batmanRealty[addressKey].sq_ft,
        thumb: batmanRealty[addressKey].img,
        url: batmanRealty[addressKey].url
      });
    });

    supermanRealty.items.forEach(item => {
      const addressParts = item.address.match(/^(.*), (.*, .*)$/);
      transformedData.push({
        address1: addressParts[1],
        address2: addressParts[2],
        ...item
      });
    });

    setTimeout(resolve(transformedData), 1000);
  });
};

export default mockListingService;
