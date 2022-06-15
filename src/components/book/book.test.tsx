import React from "react";

import Book from "./";
import { render, screen, fireEvent } from "../../utils/tests/test-utils";
import { bookFactory } from "../../mocks/handlers";

const { author, title, pages } = bookFactory.book;

describe("Book Component", () => {
  test("load first 2 pages", async () => {
    render(<Book author={author} title={title} pages={pages} />);

    const pagesElems = await screen.findAllByTestId("page");
    expect(pagesElems.length).toBe(2);
    expect(screen.getByTestId("page-index-left")).toHaveTextContent("1");
    expect(screen.getByTestId("page-index-right")).toHaveTextContent("2");
  });

  test("go to next page", async () => {
    render(<Book author={author} title={title} pages={pages} />);

    fireEvent.click(screen.getByText("Next"));

    const pagesElems = await screen.findAllByTestId("page");
    expect(pagesElems.length).toBe(2);
    expect(screen.getByTestId("page-index-left")).toHaveTextContent("3");
    expect(screen.getByTestId("page-index-right")).toHaveTextContent("4");
  });

  test("go to previous page", async () => {
    render(<Book author={author} title={title} pages={pages} />);

    fireEvent.click(screen.getByText("Next"));
    fireEvent.click(screen.getByText("Back"));

    const pagesElems = await screen.findAllByTestId("page");
    expect(pagesElems.length).toBe(2);
    expect(screen.getByTestId("page-index-left")).toHaveTextContent("1");
    expect(screen.getByTestId("page-index-right")).toHaveTextContent("2");
  });
});
