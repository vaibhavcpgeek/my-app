export const createUrlSearchParams = (query = {}, urlEncoded = false) => {
  const queryParams = [];
  const keys = Object.keys(query);
  for (let i = 0, l = keys.length; i < l; i += 1) {
    const qs = `${query[keys[i]]}`;
    const qsEncoded = urlEncoded ? encodeURIComponent(qs) : qs;
    queryParams.push(`${keys[i]}=${qsEncoded}`);
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
