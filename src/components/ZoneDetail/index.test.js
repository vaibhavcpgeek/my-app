import React from "react";
import { render, screen } from "@testing-library/react";
import ZoneDetail from "./index";

describe("ZoneDetail", () => {
  it("should render with correct props", () => {
    const props = {
      status: "OK",
      zoneName: "Europe/London",
    };
    render(<ZoneDetail zoneDetail={props} />);
    expect(screen.getByTestId("zone-detail")).toBeInTheDocument();
  });
});
