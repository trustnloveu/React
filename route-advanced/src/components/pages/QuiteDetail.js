import { useEffect, useState } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import axios from "axios";

import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";

const QuoteDetail = () => {
  //! match.path === params/:quoteId
  //! match.url === params/quoteId
  const match = useRouteMatch();
  const params = useParams();

  const [quote, setQuote] = useState({ text: "", author: "" });

  //* useEffect
  useEffect(() => {
    const getQuote = async () => {
      const { data } = await axios.get(
        "https://react-test-98851-default-rtdb.firebaseio.com/quotes.json"
      );

      if (data) {
        setQuote(data[params.quoteId]);
      }
    };

    getQuote();
  }, [params.quoteId]);

  //* return
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
