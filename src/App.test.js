import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe("AppComponent", () => {
  it("renders list of available zones", async () => {
    const mockedData = {
      status: "OK",
      message: "",
      zones: [
        {
          countryCode: "AD",
          countryName: "Andorra",
          zoneName: "Europe/Andorra",
          gmtOffset: 7200,
          timestamp: 1634858527,
        },
        {
          countryCode: "AE",
          countryName: "United Arab Emirates",
          zoneName: "Asia/Dubai",
          gmtOffset: 14400,
          timestamp: 1634865727,
        },
      ],
    };
    const mockedResponse = {
      json: jest.fn().mockResolvedValueOnce(mockedData),
    };

    const mockedFetch = jest.fn().mockResolvedValueOnce(mockedResponse);
    global.fetch = mockedFetch;
    render(<App />);
    const element = await waitFor(() => screen.getByText("Europe/Andorra"));
    expect(element).toBeInTheDocument();
    expect(mockedFetch).toBeCalledTimes(1);
    expect(mockedResponse.json).toBeCalledTimes(1);
  });
});
