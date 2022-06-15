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

export const parseContent = (
  content: string,
  tokens: Token[]
): ParsedPageContent[] => {
  const parsedPageText: ParsedPageContent[] = [];

  tokens.forEach((token, idx) => {
    const { position, value } = token;

    // If first token doesn't include the first word in content
    // grab the text before the first token word
    if (idx === 0 && position[0] !== 0) {
      parsedPageText.push({
        original: content.slice(0, tokens[0].position[0]),
        explanation: null,
      });
    }

    // Grab any non-token text before the current token and add to parsedText
    if (idx > 0) {
      const prevToken = tokens[idx - 1];
      const prevTokenPosition = prevToken.position;
      const prevTokenEnd = prevTokenPosition[1];
      const prevTokenText = content.slice(prevTokenEnd, position[0]);

      parsedPageText.push({
        original: prevTokenText,
        explanation: null,
      });
    }

    // Add parsed text and explanation to parsedText
    parsedPageText.push({
      explanation: value,
      original: content.slice(position[0], position[1]),
    });

    // Grab any non-token text after the current token and add to parsedText
    if (idx === tokens.length - 1 && position[1] < content.length) {
      parsedPageText.push({
        original: content.slice(position[1]),
        explanation: null,
      });
    }
  });

  return parsedPageText;
};
