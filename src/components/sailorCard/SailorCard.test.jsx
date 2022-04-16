import React from "react";
import { render } from "@testing-library/react";
import SailorCard from "./SailorCard";

describe("SailorCard", () => {
  it("render sailorCard with props", () => {
    const props = {
      name: "name",
      img: "",
      identity: "identity",
    };

    // eslint-disable-next-line testing-library/render-result-naming-convention
    const screen = render(<SailorCard {...props} />);

    expect(screen.getByText(props.name)).toBeInTheDocument();
    expect(screen.getByText(`Identity: ${props.identity}`)).toBeInTheDocument();
    expect(screen.getByTestId("img")).toBeInTheDocument();
  });
});
