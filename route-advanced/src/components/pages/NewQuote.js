import QuoteForm from "../quotes/QuoteForm";

const NewQuote = () => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };

  //* return
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
