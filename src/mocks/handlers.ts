import { graphql } from "msw";

export const bookFactory = {
  book: {
    author: "Sharon Screech",
    title: "Fishing in the Air",
    pages: [
      {
        content: "",
        pageIndex: 0,
        tokens: [],
      },
      {
        content:
          "One Saturday, when I was young, my father and I left the house early in the morning, when it was still blue-black outside. The grass left wet marks on our shoes. In the backyard, under stones, we dug up crawly worms and laid them in a can with lumps of damp dirt.",
        pageIndex: 1,
        tokens: [
          {
            position: [0, 3],
            value: "one",
          },
          {
            position: [4, 12],
            value: "saturday",
          },
          {
            position: [14, 18],
            value: "when",
          },
        ],
      },
      {
        content:
          "Into the trunk we put two poles and the can of worms and a sack of sandwiches and a thermos of water. “We’re going on a journey,” my father said. “To a secret place. We’ll catch the air! We’ll catch the breeze!”",
        pageIndex: 2,
        tokens: [
          {
            position: [0, 4],
            value: "into",
          },
          {
            position: [5, 8],
            value: "the",
          },
          {
            position: [9, 14],
            value: "trunk",
          },
        ],
      },
      {
        content: "",
        pageIndex: 3,
        tokens: [],
      },
    ],
  },
};

export const handlers = [
  graphql.query("GetBooks", (req, res, ctx) => {
    return res(ctx.data(bookFactory));
  }),
];
