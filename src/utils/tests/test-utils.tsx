import React, { FC, ReactElement } from "react";
import { Provider } from "urql";
import { render, RenderOptions } from "@testing-library/react";
import { GraphQLHandler, GraphQLRequest } from "msw";

import { client } from "../URQLClient";
import { server } from "../../mocks/server";

interface Props {
  children?: React.ReactNode;
}

const AllTheProviders: FC<Props> = ({ children }) => {
  return <Provider value={client}>{children}</Provider>;
};

const customRender = (
  ui: ReactElement,
  responseOverrides?: GraphQLHandler<GraphQLRequest<never>>,
  options?: Omit<RenderOptions, "wrapper">
) => {
  if (responseOverrides) {
    server.use(responseOverrides);
  }

  render(ui, { wrapper: AllTheProviders, ...options });
};

export * from "@testing-library/react";
export { customRender as render };
