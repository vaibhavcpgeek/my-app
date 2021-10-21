import { createUrlSearchParams } from "../utils";

export const fetchTimeZoneList = async () => {
  const params = {
    key: process.env.REACT_APP_API_KEY,
    format: "json",
  };
  try {
    const response = await fetch(
      process.env.REACT_APP_API_TIME_ZONE_LIST +
        "?" +
        createUrlSearchParams(params)
    );
    return response.json();
  } catch (e) {
    console.log(e);
  }
};

export const fetchTimeZone = async (selectedZone) => {
  const params = {
    key: process.env.REACT_APP_API_KEY,
    format: "json",
    by: "zone",
    zone: selectedZone,
  };
  try {
    const response = await fetch(
      process.env.REACT_APP_API_GET_TIME_ZONE +
        "?" +
        createUrlSearchParams(params)
    );
    return response.json();
  } catch (e) {
    console.log(e);
  }
};
