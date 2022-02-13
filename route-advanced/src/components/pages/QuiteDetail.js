import axios from "axios";
import { useEffect, useState } from "react";
import { Route, useParams } from "react-router-dom";

import Comments from "../comments/Comments";

const QuoteDetail = () => {
  const params = useParams();
  const [quote, setQuote] = useState();

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
      <h1>Quote detail page</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
