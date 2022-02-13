import axios from "axios";
import { useEffect, useState } from "react";
import { Route, useParams } from "react-router-dom";

import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";

const QuoteDetail = () => {
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
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
