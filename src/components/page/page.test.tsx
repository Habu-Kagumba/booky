import React from "react";

import Page from "./";
import { render, screen } from "../../utils/tests/test-utils";
import { bookFactory } from "../../mocks/handlers";

const { pages } = bookFactory.book;

describe("Page Component", () => {
  test("first page is blank", async () => {
    render(<Page page={pages[0]} />);

    expect(screen.getByTestId("page-index-left")).toHaveTextContent("1");
    expect(screen.getByTestId("page-content")).toBeEmptyDOMElement();
  });

  test("pages have the correct content", async () => {
    render(<Page page={pages[1]} />);

    expect(screen.getByTestId("page-index-right")).toHaveTextContent("2");
    expect(screen.getByTestId("page-content")).toHaveTextContent(
      pages[1].content
    );
  });
});
