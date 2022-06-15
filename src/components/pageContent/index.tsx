import { FC, useState } from "react";

import { ParsedPageContent } from "../../types/book";
import closeImg from "../../assets/close.svg";
import "./pageContent.css";

interface PageContentProps {
  parsedPageContent: ParsedPageContent;
}

const PageContent: FC<PageContentProps> = ({ parsedPageContent }) => {
  const { original, explanation } = parsedPageContent;
  const [showExplanationModal, setShowExplanationModal] = useState(false);

  const explainPhrase = (phrase: string) => {
    setShowExplanationModal(true);
  };

  return (
    <>
      {explanation !== null ? (
        <span
          className="page-content__explain"
          onClick={() => explainPhrase(explanation)}
        >
          {original}
        </span>
      ) : (
        <>{original}</>
      )}

      {/* Explanation Modal */}
      {showExplanationModal && (
        <div className="page-content__modal page-content__modal-show">
          <span
            className="page-content__modal-close"
            onClick={() => setShowExplanationModal(false)}
          >
            <img src={closeImg} alt="Close modal" />
          </span>
          <div className="page-content__modal-explanation">{explanation}</div>
        </div>
      )}
    </>
  );
};

export default PageContent;
