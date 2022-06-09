import { FC } from "react";
import { useQuery } from "urql";

import { Book as IBook } from "../../types/book";

const BookQuery = `
  query GetBooks {
    book {
      author
      title
      pages {
        content
        pageIndex
        tokens {
          position
          value
        }
      }
    }
  }
`;

const Book: FC = () => {
  const [fetchBooks] = useQuery({
    query: BookQuery,
  });

  const { data, fetching, error } = fetchBooks;

  if (fetching) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error.message}</div>;
  }

  const { author, title, pages }: IBook = data?.book;

  return (
    <>
      <div className="book">
        <h3 className="book__title">
          {title} by <small className="book__author">{author}</small>
        </h3>
        <pre>{JSON.stringify(pages)}</pre>
      </div>
    </>
  );
};

export default Book;
