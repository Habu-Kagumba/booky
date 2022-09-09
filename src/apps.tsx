import { FC } from "react";
import { useQuery } from "urql";

import Book from "./components/book";
import { Book as IBook } from "./types/book";
import logo from "./logo.png";
import "./app.css";

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

const App: FC = () => {
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

  const { author, title, pages }: IBook = data.book;

  return (
    <div className="app">
      <header className="app__header">
        <img src={logo} className="app__logo" alt="logo" />
      </header>
      <Book author={author} title={title} pages={pages} />
    </div>
  );
};

export default App;
