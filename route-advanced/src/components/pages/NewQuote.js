import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useHttp from "../../hooks/use-http";

import QuoteForm from "../quotes/QuoteForm";

const NewQuote = () => {
  const http = useHttp();
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    history.push("/quotes"); //! = location.href
  };

  //* return
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
