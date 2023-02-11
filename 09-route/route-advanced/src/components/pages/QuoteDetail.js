import { useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getSingleQuote } from "../../lib/api";

import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuoteDetail = () => {
  //! match.path === params/:quoteId
  //! match.url === params/quoteId
  const match = useRouteMatch();
  const params = useParams();

  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: quote,
    error,
  } = useHttp(getSingleQuote, true);

  //* useEffect
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  //* return
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!quote.text) {
    return <p>No Quote Found.</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route exact path={match.path}>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
