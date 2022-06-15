export type Book = {
  author: string;
  pages: Page[];
  title: string;
};

export type Page = {
  content: string;
  pageIndex: number;
  tokens: Token[];
};

export type Query = {
  book: Book;
};

export type Token = {
  position: number[];
  value: string;
};

export type ParsedPageContent = {
  original: string;
  explanation: string | null;
};
