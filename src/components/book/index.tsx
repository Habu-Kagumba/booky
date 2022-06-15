import { FC, useState } from "react";

import { Page as IPage, Book as IBook } from "../../types/book";
import { preparePages } from "../../utils/book";
import Page from "../page";
import backArrow from "../../assets/back.svg";
import nextArrow from "../../assets/next.svg";
import "./book.css";

const Book: FC<IBook> = ({ author, title, pages }) => {
  const [parsedPages] = useState<IPage[][]>(preparePages(pages));
  const [currentPagesIdx, setCurrentPagesIdx] = useState(0);
  const [currentPages, setCurrentPages] = useState<IPage[]>(
    parsedPages[currentPagesIdx]
  );

  const goToNextPages = () => {
    if (currentPagesIdx === parsedPages.length - 1) return;

    setCurrentPagesIdx(currentPagesIdx + 1);
    setCurrentPages(parsedPages[currentPagesIdx + 1]);
  };

  const goToPreviousPages = () => {
    if (currentPagesIdx === 0) return;

    setCurrentPagesIdx(currentPagesIdx - 1);
    setCurrentPages(parsedPages[currentPagesIdx - 1]);
  };

  return (
    <div className="book">
      <h3 className="book__title">
        {title} <small className="book__author">{author}</small>
      </h3>
      <div className="book__pages">
        {currentPages.map((currentPage) => (
          <Page page={currentPage} key={currentPage.pageIndex} />
        ))}
      </div>
      <div className="book__nav">
        <div
          role="button"
          className="book__nav-back"
          onClick={goToPreviousPages}
        >
          <img src={backArrow} alt="Go to previous page" />
          Back
        </div>
        <div role="button" className="book__nav-next" onClick={goToNextPages}>
          Next
          <img src={nextArrow} alt="Go to next page" />
        </div>
      </div>
    </div>
  );
};

export default Book;
