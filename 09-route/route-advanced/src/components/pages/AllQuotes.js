import { useEffect, useState } from "react";
import { getAllQuotes } from "../../lib/api";

import QuoteList from "../quotes/QuoteList";
import useHttp from "../../hooks/use-http";
import LoadingSpinner from "../UI/LoadingSpinner";
import NoQuotesFound from "../quotes/NoQuotesFound";

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: allQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  //* useEffect
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  //* return
  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!allQuotes || allQuotes.length === 0)) {
    return <NoQuotesFound />;
  }

  return <QuoteList quotes={allQuotes} />;
};

export default AllQuotes;
