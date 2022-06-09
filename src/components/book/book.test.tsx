import React from "react";
import { graphql } from "msw";

import Book from "./";
import { render, screen } from "../../utils/tests/test-utils";

describe("Book Component", () => {
  test("loads successfully", async () => {
    render(<Book />);

    await screen.findByRole("heading");

    expect(screen.getByRole("heading")).toHaveTextContent(
      "Fishing in the Air by Sharon Screech"
    );
  });

  test("load Books error", async () => {
    const err_msg = 'An error occurred while fetching the "GetBooks" query.';

    render(
      <Book />,
      graphql.query("GetBooks", (req, res, ctx) => {
        return res(
          ctx.errors([
            {
              message: err_msg,
            },
          ])
        );
      })
    );

    const errorElement = await screen.findByText(`[GraphQL] ${err_msg}`);

    expect(errorElement).toBeInTheDocument();
  });
});
