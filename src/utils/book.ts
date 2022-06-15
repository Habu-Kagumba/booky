import { Page, Token, ParsedPageContent } from "../types/book";

export const preparePages = (pages: Page[]): Page[][] => {
  // Split pages into groups of 2
  return pages.reduce((acc: Page[][], _page, idx, arr: Page[]) => {
    if (idx % 2 === 0) {
      acc.push(arr.slice(idx, idx + 2));
    }
    return acc;
  }, []);
};
