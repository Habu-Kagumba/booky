export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Book = {
  __typename?: "Book";
  author?: Maybe<Scalars["String"]>;
  pages?: Maybe<Array<Page>>;
  title?: Maybe<Scalars["String"]>;
};

export type Page = {
  __typename?: "Page";
  content?: Maybe<Scalars["String"]>;
  pageIndex: Scalars["Int"];
  tokens?: Maybe<Array<Token>>;
};

export type Query = {
  __typename?: "Query";
  book: Book;
};

export type Token = {
  __typename?: "Token";
  position: Array<Maybe<Scalars["Int"]>>;
  value: Scalars["String"];
};
