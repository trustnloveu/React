import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quoteList, ascending) => {
  return quoteList.sort((a, b) => {
    if (ascending) return a.title > b.title ? 1 : -1;
    else return a.title < b.title ? 1 : -1;
  });
};

//* QuoteList
const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending = queryParams.get("sort") === "asc";

  const sortedList = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () => {
    history.push(`/quotes?sort=${isSortingAscending ? "desc" : "asc"}`);
  };

  //* return
  return (
    <>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedList.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </>
  );
};

export default QuoteList;
