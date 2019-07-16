import * as React from "react";
import { Frame } from "framer";

// Open Preview (CMD + P)
// API Reference: https://www.framer.com/api

export function Slide({ children }) {
  const [currentPage, setCurrentPage] = React.useState(0);
  const keypressHandler = event => {
    switch (event.key) {
      case "ArrowRight":
        setCurrentPage(currentPage + 1);
        return;
      case "ArrowLeft":
        setCurrentPage(currentPage - 1);
        return;
    }
  };

  React.useEffect(() => {
    window.document.addEventListener("keydown", keypressHandler);
    return () => {
      window.document.removeEventListener("keydown", keypressHandler);
    };
  }, [currentPage]);

  return (
    <div>
      {children.map(c =>
        React.cloneElement(c, {
          currentPage
        })
      )}
    </div>
  );
}
