import { createClient } from "urql";

const url = "https://fullstack-engineer-test-n4ouilzfna-uc.a.run.app/graphql";

export const client =
  process.env.NODE_ENV === "test"
    ? createClient({
        url: url,
        requestPolicy: "network-only",
      })
    : createClient({ url: url });
