import React from "react";

import PageContent from "./";
import { render, screen, fireEvent } from "../../utils/tests/test-utils";
import { parseContent } from "../../utils/book";
import { bookFactory } from "../../mocks/handlers";

const { pages } = bookFactory.book;

describe("PageContent Component", () => {
  test("clicking a token word", async () => {
    const { content, tokens } = pages[1];
    const parsedContent = parseContent(content, tokens);
    const expctedOriginalExplanationObj = parsedContent[0];
    render(<PageContent parsedPageContent={expctedOriginalExplanationObj} />);

    expect(screen.getByText("One")).toBeInTheDocument();
    expect(screen.queryByText("one")).not.toBeInTheDocument();
    expect(screen.queryByAltText("Close modal")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("One"));

    expect(screen.getByText("one")).toBeInTheDocument();
    expect(screen.getByAltText("Close modal")).toBeInTheDocument();

    const closeModalButton = await screen.findByAltText("Close modal");

    fireEvent.click(closeModalButton);

    expect(screen.queryByText("one")).not.toBeInTheDocument();
    expect(screen.queryByAltText("Close modal")).not.toBeInTheDocument();
  });
});
