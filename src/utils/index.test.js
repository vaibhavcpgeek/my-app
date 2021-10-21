import { forMattedKeys, checkValue, createUrlSearchParams } from "./index";
describe("Utils", () => {
  test("forMattedKeys method format object keys and return readable values", () => {
    const key = "zoneName";
    expect(forMattedKeys(key)).toEqual("ZONE NAME");
  });

  test("checkValue method returns '-' for empty strings", () => {
    const value = "";
    expect(checkValue(value)).toEqual("-");
  });

  test("createUrlSearchParams method returns query string for params object", () => {
    const params = {
      key1: "value1",
      key2: "value2",
    };
    expect(createUrlSearchParams(params)).toEqual("key1=value1&key2=value2");
  });
});
