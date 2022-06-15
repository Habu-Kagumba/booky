import React from "react";
import { graphql } from "msw";

import { render, screen } from "./utils/tests/test-utils";
import App from "./app";

describe("App Component", () => {
  test("loads successfully", async () => {
    render(<App />);

    const logo = await screen.findByAltText("logo");
    const heading = await screen.findByRole("heading");

    expect(logo).toBeInTheDocument();
    expect(heading).toHaveTextContent("Fishing in the Air Sharon Screech");
  });

  test("load Book error", async () => {
    const err_msg = 'An error occurred while fetching the "GetBooks" query.';

    render(
      <App />,
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
