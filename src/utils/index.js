export const createUrlSearchParams = (query = {}, urlEncoded = false) => {
  const queryParams = [];
  const keys = Object.keys(query);
  for (let key of keys) {
    const qs = `${query[key]}`;
    const qsEncoded = urlEncoded ? encodeURIComponent(qs) : qs;
    queryParams.push(`${key}=${qsEncoded}`);
  }
  return queryParams.join("&");
};

export const forMattedKeys = (str) => {
  const formatted = str.replace(
    /[A-Z]/g,
    (letter) => ` ${letter.toLowerCase()}`
  );
  return formatted.toUpperCase();
};

export const checkValue = (value) => {
  if (typeof value !== "string") return value;
  return value && value.length ? value : "-";
};
