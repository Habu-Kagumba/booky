import { FC } from "react";

import { Page as IPage } from "../../types/book";
import { parseContent } from "../../utils/book";
import PageContent from "../pageContent";
import "./page.css";

interface PageProps {
  page: IPage;
}

const Page: FC<PageProps> = ({ page }) => {
  const { content, pageIndex, tokens } = page;
  const isEven = pageIndex % 2 === 0;
  const pageIndexAttrs = {
    "data-testid": `page-index-${isEven ? "left" : "right"}`,
  };

  const parsedPageContent = parseContent(content, tokens);

  return (
    <div data-testid="page" className={`page ${isEven ? "" : "page__odd"}`}>
      <div data-testid="page-content" className="page__content">
        {parsedPageContent.map((parsedPageContent, i) => (
          <PageContent key={i} parsedPageContent={parsedPageContent} />
        ))}
      </div>
      <div
        {...pageIndexAttrs}
        className={`page__pageIndex${isEven ? "-left" : "-right"}`}
      >
        {pageIndex + 1}
      </div>
    </div>
  );
};

export default Page;
