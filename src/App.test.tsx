import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./app";

test("renders the logo", () => {
  render(<App />);
  const logoElement = screen.getByAltText("logo");
  expect(logoElement).toBeInTheDocument();
});
