import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import useHttp from "../../hooks/use-http";
import { addQuote } from "../../lib/api";

import QuoteForm from "../quotes/QuoteForm";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes"); //! = location.href
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  //* return
  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;
